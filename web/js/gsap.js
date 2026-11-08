// Carga GSAP una sola vez, aunque lo pidan varias piezas de la página. Cada pieza pide además
// los plugins que usa (MotionPathPlugin, DrawSVGPlugin, SplitText) y se cargan también una sola vez.
const LIB = ['lib/gsap/gsap.min.js', 'lib/gsap/ScrollTrigger.min.js'];
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
    .then(() => Promise.all(plugins.map((name) => script(`lib/gsap/${name}.min.js`))))
    .then(() => {
      window.gsap.registerPlugin(window.ScrollTrigger, ...plugins.map((name) => window[name]));
      return window;
    });
}
