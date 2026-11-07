#!/usr/bin/env node
// Revisa dist/ antes de publicar: que no falte texto de la web vieja, enlaces, pantallas, consola y formulario.
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { createServer } from 'node:http';
import { dirname, extname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { open } from './navegador.mjs';

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)));
const DIST = join(ROOT, 'dist');
const OLD = 'https://chic-sundae-b10e15.netlify.app/';
const PORT = 4330;
const HOST = `http://localhost:${PORT}`;
const PAGES = readdirSync(DIST).filter((f) => f.endsWith('.html'));
const TYPES = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.webp': 'image/webp', '.png': 'image/png', '.jpg': 'image/jpeg', '.woff2': 'font/woff2', '.glb': 'model/gltf-binary' };
const problems = [];
const report = (area, text) => { problems.push(`[${area}] ${text}`); };
const only = process.argv[2];

const server = createServer((req, res) => {
  if (req.method === 'POST') { req.resume(); res.writeHead(200); return res.end('ok'); }
  let path = decodeURIComponent(req.url.split('?')[0]);
  if (path === '/') path = '/index.html';
  const file = join(DIST, path);
  if (!existsSync(file)) { res.writeHead(404, { 'Content-Type': TYPES['.html'] }); return res.end(readFileSync(join(DIST, '404.html'))); }
  res.writeHead(200, { 'Content-Type': TYPES[extname(file)] || 'application/octet-stream' });
  res.end(readFileSync(file));
});
await new Promise((r) => server.listen(PORT, r));

const norm = (s) => s.replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&copy;/g, '©').replace(/&larr;/g, '←')
  .replace(/Norte Claro/gi, 'Rumbo Norte').replace(/[\s ]+/g, ' ').trim().toLowerCase();

function blocks(html) {
  const body = html.replace(/<head[\s\S]*?<\/head>/, '').replace(/<!--[\s\S]*?-->/g, '').replace(/<(script|style|svg|noscript)\b[\s\S]*?<\/\1>/g, '');
  const out = [];
  for (const m of body.matchAll(/<(p|li|h[1-4]|td|th|summary|dt|dd|figcaption|label|option|caption|b)\b[^>]*>([\s\S]*?)<\/\1>/g)) {
    const t = norm(m[2]);
    if (t.length > 2) out.push(t);
  }
  return out;
}

async function coverage() {
  const fresh = norm(PAGES.map((f) => readFileSync(join(DIST, f), 'utf8').replace(/<head[\s\S]*?<\/head>/, '').replace(/<script\b[\s\S]*?<\/script>/g, '')).join(' '));
  for (const page of ['', 'guia.html', 'metas.html', 'quienes-somos.html', 'privacidad.html', 'impressum.html', 'gracias.html']) {
    const html = await (await fetch(OLD + page)).text();
    for (const b of new Set(blocks(html))) {
      if (fresh.includes(b)) continue;
      const parts = b.split(/(?<=[.:?!])\s+/).filter((s) => !fresh.includes(s) && s.length > 3);
      if (parts.length) report('texto', `${page || 'inicio'}: ${parts.join(' / ').slice(0, 220)}`);
    }
  }
}

function links() {
  const ids = {};
  const hrefs = {};
  for (const f of PAGES) {
    const html = readFileSync(join(DIST, f), 'utf8');
    ids[f] = new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]));
    hrefs[f] = [...html.matchAll(/<a\b[^>]*\shref="([^"]+)"/g)].map((m) => m[1].replace(/&amp;/g, '&'));
  }
  const outside = new Set();
  for (const f of PAGES) {
    for (const h of hrefs[f]) {
      if (/^https?:/.test(h)) { outside.add(h); continue; }
      if (/^(mailto|tel):/.test(h)) continue;
      const [path, hash] = h.split('#');
      const target = path === '' ? f : path === '/' ? 'index.html' : path.replace(/^\//, '');
      if (!ids[target]) { report('enlace', `${f}: ${h} no existe`); continue; }
      if (hash && !ids[target].has(hash)) report('enlace', `${f}: el ancla ${h} no existe`);
    }
  }
  return outside;
}

async function outside(urls) {
  for (const u of urls) {
    if (u.startsWith('https://wa.me')) continue;
    try {
      const r = await fetch(u, { redirect: 'follow', signal: AbortSignal.timeout(15000), headers: { 'User-Agent': 'Mozilla/5.0' } });
      if (r.status >= 400 && r.status !== 403) report('externo', `${u} responde ${r.status}`);
    } catch { report('externo', `${u} no responde`); }
  }
}

