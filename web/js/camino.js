// El camino del logo recorre el inicio: una línea naranja que se dibuja con el scroll y termina en la candidatura.
// Va por los márgenes y cruza la página en el hueco de arriba de algunas secciones, sin pisar el contenido.
import { loadGsap } from './gsap.js';

const SVG = 'http://www.w3.org/2000/svg';
const CROSS = ['#destinos', '#perfiles', '#preguntas', '#modelo'];
const END = '#candidatura';
export async function mount() {
  const main = document.getElementById('contenido');
  const start = document.getElementById('presentacion');
  if (!main || !start) return;
  const { gsap, ScrollTrigger } = await loadGsap();

  const svg = document.createElementNS(SVG, 'svg');
  svg.setAttribute('class', 'rn-route');
  svg.setAttribute('aria-hidden', 'true');
  const path = document.createElementNS(SVG, 'path');
  const tip = document.createElementNS(SVG, 'path');
  tip.setAttribute('d', 'M0 0L-16 -9L-11 0L-16 9Z');
  tip.setAttribute('class', 'rn-route-tip');
  svg.append(path, tip);
  main.prepend(svg);

  let marks = [];
  let total = 0;

  // Rehace el trazado con las posiciones reales de las secciones.
  function build() {
    const box = main.getBoundingClientRect();
    const w = main.clientWidth;
    const top = (el) => el.getBoundingClientRect().top - box.top;
    const inner = Math.max(0, (w - 1280) / 2) + 32;
    const xs = [w - inner / 2, inner / 2];
    let side = 0;
    let y = top(start) + 24;
    let d = `M${xs[0]} ${y}`;
    let last = y;
    function cross(el) {
      const head = el.querySelector('.rn-eyebrow, .rn-title');
      const band = (top(el) + top(head)) / 2;
      const from = xs[side], to = xs[1 - side];
      d += `L${from} ${band - 44}C${from} ${band} ${from} ${band} ${(from + to) / 2} ${band}C${to} ${band} ${to} ${band} ${to} ${band + 44}`;
      side = 1 - side;
      last = band + 44;
    }
    CROSS.map((sel) => document.querySelector(sel)).filter(Boolean).forEach(cross);
    const end = document.querySelector(END);
    // Llega siempre por la izquierda, para apuntar a «Tu candidatura» sin cruzar el formulario.
    if (side === 0) cross(end);
    const label = end.querySelector('.rn-eyebrow');
    const lb = label.getBoundingClientRect();
    const ex = lb.left - box.left - 14, ey = lb.top - box.top + lb.height / 2;
    const x = xs[side];
    const turn = Math.min(44, Math.max(12, ey - last));
    d += `L${x} ${ey - turn}C${x} ${ey} ${x} ${ey} ${x + turn} ${ey}L${ex} ${ey}`;
    svg.setAttribute('width', w);
    svg.setAttribute('height', main.scrollHeight);
    path.setAttribute('d', d);
    total = path.getTotalLength();
    path.style.strokeDasharray = `${total} ${total}`;
    marks = [];
    for (let l = 0; l <= total; l += 6) marks.push([l, path.getPointAtLength(l).y]);
  }

  // Longitud de camino que corresponde a una altura de la página.
  function lengthAt(y) {
    let lo = 0, hi = marks.length - 1;
    if (!marks.length || y <= marks[0][1]) return 0;
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      if (marks[mid][1] < y) lo = mid + 1; else hi = mid;
    }
    return Math.min(total, marks[lo][0]);
  }

  const state = { len: 0 };
  function paint() {
    const l = Math.max(0, Math.min(total, state.len));
    // La línea acaba dentro de la punta: si llegara al vértice, su extremo redondeado asomaría por delante.
    path.style.strokeDashoffset = total - Math.max(0, l - 9);
    const p = path.getPointAtLength(l), q = path.getPointAtLength(Math.max(0, l - 4));
    const angle = Math.atan2(p.y - q.y, p.x - q.x) * 180 / Math.PI;
    tip.setAttribute('transform', `translate(${p.x} ${p.y}) rotate(${l > 4 ? angle : 90})`);
    tip.style.opacity = l > 2 ? 1 : 0;
  }
  const follow = gsap.quickTo(state, 'len', { duration: 0.7, ease: 'power3.out', onUpdate: paint });

  const mm = gsap.matchMedia();
  mm.add({ moving: '(min-width: 1360px) and (prefers-reduced-motion: no-preference)', still: '(min-width: 1360px) and (prefers-reduced-motion: reduce)' }, (ctx) => {
    svg.style.display = '';
    build();
    if (ctx.conditions.still) {
      state.len = total;
      paint();
      return undefined;
    }
    const target = () => lengthAt(window.scrollY - (main.getBoundingClientRect().top + window.scrollY) + window.innerHeight * 0.62);
    state.len = target();
    paint();
    const trigger = ScrollTrigger.create({ trigger: main, start: 'top bottom', end: 'bottom top', onUpdate: () => follow(target()) });
    const ro = new ResizeObserver(() => { build(); follow(target()); });
    ro.observe(main);
    return () => { trigger.kill(); ro.disconnect(); svg.style.display = 'none'; };
  });
  svg.style.display = window.matchMedia('(min-width: 1360px)').matches ? '' : 'none';
}
