/* Monta cada página con los componentes y su contenido. */
(function () {
  var R = window.RumboNorte, C = window.RumboNorteContenido, P = window.RumboNortePaginas;
  var ROOT = (window.RumboNorteIdioma || {}).raiz || '';
  var h = React.createElement;

  function header(path) {
    return h(R.Header, Object.assign({}, C.comun.header, { current: path }));
  }

  function page(path, hero, sections, footer) {
    return h(React.Fragment, null,
      h(hero[0], Object.assign({}, hero[1], { header: header(path) })),
      h('main', { id: 'contenido' }, sections),
      h(R.Footer, Object.assign({}, C.comun.footer, footer)),
      h(R.WhatsAppOrb, null));
  }

  function section(component, props, key) {
    return h(component, Object.assign({ key: key }, props));
  }

  var BUILD = {
    inicio: function () {
      var d = C.inicio;
      return page('./', [R.Hero, d.hero], [
        section(R.KeyFacts, d.facts, 'facts'),
        section(R.TopicCards, d.topics, 'topics'),
        section(R.Countries, d.destinos, 'destinos'),
        section(R.Services, d.servicios, 'servicios'),
        section(R.Profiles, d.perfiles, 'perfiles'),
        section(R.Process, d.proceso, 'proceso'),
        section(R.Faq, d.preguntas, 'preguntas'),
        section(R.GuideCallout, d.aviso, 'aviso'),
        section(R.Application, d.candidatura, 'candidatura')
      ]);
    },
    guia: function () {
      var d = C.guia;
      return page('guia.html', [R.PageHero, d.hero], [
        section(R.Article, { toc: d.toc, sections: d.sections }, 'guia')
      ], { extra: d.legalNote });
    },
    metas: function () {
      var d = C.metas;
      return page('metas.html', [R.PageHero, d.hero], [
        section(R.Reading, { blocks: [{ note: d.aviso }] }, 'aviso'),
        section(R.Reading, d.mapa, 'mapa'),
        section(R.Goals, d.metas, 'metas'),
        section(R.Reading, Object.assign({ tone: 'stone' }, d.final), 'final'),
        section(R.Cta, d.cta, 'cta')
      ], { extra: d.legalNote });
    },
    quien: function () {
      var d = C.quien;
      return page('quienes-somos.html', [R.PageHero, d.hero], [
        section(R.Story, d.historia, 'historia'),
        section(R.Limits, d.limites, 'limites'),
        section(R.Cta, d.cta, 'cta')
      ]);
    },
    privacidad: function () {
      var d = C.legal.privacidad;
      return page('privacidad.html', [R.PageHero, d.hero], [section(R.LegalPage, d, 'legal')]);
    },
    impressum: function () {
      var d = C.legal.impressum;
      return page('impressum.html', [R.PageHero, d.hero], [section(R.LegalPage, d, 'legal')]);
    },
    gracias: function () {
      var d = C.legal.gracias;
      return page('gracias.html', [R.PageHero, Object.assign({ actions: d.links }, d.hero)], []);
    },
    noencontrada: function () {
      var d = C.legal.noencontrada;
      return page('', [R.PageHero, Object.assign({ actions: d.links }, d.hero)], []);
    }
  };

  window.RumboNorteApp = function (name) {
    // El selector de idioma enlaza con esta misma página en los demás idiomas.
    if (window.RumboNorteIdioma) window.RumboNorteIdioma.archivo = P[name].file;
    return BUILD[name]();
  };
  if (typeof document === 'undefined') return;

  // Con JavaScript, la cabecera móvil pasa a la hamburguesa y las tarjetas a su versión que se abre.
  // Sin él (o si falla este script), el CSS deja el menú y el texto de las tarjetas a la vista.
  document.documentElement.classList.add('rn-js');

  var name = document.documentElement.getAttribute('data-page');
  if (!name) {
    var file = location.pathname.split('/').pop() || 'index.html';
    name = Object.keys(P).filter(function (k) { return P[k].file === file; })[0] || 'noencontrada';
    document.title = P[name].title;
  }

  var root = document.getElementById('root');
  if (root.firstChild) ReactDOM.hydrateRoot(root, window.RumboNorteApp(name));
  else ReactDOM.createRoot(root).render(window.RumboNorteApp(name));

  // Animaciones con GSAP, cuando la página ya ha cargado: el camino del inicio, solo en pantallas
  // anchas donde hay margen para él, el vuelo del hero, los pasos del proceso, las cifras que cuentan,
  // los titulares de sección, los desplegables, los remates de cada sección, el progreso del formulario,
  // la barra de lectura de la guía, el recorrido de Metas, y la nómina de la guía.
  function later(file) {
    window.addEventListener('load', function () {
      import(new URL(ROOT + file, document.baseURI).href).then(function (m) { return m.mount(); })
        .catch(function (e) { console.warn('Animación no disponible', e); });
    });
  }
  var calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (name === 'inicio' && window.matchMedia('(min-width: 1360px)').matches) later('js/camino.js');
  // El vuelo del hero no espera a que cargue toda la página: el avión está oculto hasta que despega.
  if (name === 'inicio' && !calm) import(new URL(ROOT + 'js/heroe.js', document.baseURI).href).then(function (m) { return m.mount(); })
    .catch(function (e) { console.warn('Animación no disponible', e); });
  if (name === 'inicio' && !calm) later('js/proceso.js');
  if ((name === 'inicio' || name === 'metas') && !calm) later('js/cifras.js');
  if (!calm) later('js/titulos.js');
  if (!calm) later('js/desplegables.js');
  if (!calm) later('js/detalles.js');
  if (name === 'inicio') later('js/candidatura.js');
  if (name === 'guia' && !calm) later('js/lectura.js');
  if (name === 'metas' && !calm) later('js/recorrido.js');
  if (name === 'guia') later('js/nomina.js');
  // El asistente (la brújula) va en todas las páginas, encima del botón de WhatsApp.
  later('js/asistente.js');
})();
