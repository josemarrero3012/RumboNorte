// Escena 3D de los tres paises. Las placas y la luz vienen horneadas desde Blender (carpeta 3d).
import * as THREE from 'three';
import { GLTFLoader } from '../lib/three/GLTFLoader.js';
import { LineSegments2 } from '../lib/three/LineSegments2.js';
import { LineSegmentsGeometry } from '../lib/three/LineSegmentsGeometry.js';
import { LineMaterial } from '../lib/three/LineMaterial.js';

const BASE = 'assets/3d/';
const WIDE = { belgica: [-3.3, -0.35, 0.1], 'paises-bajos': [0, 0.4, 0.3], alemania: [3.3, -0.25, 0.18] };
const TALL = { 'paises-bajos': [-0.2, 4.85, 0.25], alemania: [0.1, 0, 0.1], belgica: [-0.1, -4.6, 0.18] };
const GROUND = -1.05;
const VFOV = 16.3;
const TILT = THREE.MathUtils.degToRad(47);
const THICK = 0.3;
const INK = 0x161616;
// Mastil y bandera de cada isla: donde se clava y sus tres franjas. Los mismos datos estan en 3d/islas.py.
const POLE = 0.92, FLAG_W = 0.6, FLAG_H = 0.4;
const FLAGS = {
  'paises-bajos': { at: [0.25, 0.55], stripes: ['#ae1c28', '#ffffff', '#21468b'] },
  alemania: { at: [0, 0.25], stripes: ['#000000', '#dd0000', '#ffce00'] },
  belgica: { at: [0.12, 0.35], stripes: ['#000000', '#fdda24', '#ef3340'], upright: true },
};
// Camino naranja: nace fuera de la placa y termina al pie del mastil.
const ROADS = {
  'paises-bajos': [[0.37, -1.26], [0.42, -1.02], [0.3, -0.72], [0.02, -0.38], [-0.02, 0.05], [0.25, 0.55]],
  alemania: [[-0.33, -1.46], [0, -1.1], [0.22, -0.72], [-0.08, -0.3], [0, 0.25]],
  belgica: [[-1.05, 0.2], [-0.75, 0.16], [-0.42, 0.2], [-0.15, 0.42], [0.12, 0.35]],
};
const STEPS = 120;
const ROAD_W = 0.15;
const ROAD_REST = 0.72;
const CONTOURS = 32;
const MIN_RUN = 11;

function inside(poly, x, y) {
  let c = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const [x1, y1] = poly[i], [x2, y2] = poly[j];
    if ((y1 > y) !== (y2 > y) && x < ((x2 - x1) * (y - y1)) / (y2 - y1) + x1) c = !c;
  }
  return c;
}

function shadowTexture(poly) {
  const s = 256, k = s / 4.4, c = document.createElement('canvas');
  c.width = c.height = s;
  const x = c.getContext('2d');
  x.filter = 'blur(18px)';
  x.fillStyle = '#2b2a27';
  x.beginPath();
  poly.forEach(([a, b], i) => x[i ? 'lineTo' : 'moveTo'](s / 2 + a * k, s / 2 - b * k));
  x.closePath();
  x.fill();
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

function roadMesh(points, poly) {
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(new Float32Array((STEPS + 1) * 6), 3));
  const index = [];
  for (let i = 0; i < STEPS * 2; i += 2) index.push(i, i + 1, i + 2, i + 1, i + 3, i + 2);
  g.setIndex(index);
  const mesh = new THREE.Mesh(g, new THREE.MeshBasicMaterial({ color: 0xfd5d03, side: THREE.DoubleSide, toneMapped: false }));
  mesh.frustumCulled = false;
  mesh.position.y = 0.006;
  mesh.userData.poly = poly;
  mesh.userData.curve = new THREE.SplineCurve(points.map(([x, y]) => new THREE.Vector2(x, -y)));
  return mesh;
}

