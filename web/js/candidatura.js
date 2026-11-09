// El formulario de candidatura acompaña mientras lo rellenas:
// - una barra fija arriba con los cinco bloques, que se llenan al completarlos,
// - el número de cada bloque se marca en naranja al terminarlo,
// - los campos con error se sacuden al intentar enviar,
// - y cuando todo está listo, el botón de enviar lo dice con un latido.
// El progreso funciona también con movimiento reducido; solo se quitan las animaciones.
import { loadGsap } from './gsap.js';

const PHONE = /^[\d\s()+-]{6,}$/;
const MAIL = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

export async function mount() {
  const form = document.querySelector('form.rn-form');
  if (!form) return;
  const parts = [...form.querySelectorAll('.rn-form-part')];
  if (parts.length !== 5) return;
  const { gsap } = await loadGsap();
  const calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const el = form.elements;
  const value = (name) => String((el[name] && el[name].value) || '').trim();
  const checked = (name) => [...form.querySelectorAll(`input[name="${name}"]`)].some((i) => i.checked);

  // Lo mismo que pide la validación del envío: un bloque está completo cuando lo estaría para enviar.
  const rules = [
    () => value('nombre') !== '' && PHONE.test(value('telefono')) && MAIL.test(value('email')),
    () => /^\d{2}$/.test(value('edad')) && value('nacionalidad_ue') !== '' && value('nivel_ingles') !== '',
    () => checked('destino') && checked('idiomas'),
    () => checked('carnet') && value('sector') !== '',
    () => checked('consentimiento_rgpd')
  ];

  const bar = document.createElement('div');
  bar.className = 'rn-form-progress';
  bar.innerHTML = '<div class="rn-form-progress-bar" aria-hidden="true">' + '<span><i></i></span>'.repeat(5) + '</div><p aria-live="polite"></p>';
  form.querySelector('.rn-form-head').after(bar);
  const fills = [...bar.querySelectorAll('i')];
  const label = bar.querySelector('p');
  const submit = form.querySelector('.rn-form-end .rn-btn');
  let done = rules.map(() => false), ready = false;

  function update(first) {
    const now = rules.map((r) => r());
    now.forEach((ok, i) => {
      if (ok === done[i] && !first) return;
      parts[i].classList.toggle('is-done', ok);
      gsap.to(fills[i], { scaleX: ok ? 1 : 0, duration: calm || first ? 0 : .5, ease: 'power3.out' });
      if (ok && !first && !calm) gsap.fromTo(parts[i].querySelector('.rn-form-step'), { scale: .6 }, { scale: 1, duration: .5, ease: 'back.out(3)' });
    });
    done = now;
    const count = now.filter(Boolean).length;
    const all = count === now.length;
    label.textContent = all ? 'Todo listo: ya puedes enviarla.' : `${count} de ${now.length} bloques completos`;
    bar.classList.toggle('is-ready', all);
    if (all && !ready && !first && !calm) gsap.fromTo(submit, { scale: 1 }, { scale: 1.06, duration: .18, yoyo: true, repeat: 3, ease: 'sine.inOut' });
    ready = all;
  }

  form.addEventListener('input', () => update(false));
  form.addEventListener('change', () => update(false));
  update(true);

  // Al intentar enviar, React marca los errores; aquí se sacuden para que se vean.
  form.addEventListener('submit', () => {
    if (calm) return;
    requestAnimationFrame(() => requestAnimationFrame(() => {
      const bad = [...form.querySelectorAll('[aria-invalid="true"]')];
      if (bad.length) gsap.fromTo(bad, { x: 0 }, { keyframes: { x: [-8, 8, -6, 6, -3, 0] }, duration: .45, ease: 'none', stagger: .05 });
    }));
  });
}
