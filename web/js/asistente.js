// La brújula: el asistente de Rumbo Norte. Un orbe naranja con una aguja que busca el norte,
// encima del botón de WhatsApp. Al pulsarlo se abre una tarjeta con la conversación: cada
// respuesta sale de las fichas de asistente-datos.js (lo que ya cuenta la web), con un enlace
// a donde se lee entera y dos preguntas que suelen venir después. Mientras busca, la aguja da
// vueltas; cuando encuentra la respuesta, se para apuntando al norte. «¿Cumplo los requisitos?»
// hace las tres preguntas obligatorias y deja escrito el mensaje para Iván.
// Sin servidor: todo se resuelve en el navegador. La conversación se guarda mientras dura la
// visita, así que sigue ahí al cambiar de página. Esc cierra y el foco vuelve al orbe.
// Los dos orbes se apartan cuando asoma el final del pie, para no tapar los enlaces legales.

const MIN_THINK = 650;
const STORE = 'rn-brujula-' + ((window.RumboNorteIdioma || {}).code || 'es');
const calm = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ── Buscar la ficha
   Cada palabra de la pregunta puntúa según dónde aparece en la ficha (palabras clave, la
   pregunta del botón o el texto) y lo rara que es. Se responde si la mejor ficha cubre al
   menos la mitad de la pregunta; si no, se dice que no está en la web. ─────────────────────────────────────────────────────── */

// Sin tildes ni signos; la «ł» polaca no se descompone con NFD y se pasa a mano.
const norm = (s) => s.toLowerCase().replace(/ł/g, 'l').normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9€\s]/g, ' ');
// Palabras vacías en español; cada traducción de asistente-datos.js puede traer las suyas (STOP).
let STOP = new Set('a al algo como con cual de del el en es esta este esto hay la las le lo los me mi mis muy no o os para pero por que se si sin su sus te tu un una uno y ya yo tengo tiene tienen hace hacer puedo puede pueden quiero saber cuanto cuanta cuantos cuantas cual eso alli alla poco mucho bien mal cosa cosas ahi pasa vez estoy soy son ser estar voy ir eres sois cuales necesito necesita quisiera llevar llevo donde'.split(' '));
// Raíz corta, sin la «r» del infinitivo ni la última vocal: «cobrar», «cobro» y «cobras» cuentan igual.
const stem = (w) => w.slice(0, 5).replace(/(.{3})r$/, '$1').replace(/(.{3,})[aeiou]$/, '$1');
const words = (s) => norm(s).split(/\s+/).filter((w) => w && !STOP.has(w)).map(stem);

export function index(fichas) {
  const df = {};
  const rows = fichas.map((f) => {
    const keys = new Set(words(f.keys));
    const label = new Set(words(f.label || ''));
    const text = new Set(words(f.text));
    new Set([...keys, ...label, ...text]).forEach((w) => { df[w] = (df[w] || 0) + 1; });
    return { keys, label, text };
  });
  const n = fichas.length;
  return (q) => {
    const qs = [...new Set(words(q))];
    if (!qs.length) return [];
    return rows.map((r, i) => {
      let score = 0, hits = 0;
      for (const w of qs) {
        const weight = r.keys.has(w) ? 3 : r.label.has(w) ? 2 : r.text.has(w) ? 0.8 : 0;
        if (weight) score += weight * (1 + Math.log(n / (df[w] || 1)));
        if (weight >= 2) hits++;
      }
      return { i, score, cover: hits / qs.length };
    }).filter((s) => s.score > 0).sort((a, b) => b.score - a.score);
  };
}

/* ── Texto con **negrita** y [enlaces](url) ─────────────────────────────── */

function waHref(msg) {
  const cfg = window.RumboNorteConfig || {};
  const text = msg || (window.RumboNorteTextos || {}).whatsappMensaje || cfg.mensaje || '';
  return 'https://wa.me/' + (cfg.whatsapp || '') + (text ? '?text=' + encodeURIComponent(text) : '');
}

function el(tag, props, ...kids) {
  const n = document.createElement(tag);
  for (const [k, v] of Object.entries(props || {})) {
    if (v == null || v === false) continue;
    if (k === 'class') n.className = v;
    else if (k.startsWith('on')) n.addEventListener(k.slice(2), v);
    else n.setAttribute(k, v === true ? '' : v);
  }
  for (const k of kids.flat()) if (k != null && k !== false) n.append(k);
  return n;
}

