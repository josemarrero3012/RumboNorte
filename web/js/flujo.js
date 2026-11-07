// «Por qué es gratis»: la candidatura viaja de ti a Iván y el pago llega de la agencia a Iván.
// El «0 €» no se mueve: tú no pagas nada en ningún momento.
import { loadGsap } from './gsap.js';

function token(cls, text) {
  const el = document.createElement('span');
  el.className = 'rn-flow-token ' + cls;
  el.setAttribute('aria-hidden', 'true');
  el.textContent = text;
  return el;
}

// Punto de salida y de llegada entre dos nodos, en horizontal o en vertical según cómo estén colocados.
function route(box, a, b) {
  const o = box.getBoundingClientRect(), r1 = a.getBoundingClientRect(), r2 = b.getBoundingClientRect();
  if (r2.left >= r1.right - 1 || r1.left >= r2.right - 1) {
    const right = r2.left >= r1.right - 1;
    // Pasa por debajo de la flecha y su texto, sin taparlos.
    const y = (Math.max(r1.top, r2.top) + Math.min(r1.bottom, r2.bottom)) / 2 - o.top + 40;
    return [[(right ? r1.right : r1.left) - o.left, y], [(right ? r2.left : r2.right) - o.left, y]];
  }
  const down = r2.top >= r1.bottom - 1;
  const x = -56;
  return [[r1.right - o.left + x, (down ? r1.bottom : r1.top) - o.top], [r2.right - o.left + x, (down ? r2.top : r2.bottom) - o.top]];
}

export async function mount() {
  const flows = [...document.querySelectorAll('.rn-flow')];
  if (!flows.length) return;
  const { gsap, ScrollTrigger } = await loadGsap();

  flows.forEach((flow) => {
    const nodes = flow.querySelectorAll('.rn-flow-node');
    if (nodes.length < 3) return;
    const [you, me, agency] = nodes;
    const arrows = flow.querySelectorAll('.rn-flow-arrow');
    const cv = token('is-cv', 'Candidatura');
    const coin = token('is-coin', '€');
    flow.append(cv, coin);

    function play() {
      const [a1, b1] = route(flow, you, me);
      const [a2, b2] = route(flow, agency, me);
      nodes.forEach((n) => n.classList.remove('is-hot'));
      gsap.timeline()
        .call(() => you.classList.add('is-hot'))
        .fromTo(cv, { x: a1[0], y: a1[1], xPercent: -50, yPercent: -50, autoAlpha: 0, scale: .6 }, { autoAlpha: 1, scale: 1, duration: .25 })
        .to(cv, { x: b1[0], y: b1[1], duration: 1, ease: 'power2.inOut' })
        .call(() => { you.classList.remove('is-hot'); me.classList.add('is-hot'); arrows[0] && arrows[0].classList.add('is-done'); })
        .to(cv, { autoAlpha: 0, scale: .6, duration: .2 })
        .call(() => agency.classList.add('is-hot'), null, '+=.3')
        .fromTo(coin, { x: a2[0], y: a2[1], xPercent: -50, yPercent: -50, autoAlpha: 0, scale: .6 }, { autoAlpha: 1, scale: 1, duration: .25 })
        .to(coin, { x: b2[0], y: b2[1], duration: 1, ease: 'power2.inOut' })
        .call(() => { agency.classList.remove('is-hot'); arrows[1] && arrows[1].classList.add('is-done'); })
        .to(coin, { scale: 1.25, duration: .12, yoyo: true, repeat: 1 })
        .to(coin, { autoAlpha: 0, duration: .25 }, '+=.2')
        .call(() => me.classList.remove('is-hot'), null, '+=.6');
    }

    gsap.matchMedia().add('(prefers-reduced-motion: no-preference)', () => {
      const t = ScrollTrigger.create({ trigger: flow, start: 'top 70%', onEnter: play, onEnterBack: play });
      return () => t.kill();
    });
  });
}
