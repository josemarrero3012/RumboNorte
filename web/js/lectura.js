// La guía es muy larga: una barra fina arriba dice cuánto llevas leído y en el índice
// un marcador naranja se desliza hasta la sección en la que estás.
import { loadGsap } from './gsap.js';

export async function mount() {
  const article = document.querySelector('.rn-article');
  if (!article) return;
  const { gsap, ScrollTrigger } = await loadGsap();

  gsap.matchMedia().add('(prefers-reduced-motion: no-preference)', () => {
    const bar = document.createElement('div');
    bar.className = 'rn-readbar';
    bar.setAttribute('aria-hidden', 'true');
    document.body.append(bar);
    const fill = gsap.fromTo(bar, { scaleX: 0 }, {
      scaleX: 1, ease: 'none',
      scrollTrigger: { trigger: article, start: 'top 20%', end: 'bottom bottom', scrub: .3 }
    });

    // Marcador del índice: sigue al enlace que React marca como actual.
    const list = document.querySelector('.rn-toc-wide ol');
    let mark = null, watch = null;
    if (list) {
      mark = document.createElement('span');
      mark.className = 'rn-toc-mark';
      mark.setAttribute('aria-hidden', 'true');
      list.classList.add('is-live');
      list.prepend(mark);
      const move = (instant) => {
        const a = list.querySelector('a[aria-current]');
        if (!a) { gsap.to(mark, { opacity: 0, duration: .2 }); return; }
        const top = a.offsetTop, h = a.offsetHeight;
        gsap.to(mark, { y: top, height: h, opacity: 1, duration: instant ? 0 : .45, ease: 'power3.out' });
      };
      watch = new MutationObserver(() => move(false));
      watch.observe(list, { subtree: true, attributes: true, attributeFilter: ['aria-current'] });
      move(true);
      ScrollTrigger.addEventListener('refresh', () => move(true));
    }

    return () => {
      fill.scrollTrigger.kill();
      bar.remove();
      if (watch) watch.disconnect();
      if (mark) { mark.remove(); list.classList.remove('is-live'); }
    };
  });
}