function linkFor(href, label, cls) {
  const ext = /^https?:|^wa:/.test(href);
  return el('a', { href: href.startsWith('wa:') ? waHref(href.slice(3)) : href, class: cls, target: ext ? '_blank' : null, rel: ext ? 'noopener' : null }, label);
}

function rich(text) {
  const out = [];
  const re = /\[([^\]]+)\]\(([^)\s]+)\)|\*\*(.+?)\*\*|\*(.+?)\*/g;
  let last = 0, m;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index));
    if (m[1]) out.push(linkFor(m[2], m[1]));
    else if (m[3]) out.push(el('strong', null, m[3]));
    else out.push(el('em', null, m[4]));
    last = re.lastIndex;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

/* ── Dibujos ─────────────────────────────────────────────────────────────── */

const SVG = 'http://www.w3.org/2000/svg';
function svg(markup, cls) {
  const s = document.createElementNS(SVG, 'svg');
  s.setAttribute('viewBox', '0 0 48 48');
  s.setAttribute('aria-hidden', 'true');
  if (cls) s.setAttribute('class', cls);
  s.innerHTML = markup;
  return s;
}
// Aguja de dos puntas: la del norte, maciza; la del sur, hueca.
const NEEDLE = '<g class="rn-bru-needle"><path d="M24 7 L29 24 L19 24 Z" class="rn-bru-n"/><path d="M24 41 L29 24 L19 24 Z" class="rn-bru-s"/><circle cx="24" cy="24" r="2.6" class="rn-bru-pin"/></g>';
const DIAL = '<circle cx="24" cy="24" r="21" class="rn-bru-dial"/>' +
  [0, 90, 180, 270].map((a) => `<path d="M24 2.5v4" transform="rotate(${a} 24 24)" class="rn-bru-tick"/>`).join('') +
  [45, 135, 225, 315].map((a) => `<path d="M24 3.5v2" transform="rotate(${a} 24 24)" class="rn-bru-tick is-minor"/>`).join('');
const ARROW_UP = '<path d="M24 36V13M14 22l10-10 10 10" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>';
const CLOSE = '<path d="M15 15l18 18M33 15L15 33" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round"/>';
const RESTART = '<path d="M12 24a12 12 0 1 0 3.6-8.5M12 11v7h7" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/>';

/* ── Montaje ─────────────────────────────────────────────────────────────── */

