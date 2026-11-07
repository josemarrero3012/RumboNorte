// Carga GSAP una sola vez, aunque lo pidan varias piezas de la página.
const LIB = ['lib/gsap/gsap.min.js', 'lib/gsap/ScrollTrigger.min.js'];
let ready = null;

function script(src) {
  return new Promise((ok, fail) => {
    const s = document.createElement('script');
    s.src = src;
    s.onload = ok;
    s.onerror = fail;
    document.head.appendChild(s);
  });
}

export function loadGsap() {
  ready = ready || LIB.reduce((p, src) => p.then(() => script(src)), Promise.resolve()).then(() => {
    window.gsap.registerPlugin(window.ScrollTrigger);
    return window;
  });
  return ready;
}