// El camino crece hasta p y su extremo siempre acaba afilado, como el del logo.
function drawRoad(mesh, p) {
  if (Math.abs(p - (mesh.userData.p ?? -1)) < 0.001) return;
  mesh.userData.p = p;
  const pos = mesh.geometry.attributes.position, curve = mesh.userData.curve;
  for (let i = 0; i <= STEPS; i++) {
    const u = i / STEPS, s = Math.min(1, u * p), c = curve.getPointAt(s), t = curve.getTangentAt(s);
    const w = (ROAD_W / 2) * Math.pow(1 - u, 0.75) * Math.min(1, p * 3);
    pos.setXYZ(i * 2, c.x - t.y * w, 0, c.y + t.x * w);
    pos.setXYZ(i * 2 + 1, c.x + t.y * w, 0, c.y - t.x * w);
  }
  trimToShore(pos, mesh.userData.poly);
  pos.needsUpdate = true;
}

// Cada seccion del camino se recorta contra la costa; las que quedan fuera se pliegan sobre ella.
function trimToShore(pos, poly) {
  const point = (i, side) => [pos.getX(i * 2 + side), pos.getZ(i * 2 + side)];
  const shore = (a, b) => {
    for (let n = 0; n < 12; n++) {
      const m = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
      if (inside(poly, m[0], -m[1])) b = m; else a = m;
    }
    return b;
  };
  let outside = 0, first = null;
  for (let i = 0; i <= STEPS; i++) {
    const l = point(i, 0), r = point(i, 1), inL = inside(poly, l[0], -l[1]), inR = inside(poly, r[0], -r[1]);
    if (inL && inR) break;
    if (!inL && !inR) { if (!first) outside = i + 1; continue; }
    const c = inL ? shore(r, l) : shore(l, r);
    first = first || c;
    pos.setXYZ(i * 2 + (inL ? 1 : 0), c[0], 0, c[1]);
  }
  if (!first) return;
  for (let i = 0; i < outside; i++) { pos.setXYZ(i * 2, first[0], 0, first[1]); pos.setXYZ(i * 2 + 1, first[0], 0, first[1]); }
}

// Silueta para el trazo: el contorno de Natural Earth trae ondulaciones diminutas que una línea fina
// exagera. Suavizado de Taubin (un paso que encoge y otro que devuelve el tamaño): quita el temblor
// sin mover el contorno más de una fracción de píxel respecto al borde de la placa.
function smooth(poly, rounds = 6) {
  let p = poly.map(([x, y]) => [x, y]);
  const n = p.length;
  for (let r = 0; r < rounds * 2; r++) {
    const k = r % 2 ? -0.53 : 0.5;
    p = p.map(([x, y], i) => {
      const [ax, ay] = p[(i + n - 1) % n], [bx, by] = p[(i + 1) % n];
      return [x + k * ((ax + bx) / 2 - x), y + k * ((ay + by) / 2 - y)];
    });
  }
  return p;
}

function rim(poly, ink) {
  const p = [];
  poly.forEach(([x, y], i) => {
    const [u, w] = poly[(i + 1) % poly.length];
    p.push(x, 0, -y, u, 0, -w, x, -THICK, -y, u, -THICK, -w);
  });
  return new LineSegments2(new LineSegmentsGeometry().setPositions(p), ink);
}

