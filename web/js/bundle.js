/* @ds-bundle: {"format":4,"namespace":"RumboNorte","components":[{"name":"Button"},{"name":"Sticker"},{"name":"Header"},{"name":"LogoStrip"},{"name":"Hero"},{"name":"TopicCards"},{"name":"KeyFacts"},{"name":"Countries"},{"name":"Services"},{"name":"Profiles"},{"name":"Process"},{"name":"Faq"},{"name":"MoneyFlow"},{"name":"GuideCallout"},{"name":"Application"},{"name":"Footer"},{"name":"PageHero"},{"name":"Article"},{"name":"Reading"},{"name":"Goals"},{"name":"Story"},{"name":"Limits"},{"name":"Cta"},{"name":"LegalPage"}]} */
(function () {
  var React = window.React;
  var h = React.createElement;

  function cx() {
    return Array.prototype.filter.call(arguments, Boolean).join(' ');
  }

  // «wa:» abre WhatsApp con el número de la configuración; lo que le siga es el mensaje ya escrito.
  function url(href) {
    if (!href || href.indexOf('wa:') !== 0) return href;
    var cfg = window.RumboNorteConfig || {};
    var msg = href.slice(3) || cfg.mensaje || '';
    return 'https://wa.me/' + (cfg.whatsapp || '') + (msg ? '?text=' + encodeURIComponent(msg) : '');
  }

  function linkProps(href) {
    var out = { href: url(href) };
    if (/^https?:|^wa:/.test(href || '')) { out.target = '_blank'; out.rel = 'noopener'; }
    return out;
  }

  // Texto con marcas sencillas: **negrita**, *cursiva*, ~~pequeño~~, [enlace](url) y saltos de línea.
  function rich(text) {
    var re = /\[([^\]]+)\]\(([^)\s]+)\)|\*\*(.+?)\*\*(?!\*)|\*(.+?)\*|~~(.+?)~~|\n/g;
    var out = [], last = 0, m, key = 0;
    while ((m = re.exec(text))) {
      if (m.index > last) out.push(text.slice(last, m.index));
      last = re.lastIndex;
      key += 1;
      if (m[1]) out.push(h('a', Object.assign({ key: key }, linkProps(m[2])), rich(m[1])));
      else if (m[3]) out.push(h('strong', { key: key }, rich(m[3])));
      else if (m[4]) out.push(h('em', { key: key }, rich(m[4])));
      else if (m[5]) out.push(h('small', { key: key }, rich(m[5])));
      else out.push(h('br', { key: key }));
    }
    if (last < text.length) out.push(text.slice(last));
    return out;
  }

  function Lines(props) {
    return (props.lines || []).map(function (t, i) {
      return h('span', { key: t, className: i === props.accent ? 'rn-accent' : null, style: { '--i': i } }, t, ' ');
    });
  }

  function Head(props) {
    return h('div', { className: 'rn-head' },
      h('div', null,
        props.eyebrow ? h('p', { className: 'rn-eyebrow' }, props.eyebrow) : null,
        h('h2', { className: 'rn-title' }, h(Lines, { lines: props.title }))),
      props.text ? h('p', { className: 'rn-lead' }, rich(props.text)) : null);
  }

  var ICONS = {
    whatsapp: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z'
  };

  function Button(props) {
    var variant = props.variant || 'primary';
    var rest = Object.assign({}, props);
    delete rest.variant;
    delete rest.size;
    delete rest.icon;
    rest.className = cx('rn-btn', 'rn-btn-' + variant, props.size === 'sm' && 'rn-btn-sm', props.className);
    var icon = props.icon ? h('svg', { className: 'rn-btn-icon', viewBox: '0 0 24 24', 'aria-hidden': 'true' }, h('path', { d: ICONS[props.icon] })) : null;
    if (props.href) Object.assign(rest, linkProps(props.href));
    return h(props.href ? 'a' : 'button', rest, icon, props.children);
  }

  // Sello redondo: la frase rodea todo el anillo y la flecha del logo marca dónde empieza.
  // El espaciado se calcula con la tipografía ya cargada, igual en todos los navegadores.
  var RING_R = 78, RING_GAP = 30, RING_C = 2 * Math.PI * RING_R;
  var RING_ARROW = 'M14.3 90.6L21.2 109.4L14.3 104.4L7.4 109.4Z';

  function Sticker(props) {
    var id = React.useId().replace(/:/g, '');
    var text = (props.text || '').replace(/[\s·•]+$/, '');
    var textRef = React.useRef(null), pathRef = React.useRef(null);

    React.useEffect(function () {
      var el = textRef.current, tp = pathRef.current;
      if (!el || !document.fonts) return undefined;
      var live = true;
      document.fonts.ready.then(function () {
        if (!live) return;
        el.style.letterSpacing = '0px';
        var spacing = Math.max(0, (RING_C - RING_GAP - el.getComputedTextLength()) / text.length);
        el.style.letterSpacing = spacing.toFixed(2) + 'px';
        tp.setAttribute('startOffset', ((RING_GAP + spacing) / 2).toFixed(1));
      });
      return function () { live = false; };
    }, [text]);

    return h('span', { className: cx('rn-sticker', 'rn-sticker-' + (props.tone || 'white'), props.className), 'aria-hidden': 'true' },
      h('svg', { viewBox: '0 0 200 200' },
        h('circle', { className: 'rn-sticker-disc', cx: 100, cy: 100, r: 100 }),
        h('defs', null,
          h('path', { id: id, d: 'M100 100m-' + RING_R + ' 0a' + RING_R + ' ' + RING_R + ' 0 1 1 ' + 2 * RING_R + ' 0a' + RING_R + ' ' + RING_R + ' 0 1 1-' + 2 * RING_R + ' 0' }),
          h('clipPath', { id: id + 'c' }, h('circle', { cx: 100, cy: 100, r: 70 }))),
        h('g', { className: 'rn-sticker-ring' },
          h('text', { ref: textRef, className: 'rn-sticker-text' },
            h('textPath', { ref: pathRef, href: '#' + id, startOffset: 17 }, text)),
          h('path', { className: 'rn-sticker-arrow', d: RING_ARROW })),
        props.photoSrc ? h('image', { href: props.photoSrc, x: 30, y: 30, width: 140, height: 140, preserveAspectRatio: 'xMidYMid slice', clipPath: 'url(#' + id + 'c)' }) : null,
        props.src ? h('image', { href: props.src, x: 46, y: 46, width: 108, height: 108, preserveAspectRatio: 'xMidYMid meet' }) : null));
  }

  function Header(props) {
    var links = props.links || [];
    var state = React.useState(false);
    var open = state[0], setOpen = state[1];
    function close() { setOpen(false); }
    return h('header', { className: 'rn-header rn-on-navy' },
      h('a', { className: 'rn-skip', href: '#contenido' }, 'Saltar al contenido'),
      h('a', { className: 'rn-header-logo', href: props.homeHref || '#', 'aria-label': 'Rumbo Norte, inicio' },
        props.markSrc ? h('img', { className: 'rn-header-mark', src: props.markSrc, alt: '', width: 36, height: 39 }) : null,
        h('img', { className: 'rn-header-wordmark', src: props.logoSrc, alt: '', width: 216, height: 27 })),
      h('nav', { className: 'rn-header-nav', 'aria-label': 'Principal' },
        links.map(function (l) { return h('a', { key: l.href, className: 'rn-header-link', href: l.href, 'aria-current': l.href === props.current ? 'page' : null }, l.label); }),
        props.cta ? h(Button, { href: props.cta.href, size: 'sm', icon: props.cta.icon }, props.cta.label) : null),
      props.cta && props.cta.icon ? h('a', Object.assign({ className: 'rn-header-icon', 'aria-label': props.cta.label }, linkProps(props.cta.href)),
        h('svg', { viewBox: '0 0 24 24', 'aria-hidden': 'true' }, h('path', { d: ICONS[props.cta.icon] }))) : null,
      h('button', { className: 'rn-header-burger', type: 'button', 'aria-expanded': open, 'aria-label': open ? 'Cerrar menú' : 'Abrir menú', onClick: function () { setOpen(!open); } },
        h('span', null), h('span', null)),
      open ? h('nav', { className: 'rn-header-menu', 'aria-label': 'Menú' },
        links.map(function (l) { return h('a', { key: l.href, href: l.href, onClick: close }, l.label); }),
        props.cta ? h(Button, { href: props.cta.href, icon: props.cta.icon, onClick: close }, props.cta.label) : null) : null);
  }

  function LogoStrip(props) {
    function set(hidden) {
      return h('ul', { className: 'rn-logostrip-set', 'aria-label': hidden ? null : 'Empresas', 'aria-hidden': hidden ? 'true' : null },
        props.logos.map(function (l) {
          return h('li', { key: l.name },
            h('img', { src: l.src, alt: hidden ? '' : l.name, width: l.width, height: l.height, loading: 'lazy', style: { height: 'calc(' + l.height + 'px * var(--rn-logo-scale, 1))' } }));
        }));
    }
    return h('div', { className: 'rn-logostrip' }, h('div', { className: 'rn-logostrip-track' }, set(false), set(true)));
  }

  function listToSentence(items) {
    if (items.length < 2) return items.join('');
    return items.slice(0, -1).join(', ') + ' o ' + items[items.length - 1];
  }

  // La franja naranja de la curva se dibuja de izquierda a derecha al cargar (rn-hero-curve-wipe, en CSS).
  function Curve() {
    var id = React.useId().replace(/:/g, '');
    return h('svg', { className: 'rn-hero-curve', viewBox: '0 0 1440 160', preserveAspectRatio: 'none', 'aria-hidden': 'true' },
      h('defs', null, h('clipPath', { id: id }, h('rect', { className: 'rn-hero-curve-wipe', width: 1440, height: 160 }))),
      h('path', { className: 'rn-hero-curve-ground', d: 'M0 160V150C380 146 920 112 1440 14V160Z' }),
      h('path', { className: 'rn-hero-curve-road', d: 'M0 112C400 112 920 84 1440 14C920 112 380 146 0 150Z', clipPath: 'url(#' + id + ')' }));
  }

  // En el servidor no hay pantalla que pintar: ahí basta useEffect y React no avisa.
  var useBeforePaint = typeof document === 'undefined' ? React.useEffect : React.useLayoutEffect;

  var PLANE = 'M18 0C18-1.6 16.5-2.4 14-2.4H4L-5-16H-9.5L-4.5-2.4H-12L-15.5-7.5H-18.5L-16.2 0L-18.5 7.5H-15.5L-12 2.4H-4.5L-9.5 16H-5L4 2.4H14C16.5 2.4 18 1.6 18 0Z';
  var PIN = 'M0 0C-3-7-12-12-12-22A12 12 0 1 1 12-22C12-12 3-7 0 0Z';

  // La ruta es una curva que sale de España y sube hacia el destino, combada hacia el este, sobre Francia.
  // Sin animación, el avión se queda a mitad de camino; js/heroe.js lo hace volar con GSAP.
  function flightPath(o, p) {
    var c = [(o[0] + p[0]) / 2 - (p[1] - o[1]) * .22, (o[1] + p[1]) / 2 + (p[0] - o[0]) * .22];
    var t = .62, u = 1 - t;
    var e = [u * u * o[0] + 2 * u * t * c[0] + t * t * p[0], u * u * o[1] + 2 * u * t * c[1] + t * t * p[1]];
    var dx = 2 * u * (c[0] - o[0]) + 2 * t * (p[0] - c[0]), dy = 2 * u * (c[1] - o[1]) + 2 * t * (p[1] - c[1]);
    return {
      d: 'M' + o.join(' ') + 'Q' + c[0].toFixed(1) + ' ' + c[1].toFixed(1) + ' ' + p.join(' '),
      plane: 'translate(' + e[0].toFixed(1) + ' ' + e[1].toFixed(1) + ') rotate(' + (Math.atan2(dy, dx) * 180 / Math.PI).toFixed(1) + ')'
    };
  }

  // Mapa de Europa detrás del hero: el país del titular se ilumina y un avión vuela hasta él desde España.
  function HeroMap(props) {
    var m = props.map;
    var place = m.places.filter(function (p) { return p.name === props.country; })[0] || m.places[0];
    var id = React.useId().replace(/:/g, '');
    var path = flightPath(m.origin, place.pin);

    function use(ref, className, extra) {
      return h('use', Object.assign({ key: className + ref, href: m.src + '#' + ref, className: className }, extra));
    }
    return h('div', { className: 'rn-hero-map', 'aria-hidden': 'true' },
      h('svg', { viewBox: '0 0 ' + m.width + ' ' + m.height },
        h('defs', null,
          // La tierra se funde con el fondo hacia los bordes; la ruta y el destino quedan enteros encima.
          h('radialGradient', { id: id + 'f', gradientUnits: 'userSpaceOnUse', cx: m.width * .5, cy: m.height * .52, r: m.width * .7 },
            h('stop', { offset: .5, stopColor: '#fff' }), h('stop', { offset: 1, stopColor: '#000' })),
          h('mask', { id: id + 'm', maskUnits: 'userSpaceOnUse', x: 0, y: 0, width: m.width, height: m.height },
            h('rect', { width: m.width, height: m.height, fill: 'url(#' + id + 'f)' })),
          // La línea es discontinua: se descubre dibujando este trazo continuo de la máscara.
          h('mask', { id: id + 'r', maskUnits: 'userSpaceOnUse', x: 0, y: 0, width: m.width, height: m.height },
            h('path', { className: 'rn-hero-map-reveal', d: path.d, fill: 'none', stroke: '#fff', strokeWidth: 12, strokeLinecap: 'round' })),
          h('filter', { id: id + 'g', x: '-40%', y: '-40%', width: '180%', height: '180%' },
            h('feGaussianBlur', { in: 'SourceGraphic', stdDeviation: 9, result: 'a' }),
            h('feGaussianBlur', { in: 'SourceGraphic', stdDeviation: 3, result: 'b' }),
            h('feMerge', null, h('feMergeNode', { in: 'a' }), h('feMergeNode', { in: 'b' }), h('feMergeNode', { in: 'SourceGraphic' })))),
        h('g', { mask: 'url(#' + id + 'm)' },
          use('tierra', 'rn-hero-map-land'),
          m.places.map(function (p) { return use(p.id, 'rn-hero-map-dest'); })),
        m.places.map(function (p) {
          return use(p.id, cx('rn-hero-map-place', p.id === place.id && 'is-on'), { filter: 'url(#' + id + 'g)' });
        }),
        h('path', { className: 'rn-hero-map-route', d: path.d, mask: 'url(#' + id + 'r)' }),
        h('circle', { className: 'rn-hero-map-origin-ring', cx: m.origin[0], cy: m.origin[1], r: 7 }),
        h('circle', { className: 'rn-hero-map-origin', cx: m.origin[0], cy: m.origin[1], r: 7 }),
        h('g', { transform: 'translate(' + place.pin.join(' ') + ')' },
          h('g', { key: place.id, className: 'rn-hero-map-pin' },
            h('path', { d: PIN }), h('circle', { cx: 0, cy: -22, r: 4.8 }))),
        h('g', { className: 'rn-hero-map-plane', transform: path.plane },
          h('path', { d: PLANE }))));
  }

  function Hero(props) {
    var countries = props.countries || ['Países Bajos', 'Alemania', 'Bélgica'];
    var lead = props.lead || 'Tu trabajo en';
    var leadWords = lead.split(' ');
    var leadEnd = leadWords.pop();
    var state = React.useState(0);
    var index = state[0], setIndex = state[1];
    var paused = React.useRef(false), visible = React.useRef(true), section = React.useRef(null);

    // El país cambia mientras el hero está a la vista; se para con el ratón sobre el titular,
    // al bajar por la página o con la pestaña en segundo plano.
    React.useEffect(function () {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
      var seen = 'IntersectionObserver' in window ? new IntersectionObserver(function (e) { visible.current = e[0].isIntersecting; }) : null;
      if (seen) seen.observe(section.current);
      var timer = setInterval(function () {
        if (paused.current || !visible.current || document.hidden) return;
        setIndex(function (i) { return (i + 1) % countries.length; });
      }, 3200);
      return function () { clearInterval(timer); if (seen) seen.disconnect(); };
    }, [countries.length]);

    // Avisa del cambio antes de pintar, para que js/heroe.js prepare el vuelo y las letras sin parpadeo.
    var first = React.useRef(true);
    useBeforePaint(function () {
      if (first.current) { first.current = false; return; }
      window.dispatchEvent(new CustomEvent('rn-hero-pais', { detail: { index: index } }));
    }, [index]);

    function pause() { paused.current = true; }
    function resume() { paused.current = false; }

    return h('section', { ref: section, className: 'rn-hero' },
      h('div', { className: 'rn-hero-field rn-on-navy' },
        props.header || null,
        props.map ? h(HeroMap, { map: props.map, country: countries[index] }) : null,
        h('div', { className: 'rn-hero-body' },
          h('h1', { className: 'rn-hero-title', 'aria-label': lead + ' ' + listToSentence(countries), onMouseEnter: pause, onMouseLeave: resume },
            h('span', { className: 'rn-hero-line', 'aria-hidden': 'true' },
              leadWords.join(' '), ' ', h('span', { className: 'rn-hero-lead-end' }, leadEnd)),
            h('span', { className: 'rn-hero-line rn-hero-word', 'aria-hidden': 'true', style: { '--rn-letters': countries[index].length } },
              h('span', { className: 'rn-hero-lead-end-next' }, leadEnd + ' '),
              h('span', { key: index, className: 'rn-hero-country' }, countries[index]))),
          props.photoSrc ? h(Sticker, { className: 'rn-hero-sticker-a', text: props.ring || 'Rumbo Norte, trabajo en Europa', photoSrc: props.photoSrc }) : null,
          props.person ? h('p', { className: 'rn-hero-person' },
            h('strong', null, props.person.name), h('span', null, props.person.role)) : null,
          props.subtitle ? h('p', { className: 'rn-hero-sub' }, props.subtitle) : null,
          h('div', { className: 'rn-hero-cta' },
            props.primaryCta ? h(Button, { href: props.primaryCta.href }, props.primaryCta.label) : null,
            props.secondaryCta ? h(Button, { href: props.secondaryCta.href, variant: 'outline' }, props.secondaryCta.label) : null),
          props.note ? h('p', { className: 'rn-hero-note' }, props.note) : null),
        h(Curve)),
      props.promises ? h('ul', { className: 'rn-hero-promises' },
        props.promises.map(function (p) { return h('li', { key: p }, p); })) : null,
      props.logos ? h(LogoStrip, { logos: props.logos }) : null);
  }

  function TopicCard(props) {
    var it = props.item;
    var state = React.useState(false);
    var open = state[0], setOpen = state[1];
    return h('li', { className: cx('rn-card', open && 'is-open') },
      h('div', { className: 'rn-card-head' },
        h('p', { className: 'rn-card-eyebrow' }, it.eyebrow),
        h('h3', { className: 'rn-card-title' }, it.title)),
      h('button', { className: 'rn-card-toggle', type: 'button', 'aria-expanded': open, 'aria-label': (open ? 'Cerrar ' : 'Abrir ') + it.eyebrow, onClick: function () { setOpen(!open); } }),
      h('div', { className: 'rn-card-stage' },
        h('div', { className: 'rn-card-art' }, h('img', { src: it.src, alt: '', width: it.width, height: it.height, loading: 'lazy' })),
        h('div', { className: 'rn-card-more' },
          it.figure ? h('p', { className: 'rn-card-figure' }, it.figure) : null,
          it.unit ? h('p', { className: 'rn-card-unit' }, it.unit) : null,
          h('p', { className: 'rn-card-text' }, it.text),
          h('a', { className: 'rn-card-link', href: it.href || '#', 'aria-label': it.linkHint || null },
            h('span', { className: 'rn-card-link-text' }, it.linkLabel || 'Leer más'),
            h('svg', { viewBox: '0 0 16 16', 'aria-hidden': 'true' }, h('path', { d: 'M5 2l6 6-6 6' }))))));
  }

  function TopicCards(props) {
    return h('section', { className: 'rn-topics', id: props.id }, h('div', { className: 'rn-topics-inner' },
      h('ul', { className: 'rn-topics-list' },
        (props.items || []).map(function (it) { return h(TopicCard, { key: it.eyebrow, item: it }); }))));
  }

  function KeyFacts(props) {
    return h('section', { className: 'rn-facts', id: props.id }, h('div', { className: 'rn-facts-inner' },
      h('div', { className: 'rn-facts-head' },
        h('div', { className: 'rn-facts-lead' },
          props.eyebrow ? h('p', { className: 'rn-facts-eyebrow' },
            props.arrowSrc ? h('img', { src: props.arrowSrc, alt: '', width: 18, height: 18 }) : null, props.eyebrow) : null,
          h('h2', { className: 'rn-facts-title' },
            (props.title || []).map(function (t) { return h('span', { key: t, className: 'rn-facts-line' }, t, ' '); })),
          props.cta ? h(Button, { href: props.cta.href, className: 'rn-facts-cta' }, props.cta.label) : null),
        h('div', { className: 'rn-facts-intro' },
          props.intro ? h('p', { className: 'rn-facts-hello' }, props.intro) : null,
          (props.paragraphs || []).map(function (t) { return h('p', { key: t, className: 'rn-facts-text' }, t); }),
          props.note ? h('p', { className: 'rn-facts-note' }, h('strong', null, props.note.title), ' ', props.note.text) : null))));
  }

  function spot(c) {
    var w = c.spot || [50, 80], t = c.spotTall || w;
    return { '--wx': w[0] + '%', '--wy': w[1] + '%', '--tx': t[0] + '%', '--ty': t[1] + '%' };
  }

  function Countries(props) {
    var items = props.items || [];
    var aState = React.useState(null), active = aState[0], setActive = aState[1];
    var sState = React.useState(null), selected = sState[0], setSelected = sState[1];
    var rState = React.useState(false), ready = rState[0], setReady = rState[1];
    var dState = React.useState(false), side = dState[0], setSide = dState[1];
    var stage = React.useRef(null), host = React.useRef(null), section = React.useRef(null), panel = React.useRef(null);
    var labels = React.useRef({}), scene = React.useRef(null), picked = React.useRef(null);

    function choose(id) {
      picked.current = id;
      setSide(!!scene.current && section.current.clientWidth > 1040);
      setSelected(id);
      if (window.history && history.replaceState) history.replaceState(null, '', '#' + id);
    }

    function back() {
      var id = picked.current;
      picked.current = null;
      setSelected(null);
      setSide(false);
      if (scene.current) scene.current.back();
      if (window.history && history.replaceState) history.replaceState(null, '', location.pathname);
      if (labels.current[id]) labels.current[id].focus({ preventScroll: true });
      stage.current.scrollIntoView({ block: 'center' });
    }

    // La ficha ya está pintada: la cámara encuadra el país y la página se coloca para verlos juntos.
    function frame(id) {
      var card = panel.current.querySelector('.rn-country:not([hidden])');
      if (!card) return;
      var reserve = side ? 0 : Math.min(card.offsetHeight, Math.round(innerHeight * 0.5));
      if (scene.current) scene.current.select(id, { side: side, reserve: reserve });
      card.focus({ preventScroll: true });
      var box = stage.current.getBoundingClientRect();
      if (side) {
        if (box.top < 0 || box.bottom > innerHeight) section.current.scrollIntoView({ block: 'start' });
      } else {
        window.scrollTo({ top: card.getBoundingClientRect().top + scrollY - (innerHeight - reserve) });
      }
    }

    React.useEffect(function () {
      if (selected) frame(selected);
    }, [selected, side]);

    React.useEffect(function () {
      function fromHash() {
        var id = location.hash.slice(1);
        if (items.some(function (c) { return c.id === id; })) choose(id);
      }
      fromHash();
      window.addEventListener('hashchange', fromHash);
      if (!props.sceneUrl || !window.IntersectionObserver) return function () { window.removeEventListener('hashchange', fromHash); };
      var dead = false;
      var io = new IntersectionObserver(function (entries) {
        if (!entries[0].isIntersecting) return;
        io.disconnect();
        import(new URL(props.sceneUrl, document.baseURI).href).then(function (m) {
          return m.mount({
            host: host.current,
            ids: items.map(function (c) { return c.id; }),
            anchors: labels.current,
            onActive: setActive,
            onSelect: choose,
            onReady: function () { setReady(true); }
          });
        }).then(function (s) {
          if (dead) { s.destroy(); return; }
          scene.current = s;
          if (!picked.current) return;
          if (section.current.clientWidth > 1040) setSide(true);
          else frame(picked.current);
        }).catch(function (e) { console.warn('Escena 3D no disponible', e); });
      }, { rootMargin: '700px 0px' });
      io.observe(stage.current);
      return function () {
        dead = true;
        io.disconnect();
        window.removeEventListener('hashchange', fromHash);
        if (scene.current) scene.current.destroy();
      };
    }, []);

    function hover(id) {
      if (selected) return;
      setActive(id);
      if (scene.current) scene.current.setActive(id);
    }

    return h('section', { className: 'rn-countries', id: props.id, ref: section, 'data-tone': selected || active || null },
      h('div', { className: 'rn-countries-head' },
        h('div', null,
          props.eyebrow ? h('p', { className: 'rn-eyebrow' }, props.eyebrow) : null,
          h('h2', { className: 'rn-title' }, h(Lines, { lines: props.title }))),
        h('div', { className: 'rn-countries-intro' },
          props.text ? h('p', { className: 'rn-lead' }, rich(props.text)) : null,
          props.hint ? h('p', { className: 'rn-countries-hint' }, props.hint) : null)),
      h('div', { className: cx('rn-countries-body', side && 'is-side') },
        h('div', { className: cx('rn-countries-stage', ready && 'is-ready', selected && 'has-choice'), ref: stage },
          props.posterSrc ? h('picture', null,
            props.posterTallSrc ? h('source', { media: '(max-width: 760px)', srcSet: props.posterTallSrc }) : null,
            h('img', { className: 'rn-countries-poster', src: props.posterSrc, alt: '', loading: 'lazy' })) : null,
          h('div', { className: 'rn-countries-host', ref: host }),
          items.map(function (c) {
            return h('a', {
              key: c.id,
              href: '#' + c.id,
              className: cx('rn-place', active === c.id && 'is-on'),
              ref: function (el) { if (el) labels.current[c.id] = el; },
              style: spot(c),
              onMouseEnter: function () { hover(c.id); },
              onMouseLeave: function () { hover(null); },
              onFocus: function () { hover(c.id); },
              onBlur: function () { hover(null); },
              onClick: function (e) { e.preventDefault(); choose(c.id); }
            },
              h('span', { className: 'rn-place-name' }, c.name),
              h('span', { className: 'rn-place-mode' }, props.placeLabel || 'Ver su ficha'));
          })),
        h('div', { className: 'rn-countries-panel', ref: panel },
          items.map(function (c) {
            return h('article', { key: c.id, id: c.id, className: 'rn-country', hidden: selected !== c.id, tabIndex: -1 },
              h('h3', { className: 'rn-country-title' }, 'Trabajar en ' + c.name),
              h('p', { className: 'rn-country-text' }, rich(c.intro)),
              h('dl', { className: 'rn-country-facts' }, (c.facts || []).map(function (f) {
                return h('div', { key: f.label }, h('dt', null, f.label), h('dd', null, rich(f.value)));
              })),
              h('div', { className: 'rn-actions' },
                c.action ? h(Button, { href: c.action.href, variant: 'solid' }, c.action.label) : null,
                h(Button, { type: 'button', variant: 'line', onClick: back }, props.backLabel || 'Ver los tres países')));
          }))));
  }

  // ---- Contenido largo: párrafos, listas, tablas y avisos a partir de datos
  function Note(props) {
    var n = props.note;
    return h('aside', { className: cx('rn-note', 'rn-note-' + (n.tone || 'sand')) },
      n.title ? h('p', { className: 'rn-note-title' }, rich(n.title)) : null,
      h(Blocks, { blocks: n.blocks }));
  }

  function DataTable(props) {
    var t = props.table, head = t.head || [], num = t.numeric || [];
    var stack = head.length > 2 && !num.length;
    function kind(j) { return num.indexOf(j) > -1 ? 'is-num' : null; }
    return h('div', { className: 'rn-table-box' },
      h('table', { className: cx('rn-table', stack && 'rn-table-stack') },
        t.caption ? h('caption', null, rich(t.caption)) : null,
        h('thead', null, h('tr', null, head.map(function (c, j) {
          return h('th', { key: c, scope: 'col', className: kind(j) }, c);
        }))),
        h('tbody', null, t.rows.map(function (r, i) {
          return h('tr', { key: i, className: r.kind ? 'is-' + r.kind : null }, r.cells.map(function (c, j) {
            return h(j ? 'td' : 'th', { key: j, scope: j ? null : 'row', className: kind(j), 'data-label': j ? head[j] : null }, rich(c));
          }));
        }))));
  }

  // Nómina que se va restando: una barra con el bruto y cada descuento a su derecha, del último al primero.
  // Sin animación se ve el resultado final; js/nomina.js la recorre paso a paso con el scroll.
  function amount(text) {
    var m = /(−|-)?\s*([\d.]+,\d{2})/.exec(text);
    return m ? parseFloat(m[2].replace(/\./g, '').replace(',', '.')) * (m[1] ? -1 : 1) : 0;
  }

  function parts(text) {
    var m = /^(.*?)\s*~~(.*)~~$/.exec(text);
    return m ? [m[1], m[2]] : [text, ''];
  }

  function Payslip(props) {
    var rows = props.table.rows;
    var gross = amount(rows[0].cells[1]);
    var cuts = rows.filter(function (r) { return r.kind === 'minus'; });
    var value = gross, steps = rows.map(function (r, i) {
      if (i && r.kind === 'minus') value += amount(r.cells[1]);
      return value;
    });
    var last = rows.length - 1;
    var segs = [{ id: 'net', share: steps[last] / gross }].concat(cuts.slice().reverse().map(function (r) {
      return { id: rows.indexOf(r), share: -amount(r.cells[1]) / gross };
    }));
    return h('figure', { className: 'rn-payslip', 'data-steps': JSON.stringify(steps), 'data-step': last },
      h('figcaption', { className: 'rn-payslip-caption' }, rich(props.table.caption)),
      h('div', { className: 'rn-payslip-now', 'aria-hidden': 'true' },
        h('span', { className: 'rn-payslip-label' }, parts(rows[last].cells[0])[0]),
        h('span', { className: 'rn-payslip-figure' }, rows[last].cells[1])),
      h('div', { className: 'rn-payslip-bar', 'aria-hidden': 'true' }, segs.map(function (s) {
        return h('span', { key: s.id, className: 'rn-payslip-seg is-out', 'data-row': s.id, style: { flexGrow: s.share } });
      })),
      h('ol', { className: 'rn-payslip-rows' }, rows.map(function (r, i) {
        var p = parts(r.cells[0]);
        return h('li', { key: i, className: cx('rn-payslip-row', 'is-done', r.kind && 'is-' + r.kind) },
          h('span', null, h('strong', null, rich(p[0])), p[1] ? h('small', null, rich(p[1])) : null),
          h('span', { className: 'rn-payslip-amount' }, r.cells[1]));
      })));
  }

  function Stats(props) {
    return h('ul', { className: 'rn-stats' }, props.items.map(function (s) {
      return h('li', { key: s.value }, h('span', { className: 'rn-stats-value' }, rich(s.value)), h('span', { className: 'rn-stats-label' }, rich(s.label)));
    }));
  }

  function CardGrid(props) {
    return h('ul', { className: 'rn-cardgrid' }, props.items.map(function (c) {
      return h('li', { key: c.title, className: 'rn-minicard' },
        c.eyebrow ? h('p', { className: 'rn-minicard-eyebrow' }, rich(c.eyebrow)) : null,
        h('h3', { className: 'rn-minicard-title' }, rich(c.title)),
        (c.blocks || []).map(function (b) { return h('p', { key: b, className: 'rn-minicard-text' }, rich(b)); }));
    }));
  }

  function Pull(props) {
    return h('blockquote', { className: 'rn-pull' },
      h('p', null, rich(props.text)),
      props.by ? h('cite', null, props.by) : null);
  }

  function Actions(props) {
    return h('div', { className: 'rn-actions' }, props.items.map(function (a, i) {
      return h(Button, { key: a.href, href: a.href, variant: a.variant || (i ? 'line' : 'primary'), icon: /^wa:/.test(a.href) ? 'whatsapp' : null }, a.label);
    }));
  }

  function block(b, i) {
    if (typeof b === 'string') return h('p', { key: i }, rich(b));
    if (b.lede) return h('p', { key: i, className: 'rn-lede' }, rich(b.lede));
    if (b.deck) return h('p', { key: i, className: 'rn-lede' }, rich(b.deck));
    if (b.small) return h('p', { key: i, className: 'rn-fine' }, rich(b.small));
    if (b.h2) return h('h2', { key: i, id: b.id }, rich(b.h2));
    if (b.h3) return h('h3', { key: i, id: b.id }, rich(b.h3));
    if (b.h4) return h('h4', { key: i, id: b.id }, rich(b.h4));
    if (b.ul) return h('ul', { key: i }, b.ul.map(function (x) { return h('li', { key: x }, rich(x)); }));
    if (b.ol) return h('ol', { key: i }, b.ol.map(function (x) { return h('li', { key: x }, rich(x)); }));
    if (b.table) return h(DataTable, { key: i, table: b.table });
    if (b.payslip) return h(Payslip, { key: i, table: b.payslip });
    if (b.note) return h(Note, { key: i, note: b.note });
    if (b.pull) return h(Pull, Object.assign({ key: i }, b.pull));
    if (b.stats) return h(Stats, { key: i, items: b.stats });
    if (b.cards) return h(CardGrid, { key: i, items: b.cards });
    if (b.buttons) return h(Actions, { key: i, items: b.buttons });
    if (b.blocks) return h('div', { key: i, lang: b.lang }, h(Blocks, { blocks: b.blocks }));
    return null;
  }

  function Blocks(props) {
    return (props.blocks || []).map(block);
  }

  function Disclosure(props) {
    return h('details', { className: 'rn-disc', name: props.group },
      h('summary', null, h('span', null, rich(props.title))),
      h('div', { className: 'rn-disc-body rn-prose' }, h(Blocks, { blocks: props.blocks })));
  }

  // ---- Inicio
  function Services(props) {
    return h('section', { className: 'rn-section', id: props.id }, h('div', { className: 'rn-section-inner' },
      h(Head, props),
      h('div', { className: 'rn-services' }, (props.columns || []).map(function (c) {
        return h('div', { key: c.title },
          h('h3', { className: 'rn-subtitle' }, c.title),
          c.items.map(function (it) { return h(Disclosure, { key: it.title, title: it.title, blocks: it.blocks }); }));
      })),
      props.note ? h(Note, { note: props.note }) : null));
  }

  // Foto de cada perfil. En el acordeón, el panel cerrado enseña una franja de la foto centrada en el
  // trabajador (focus, en %) y al abrirse se ve entera. Son imágenes ilustrativas y lo dicen.
  function JobPhoto(props) {
    var f = props.focus || [50, 50];
    return h('div', { className: 'rn-job-plate', 'aria-hidden': 'true' },
      h('img', {
        src: props.photo + '.webp', srcSet: props.photo + '-800.webp 800w, ' + props.photo + '.webp 1536w',
        sizes: '(max-width: 1040px) min(84vw, 460px), 760px', alt: '', width: 1536, height: 1024,
        loading: 'lazy', decoding: 'async', style: { objectPosition: f[0] + '% ' + f[1] + '%' }
      }),
      h('span', { className: 'rn-job-note' }, 'Imagen ilustrativa'));
  }

  function Profiles(props) {
    var items = props.items || [];
    var aState = React.useState(0), active = aState[0], setActive = aState[1];
    var tState = React.useState(false), touched = tState[0], setTouched = tState[1];
    var rail = React.useRef(null), seen = React.useRef(false), stopped = React.useRef(false);

    React.useEffect(function () {
      var el = rail.current;
      if (!window.IntersectionObserver) return undefined;
      var calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      var view = new IntersectionObserver(function (e) { seen.current = e[0].isIntersecting; }, { threshold: .5 });
      // En móvil se desliza con el dedo: manda la tarjeta que queda centrada.
      var swipe = new IntersectionObserver(function (entries) {
        if (el.scrollWidth <= el.clientWidth + 1) return;
        entries.forEach(function (e) {
          if (e.isIntersecting) setActive(Array.prototype.indexOf.call(el.children, e.target));
        });
      }, { root: el, threshold: .7 });
      view.observe(el);
      Array.prototype.forEach.call(el.children, function (c) { swipe.observe(c); });
      var timer = calm ? 0 : setInterval(function () {
        if (seen.current && !stopped.current && el.scrollWidth <= el.clientWidth + 1) setActive(function (i) { return (i + 1) % items.length; });
      }, 5000);
      return function () { view.disconnect(); swipe.disconnect(); clearInterval(timer); };
    }, []);

    function pick(i) {
      stopped.current = true;
      setTouched(true);
      setActive(i);
    }

    return h('section', { className: 'rn-section rn-section-stone', id: props.id }, h('div', { className: 'rn-section-inner' },
      h(Head, props),
      h('ul', { className: cx('rn-jobs', !touched && 'is-auto'), ref: rail }, items.map(function (p, i) {
        var on = i === active;
        return h('li', { key: p.id, className: cx('rn-job', on && 'is-on'), onMouseEnter: function () { pick(i); } },
          h(JobPhoto, { photo: p.photo, focus: p.focus }),
          h('button', { type: 'button', className: 'rn-job-hit', 'aria-label': p.short + ': ' + p.title, 'aria-pressed': on, onFocus: function () { pick(i); }, onClick: function () { pick(i); } },
            h('span', { className: 'rn-job-label' }, p.short)),
          h('div', { className: 'rn-job-body' },
            h('p', { className: 'rn-minicard-eyebrow' }, p.eyebrow),
            h('h3', { className: 'rn-profile-title' }, p.title),
            h('p', { className: 'rn-profile-text' }, rich(p.text))),
          h('span', { className: 'rn-job-time', 'aria-hidden': 'true' }));
      })),
      h('ol', { className: 'rn-jobs-dots', 'aria-hidden': 'true' }, items.map(function (p, i) {
        return h('li', { key: p.id, className: i === active ? 'is-on' : null });
      })),
      props.note ? h('div', { className: 'rn-profiles-note' },
        h('h3', { className: 'rn-subtitle' }, props.note.title),
        h('div', { className: 'rn-prose' }, h(Blocks, { blocks: props.note.blocks }))) : null));
  }

  function Process(props) {
    return h('section', { className: 'rn-section', id: props.id }, h('div', { className: 'rn-section-inner rn-process' },
      h('div', { className: 'rn-process-head' },
        props.eyebrow ? h('p', { className: 'rn-eyebrow' }, props.eyebrow) : null,
        h('h2', { className: 'rn-title' }, h(Lines, { lines: props.title })),
        props.text ? h('p', { className: 'rn-lead' }, rich(props.text)) : null,
        props.actions ? h(Actions, { items: props.actions }) : null),
      h('ol', { className: 'rn-steps' }, (props.steps || []).map(function (s, i) {
        return h('li', { key: s.title, className: 'rn-step' },
          h('span', { className: 'rn-step-number', 'aria-hidden': 'true' }, i + 1),
          h('div', null,
            h('p', { className: 'rn-step-when' }, s.when),
            h('h3', { className: 'rn-step-title' }, s.title),
            h('p', { className: 'rn-step-text' }, rich(s.text))));
      }))));
  }

  function Faq(props) {
    return h('section', { className: 'rn-section rn-section-stone', id: props.id }, h('div', { className: 'rn-section-inner' },
      h(Head, props),
      (props.groups || []).map(function (g) {
        return h('div', { key: g.title, className: 'rn-faq-group' },
          h('h3', { className: 'rn-subtitle' }, g.title),
          h('div', null, g.items.map(function (it) {
            return h(Disclosure, { key: it.q, title: it.q, blocks: it.blocks, group: 'faq' });
          })));
      })));
  }

  function Flow(props) {
    return h('ol', { className: 'rn-flow' }, props.items.map(function (n) {
      if (n.arrow) {
        return h('li', { key: n.arrow, className: cx('rn-flow-arrow', n.back && 'is-back') },
          h('span', null, n.arrow),
          h('svg', { viewBox: '0 0 48 12', 'aria-hidden': 'true' }, h('path', { d: 'M0 6h46M41 1l5 5-5 5' })));
      }
      return h('li', { key: n.who, className: 'rn-flow-node' },
        h('p', { className: 'rn-flow-who' }, n.who),
        n.figure ? h('p', { className: 'rn-flow-figure' }, n.figure) : null,
        h('p', { className: 'rn-flow-title' }, n.title),
        h('p', { className: 'rn-flow-text' }, rich(n.text)));
    }));
  }

  function MoneyFlow(props) {
    return h('section', { className: 'rn-section rn-money rn-on-navy', id: props.id }, h('div', { className: 'rn-section-inner' },
      h(Head, props),
      h('div', { className: 'rn-money-text rn-prose' }, (props.paragraphs || []).map(function (p, i) {
        return h('p', { key: p, className: i ? null : 'rn-lede' }, rich(p));
      })),
      h(Flow, { items: props.flow || [] }),
      props.note || props.quote ? h('div', { className: 'rn-money-foot' },
        props.note ? h('div', { className: 'rn-prose' },
          h('h3', { className: 'rn-subtitle' }, props.note.title),
          h(Blocks, { blocks: props.note.blocks })) : null,
        h('div', null,
          props.quote ? h(Pull, props.quote) : null,
          props.link ? h('p', { className: 'rn-money-link' }, h('a', { href: props.link.href }, props.link.label)) : null)) : null,
      props.after ? h('div', { className: 'rn-money-after rn-prose' }, h(Blocks, { blocks: props.after })) : null));
  }

  function GuideCallout(props) {
    return h('section', { className: 'rn-section' }, h('div', { className: 'rn-section-inner rn-callout-box' },
      h('div', { className: 'rn-callout' },
        h('div', null,
          props.eyebrow ? h('p', { className: 'rn-eyebrow' }, props.eyebrow) : null,
          h('h2', { className: 'rn-title' }, h(Lines, { lines: props.title }))),
        h('div', null,
          props.text ? h('p', { className: 'rn-lead' }, rich(props.text)) : null,
          props.cta ? h(Button, { href: props.cta.href, variant: 'solid' }, props.cta.label) : null))));
  }

  function Field(props) {
    return h('div', { className: cx('rn-field', props.wide && 'rn-field-wide') },
      h('label', { htmlFor: props.id }, props.label,
        props.required ? h('span', { className: 'rn-req', 'aria-hidden': 'true' }, ' *') : null,
        props.hint ? h('span', { className: 'rn-field-hint' }, ' (' + props.hint + ')') : null),
      props.children,
      props.error ? h('p', { className: 'rn-field-error', id: props.id + '-error' }, props.error) : null);
  }

  function Checks(props) {
    return h('fieldset', { className: 'rn-checks rn-field-wide' },
      h('legend', null, props.label, h('span', { className: 'rn-field-hint' }, ' (' + props.hint + ')')),
      h('div', null, props.options.map(function (o) {
        return h('label', { key: o, className: 'rn-check' },
          h('input', { type: 'checkbox', name: props.name, value: o }),
          h('span', null, o));
      })));
  }

  function Part(props) {
    return h('fieldset', { className: 'rn-form-part' },
      h('legend', null, h('span', { className: 'rn-form-step' }, props.step), props.title),
      h('div', { className: 'rn-form-grid' }, props.children));
  }

  function Application(props) {
    var form = props.form || {};
    var nState = React.useState(false), live = nState[0], setLive = nState[1];
    var eState = React.useState({}), errors = eState[0], setErrors = eState[1];
    var sState = React.useState(false), sending = sState[0], setSending = sState[1];
    var fState = React.useState(''), failure = fState[0], setFailure = fState[1];
    var ref = React.useRef(null);

    React.useEffect(function () { setLive(true); }, []);

    function check(fd) {
      var e = {};
      if (!String(fd.get('nombre')).trim()) e.nombre = 'Escribe tu nombre y apellidos.';
      if (!/^[\d\s()+-]{6,}$/.test(String(fd.get('telefono')).trim())) e.telefono = 'Escribe un número de WhatsApp válido.';
      if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(String(fd.get('email')).trim())) e.email = 'Escribe un correo válido, como tucorreo@ejemplo.com.';
      if (!fd.get('carnet')) e.carnet = 'Elige una opción.';
      if (!fd.get('sector')) e.sector = 'Elige una opción.';
      if (!fd.get('consentimiento_rgpd')) e.consentimiento_rgpd = 'Sin esta casilla no puedo valorar tu candidatura.';
      return e;
    }

    function submit(ev) {
      ev.preventDefault();
      var fd = new FormData(ref.current);
      if (fd.get('bot-field')) return;
      var e = check(fd);
      setErrors(e);
      setFailure('');
      var first = Object.keys(e)[0];
      if (first) { ref.current.elements[first].focus(); return; }
      // Netlify guarda un valor por campo: lo marcado va junto, separado por comas.
      ['destino', 'idiomas'].forEach(function (name) {
        var all = fd.getAll(name);
        fd.delete(name);
        fd.append(name, all.length ? all.join(', ') : '(ninguno marcado)');
      });
      setSending(true);
      fetch('./', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(fd).toString()
      }).then(function (r) {
        if (!r.ok) throw new Error(r.status);
        window.location.href = form.action;
      }).catch(function () {
        setSending(false);
        setFailure(form.failure);
      });
    }

    // Tras un intento de envío, cada aviso desaparece en cuanto su campo queda bien.
    function recheck() {
      var names = Object.keys(errors);
      if (!names.length) return;
      var e = check(new FormData(ref.current)), next = {};
      names.forEach(function (k) { if (e[k]) next[k] = e[k]; });
      if (Object.keys(next).length !== names.length) setErrors(next);
    }

    function input(name, extra) {
      var error = errors[name];
      return Object.assign({
        id: 'f-' + name,
        name: name,
        className: 'rn-input',
        'aria-invalid': error ? 'true' : null,
        'aria-describedby': error ? 'f-' + name + '-error' : null
      }, extra);
    }

    function select(name, options) {
      return h('select', input(name, { defaultValue: '', required: true }), options.map(function (o, i) {
        return h('option', { key: o, value: i ? o : '' }, o);
      }));
    }

    return h('section', { className: 'rn-section rn-section-stone', id: props.id }, h('div', { className: 'rn-section-inner rn-apply' },
      h('div', { className: 'rn-apply-side' },
        props.eyebrow ? h('p', { className: 'rn-eyebrow' }, props.eyebrow) : null,
        h('h2', { className: 'rn-title' }, h(Lines, { lines: props.title })),
        (props.paragraphs || []).map(function (p) { return h('p', { key: p, className: 'rn-lead' }, rich(p)); }),
        props.whatsapp ? h('div', { className: 'rn-apply-wa' },
          h(Button, { href: 'wa:', variant: 'solid', icon: 'whatsapp' }, props.whatsapp.label),
          h('p', { className: 'rn-fine' }, props.whatsapp.note)) : null),
      h('form', { ref: ref, className: 'rn-form', name: form.name, method: 'POST', action: form.action, noValidate: live, onSubmit: live ? submit : null, onChange: live ? recheck : null },
        h('input', { type: 'hidden', name: 'form-name', value: form.name }),
        h('input', { type: 'hidden', name: 'subject', value: form.subject }),
        h('p', { className: 'rn-form-trap', 'aria-hidden': 'true' },
          h('label', null, form.trap, h('input', { type: 'text', name: 'bot-field', tabIndex: -1, autoComplete: 'off' }))),
        h('div', { className: 'rn-form-head' },
          h('p', { className: 'rn-form-title' }, form.heading),
          h('p', { className: 'rn-fine' }, form.required)),
        h(Part, { step: '01', title: 'Datos de contacto' },
          h(Field, { id: 'f-nombre', label: 'Nombre y apellidos', required: true, wide: true, error: errors.nombre },
            h('input', input('nombre', { type: 'text', required: true, autoComplete: 'name', placeholder: 'Como aparece en tu DNI' }))),
          h(Field, { id: 'f-telefono', label: 'WhatsApp', required: true, error: errors.telefono },
            h('div', { className: 'rn-phone' },
              h('select', { name: 'prefijo', className: 'rn-input', 'aria-label': 'Prefijo', defaultValue: form.prefijos[0], required: true },
                form.prefijos.map(function (o) { return h('option', { key: o, value: o }, o); })),
              h('input', input('telefono', { type: 'tel', required: true, autoComplete: 'tel-national', inputMode: 'tel', placeholder: '600 000 000' })))),
          h(Field, { id: 'f-email', label: 'Correo electrónico', required: true, error: errors.email },
            h('input', input('email', { type: 'email', required: true, autoComplete: 'email', inputMode: 'email', placeholder: 'tucorreo@ejemplo.com' })))),
        h(Part, { step: '02', title: 'Destino e idiomas' },
          h(Checks, { name: 'destino', label: '¿A qué país te gustaría ir?', hint: 'puedes marcar varios', options: form.destinos }),
          h(Checks, { name: 'idiomas', label: 'Idiomas que hablas', hint: 'los que puedas usar en el trabajo', options: form.idiomas })),
        h(Part, { step: '03', title: 'Tu perfil' },
          h(Field, { id: 'f-carnet', label: 'Carnet de conducir', required: true, error: errors.carnet }, select('carnet', form.carnet)),
          h(Field, { id: 'f-sector', label: 'Sector que te interesa', required: true, error: errors.sector }, select('sector', form.sector)),
          h(Field, { id: 'f-disponibilidad', label: '¿Desde cuándo podrías viajar?' }, h('input', input('disponibilidad', { type: 'date' }))),
          h(Field, { id: 'f-edad', label: 'Edad' }, h('input', input('edad', { type: 'text', inputMode: 'numeric', placeholder: 'Ej. 27' }))),
          h(Field, { id: 'f-mensaje', label: 'Tu experiencia, en dos líneas', hint: 'opcional', wide: true },
            h('textarea', input('mensaje', { rows: 3, placeholder: 'Dónde has trabajado y en qué, si vas con alguien o lo que más te preocupa.' })))),
        h(Part, { step: '04', title: 'Consentimiento' },
          h('div', { className: 'rn-consent rn-field-wide' },
            h('label', null,
              h('input', input('consentimiento_rgpd', { type: 'checkbox', required: true, value: form.consentValue, className: null })),
              h('span', null, rich(form.consent), h('span', { className: 'rn-req', 'aria-hidden': 'true' }, ' *'))),
            errors.consentimiento_rgpd ? h('p', { className: 'rn-field-error', id: 'f-consentimiento_rgpd-error' }, errors.consentimiento_rgpd) : null)),
        h('div', { className: 'rn-form-end rn-field-wide' },
          h(Button, { type: 'submit', disabled: sending }, sending ? 'Enviando…' : form.submit),
          h('p', { className: 'rn-fine' }, form.foot),
          failure ? h('p', { className: 'rn-field-error', role: 'alert' }, rich(failure)) : null))));
  }

  function Footer(props) {
    return h('footer', { className: 'rn-footer rn-on-navy' }, h('div', { className: 'rn-footer-inner' },
      h('div', { className: 'rn-footer-brand' },
        h('a', { className: 'rn-footer-logo', href: './', 'aria-label': 'Rumbo Norte, inicio' }, h('img', { src: props.logoSrc, alt: '', width: 216, height: 27, loading: 'lazy' })),
        props.tagline ? h('p', { className: 'rn-footer-tagline' }, props.tagline) : null,
        h('p', { className: 'rn-footer-text' }, props.text, props.extra ? ' ' + props.extra : null)),
      (props.columns || []).map(function (c) {
        return h('div', { key: c.title },
          h('h2', { className: 'rn-footer-title' }, c.title),
          h('ul', { className: 'rn-footer-list' }, c.links.map(function (l) {
            return h('li', { key: l.label }, h('a', linkProps(l.href), l.label));
          })));
      }),
      h('div', { className: 'rn-footer-end' },
        h('p', null, props.copy),
        h('ul', { className: 'rn-footer-legal' }, (props.legal || []).map(function (l) {
          return h('li', { key: l.label }, h('a', { href: l.href }, l.label));
        })))));
  }

  // ---- Páginas interiores
  function PageHero(props) {
    return h('section', { className: 'rn-pagehero' },
      h('div', { className: 'rn-hero-field rn-on-navy' },
        props.header || null,
        h('div', { className: 'rn-pagehero-body' },
          h('div', null,
            props.eyebrow ? h('p', { className: 'rn-eyebrow' }, props.eyebrow) : null,
            h('h1', { className: 'rn-pagehero-title' }, h(Lines, { lines: props.title, accent: props.accent }))),
          h('div', { className: 'rn-pagehero-side' },
            (props.text || []).map(function (p) { return h('p', { key: p }, rich(p)); }),
            props.updated ? h('p', { className: 'rn-pagehero-date' }, props.updated) : null,
            props.actions ? h(Actions, { items: props.actions }) : null)),
        h(Curve)));
  }

  function Toc(props) {
    var state = React.useState(null), now = state[0], setNow = state[1];
    var title = props.title || 'Índice';

    React.useEffect(function () {
      if (!window.IntersectionObserver) return undefined;
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) { if (e.isIntersecting) setNow('#' + e.target.id); });
      }, { rootMargin: '-15% 0px -75% 0px' });
      props.items.forEach(function (it) {
        var el = document.querySelector(it.href);
        if (el) io.observe(el);
      });
      return function () { io.disconnect(); };
    }, []);

    function list() {
      return h('ol', null, props.items.map(function (it) {
        return h('li', { key: it.href }, h('a', { href: it.href, 'aria-current': now === it.href ? 'true' : null }, it.label));
      }));
    }

    return h('nav', { className: 'rn-toc', 'aria-label': title },
      h('div', { className: 'rn-toc-wide' }, h('p', { className: 'rn-eyebrow' }, title), list()),
      h('details', { className: 'rn-toc-narrow' }, h('summary', null, title), list()));
  }

  function Chapter(props) {
    return h('section', { className: 'rn-chapter', id: props.id },
      props.title ? h('div', { className: 'rn-chapter-head' },
        props.eyebrow ? h('p', { className: 'rn-eyebrow' }, props.eyebrow) : null,
        h('h2', { className: 'rn-title' }, h(Lines, { lines: props.title })),
        props.deck ? h('p', { className: 'rn-lead' }, rich(props.deck)) : null) : null,
      h('div', { className: 'rn-prose' }, h(Blocks, { blocks: props.blocks })));
  }

  function Article(props) {
    return h('section', { className: 'rn-section' }, h('div', { className: 'rn-section-inner rn-article' },
      props.toc ? h(Toc, { items: props.toc }) : null,
      h('div', { className: 'rn-article-body' }, (props.sections || []).map(function (s, i) {
        return h(Chapter, Object.assign({ key: s.id || i }, s));
      }))));
  }

  function Reading(props) {
    return h('section', { className: cx('rn-section', props.tone === 'stone' && 'rn-section-stone') },
      h('div', { className: 'rn-section-inner rn-reading' }, h(Chapter, props)));
  }

  function Goals(props) {
    return h('section', { className: 'rn-section', id: props.id }, h('div', { className: 'rn-section-inner' },
      h(Head, { eyebrow: props.eyebrow, title: props.title, text: props.deck }),
      h('ol', { className: 'rn-goals' }, (props.goals || []).map(function (g, i) {
        return h('li', { key: g.title, className: 'rn-goal' },
          h('div', { className: 'rn-goal-side' },
            h('span', { className: 'rn-goal-number', 'aria-hidden': 'true' }, i + 1),
            h('p', { className: 'rn-goal-when' }, g.when)),
          h('div', null,
            h('h3', { className: 'rn-goal-title' }, g.title),
            h('div', { className: 'rn-prose' }, h(Blocks, { blocks: g.blocks }))));
      }))));
  }

  function Story(props) {
    return h('section', { className: 'rn-section' }, h('div', { className: 'rn-section-inner rn-story' },
      h('figure', { className: 'rn-story-card' },
        h('img', { src: props.photoSrc, alt: 'Iván Guerra Arroyo, reclutador de Rumbo Norte', width: 640, height: 640 }),
        h('figcaption', null,
          h('p', { className: 'rn-minicard-eyebrow' }, props.tag),
          h('p', { className: 'rn-story-name' }, props.name),
          h('p', { className: 'rn-story-tagline' }, rich(props.tagline)))),
      h('div', { className: 'rn-prose' },
        h('h2', { className: 'rn-title' }, props.title),
        h(Blocks, { blocks: props.blocks }))));
  }

  function Limits(props) {
    return h('section', { className: 'rn-section rn-section-stone', id: props.id }, h('div', { className: 'rn-section-inner' },
      h(Head, props),
      h(CardGrid, { items: props.items || [] }),
      props.note ? h(Note, { note: props.note }) : null));
  }

  function Cta(props) {
    return h('section', { className: 'rn-section' }, h('div', { className: 'rn-section-inner rn-callout-box' },
      h('div', { className: 'rn-callout' },
        h('div', null,
          props.eyebrow ? h('p', { className: 'rn-eyebrow' }, props.eyebrow) : null,
          h('h2', { className: 'rn-title' }, h(Lines, { lines: props.title }))),
        h('div', null,
          (props.text || []).map(function (p) { return h('p', { key: p, className: 'rn-lead' }, rich(p)); }),
          props.actions ? h(Actions, { items: props.actions }) : null,
          props.foot ? h('p', { className: 'rn-fine' }, rich(props.foot)) : null))));
  }

  function LegalPage(props) {
    return h('section', { className: 'rn-section' }, h('div', { className: 'rn-section-inner rn-reading' },
      h('div', { className: 'rn-prose' }, h(Blocks, { blocks: props.blocks }))));
  }

  window.RumboNorte = Object.assign(window.RumboNorte || {}, { Button: Button, Sticker: Sticker, Header: Header, LogoStrip: LogoStrip, Hero: Hero, TopicCards: TopicCards, KeyFacts: KeyFacts, Countries: Countries, Services: Services, Profiles: Profiles, Process: Process, Faq: Faq, MoneyFlow: MoneyFlow, GuideCallout: GuideCallout, Application: Application, Footer: Footer, PageHero: PageHero, Article: Article, Reading: Reading, Goals: Goals, Story: Story, Limits: Limits, Cta: Cta, LegalPage: LegalPage, Note: Note, Blocks: Blocks });
})();
