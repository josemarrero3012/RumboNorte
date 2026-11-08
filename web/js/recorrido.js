// Metas: el recorrido se ve avanzar.
// - La tabla «Cuánto tarda de verdad cada cosa» es una línea de tiempo: un raíl naranja baja con el scroll
//   y enciende cada etapa; la última (el contrato indefinido) destella al llegar.
// - En las ocho metas, un anillo alrededor del número se completa mientras lees esa meta.
import { loadGsap } from './gsap.js';

const SVG = 'http://www.w3.org/2000/svg';
const RING = 2 * Math.PI * 46;

export async function mount() {
  const box = document.querySelector('#mapa .rn-table-box');
  const goals = [...document.querySelectorAll('.rn-goal')];
  if (!box && !goals.length) return;
  const { gsap, ScrollTrigger } = await loadGsap();

  gsap.matchMedia().add('(prefers-reduced-motion: no-preference)', () => {
    const undo = [];

    if (box) {
      const rows = [...box.querySelectorAll('tbody tr')];
      box.classList.add('is-timeline');
      const rail = document.createElement('span');
      rail.className = 'rn-timeline-rail';
      rail.innerHTML = '<span></span>';
      const dots = rows.map(() => { const d = document.createElement('span'); d.className = 'rn-timeline-dot'; return d; });
      box.append(rail, ...dots);

      // Cada punto va a la altura de la primera línea de su fila; el raíl, del primero al último.
      function place() {
        const top = box.getBoundingClientRect().top;
        const ys = rows.map((r) => r.getBoundingClientRect().top - top + 23);
        dots.forEach((d, i) => gsap.set(d, { top: ys[i] }));
        gsap.set(rail, { top: ys[0], height: ys[ys.length - 1] - ys[0] });
      }
      place();
      ScrollTrigger.addEventListener('refreshInit', place);

      const fill = gsap.fromTo(rail.firstChild, { scaleY: 0 }, {
        scaleY: 1, ease: 'none',
        scrollTrigger: { trigger: rows[0], endTrigger: rows[rows.length - 1], start: 'top 65%', end: 'top 65%', scrub: .5 }
      });
      const marks = rows.map((row, i) => ScrollTrigger.create({
        trigger: row, start: 'top 65%',
        onEnter: () => {
          row.classList.add('is-reached');
          dots[i].classList.add('is-reached');
          gsap.fromTo(dots[i], { scale: .3 }, { scale: 1, duration: .5, ease: 'back.out(3)' });
          if (i === rows.length - 1) gsap.fromTo(row.children, { backgroundColor: 'rgba(253, 93, 3, .18)' }, { backgroundColor: 'rgba(253, 93, 3, 0)', duration: 1.8, ease: 'power2.out', clearProps: 'backgroundColor' });
        },
        onLeaveBack: () => { row.classList.remove('is-reached'); dots[i].classList.remove('is-reached'); }
      }));
      undo.push(() => {
        ScrollTrigger.removeEventListener('refreshInit', place);
        fill.scrollTrigger.kill();
        marks.forEach((m) => m.kill());
        rows.forEach((r) => r.classList.remove('is-reached'));
        rail.remove();
        dots.forEach((d) => d.remove());
        box.classList.remove('is-timeline');
      });
    }

    goals.forEach((goal) => {
      const side = goal.querySelector('.rn-goal-side');
      const number = goal.querySelector('.rn-goal-number');
      if (!side || !number) return;
      side.classList.add('is-live');
      const ring = document.createElementNS(SVG, 'svg');
      ring.setAttribute('class', 'rn-goal-ring');
      ring.setAttribute('viewBox', '0 0 100 100');
      ring.setAttribute('aria-hidden', 'true');
      // Con la longitud real del círculo: no todos los navegadores escalan el trazo con pathLength.
      ring.innerHTML = `<circle cx="50" cy="50" r="46"/><circle cx="50" cy="50" r="46" stroke-dasharray="${RING}" stroke-dashoffset="${RING}"/>`;
      const of = document.createElement('span');
      of.className = 'rn-goal-of';
      of.setAttribute('aria-hidden', 'true');
      of.textContent = 'de ' + goals.length;
      side.prepend(ring);
      side.append(of);

      const progress = gsap.fromTo(ring.lastChild, { attr: { 'stroke-dashoffset': RING } }, {
        attr: { 'stroke-dashoffset': 0 }, ease: 'none',
        scrollTrigger: { trigger: goal, start: 'top 60%', end: 'bottom 60%', scrub: .4 }
      });
      const pop = ScrollTrigger.create({
        trigger: goal, start: 'top 60%',
        onEnter: () => gsap.fromTo(number, { scale: .55 }, { scale: 1, duration: .6, ease: 'back.out(3)' })
      });
      undo.push(() => { progress.scrollTrigger.kill(); pop.kill(); ring.remove(); of.remove(); side.classList.remove('is-live'); });
    });

    return () => undo.forEach((f) => f());
  });
}
