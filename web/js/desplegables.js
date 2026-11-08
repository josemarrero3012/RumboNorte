// Los desplegables (preguntas frecuentes, servicios) se abren y se cierran animando la altura, sin saltos.
// En los grupos donde solo cabe uno abierto, el anterior también se cierra con suavidad.
import { loadGsap } from './gsap.js';

export async function mount() {
  const items = [...document.querySelectorAll('details.rn-disc')];
  if (!items.length) return;
  const { gsap } = await loadGsap();

  gsap.matchMedia().add('(prefers-reduced-motion: no-preference)', () => {
    // El navegador cerraría de golpe al resto del grupo: el grupo pasa a gestionarse aquí.
    items.forEach((d) => {
      if (d.name) { d.dataset.group = d.name; d.removeAttribute('name'); }
    });

    function shut(d) {
      const summary = d.querySelector('summary');
      const from = d.getBoundingClientRect().height;
      const to = summary.getBoundingClientRect().height + (d.offsetHeight - d.clientHeight);
      d.classList.add('is-closing');
      gsap.fromTo(d, { height: from, overflow: 'hidden' }, {
        height: to, duration: .35, ease: 'power2.inOut', overwrite: true,
        onComplete: () => { d.open = false; d.classList.remove('is-closing'); gsap.set(d, { clearProps: 'height,overflow' }); }
      });
    }

    function show(d) {
      if (d.dataset.group) items.filter((o) => o !== d && o.open && o.dataset.group === d.dataset.group).forEach(shut);
      const from = d.getBoundingClientRect().height;
      d.open = true;
      d.classList.remove('is-closing');
      gsap.fromTo(d, { height: from, overflow: 'hidden' }, { height: 'auto', duration: .45, ease: 'power3.out', overwrite: true, clearProps: 'height,overflow' });
      gsap.fromTo(d.querySelector('.rn-disc-body'), { opacity: 0, y: -10 }, { opacity: 1, y: 0, duration: .45, delay: .08, ease: 'power2.out', clearProps: 'opacity,transform' });
    }

    function click(e) {
      const d = e.currentTarget.parentElement;
      e.preventDefault();
      if (d.open && !d.classList.contains('is-closing')) shut(d);
      else show(d);
    }
    const summaries = items.map((d) => d.querySelector('summary'));
    summaries.forEach((s) => s.addEventListener('click', click));

    return () => {
      summaries.forEach((s) => s.removeEventListener('click', click));
      items.forEach((d) => {
        if (d.dataset.group) d.setAttribute('name', d.dataset.group);
        d.classList.remove('is-closing');
        gsap.set(d, { clearProps: 'height,overflow' });
      });
    };
  });
}
