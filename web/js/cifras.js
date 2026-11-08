// Las cifras cuentan desde cero: en las tarjetas del inicio al abrirlas, y en las de Metas al llegar a ellas.
// Sirve para cualquier texto con números («1.250–1.500 €», «~50 €/año», «2 registros»): solo se mueven los números.
import { loadGsap } from './gsap.js';

const NUM = /\d{1,3}(?:\.\d{3})+|\d+/g;
const dots = (n) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, '.');

export async function mount() {
  const cards = [...document.querySelectorAll('.rn-card')].filter((c) => c.querySelector('.rn-card-figure'));
  const stats = [...document.querySelectorAll('.rn-stats-value')];
  if (!cards.length && !stats.length) return;
  const { gsap, ScrollTrigger } = await loadGsap();

  function frame(final, t) {
    let i = 0;
    const values = [...final.matchAll(NUM)].map((m) => +m[0].replace(/\./g, ''));
    return final.replace(NUM, () => dots(Math.round(values[i++] * t)));
  }

  function count(el, delay = 0) {
    const final = el.dataset.final || (el.dataset.final = el.textContent);
    const p = { t: 0 };
    el.textContent = frame(final, 0);
    gsap.to(p, {
      t: 1, delay, duration: 1.1, ease: 'power2.out', overwrite: true,
      onUpdate: () => { el.textContent = frame(final, p.t); },
      onComplete: () => { el.textContent = final; }
    });
  }

  gsap.matchMedia().add('(prefers-reduced-motion: no-preference)', () => {
    const off = [];
    const on = (el, type, fn) => { el.addEventListener(type, fn); off.push(() => el.removeEventListener(type, fn)); };
    const hover = window.matchMedia('(hover: hover)').matches;

    // La tarjeta se abre al pasar el ratón, con el foco o con su botón en el móvil: la cifra cuenta mientras entra.
    cards.forEach((card) => {
      const figure = card.querySelector('.rn-card-figure');
      const go = () => count(figure, .12);
      if (hover) on(card, 'mouseenter', go);
      on(card, 'focusin', (e) => { if (!card.contains(e.relatedTarget)) go(); });
      const toggle = card.querySelector('.rn-card-toggle');
      if (toggle) on(toggle, 'click', () => { if (!card.classList.contains('is-open')) go(); });
    });

    // Las de Metas que aún no se ven esperan a cero; las que ya están a la vista se dejan como están.
    const triggers = stats.filter((el) => el.getBoundingClientRect().top > window.innerHeight).map((el) => {
      el.dataset.final = el.dataset.final || el.textContent;
      el.textContent = frame(el.dataset.final, 0);
      return ScrollTrigger.create({ trigger: el, start: 'top 90%', once: true, onEnter: () => count(el) });
    });

    return () => {
      off.forEach((f) => f());
      triggers.forEach((t) => t.kill());
      [...cards.map((c) => c.querySelector('.rn-card-figure')), ...stats].forEach((el) => {
        gsap.killTweensOf(el);
        if (el.dataset.final) el.textContent = el.dataset.final;
      });
    };
  });
}
