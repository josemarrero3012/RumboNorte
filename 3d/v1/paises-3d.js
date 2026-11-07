// Escena 3D de los tres paises. Los modelos y la luz vienen horneados desde Blender (carpeta 3d).
import * as THREE from 'three';
import { GLTFLoader } from '../lib/three/GLTFLoader.js';

const BASE = 'assets/3d/';
const WIDE = { belgica: [-3.3, -0.35, 0.1], holanda: [0, 0.75, 0.3], alemania: [3.3, -0.25, 0.18] };
const TALL = { holanda: [-0.2, 4.9, 0.25], alemania: [0.1, 0, 0.1], belgica: [-0.1, -4.6, 0.18] };
const GROUND = -1.05;
const VFOV = 16.3;
const TILT = THREE.MathUtils.degToRad(47);

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
  x.filter = 'blur(13px)';
  x.fillStyle = '#2b2a27';
  x.beginPath();
  poly.forEach(([a, b], i) => x[i ? 'lineTo' : 'moveTo'](s / 2 + a * k, s / 2 - b * k));
  x.closePath();
  x.fill();
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
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

  const islands = ids.map((id, i) => {
    const map = maps[i];
    map.flipY = false;
    map.colorSpace = THREE.SRGBColorSpace;
    map.anisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy());
    const material = new THREE.MeshBasicMaterial({ map, toneMapped: false });
    const root = gltfs[i].scene;
    const spinners = [];
    root.traverse((o) => {
      if (!o.isMesh) return;
      o.material = material;
    });
    root.traverse((o) => {
      const m = /^gira_([yz])/.exec(o.name);
      if (m) spinners.push({ o, axis: m[1] === 'y' ? new THREE.Vector3(0, 1, 0) : new THREE.Vector3(0, 0, 1), rate: m[1] === 'y' ? 0.16 : 0.62 });
    });
    const group = new THREE.Group();
    group.add(root);
    world.add(group);
    const shadow = new THREE.Mesh(
      new THREE.PlaneGeometry(4.4, 4.4),
      new THREE.MeshBasicMaterial({ map: shadowTexture(outlines[id]), transparent: true, opacity: 0.3, depthWrite: false, toneMapped: false }),
    );
    shadow.rotation.x = -Math.PI / 2;
    shadow.renderOrder = -1;
    world.add(shadow);
    return {
      id, group, material, spinners, shadow, poly: outlines[id], phase: i * 2.1,
      edge: Math.max(...outlines[id].map((p) => -p[1])),
      px: S(), pz: S(), lift: S(calm ? 0 : -9), tiltX: S(), tiltZ: S(), dim: S(1), spin: S(1), vis: S(1), home: [0, 0, 0],
      enter: i * 0.14,
    };
  });

  const arrow = arrowMesh();
  arrow.scale.setScalar(0);
  scene.add(arrow);
  const ap = { x: S(), y: S(4), z: S(), s: S() };

  const size = { w: 1, h: 1, tall: false, dist: 1, look: 0, dive: 0 };
  const cam = { x: S(), z: S(), zoom: S(1) };
  const pointer = { x: 0, y: 0, sx: S(), sy: S() };
  const state = { active: null, hover: null, selected: null, idle: 0, touched: false, entered: calm, visible: true, t: 0, progress: 0.5 };

  function resize() {
    const r = host.getBoundingClientRect();
    size.w = Math.max(1, r.width);
    size.h = Math.max(1, r.height);
    const a = size.w / size.h;
    size.tall = a < 1.05;
    renderer.setPixelRatio(Math.min(devicePixelRatio || 1, size.w < 700 ? 1.75 : 2));
    renderer.setSize(size.w, size.h, false);
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    camera.aspect = a;
    const L = size.tall ? TALL : WIDE;
    islands.forEach((n) => { n.home = L[n.id]; if (!n.px.seen) { n.px.x = n.home[0]; n.pz.x = -n.home[1]; n.px.seen = true; } });
    const half = Math.tan(THREE.MathUtils.degToRad(VFOV / 2));
    size.dist = size.tall ? 1.85 / (half * a) : Math.max(5.3 / (half * a), 2.4 / half);
    size.look = size.tall ? 0.2 : 0.35;
    size.dive = size.tall ? -2.9 : 0;
    camera.updateProjectionMatrix();
  }
  resize();
  const ro = new ResizeObserver(resize);
  ro.observe(host);

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
    for (const h of [0.75, 0.4, 0, -0.3]) {
      for (const n of islands) {
        n.group.getWorldPosition(local);
        plane.constant = -(local.y + h);
        if (!ray.ray.intersectPlane(plane, hit)) continue;
        n.group.worldToLocal(local.copy(hit));
        if (inside(n.poly, local.x, -local.z)) return n.id;
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

  const v = new THREE.Vector3();
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
    if (size.tall && !state.selected) {
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
      spring(n.px, n.home[0], dt, 40, 11);
      spring(n.pz, -n.home[1], dt, 40, 11);
      spring(n.tiltX, on ? pointer.y * 0.09 : 0, dt);
      spring(n.tiltZ, on ? -pointer.x * 0.09 : 0, dt);
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
      n.shadow.material.opacity = n.lift.x < -2 ? 0 : (0.34 - h * 0.035) * vis;
      n.shadow.scale.setScalar((1 + h * 0.03) * Math.max(0.001, vis));
      if (!calm) n.spinners.forEach((s) => s.o.rotateOnAxis(s.axis, s.rate * n.spin.x * dt));
    });

    const px = spring(pointer.sx, pointer.x, dt, 30, 10), py = spring(pointer.sy, pointer.y, dt, 30, 10);
    world.rotation.y = calm ? 0 : px * 0.045;
    world.rotation.x = calm ? 0 : py * 0.02;

    const f = state.selected ? islands.find((n) => n.id === state.selected) : null;
    spring(cam.x, f ? f.group.position.x : 0, dt, 26, 9);
    spring(cam.z, f ? f.group.position.z + size.dive : size.look, dt, 26, 9);
    spring(cam.zoom, f ? (size.tall ? 0.8 : 0.5) : 1, dt, 26, 9);
    const fly = calm ? 0 : (state.progress - 0.5) * 0.14;
    const a = TILT + fly, d = size.dist * cam.zoom.x;
    camera.position.set(cam.x.x + px * 0.12, Math.sin(a) * d, cam.z.x + Math.cos(a) * d + py * 0.1);
    camera.lookAt(cam.x.x, 0, cam.z.x);

    const target = focus ? islands.find((n) => n.id === focus) : null;
    spring(ap.s, target && !state.selected ? 1 : 0, dt, 80, 12);
    if (target) {
      spring(ap.x, target.group.position.x, dt, 46, 10);
      spring(ap.y, target.group.position.y + (size.tall ? 1.15 : 1.7) + Math.sin(t * 2.1) * 0.06, dt, 46, 10);
      spring(ap.z, target.group.position.z, dt, 46, 10);
    }
    arrow.position.set(ap.x.x, ap.y.x, ap.z.x);
    arrow.rotation.set(-TILT, calm ? 0 : Math.sin(t * 1.4) * 0.3, 0, 'YXZ');
    arrow.scale.setScalar(Math.max(0, ap.s.x) * 0.72);

    camera.updateMatrixWorld();
    islands.forEach((n) => {
      const a2 = anchors[n.id];
      if (!a2) return;
      v.set(n.group.position.x, n.home[2] - 0.72, n.group.position.z + n.edge + 0.08).project(camera);
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
    select(id) { state.touched = true; state.selected = id; setActive(id); },
    back() { state.selected = null; setActive(null); },
    destroy() { cancelAnimationFrame(raf); ro.disconnect(); io.disconnect(); renderer.dispose(); el.remove(); },
  };
}