const SCAN = `(() => {
  const out = [];
  const w = document.documentElement.clientWidth;
  if (document.documentElement.scrollWidth > w) out.push('scroll lateral: ' + document.documentElement.scrollWidth + ' de ' + w);
  for (const el of document.querySelectorAll('main *, header *, footer *')) {
    const cs = getComputedStyle(el);
    if (cs.display === 'none' || cs.visibility === 'hidden') continue;
    const r = el.getBoundingClientRect();
    if (r.width && r.right > w + 1 && !el.closest('.rn-logostrip, .rn-countries, .rn-hero-field, .rn-hero-curve, .rn-form-trap, .rn-skip, .rn-card, .rn-jobs')) out.push('se sale: ' + el.tagName + '.' + el.className);
    const own = [...el.childNodes].some((n) => n.nodeType === 3 && n.textContent.trim());
    if (own && parseFloat(cs.fontSize) < 15 && !el.closest('svg')) out.push('letra pequeña: ' + parseFloat(cs.fontSize) + 'px ' + el.textContent.slice(0, 40));
  }
  for (const i of document.images) if (i.complete && !i.naturalWidth) out.push('imagen rota: ' + i.src);
  if (document.querySelectorAll('h1').length !== 1) out.push('h1: ' + document.querySelectorAll('h1').length);
  let last = 1;
  for (const h of document.querySelectorAll('main h1, main h2, main h3, main h4')) {
    const n = +h.tagName[1];
    if (n > last + 1) out.push('salto de titulo: ' + h.tagName + ' ' + h.textContent.slice(0, 40));
    last = n;
  }
  for (const a of document.querySelectorAll('a, button')) if (!(a.textContent.trim() || a.getAttribute('aria-label'))) out.push('control sin nombre: ' + a.outerHTML.slice(0, 80));
  return JSON.stringify([...new Set(out)].slice(0, 12));
})()`;

async function screens() {
  let port = 9480;
  for (const [w, h, mobile] of [[390, 844, true], [768, 1024, true], [1440, 900, false], [1920, 1080, false]]) {
    const b = await open({ w, h, mobile, port: port++ });
    await b.sleep(500);
    for (const f of PAGES) {
      b.logs.length = 0;
      await b.send('Page.navigate', { url: `${HOST}/${f}` });
      await b.sleep(1100);
      for (const p of JSON.parse(await b.ev(SCAN))) report('pantalla', `${f} a ${w}px: ${p}`);
      for (const l of b.logs.filter((x) => /^(error|EXC)/.test(x))) report('consola', `${f} a ${w}px: ${l.slice(0, 180)}`);
    }
    b.close();
    await b.sleep(300);
  }
}

async function form() {
  const b = await open({ w: 390, h: 844, mobile: true, port: 9490 });
  await b.sleep(400);
  await b.send('Page.navigate', { url: `${HOST}/` });
  await b.sleep(1500);
  await b.ev(`document.querySelector('.rn-form button[type=submit]').click()`);
  await b.sleep(200);
  const errors = await b.ev(`document.querySelectorAll('.rn-form .rn-field-error').length`);
  if (errors !== 6) report('formulario', `enviar vacío da ${errors} errores y deberían ser 6`);
  if (!(await b.ev(`document.activeElement.name === 'nombre'`))) report('formulario', 'el foco no va al primer error');
  await b.ev(`(() => {
    const f = document.querySelector('.rn-form');
    const set = (n, v) => { const el = f.elements[n]; const d = Object.getOwnPropertyDescriptor(el.constructor.prototype, 'value'); d.set.call(el, v); el.dispatchEvent(new Event('input', { bubbles: true })); el.dispatchEvent(new Event('change', { bubbles: true })); };
    set('nombre', 'Prueba Local'); set('telefono', '600 000 000'); set('email', 'prueba@ejemplo.com');
    set('carnet', f.elements.carnet.options[1].value); set('sector', f.elements.sector.options[1].value);
    f.elements.consentimiento_rgpd.click();
    f.querySelector('button[type=submit]').click();
  })()`);
  await b.sleep(1600);
  if (!(await b.ev(`location.pathname`)).includes('gracias')) report('formulario', 'con datos válidos no llega a gracias.html');
  b.close();
}

async function noScript() {
  const b = await open({ w: 390, h: 844, mobile: true, port: 9491 });
  await b.sleep(400);
  await b.send('Emulation.setScriptExecutionDisabled', { value: true });
  await b.send('Page.navigate', { url: `${HOST}/` });
  await b.sleep(1200);
  await b.send('Emulation.setScriptExecutionDisabled', { value: false });
  const seen = await b.ev(`document.querySelectorAll('.rn-country').length + ':' + [...document.querySelectorAll('.rn-country')].filter((a) => getComputedStyle(a).display !== 'none').length`);
  if (seen !== '3:3') report('sin JS', `fichas de país visibles: ${seen}`);
  b.close();
}

function words() {
  for (const f of PAGES) {
    const text = readFileSync(join(DIST, f), 'utf8');
    for (const w of ['Norte Claro', 'Holanda', '>Uitzendwerk<', '>Zeitarbeit<', '>Interim<']) if (text.includes(w)) report('palabras', `${f} contiene «${w}»`);
  }
}

const steps = { coverage, screens, form, noScript };
words();
const urls = links();
if (!only || only === 'externos') await outside(urls);
for (const [name, fn] of Object.entries(steps)) {
  if (only && only !== name) continue;
  console.log(`· ${name}`);
  await fn();
}
server.close();
console.log(problems.length ? `\n${problems.length} avisos:\n${problems.join('\n')}` : '\nTodo correcto.');
process.exit(0);
