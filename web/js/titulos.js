// Los titulares de sección suben línea a línea, desde detrás de una máscara, al llegar a ellos (SplitText + ScrollTrigger).
// Los que ya están a la vista al cargar se dejan quietos, para que no desaparezcan y vuelvan.
import { loadGsap } from './gsap.js';

export async function mount() {
  const titles = [...document.querySelectorAll('#contenido .rn-title, #contenido .rn-facts-title')];
  if (!titles.length) return;
  const { gsap, SplitText } = await loadGsap('SplitText');

  gsap.matchMedia().add('(prefers-reduced-motion: no-preference)', () => {
    titles.forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight * .9) return;
      SplitText.create(el, {
        type: 'lines',
        mask: 'lines',
        linesClass: 'rn-split-line',
        autoSplit: true,
        // Al volver a partir las líneas (cambio de ancho, tipografía cargada), GSAP conserva el progreso.
        onSplit: (self) => gsap.from(self.lines, {
          yPercent: 110,
          duration: .9,
          ease: 'power4.out',
          stagger: .09,
          scrollTrigger: { trigger: el, start: 'top 88%', once: true }
        })
      });
    });
  });
}
