// La nómina de la guía se va restando con el scroll: la sección queda fija y cada descuento recorta la barra.
import { loadGsap } from './gsap.js';

const money = (v) => v.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' €';

export async function mount() {
  const box = document.querySelector('.rn-payslip');
  if (!box) return;
  const { gsap, ScrollTrigger } = await loadGsap();
  const steps = JSON.parse(box.dataset.steps);
  const rows = [...box.querySelectorAll('.rn-payslip-row')];
  const segs = [...box.querySelectorAll('.rn-payslip-seg')];
  const label = box.querySelector('.rn-payslip-label');
  const figure = box.querySelector('.rn-payslip-figure');
  const shown = { v: steps[steps.length - 1] };
  let step = -1;

  function show(i) {
    if (i === step) return;
    step = i;
    box.dataset.step = i;
    rows.forEach((r, k) => {
      r.classList.toggle('is-done', k <= i);
      r.classList.toggle('is-now', k === i);
    });
    segs.forEach((s) => s.classList.toggle('is-out', s.dataset.row !== 'net' && +s.dataset.row <= i));
    label.textContent = rows[i].querySelector('strong').textContent;
    gsap.to(shown, { v: steps[i], duration: 0.6, ease: 'power2.out', overwrite: true, onUpdate: () => { figure.textContent = money(shown.v); } });
  }

  gsap.matchMedia().add('(prefers-reduced-motion: no-preference)', () => {
    box.classList.add('is-live');
    show(0);
    const h = box.offsetHeight;
    const fits = h < window.innerHeight - 32;
    const trigger = ScrollTrigger.create({
      trigger: box,
      start: fits ? `top ${Math.max(16, (window.innerHeight - h) / 2)}` : 'top 60%',
      end: `+=${steps.length * (fits ? 170 : 110)}`,
      pin: fits,
      onUpdate: (s) => show(Math.min(steps.length - 1, Math.floor(s.progress * steps.length))),
    });
    return () => { trigger.kill(); box.classList.remove('is-live'); show(steps.length - 1); };
  });
}
