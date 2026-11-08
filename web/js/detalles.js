// Remates pequeños al llegar a cada cosa:
// - la flecha de «Una persona, las cosas claras» gira hasta apuntar al norte, como una brújula,
// - las tarjetas de «Qué no hago» y las filas de «Qué hago exactamente» entran escalonadas,
// - las cajas de llamada (la guía, «Hablamos», «Empezar») se despliegan desde el centro
//   y su botón de WhatsApp da un único latido.
// Lo que ya está a la vista al cargar se deja quieto, para que no desaparezca y vuelva.
import { loadGsap } from './gsap.js';

export async function mount() {
  const { gsap, ScrollTrigger } = await loadGsap();
  const below = (el) => el.getBoundingClientRect().top > window.innerHeight * .92;

  gsap.matchMedia().add('(prefers-reduced-motion: no-preference)', () => {
    const triggers = [];

    const arrow = document.querySelector('.rn-facts-eyebrow img');
    if (arrow && below(arrow)) {
      gsap.set(arrow, { rotation: -150 });
      triggers.push(ScrollTrigger.create({
        trigger: arrow, start: 'top 85%', once: true,
        onEnter: () => gsap.to(arrow, { rotation: 0, duration: 1.4, ease: 'elastic.out(1, .4)' })
      }));
    }

    const groups = [
      ...document.querySelectorAll('.rn-cardgrid'),
      ...document.querySelectorAll('.rn-services > div')
    ].map((g) => [...g.children].filter((c) => c.matches('li, .rn-disc'))).filter((items) => items.length && below(items[0]));
    groups.forEach((items) => {
      gsap.set(items, { opacity: 0, y: 28 });
      triggers.push(ScrollTrigger.create({
        trigger: items[0], start: 'top 88%', once: true,
        onEnter: () => gsap.to(items, { opacity: 1, y: 0, duration: .6, ease: 'power2.out', stagger: .08, clearProps: 'opacity,transform' })
      }));
    });

    document.querySelectorAll('.rn-callout').forEach((box) => {
      if (!below(box)) return;
      const inner = [...box.children];
      gsap.set(box, { clipPath: 'inset(10% 8% round 16px)' });
      gsap.set(inner, { opacity: 0, y: 16 });
      const wa = box.querySelector('.rn-btn .rn-btn-icon');
      triggers.push(ScrollTrigger.create({
        trigger: box, start: 'top 85%', once: true,
        onEnter: () => {
          gsap.timeline()
            .to(box, { clipPath: 'inset(0% 0% round 16px)', duration: .8, ease: 'power3.out', clearProps: 'clipPath' })
            .to(inner, { opacity: 1, y: 0, duration: .5, stagger: .1, ease: 'power2.out', clearProps: 'opacity,transform' }, .25)
            .add(() => { if (wa) wa.closest('.rn-btn').classList.add('is-pulse'); }, .9);
        }
      }));
    });

    return () => triggers.forEach((t) => t.kill());
  });
}
