/* Monta cada página con los componentes y su contenido. */
(function () {
  var R = window.RumboNorte, C = window.RumboNorteContenido, P = window.RumboNortePaginas;
  var h = React.createElement;

  function header(path) {
    return h(R.Header, Object.assign({}, C.comun.header, { current: path }));
  }

  function page(path, hero, sections, footer) {
    return h(React.Fragment, null,
      h(hero[0], Object.assign({}, hero[1], { header: header(path) })),
      h('main', { id: 'contenido' }, sections),
      h(R.Footer, Object.assign({}, C.comun.footer, footer)));
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
        section(R.MoneyFlow, d.modelo, 'modelo'),
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
        section(R.MoneyFlow, d.modelo, 'modelo'),
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

  window.RumboNorteApp = function (name) { return BUILD[name](); };
  if (typeof document === 'undefined') return;

  var name = document.documentElement.getAttribute('data-page');
  if (!name) {
    var file = location.pathname.split('/').pop() || 'index.html';
    name = Object.keys(P).filter(function (k) { return P[k].file === file; })[0] || 'noencontrada';
    document.title = P[name].title;
  }

  var root = document.getElementById('root');
  if (root.firstChild) ReactDOM.hydrateRoot(root, BUILD[name]());
  else ReactDOM.createRoot(root).render(BUILD[name]());

  // Animaciones con GSAP, cuando la página ya ha cargado: el camino del inicio, solo en pantallas
  // anchas donde hay margen para él, la nómina de la guía y el flujo del dinero.
  function later(file) {
    window.addEventListener('load', function () {
      import(new URL(file, document.baseURI).href).then(function (m) { return m.mount(); })
        .catch(function (e) { console.warn('Animación no disponible', e); });
    });
  }
  if (name === 'inicio' && window.matchMedia('(min-width: 1360px)').matches) later('js/camino.js');
  if (name === 'guia') later('js/nomina.js');
  if (name === 'inicio' || name === 'quien') later('js/flujo.js');
})();
