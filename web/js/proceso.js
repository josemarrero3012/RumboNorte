// «El proceso en seis pasos»: mientras la cabecera se queda fija, un raíl naranja recorre los números
// al ritmo del scroll y cada paso se enciende al llegar a él (ScrollTrigger).
import { loadGsap } from './gsap.js';

export async function mount() {
  const list = document.querySelector('.rn-steps');
  if (!list) return;
  const { gsap, ScrollTrigger } = await loadGsap();
  const steps = [...list.querySelectorAll('.rn-step')];
  const numbers = steps.map((s) => s.querySelector('.rn-step-number'));

  gsap.matchMedia().add('(prefers-reduced-motion: no-preference)', () => {
    const rail = document.createElement('span');
    rail.className = 'rn-steps-rail';
    rail.setAttribute('aria-hidden', 'true');
    rail.innerHTML = '<span></span>';
    list.prepend(rail);
    list.classList.add('is-live');

    // El raíl va del centro del primer número al del último; se recoloca si cambia el ancho.
    function place() {
      const box = list.getBoundingClientRect();
      const a = numbers[0].getBoundingClientRect(), b = numbers[numbers.length - 1].getBoundingClientRect();
      gsap.set(rail, { left: a.left - box.left + a.width / 2, top: a.top - box.top + a.height / 2, height: b.top - a.top });
    }
    place();
    ScrollTrigger.addEventListener('refreshInit', place);

    const fill = gsap.fromTo(rail.firstChild, { scaleY: 0 }, {
      scaleY: 1, ease: 'none',
      scrollTrigger: { trigger: rail, start: 'top 62%', end: 'bottom 62%', scrub: .6 }
    });
    const marks = steps.map((step, i) => ScrollTrigger.create({
      trigger: numbers[i],
      start: 'center 62%',
      onEnter: () => {
        step.classList.add('is-on');
        gsap.fromTo(numbers[i], { scale: .6 }, { scale: 1, duration: .6, ease: 'back.out(3)', overwrite: true });
      },
      onLeaveBack: () => step.classList.remove('is-on')
    }));

    return () => {
      ScrollTrigger.removeEventListener('refreshInit', place);
      fill.scrollTrigger.kill();
      marks.forEach((m) => m.kill());
      steps.forEach((s) => s.classList.remove('is-on'));
      list.classList.remove('is-live');
      rail.remove();
    };
  });
}