export async function mount() {
  // Las fichas del idioma de la página: js/asistente-datos.js en español, js/<idioma>/asistente-datos.js en el resto.
  const lang = (window.RumboNorteIdioma || {}).code || 'es';
  const X = (window.RumboNorteTextos || {}).asistente || {};
  const D = await import(new URL((lang === 'es' ? '' : lang + '/') + 'asistente-datos.js', import.meta.url).href);
  if (D.STOP) STOP = new Set(D.STOP.split(' '));
  const { FICHAS, REQUISITOS: R } = D;
  const rank = index(FICHAS);
  const byId = Object.fromEntries(FICHAS.map((f, i) => [f.id, i]));

  // Lo que se ha hablado: [{from:'user', text} | {from:'bot', ficha} | {from:'nose', q} | {from:'step', n} | {from:'pick', n, si} | {from:'veredicto'}]
  let log = [];
  try { log = JSON.parse(sessionStorage.getItem(STORE) || '[]'); } catch (e) { log = []; }
  const save = () => { try { sessionStorage.setItem(STORE, JSON.stringify(log.slice(-40))); } catch (e) { /* sin almacenamiento */ } };

  let open = false, thinking = false, timer = 0, labelTimer = 0;

  /* Orbe */
  const orb = el('button', { type: 'button', class: 'rn-bru-orb', 'aria-expanded': 'false', 'aria-controls': 'rn-bru-panel', 'aria-label': X.abrir },
    svg(DIAL + NEEDLE, 'rn-bru-face'),
    svg(CLOSE, 'rn-bru-x'));
  const tip = el('span', { class: 'rn-bru-tip', 'aria-hidden': 'true' }, X.burbuja);

  /* Tarjeta */
  const headNeedle = svg(DIAL + NEEDLE, 'rn-bru-headface');
  const status = el('span', { class: 'rn-bru-status' }, X.titulo);
  const restartBtn = el('button', { type: 'button', class: 'rn-bru-icon', 'aria-label': X.reiniciar, title: X.reiniciar, onclick: restart }, svg(RESTART));
  const closeBtn = el('button', { type: 'button', class: 'rn-bru-icon', 'aria-label': X.cerrar, onclick: () => close(true) }, svg(CLOSE));
  const body = el('div', { class: 'rn-bru-body', tabindex: '-1' });
  const input = el('input', { class: 'rn-bru-field', type: 'text', maxlength: '200', placeholder: X.placeholder, 'aria-label': X.etiqueta, autocomplete: 'off', enterkeyhint: 'send' });
  const send = el('button', { type: 'submit', class: 'rn-bru-send', 'aria-label': X.enviar }, svg(ARROW_UP));
  const form = el('form', { class: 'rn-bru-form', onsubmit: (e) => { e.preventDefault(); ask(input.value); } }, input, send);
  const live = el('div', { class: 'rn-bru-sr', role: 'status', 'aria-live': 'polite' });
  const panel = el('div', { id: 'rn-bru-panel', class: 'rn-bru-panel', role: 'dialog', 'aria-label': X.titulo, hidden: true },
    el('header', { class: 'rn-bru-head' },
      headNeedle,
      el('div', { class: 'rn-bru-titles' }, el('p', { class: 'rn-bru-title' }, X.tituloCorto), status),
      restartBtn, closeBtn),
    el('div', { class: 'rn-bru-route', 'aria-hidden': 'true' }),
    body,
    form,
    el('p', { class: 'rn-bru-note' }, X.nota),
    live);

  const root = el('aside', { class: 'rn-bru', 'aria-label': X.region }, panel, tip, orb);
  document.body.append(root);
  const wa = document.querySelector('.rn-wa-orb');
  requestAnimationFrame(() => root.classList.add('is-ready'));

  // El aviso «¿Dudas? Pregúntame» sale una vez por visita, al poco de llegar.
  let tipShown = false;
  try { tipShown = !!sessionStorage.getItem(STORE + '-tip'); } catch (e) { /* nada */ }
  if (!tipShown && !log.length) {
    setTimeout(() => { if (!open) root.classList.add('show-tip'); }, 2500);
    setTimeout(() => root.classList.remove('show-tip'), 9000);
    try { sessionStorage.setItem(STORE + '-tip', '1'); } catch (e) { /* nada */ }
  }

  // Se apartan cuando asoma la última franja del pie (copyright y enlaces legales).
  const end = document.querySelector('.rn-footer-end');
  if (end && 'IntersectionObserver' in window) {
    new IntersectionObserver(([e]) => {
      root.classList.toggle('is-away', e.isIntersecting);
      if (wa) wa.classList.toggle('is-away', e.isIntersecting);
      orb.tabIndex = e.isIntersecting && !open ? -1 : 0;
      if (wa) wa.tabIndex = e.isIntersecting ? -1 : 0;
    }, { rootMargin: '0px 0px -24px 0px' }).observe(end);
  }

  /* Abrir y cerrar */
  function setOpen(v) {
    open = v;
    root.classList.toggle('is-open', v);
    root.classList.remove('show-tip');
    document.body.classList.toggle('rn-bru-open', v);
    panel.hidden = !v;
    orb.setAttribute('aria-expanded', String(v));
    orb.setAttribute('aria-label', v ? X.cerrar : X.abrir);
    if (v) {
      render();
      input.focus({ preventScroll: true });
    }
  }
  function close(focusOrb) {
    setOpen(false);
    if (focusOrb) orb.focus({ preventScroll: true });
  }
  orb.addEventListener('click', () => (open ? close(true) : setOpen(true)));
  window.addEventListener('keydown', (e) => { if (e.key === 'Escape' && open) close(true); });

  /* Preguntar */
  function think(then) {
    thinking = true;
    root.classList.add('is-thinking');
    let k = 0;
    status.textContent = D.PENSANDO[0] + '…';
    labelTimer = setInterval(() => { k = (k + 1) % D.PENSANDO.length; status.textContent = D.PENSANDO[k] + '…'; }, 900);
    render();
    timer = setTimeout(() => {
      thinking = false;
      clearInterval(labelTimer);
      root.classList.remove('is-thinking');
      status.textContent = X.titulo;
      then();
      save();
      render(true);
    }, calm() ? 0 : MIN_THINK);
  }

  function ask(text) {
    const q = text.trim();
    if (thinking) return;
    if (!q) { input.focus(); return; }
    input.value = '';
    log.push({ from: 'user', text: q });
    const top = rank(q)[0];
    think(() => log.push(top && top.score >= 4 && top.cover >= 0.5 ? { from: 'bot', ficha: top.i } : { from: 'nose', q }));
  }

  function show(i) {
    if (thinking) return;
    log.push({ from: 'user', text: FICHAS[i].label });
    think(() => log.push({ from: 'bot', ficha: i }));
  }

  function startFlow() {
    if (thinking) return;
    log.push({ from: 'user', text: R.start }, { from: 'step', n: 0 });
    save();
    render(true);
  }

  function pick(n, si) {
    log.push({ from: 'pick', n, si });
    if (!si || n === R.steps.length - 1) {
      think(() => log.push({ from: 'veredicto', fallo: si ? -1 : n }));
    } else {
      log.push({ from: 'step', n: n + 1 });
      save();
      render(true);
    }
  }

  function restart() {
    clearTimeout(timer);
    clearInterval(labelTimer);
    thinking = false;
    root.classList.remove('is-thinking');
    log = [];
    save();
    render();
    input.focus({ preventScroll: true });
  }

  /* Pintar la conversación */
  const chip = (label, onclick, extra) => el('li', null, el('button', { type: 'button', class: 'rn-bru-chip' + (extra ? ' ' + extra : ''), onclick }, label));
  const go = (href, label) => el('div', { class: 'rn-bru-go' }, linkFor(href, label, 'rn-bru-link'));

  const answer = (kids, animate, isLast) => el('div', { class: 'rn-bru-answer' + (animate ? ' is-new' : ''), tabindex: isLast ? '-1' : null }, kids);

  function seenFichas() {
    return new Set(log.filter((m) => m.from === 'bot').map((m) => m.ficha));
  }

  // Lo que suele venir después de una ficha: dos que aún no se hayan visto, en el orden de la lista.
  const NEXT = {
    gratis: ['requisitos', 'ivan'], requisitos: ['idiomas', 'entrevista'], neto: ['alojamiento', 'vakantiegeld'],
    vakantiegeld: ['neto', 'colchon'], alojamiento: ['sin-casa', 'agencia'], 'sin-casa': ['contrato', 'colchon'],
    contrato: ['sin-casa', 'agencia'], colchon: ['viaje', 'neto'], viaje: ['colchon', 'bsn'], idiomas: ['requisitos', 'entrevista'],
    carnet: ['puestos', 'alojamiento'], bsn: ['viaje', 'agencia'], agencia: ['alojamiento', 'contrato'], puestos: ['requisitos', 'pais'],
    pais: ['puestos', 'idiomas'], pareja: ['alojamiento', 'contacto'], entrevista: ['plazos', 'contacto'], plazos: ['entrevista', 'contacto'],
    ivan: ['gratis', 'contacto'], metas: ['neto', 'contrato'], contacto: ['entrevista', 'plazos'], hola: ['gratis', 'neto']
  };

  function render(animateLast) {
    body.replaceChildren();
    body.append(el('p', { class: 'rn-bru-hello' }, D.SALUDO));
    const flowUsed = log.some((m) => m.from === 'step');
    if (!log.length) {
      body.append(el('ul', { class: 'rn-bru-chips' },
        chip(R.start, startFlow, 'is-flow'),
        D.SUGERENCIAS.map((id) => byId[id]).filter((i) => i != null).map((i) => chip(FICHAS[i].label, () => show(i)))));
    }

    const last = log.length - 1;
    log.forEach((m, i) => {
      const isLast = i === last && !thinking;
      const anim = isLast && animateLast && !calm();
      if (m.from === 'user') {
        body.append(el('p', { class: 'rn-bru-asked' }, m.text));
      } else if (m.from === 'pick') {
        const s = R.steps[m.n];
        body.append(el('p', { class: 'rn-bru-asked' }, m.si ? s.si : s.no));
      } else if (m.from === 'step') {
        const s = R.steps[m.n];
        body.append(answer([
          el('p', { class: 'rn-bru-meta' }, `Requisito ${m.n + 1} de ${R.steps.length}`),
          el('p', { class: 'rn-bru-text' }, s.q),
          isLast ? el('ul', { class: 'rn-bru-chips' }, chip(s.si, () => pick(m.n, true), 'is-yes'), chip(s.no, () => pick(m.n, false))) : null
        ], anim, isLast));
      } else if (m.from === 'veredicto') {
        const ok = m.fallo < 0;
        body.append(answer(ok ? [
          el('p', { class: 'rn-bru-text' }, rich(R.ok)),
          el('div', { class: 'rn-bru-cta' },
            el('a', { class: 'rn-bru-btn is-wa', href: waHref(R.okMessage), target: '_blank', rel: 'noopener' }, R.whatsapp),
            el('a', { class: 'rn-bru-btn is-line', href: './#candidatura', onclick: () => close(false) }, R.form))
        ] : [
          el('p', { class: 'rn-bru-text' }, rich(R.no.replace('{fallo}', R.fallos[m.fallo]))),
          go('./#perfiles', X.requisitos)
        ], anim, isLast));
      } else if (m.from === 'nose') {
        const near = rank(m.q).filter((s) => FICHAS[s.i].label).slice(0, 3);
        body.append(answer([
          el('p', { class: 'rn-bru-text' }, D.NO_SE),
          near.length ? el('p', { class: 'rn-bru-meta' }, X.quiza) : null,
          near.length ? el('ul', { class: 'rn-bru-chips' }, near.map((s) => chip(FICHAS[s.i].label, () => show(s.i)))) : null,
          el('div', { class: 'rn-bru-cta' }, el('a', { class: 'rn-bru-btn is-wa', href: waHref(X.preguntaIvan + m.q), target: '_blank', rel: 'noopener' }, X.preguntarIvan))
        ], anim, isLast));
      } else if (m.from === 'bot') {
        const f = FICHAS[m.ficha];
        body.append(answer([
          el('p', { class: 'rn-bru-text' }, rich(f.text)),
          f.whatsapp ? el('div', { class: 'rn-bru-cta' }, el('a', { class: 'rn-bru-btn is-wa', href: waHref(), target: '_blank', rel: 'noopener' }, X.abrirWhatsapp)) : null,
          f.href ? go(f.href, f.link) : null
        ], anim, isLast));
      }
    });

    if (thinking) {
      body.append(el('div', { class: 'rn-bru-think', 'aria-hidden': 'true' }, el('i'), el('i'), el('i'), el('i'), el('i')));
    }

    // Debajo de la última respuesta: lo que suele venir después.
    const lastMsg = log[last];
    if (!thinking && lastMsg && (lastMsg.from === 'bot' || lastMsg.from === 'nose' || lastMsg.from === 'veredicto')) {
      const seen = seenFichas();
      const ids = lastMsg.from === 'bot' ? (NEXT[FICHAS[lastMsg.ficha].id] || []) : [];
      const next = ids.map((id) => byId[id]).filter((i) => i != null && !seen.has(i)).slice(0, 2);
      const wantsFlow = !flowUsed;
      if (next.length || wantsFlow) {
        body.append(el('ul', { class: 'rn-bru-chips is-next' },
          next.map((i) => chip(FICHAS[i].label, () => show(i))),
          wantsFlow ? chip(R.start, startFlow, 'is-flow') : null));
      }
    }

    restartBtn.hidden = !log.length;
    input.readOnly = thinking;
    send.disabled = thinking;
    body.scrollTo({ top: body.scrollHeight, behavior: animateLast && !calm() ? 'smooth' : 'auto' });

    // Lector de pantalla: el texto de la última respuesta.
    const texts = body.querySelectorAll('.rn-bru-answer .rn-bru-text');
    const lastAnswer = texts[texts.length - 1];
    live.textContent = thinking ? X.buscando : animateLast && lastAnswer ? lastAnswer.textContent : '';
    if (!thinking && animateLast && document.activeElement !== input && open) {
      const a = body.querySelector('.rn-bru-answer[tabindex]');
      if (a) a.focus({ preventScroll: true });
    }
  }
}