// Aristas verticales: solo donde la pared se da la vuelta respecto a la camara, como en un dibujo a mano.
function contour(poly, ink) {
  const g = new LineSegmentsGeometry().setPositions(new Float32Array(CONTOURS * 6));
  const line = new LineSegments2(g, ink);
  line.frustumCulled = false;
  const n = poly.length, buffer = g.attributes.instanceStart.data;
  const normal = poly.map(([x, y], i) => { const [u, w] = poly[(i + 1) % n]; return [w - y, x - u]; });
  const facing = (i, ex, ey) => normal[i][0] * (ex - poly[i][0]) + normal[i][1] * (ey - poly[i][1]) > 0;
  return {
    line,
    update(eye) {
      // Los tramos que miran hacia un lado durante muy poco (una ondulación de la costa) no cuentan:
      // así solo aparecen las aristas de los giros reales de la pared.
      const f = poly.map((_, i) => facing(i, eye.x, -eye.z));
      const runs = [];
      f.forEach((v, i) => { if (!runs.length || runs[runs.length - 1].v !== v) runs.push({ v, at: i, len: 1 }); else runs[runs.length - 1].len++; });
      if (runs.length > 1 && runs[0].v === runs[runs.length - 1].v) { const last = runs.pop(); runs[0].len += last.len; runs[0].at = last.at; }
      for (let changed = true; changed && runs.length > 2;) {
        changed = false;
        const i = runs.reduce((m, r, j) => (r.len < runs[m].len ? j : m), 0);
        if (runs[i].len < MIN_RUN) {
          const a = (i + runs.length - 1) % runs.length, b = (i + 1) % runs.length;
          runs[a].len += runs[i].len + runs[b].len;
          runs.splice(Math.max(i, b), 1); runs.splice(Math.min(i, b), 1);
          changed = true;
        }
      }
      let k = 0;
      if (runs.length > 1) runs.forEach((r) => {
        if (k >= CONTOURS) return;
        const [x, y] = poly[((r.at % n) + n) % n];
        buffer.array.set([x, 0, -y, x, -THICK, -y], k++ * 6);
      });
      g.instanceCount = k;
      buffer.needsUpdate = true;
    },
  };
}

const rgb = (hex) => { const c = parseInt(hex.slice(1), 16); return new THREE.Vector3((c >> 16) / 255, ((c >> 8) & 255) / 255, (c & 255) / 255); };

function flagMesh({ at: [x, y], stripes, upright }) {
  const g = new THREE.PlaneGeometry(FLAG_W, FLAG_H, 32, 6);
  g.translate(FLAG_W / 2, 0, 0);
  const material = new THREE.ShaderMaterial({
    side: THREE.DoubleSide,
    uniforms: {
      time: { value: 1.2 }, amp: { value: 0.022 }, line: { value: 1.5 }, upright: { value: upright ? 1 : 0 },
      a: { value: rgb(stripes[0]) }, b: { value: rgb(stripes[1]) }, c: { value: rgb(stripes[2]) }, ink: { value: rgb('#161616') },
    },
    vertexShader: `
      uniform float time, amp;
      varying vec2 vUv;
      varying float vFold;
      void main() {
        vUv = uv;
        float grip = smoothstep(0.0, 0.35, uv.x);
        float phase = uv.x * 7.5 - time * 3.0 + uv.y * 0.9;
        vec3 p = position;
        p.z += (sin(phase) + 0.4 * sin(phase * 1.9 + 1.3)) * amp * grip;
        p.y += sin(phase * 0.6) * amp * 0.35 * uv.x;
        vFold = cos(phase) * grip;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
      }`,
    fragmentShader: `
      uniform float line, upright;
      uniform vec3 a, b, c, ink;
      varying vec2 vUv;
      varying float vFold;
      void main() {
        float s = mix(1.0 - vUv.y, vUv.x, upright), f = fwidth(s);
        vec3 color = mix(mix(a, b, smoothstep(0.3333 - f, 0.3333 + f, s)), c, smoothstep(0.6667 - f, 0.6667 + f, s));
        color *= 1.0 + vFold * 0.12;
        vec2 w = fwidth(vUv);
        float edge = min(min(vUv.x, 1.0 - vUv.x) / w.x, min(vUv.y, 1.0 - vUv.y) / w.y);
        gl_FragColor = vec4(mix(ink, color, smoothstep(line - 0.5, line + 0.5, edge)), 1.0);
      }`,
  });
  const flag = new THREE.Mesh(g, material);
  flag.position.set(0, POLE - FLAG_H / 2 - 0.02, 0);
  flag.rotation.y = -0.2;
  const staff = new THREE.MeshBasicMaterial({ color: INK, toneMapped: false });
  const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.011, 0.011, POLE, 8), staff);
  pole.position.y = POLE / 2;
  const knob = new THREE.Mesh(new THREE.SphereGeometry(0.022, 12, 8), staff);
  knob.position.y = POLE + 0.01;
  const group = new THREE.Group();
  group.add(flag, pole, knob);
  group.position.set(x, 0, -y);
  return { group, uniforms: material.uniforms };
}

