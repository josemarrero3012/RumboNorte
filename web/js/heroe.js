// El hero del inicio con GSAP. Cada vez que cambia el país del titular:
// - el avión despega de España y sigue la ruta girando con ella (MotionPathPlugin),
// - la línea discontinua se descubre detrás de él (DrawSVGPlugin, sobre la máscara de la ruta),
// - al aterrizar cae la chincheta y el borde del país destella,
// - el nombre del país entra letra a letra (SplitText),
// - y en bucle: tras una pausa la línea se borra y el avión vuelve a despegar. El bucle espera
//   mientras el hero no se ve, la pestaña está oculta o el visitante ha pausado las animaciones.
// Sin este módulo el mapa se queda quieto (con movimiento reducido, con el avión a mitad de camino).
import { loadGsap } from './gsap.js';

const FLIGHT = 1.9;
const HOLD = 2.4; // segundos con el avión ya en destino antes de repetir

export async function mount() {
  const hero = document.querySelector('.rn-hero');
  const svg = hero && hero.querySelector('.rn-hero-map svg');
  if (!svg) return;
  const { gsap, SplitText } = await loadGsap('MotionPathPlugin', 'DrawSVGPlugin', 'SplitText');

  gsap.matchMedia().add('(prefers-reduced-motion: no-preference)', (ctx) => {
    let flight = null, letters = null, waiting = false, inView = true;
    hero.setAttribute('data-fx', '');
    const quiet = () => document.documentElement.classList.contains('rn-quieto');
    const free = () => inView && !document.hidden && !quiet();
    // Siguiente vuelta del bucle, o en espera hasta que vuelva a poder moverse.
    // Al terminar la pausa en destino: la línea se borra desde España y el avión vuelve a salir. Si no
    // puede moverse, se queda con la ruta dibujada hasta que pueda.
    let reveal = null;
    function again() {
      if (!free()) { waiting = true; return; }
      waiting = false;
      ctx.add(() => gsap.to(reveal, { drawSVG: '100% 100%', duration: .8, ease: 'power1.in', onComplete: () => ctx.play({ again: true }) }));
    }
    function wake() { if (waiting && free()) again(); }
    const seen = 'IntersectionObserver' in window ? new IntersectionObserver(([e]) => { inView = e.isIntersecting; wake(); }) : null;
    if (seen) seen.observe(hero);
    document.addEventListener('visibilitychange', wake);
    window.addEventListener('rn-quieto', wake);

    // React ya ha pintado la ruta, la chincheta y el nombre del país nuevo: aquí solo se animan.
    ctx.add('play', (opts) => {
      const route = svg.querySelector('.rn-hero-map-route');
      reveal = svg.querySelector('.rn-hero-map-reveal');
      const plane = svg.querySelector('.rn-hero-map-plane');
      const pin = svg.querySelector('.rn-hero-map-pin');
      const place = svg.querySelector('.rn-hero-map-place.is-on');
      if (flight) flight.kill();
      if (letters) letters.revert();

      // Estado de salida, aplicado al momento para que no se vea ni un fotograma del destino ya alcanzado.
      gsap.set(reveal, { drawSVG: '0% 0%' });
      gsap.set(plane, { opacity: 0 });
      // En las vueltas del bucle la chincheta ya está clavada: solo vuela el avión.
      if (!opts.again) gsap.set(pin, { opacity: 0, y: -28, scale: .3, transformOrigin: '50% 100%' });

      flight = gsap.timeline({ delay: opts.delay || 0 })
        .to(plane, { duration: FLIGHT, ease: 'power1.inOut', motionPath: { path: route, align: route, alignOrigin: [.5, .5], autoRotate: true } }, 0)
        .to(reveal, { duration: FLIGHT, ease: 'power1.inOut', drawSVG: '0% 100%' }, 0)
        .to(plane, { opacity: 1, duration: .2 }, 0)
        // Sube al despegar y baja al aterrizar.
        .fromTo(plane.firstElementChild, { scale: .55, transformOrigin: '50% 50%' }, { scale: 1.15, duration: FLIGHT / 2, ease: 'sine.out', yoyo: true, repeat: 1 }, 0)
        .to(plane, { opacity: 0, duration: .3 }, FLIGHT - .2);
      if (!opts.again) flight.to(pin, { opacity: 1, y: 0, scale: 1, duration: .8, ease: 'elastic.out(1, .45)' }, FLIGHT - .15);
      // Bucle: tras la pausa en destino, la siguiente vuelta (ver again). Un cambio de país mata este timeline.
      flight.call(again, null, FLIGHT + HOLD);
      if (place) flight.fromTo(place, { strokeWidth: 7 }, { strokeWidth: 2.6, duration: .7, ease: 'power2.out', clearProps: 'strokeWidth' }, FLIGHT - .1);

      const name = hero.querySelector('.rn-hero-country');
      if (opts.letters && name) {
        letters = SplitText.create(name, { type: 'chars', aria: 'none' });
        flight.from(letters.chars, {
          yPercent: 80, rotationX: -90, opacity: 0, transformOrigin: '50% 100%',
          duration: .7, ease: 'back.out(2)', stagger: .035,
          onComplete: () => { letters.revert(); letters = null; }
        }, 0);
      }
    });

    function next() { ctx.play({ letters: true }); }
    // El primer vuelo sale en cuanto carga GSAP (también con las animaciones pausadas: es una sola
    // entrada de dos segundos). El avión empieza oculto por CSS, así que no se ve quieto a mitad de camino.
    ctx.play({ delay: .1 });
    window.addEventListener('rn-hero-pais', next);
    return () => {
      window.removeEventListener('rn-hero-pais', next);
      document.removeEventListener('visibilitychange', wake);
      window.removeEventListener('rn-quieto', wake);
      if (seen) seen.disconnect();
      if (letters) letters.revert();
      hero.removeAttribute('data-fx');
    };
  });
}
