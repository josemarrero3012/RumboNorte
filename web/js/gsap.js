// Carga GSAP una sola vez, aunque lo pidan varias piezas de la página. Cada pieza pide además
// los plugins que usa (MotionPathPlugin, DrawSVGPlugin, SplitText) y se cargan también una sola vez.
// Rutas relativas a este archivo, así valen igual desde la raíz que desde /en/, /pl/ y /pt/.
const at = (f) => new URL(`../lib/gsap/${f}.min.js`, import.meta.url).href;
const LIB = [at('gsap'), at('ScrollTrigger')];
const loaded = {};

function script(src) {
  loaded[src] = loaded[src] || new Promise((ok, fail) => {
    const s = document.createElement('script');
    s.src = src;
    s.onload = ok;
    s.onerror = fail;
    document.head.appendChild(s);
  });
  return loaded[src];
}

export function loadGsap(...plugins) {
  const core = LIB.reduce((p, src) => p.then(() => script(src)), Promise.resolve());
  return core
    .then(() => Promise.all(plugins.map((name) => script(at(name)))))
    .then(() => {
      window.gsap.registerPlugin(window.ScrollTrigger, ...plugins.map((name) => window[name]));
      return window;
    });
}