function arrowMesh() {
  const s = new THREE.Shape();
  s.moveTo(0, 0.3); s.lineTo(0.21, -0.24); s.lineTo(0, -0.11); s.lineTo(-0.21, -0.24); s.closePath();
  const g = new THREE.ExtrudeGeometry(s, { depth: 0.07, bevelEnabled: true, bevelSize: 0.012, bevelThickness: 0.012, bevelSegments: 2 });
  g.center();
  const m = new THREE.Mesh(g, new THREE.MeshLambertMaterial({ color: 0xfd5d03, emissive: 0xb83a00, emissiveIntensity: 0.55 }));
  const pivot = new THREE.Group();
  m.rotation.z = Math.PI;
  pivot.add(m);
  return pivot;
}

const spring = (s, target, dt, k = 90, d = 15) => {
  s.v += ((target - s.x) * k - s.v * d) * dt;
  s.x += s.v * dt;
  return s.x;
};
const S = (x = 0) => ({ x, v: 0 });

export async function mount({ host, ids, anchors, onActive, onSelect, onReady }) {
  const calm = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
  renderer.setClearColor(0, 0);
  renderer.toneMapping = THREE.NoToneMapping;
  renderer.domElement.setAttribute('aria-hidden', 'true');
  host.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(VFOV, 16 / 9, 1, 120);
  scene.add(new THREE.AmbientLight(0xffffff, 1.5));
  const key = new THREE.DirectionalLight(0xffffff, 1.6);
  key.position.set(-3, 8, 4);
  scene.add(key);
  const world = new THREE.Group();
  scene.add(world);

  const [outlines, gltfs, maps] = await Promise.all([
    fetch(BASE + 'siluetas.json').then((r) => r.json()),
    Promise.all(ids.map((id) => new GLTFLoader().loadAsync(`${BASE}${id}.glb`))),
    Promise.all(ids.map((id) => new THREE.TextureLoader().loadAsync(`${BASE}luz-${id}.webp`))),
  ]);

  // Sin alphaToCoverage: con él, el borde del trazo salía moteado; el antialiasing del lienzo basta.
  const ink = new LineMaterial({ color: INK, linewidth: 1.5 });

  const islands = ids.map((id, i) => {
    const map = maps[i];
    map.flipY = false;
    map.colorSpace = THREE.SRGBColorSpace;
    map.anisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy());
    const material = new THREE.MeshBasicMaterial({ map, toneMapped: false, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 1 });
    const root = gltfs[i].scene;
    root.traverse((o) => { if (o.isMesh) o.material = material; });
    const group = new THREE.Group();
    const road = roadMesh(ROADS[id], outlines[id]);
    const line = smooth(outlines[id]);
    const edges = contour(line, ink);
    const flag = flagMesh(FLAGS[id]);
    group.add(root, road, rim(line, ink), edges.line, flag.group);
    world.add(group);
    const shadow = new THREE.Mesh(
      new THREE.PlaneGeometry(4.4, 4.4),
      new THREE.MeshBasicMaterial({ map: shadowTexture(outlines[id]), transparent: true, opacity: 0.2, depthWrite: false, toneMapped: false }),
    );
    shadow.rotation.x = -Math.PI / 2;
    shadow.renderOrder = -1;
    world.add(shadow);
    return {
      id, group, material, shadow, road, edges, flag, poly: outlines[id], phase: i * 2.1, clock: 1.2,
      span: [0, 1].map((k) => Math.max(...outlines[id].map((p) => p[k])) - Math.min(...outlines[id].map((p) => p[k]))),
      edge: Math.max(...outlines[id].map((p) => -p[1])),
      px: S(), pz: S(), lift: S(calm ? 0 : -9), tiltX: S(), tiltZ: S(), dim: S(1), spin: S(1), vis: S(1), path: S(calm ? 1 : 0), home: [0, 0, 0],
      enter: i * 0.14,
    };
  });

  const arrow = arrowMesh();
  arrow.scale.setScalar(0);
  scene.add(arrow);
  const ap = { x: S(), y: S(4), z: S(), s: S() };

  const size = { w: 1, h: 1, tall: false, dist: 1, look: 0 };
  const view = { side: false, reserve: 0 };
  const cam = { x: S(), z: S(), zoom: S(1) };
  const pointer = { x: 0, y: 0, sx: S(), sy: S() };
  const state = { active: null, hover: null, selected: null, idle: 0, touched: false, entered: calm, visible: true, t: 0, progress: 0.5 };

  function resize() {
    const r = host.getBoundingClientRect();
    size.w = Math.max(1, r.width);
    size.h = Math.max(1, r.height);
    const a = size.w / size.h;
    size.tall = a < 1.05;
    // Se pinta al doble de la pantalla y el navegador lo reduce: así las líneas finas quedan suaves
    // aunque no haya antialiasing por hardware o la escala sea fraccionaria (1,25 o 1,5 en muchos portátiles).
    renderer.setPixelRatio(Math.min((devicePixelRatio || 1) * 2, size.w < 700 ? 2 : 2.5));
    renderer.setSize(size.w, size.h, false);
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    camera.aspect = a;
    const L = size.tall ? TALL : WIDE;
    islands.forEach((n) => { n.home = L[n.id]; if (!n.px.seen) { n.px.x = n.home[0]; n.pz.x = -n.home[1]; n.px.seen = true; } });
    const half = Math.tan(THREE.MathUtils.degToRad(VFOV / 2));
    size.dist = size.tall ? 1.85 / (half * a) : Math.max(5.3 / (half * a), 2.4 / half);
    size.look = size.tall ? 0.2 : 0.02;
    camera.updateProjectionMatrix();
  }
  resize();
  const ro = new ResizeObserver(resize);
  ro.observe(host);

  // Encuadre al elegir un pais: la isla entera y su bandera caben, sin cortarse. En escritorio la isla
  // se aparta a la izquierda para dejar sitio a la ficha; si la ficha va debajo, cabe en lo que deja libre.
  function fit(n) {
    const H = size.dist * Math.tan(THREE.MathUtils.degToRad(VFOV / 2)), W = H * camera.aspect, sin = Math.sin(TILT);
    const high = n.span[1] * sin + (THICK + POLE) * Math.cos(TILT);
    const edge = size.tall ? 88 : 0;
    const seen = Math.min(size.h, innerHeight - view.reserve) - edge;
    const room = view.side ? 0.46 : size.tall ? 0.82 : 0.8;
    const zoom = THREE.MathUtils.clamp(Math.max((high * size.h) / (2 * H * seen * (view.side ? 0.84 : 0.9)), n.span[0] / (2 * W * room)), 0.3, 1);
    const ppu = size.h / (2 * H * zoom);
    const rise = size.tall ? size.h / 2 - (high * ppu) / 2 - edge : (size.h - seen) / 2;
    return { zoom, shift: -rise / (ppu * sin), slide: view.side ? W * zoom * 0.5 : 0 };
  }

  function setActive(id) {
    if (state.active === id) return;
    state.active = id;
    onActive && onActive(id);
  }

  const ray = new THREE.Raycaster();
  const plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
  const hit = new THREE.Vector3();
  const local = new THREE.Vector3();
  function pick(cx, cy) {
    const r = host.getBoundingClientRect();
    ray.setFromCamera(new THREE.Vector2(((cx - r.left) / r.width) * 2 - 1, -((cy - r.top) / r.height) * 2 + 1), camera);
    // Cada isla se prueba en reposo; la activa, tambien elevada. Asi el borde no parpadea al subir y bajar.
    for (const n of islands) {
      for (const y of n.id === state.active ? [n.group.position.y, n.home[2]] : [n.home[2]]) {
        for (const h of [0, -0.15, -THICK]) {
          plane.constant = -(y + h);
          if (!ray.ray.intersectPlane(plane, hit)) continue;
          world.worldToLocal(local.copy(hit));
          if (inside(n.poly, local.x - n.px.x, n.pz.x - local.z)) return n.id;
        }
      }
    }
    return null;
  }

  const el = renderer.domElement;
  el.addEventListener('pointermove', (e) => {
    if (e.pointerType !== 'mouse' || state.selected) return;
    const r = host.getBoundingClientRect();
    pointer.x = ((e.clientX - r.left) / r.width) * 2 - 1;
    pointer.y = ((e.clientY - r.top) / r.height) * 2 - 1;
    state.touched = true;
    const id = pick(e.clientX, e.clientY);
    state.hover = id;
    el.style.cursor = id ? 'pointer' : '';
    setActive(id);
  });
  el.addEventListener('pointerleave', () => { state.hover = null; if (!state.selected) setActive(null); pointer.x = pointer.y = 0; });
  el.addEventListener('click', (e) => {
    const id = pick(e.clientX, e.clientY);
    if (id && !state.selected) onSelect(id);
  });

  let running = false, last = 0, raf = 0;
  const io = new IntersectionObserver(([e]) => {
    state.visible = e.isIntersecting;
    if (e.isIntersecting) { state.entered = true; start(); }
  }, { threshold: 0.12 });
  io.observe(host);
  document.addEventListener('visibilitychange', start);

  function start() {
    if (running || !state.visible || document.hidden) return;
    running = true;
    last = performance.now();
    raf = requestAnimationFrame(frame);
  }

  const v = new THREE.Vector3(), eye = new THREE.Vector3();
  function frame(now) {
    if (!state.visible || document.hidden) { running = false; return; }
    raf = requestAnimationFrame(frame);
    const dt = Math.min(0.033, (now - last) / 1000);
    last = now;
    state.t += dt;
    const t = state.t;

    if (!state.touched && !state.selected && !calm && state.entered && t > 1.4) {
      state.idle += dt;
      if (state.idle > 2.6) {
        state.idle = 0;
        const i = (ids.indexOf(state.attract) + 1) % ids.length;
        state.attract = ids[i];
      }
    }
    const focus = state.selected || state.active || (state.touched ? null : state.attract);

    const r = host.getBoundingClientRect();
    state.progress = THREE.MathUtils.clamp(1 - (r.top + r.height * 0.5) / (innerHeight + r.height * 0.5), 0, 1);

    // En movil no hay hover: se activa la isla que queda en el centro de la pantalla al hacer scroll.
    if (size.tall && !state.selected && !calm) {
      const mid = innerHeight / 2 - r.top;
      let best = null, gap = Infinity;
      islands.forEach((n) => {
        v.copy(n.group.position).project(camera);
        const d = Math.abs((-v.y * 0.5 + 0.5) * size.h - mid);
        if (d < gap) { gap = d; best = n.id; }
      });
      setActive(best);
    }

    islands.forEach((n) => {
      const chosen = state.selected === n.id, other = state.selected && !chosen, on = state.active === n.id;
      if (t > n.enter || calm) spring(n.lift, other ? -2.5 : on ? 0.38 : chosen ? 0.1 : state.active ? -0.06 : 0, dt, 70, 13);
      const vis = Math.max(0, spring(n.vis, other ? 0 : 1, dt, 60, 16));
      if (t > n.enter + 0.5) drawRoad(n.road, calm ? 1 : Math.max(0, spring(n.path, on || chosen ? 1 : ROAD_REST, dt, 26, 9)));
      spring(n.px, n.home[0], dt, 40, 11);
      spring(n.pz, -n.home[1], dt, 40, 11);
      spring(n.tiltX, on ? pointer.y * 0.07 : 0, dt);
      spring(n.tiltZ, on ? -pointer.x * 0.07 : 0, dt);
      spring(n.dim, state.active && !on ? 0.9 : 1, dt, 60, 14);
      spring(n.spin, on || chosen ? 5 : 1, dt, 20, 8);
      const bob = calm ? 0 : Math.sin(t * 0.8 + n.phase) * 0.045;
      n.group.position.set(n.px.x, n.home[2] + n.lift.x + bob, n.pz.x);
      n.group.rotation.set(n.tiltX.x, (calm ? 0 : Math.sin(t * 0.35 + n.phase) * 0.018), n.tiltZ.x);
      n.group.scale.setScalar(Math.max(0.001, vis));
      n.group.visible = n.shadow.visible = vis > 0.01;
      n.material.color.setScalar(n.dim.x);
      const h = THREE.MathUtils.clamp(n.group.position.y - GROUND, 0.2, 4);
      n.shadow.position.set(n.px.x + 0.34 * h, GROUND, n.pz.x - 0.14 * h);
      n.shadow.material.opacity = n.lift.x < -2 ? 0 : (0.2 - h * 0.02) * vis;
      n.shadow.scale.setScalar((1 + h * 0.03) * Math.max(0.001, vis));
      if (!calm) {
        n.clock += dt * (0.8 + n.spin.x * 0.22);
        n.flag.uniforms.time.value = n.clock;
        n.flag.uniforms.amp.value = 0.02 + n.spin.x * 0.005;
      }
    });

    const px = spring(pointer.sx, pointer.x, dt, 30, 10), py = spring(pointer.sy, pointer.y, dt, 30, 10);
    world.rotation.y = calm ? 0 : px * 0.045;
    world.rotation.x = calm ? 0 : py * 0.02;

    const f = state.selected ? islands.find((n) => n.id === state.selected) : null;
    const shot = f && fit(f);
    spring(cam.x, f ? f.group.position.x + shot.slide : 0, dt, 26, 9);
    spring(cam.z, f ? f.group.position.z + shot.shift : size.look, dt, 26, 9);
    spring(cam.zoom, f ? shot.zoom : 1, dt, 26, 9);
    // Grosor en píxeles CSS, el mismo en cualquier pantalla; la línea se mide en píxeles del lienzo.
    ink.linewidth = (size.tall ? 1 : 1.2) * (1 + (1 / cam.zoom.x - 1) * 0.5) * renderer.getPixelRatio();
    const fly = calm ? 0 : (state.progress - 0.5) * 0.14;
    const a = TILT + fly, d = size.dist * cam.zoom.x;
    camera.position.set(cam.x.x + px * 0.12, Math.sin(a) * d, cam.z.x + Math.cos(a) * d + py * 0.1);
    camera.lookAt(cam.x.x, 0, cam.z.x);

    const target = focus ? islands.find((n) => n.id === focus) : null;
    spring(ap.s, target && !state.selected ? 1 : 0, dt, 80, 12);
    if (target) {
      const [tx, ty] = FLAGS[target.id].at;
      spring(ap.x, target.group.position.x + tx + FLAG_W * 0.4, dt, 46, 10);
      spring(ap.y, target.group.position.y + POLE + 0.3 + Math.sin(t * 2.1) * 0.06, dt, 46, 10);
      spring(ap.z, target.group.position.z - ty, dt, 46, 10);
    }
    arrow.position.set(ap.x.x, ap.y.x, ap.z.x);
    arrow.rotation.set(-TILT, calm ? 0 : Math.sin(t * 1.4) * 0.3, 0, 'YXZ');
    arrow.scale.setScalar(Math.max(0, ap.s.x) * (size.tall ? 0.5 : 0.62));

    camera.updateMatrixWorld();
    islands.forEach((n) => {
      n.flag.uniforms.line.value = ink.linewidth * 1.15;
      n.group.updateWorldMatrix(true, false);
      n.edges.update(n.group.worldToLocal(eye.copy(camera.position)));
      const a2 = anchors[n.id];
      if (!a2) return;
      v.set(n.group.position.x, n.home[2] - THICK, n.group.position.z + n.edge + 0.14).project(camera);
      const x = (v.x * 0.5 + 0.5) * size.w, y = (-v.y * 0.5 + 0.5) * size.h;
      a2.style.transform = `translate(-50%, 0) translate(${x.toFixed(1)}px, ${y.toFixed(1)}px)`;
      a2.dataset.placed = '1';
    });
    renderer.render(scene, camera);
  }

  resize();
  onReady && onReady();
  start();

  return {
    setActive(id) { state.touched = true; state.hover = id; setActive(id); },
    select(id, { side = false, reserve = 0 } = {}) {
      view.side = side;
      view.reserve = reserve;
      state.touched = true;
      state.selected = id;
      setActive(id);
    },
    back() { state.selected = null; setActive(null); },
    destroy() { cancelAnimationFrame(raf); ro.disconnect(); io.disconnect(); renderer.dispose(); el.remove(); },
  };
}
