#!/usr/bin/env node
// Comprobaciones rápidas, sin navegador, que deben pasar antes de publicar (las ejecuta CI):
//  1. Cada traducción tiene la misma forma que el español: mismas claves, mismas listas, mismos
//     enlaces, imágenes e ids. Las opciones del formulario envían el mismo valor (en español).
//  2. En dist/, cada página de cada idioma tiene un h1, lang correcto, sin ids repetidos, imágenes
//     con alt y enlaces internos que llevan a una página y un ancla que existen.
// Termina con error si encuentra algún problema. Uso: node build.mjs && node herramientas/comprobar.mjs
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { dirname, join, posix } from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)));
const WEB = join(ROOT, 'web');
const DIST = join(ROOT, 'dist');
const problems = [];
const report = (area, text) => problems.push(`[${area}] ${text}`);

const cfgBox = vm.createContext({});
cfgBox.window = cfgBox;
vm.runInContext(readFileSync(join(WEB, 'js/config.js'), 'utf8'), cfgBox);
const LANGS = cfgBox.RumboNorteConfig.idiomas.map((l) => l.code);
const FILES = ['textos', 'paginas', 'comun', 'inicio', 'guia', 'metas', 'quien', 'legal'];

function load(code) {
  const box = vm.createContext({});
  box.window = box;
  for (const f of FILES) {
    const file = join(WEB, 'js/contenido', code === 'es' ? '' : code, `${f}.js`);
    if (!existsSync(file)) { report(code, `falta ${f}.js`); continue; }
    vm.runInContext(readFileSync(file, 'utf8'), box, { filename: file });
  }
  return { textos: box.RumboNorteTextos, idioma: box.RumboNorteIdioma, paginas: box.RumboNortePaginas, contenido: box.RumboNorteContenido, cifras: box.RumboNorteCifras };
}

async function assistant(code) {
  const file = code === 'es' ? join(WEB, 'js/asistente-datos.js') : join(WEB, 'js', code, 'asistente-datos.js');
  if (!existsSync(file)) { report(code, 'falta asistente-datos.js'); return {}; }
  const m = await import(`file://${file}?${Date.now()}`);
  return { ...m, STOP: undefined };
}

// Lo que no se traduce: direcciones, imágenes, ids y claves técnicas.
const FIXED = /^(\.\/|#|[\w-]+\.html|\.\.?\/|assets\/|js\/|wa:|mailto:|tel:|https?:)/;
const FIXED_KEYS = new Set(['id', 'href', 'src', 'srcSet', 'photo', 'photoSrc', 'posterSrc', 'posterTallSrc', 'arrowSrc', 'markSrc', 'logoSrc', 'sceneUrl', 'file', 'path', 'priority', 'content', 'name_', 'code', 'raiz', 'ogLocale', 'defaultId', 'tone', 'kind', 'icon', 'variant', 'pin', 'spot', 'spotTall', 'focus', 'width', 'height', 'endpoint', 'action', 'hidden', 'main', 'whatsapp_', 'saludo']);
// Claves cuyo contenido depende del idioma (formas gramaticales): no se comparan.
const FREE = new Set(['paisEn']);
const linksIn = (s) => [...s.matchAll(/\]\(([^)\s]+)\)/g)].map((m) => m[1]).join(' ');

function same(a, b, where, code) {
  if (typeof a === 'string' && b && typeof b === 'object' && !Array.isArray(b)) {
    // Opción traducida: { value: 'texto en español', label: 'traducción' }.
    if (b.value !== a) report(code, `${where}: la opción envía «${b.value}» y debería enviar «${a}»`);
    return;
  }
  const option = where.includes('.form.');
  if (option && a && typeof a === 'object' && typeof b === 'object' && b && !Array.isArray(a) && 'value' in a && !Array.isArray(b)) {
    if (a.value !== b.value) report(code, `${where}.value: «${b.value}» en vez de «${a.value}»`);
  }
  if (typeof a !== typeof b || Array.isArray(a) !== Array.isArray(b)) { report(code, `${where}: tipo distinto`); return; }
  if (Array.isArray(a)) {
    if (a.length !== b.length) report(code, `${where}: ${b.length} elementos en vez de ${a.length}`);
    a.slice(0, b.length).forEach((x, i) => same(x, b[i], `${where}[${i}]`, code));
    return;
  }
  if (a && typeof a === 'object') {
    for (const k of Object.keys(a)) {
      if (FREE.has(k)) continue;
      if (!(k in b)) { report(code, `${where}.${k}: falta`); continue; }
      if (FIXED_KEYS.has(k) && typeof a[k] !== 'object' && !String(a[k]).startsWith('wa:') && a[k] !== b[k]) { report(code, `${where}.${k}: cambia (${JSON.stringify(b[k])})`); continue; }
      same(a[k], b[k], `${where}.${k}`, code);
    }
    for (const k of Object.keys(b)) if (!(k in a) && !FREE.has(k) && !(option && k === 'label')) report(code, `${where}.${k}: sobra`);
    return;
  }
  if (typeof a === 'string') {
    // Un enlace de WhatsApp lleva el mensaje traducido; el resto de direcciones no cambia.
    if (a.startsWith('wa:')) { if (!b.startsWith('wa:') || (a === 'wa:') !== (b === 'wa:')) report(code, `${where}: «${b}» debería ser un enlace wa:`); }
    else if (FIXED.test(a) && a !== b) report(code, `${where}: «${b}» debería ser «${a}»`);
    if (linksIn(a) !== linksIn(b)) report(code, `${where}: enlaces distintos (${linksIn(b)} en vez de ${linksIn(a)})`);
    if (!b.trim()) report(code, `${where}: vacío`);
  }
}

const es = load('es');
const esBot = await assistant('es');
for (const code of LANGS.filter((c) => c !== 'es')) {
  const t = load(code);
  if (!t.idioma || t.idioma.code !== code) report(code, 'textos.js no declara el idioma correcto');
  same(es.textos, t.textos, 'textos', code);
  same(es.paginas, t.paginas, 'paginas', code);
  same(es.contenido, t.contenido, 'contenido', code);
  same(es.cifras, t.cifras, 'cifras', code);
  const bot = await assistant(code);
  same(esBot, bot, 'asistente', code);
}

// dist/
if (!existsSync(DIST)) report('dist', 'no existe: ejecuta antes node build.mjs');
else {
  const pages = {};
  for (const code of LANGS) {
    const dir = code === 'es' ? '' : `${code}/`;
    for (const f of readdirSync(join(DIST, dir)).filter((x) => x.endsWith('.html'))) pages[dir + f] = readFileSync(join(DIST, dir, f), 'utf8');
  }
  const ids = {};
  for (const [p, html] of Object.entries(pages)) {
    const list = [...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]);
    ids[p] = new Set(list);
    const dup = list.filter((x, i) => list.indexOf(x) !== i);
    if (dup.length) report('html', `${p}: ids repetidos ${[...new Set(dup)].join(', ')}`);
    const h1 = (html.match(/<h1\b/g) || []).length;
    if (h1 !== 1) report('html', `${p}: ${h1} h1`);
    const lang = p.includes('/') ? p.split('/')[0] : 'es';
    if (!html.includes(`<html lang="${lang}"`)) report('html', `${p}: lang no es ${lang}`);
    for (const m of html.matchAll(/<img\b[^>]*>/g)) if (!/\salt="/.test(m[0])) report('html', `${p}: imagen sin alt`);
  }
  for (const [p, html] of Object.entries(pages)) {
    if (p.endsWith('404.html')) continue; // con <base>, sus enlaces se resuelven desde otra carpeta
    const dir = posix.dirname(p) === '.' ? '' : `${posix.dirname(p)}/`;
    for (const m of html.matchAll(/<a\b[^>]*\shref="([^"]+)"/g)) {
      const h = m[1].replace(/&amp;/g, '&');
      if (/^(https?|mailto|tel):/.test(h)) continue;
      const [path, hash] = h.split('#');
      let target = path === '' ? p : posix.normalize(dir + path).replace(/^\.\/?/, '');
      if (target === '' || target.endsWith('/')) target += 'index.html';
      if (!ids[target]) { report('enlace', `${p}: ${h} no existe`); continue; }
      if (hash && !ids[target].has(hash)) report('enlace', `${p}: el ancla ${h} no existe`);
    }
  }
  if (!existsSync(join(DIST, 'enviar.php'))) report('dist', 'falta enviar.php');
  if (!existsSync(join(DIST, '.htaccess'))) report('dist', 'falta .htaccess');
}

console.log(problems.length ? `${problems.length} problemas:\n${problems.join('\n')}` : 'Todo correcto.');
process.exit(problems.length ? 1 : 0);
