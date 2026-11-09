#!/usr/bin/env node
// Genera dist/: cada página ya pintada en HTML, con sus datos para buscadores, lista para subir a Netlify.
// Con BASE=/RumboNorte genera la demo de GitHub Pages: la misma web en esa subcarpeta y sin indexar.
import { createHash } from 'node:crypto';
import { cpSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

const ROOT = dirname(fileURLToPath(import.meta.url));
const WEB = join(ROOT, 'web');
const DIST = join(ROOT, 'dist');
const read = (f) => readFileSync(join(WEB, f), 'utf8');
const hash = (s) => createHash('sha256').update(s).digest('hex').slice(0, 10);
const SUB = (process.env.BASE || '').replace(/\/+$/, '');
const escape = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

const BASE = ['lib/react.js', 'lib/react-dom.js', 'js/config.js', 'js/bundle.js', 'js/contenido/paginas.js', 'js/contenido/comun.js'];
const CSS = ['css/fuentes.css', 'css/tokens.css', 'css/bundle.css', 'css/site.css', 'css/asistente.css'];
const CONTENT = ['inicio', 'guia', 'metas', 'quien', 'legal'].map((c) => `js/contenido/${c}.js`);
const IMPORT_MAP = '{"imports":{"three":"./lib/three/three.module.min.js"}}';
const NOSCRIPT = '.rn-country[hidden]{display:block}.rn-country{animation:none}.rn-jobs{display:block;height:auto}.rn-job{margin-bottom:12px}.rn-job .rn-job-plate,.rn-job .rn-job-body{position:static;width:auto;margin:0;opacity:1}.rn-job-hit{display:none}';

// React pinta las páginas aquí igual que en el navegador, para que luego solo tenga que engancharse.
const sandbox = vm.createContext({ console, URL, TextEncoder, setTimeout, clearTimeout });
sandbox.window = sandbox.self = sandbox;
vm.runInContext(read('lib/react.js'), sandbox);
vm.runInContext(readFileSync(join(ROOT, 'herramientas/lib/react-dom-server.js'), 'utf8'), sandbox);
[...BASE.slice(2), ...CONTENT, 'js/app.js'].forEach((f) => vm.runInContext(read(f), sandbox));
const { RumboNorteApp, RumboNortePaginas: PAGES, RumboNorteConfig: CFG, ReactDOMServer } = sandbox;

rmSync(DIST, { recursive: true, force: true });
mkdirSync(join(DIST, 'static'), { recursive: true });
mkdirSync(join(DIST, 'js'), { recursive: true });
mkdirSync(join(DIST, 'lib'), { recursive: true });
cpSync(join(WEB, 'assets'), join(DIST, 'assets'), { recursive: true });
cpSync(join(WEB, 'lib/three'), join(DIST, 'lib/three'), { recursive: true });
cpSync(join(WEB, 'js/paises-3d.js'), join(DIST, 'js/paises-3d.js'));
for (const f of ['camino.js', 'heroe.js', 'proceso.js', 'cifras.js', 'titulos.js', 'desplegables.js', 'detalles.js', 'candidatura.js', 'lectura.js', 'recorrido.js', 'nomina.js', 'flujo.js', 'gsap.js', 'asistente.js', 'asistente-datos.js']) cpSync(join(WEB, 'js', f), join(DIST, 'js', f));
cpSync(join(WEB, 'lib/gsap'), join(DIST, 'lib/gsap'), { recursive: true });

function emit(name, ext, text) {
  const file = `${name}.${hash(text)}.${ext}`;
  writeFileSync(join(DIST, 'static', file), text);
  return `static/${file}`;
}

const css = emit('site', 'css', CSS.map(read).join('\n').replace(/\/\*[\s\S]*?\*\//g, '').replace(/\n\s*/g, '\n').trim());
const base = emit('base', 'js', BASE.map(read).join('\n'));

const org = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: CFG.marca,
  url: `${CFG.dominio}/`,
  logo: `${CFG.dominio}/assets/logos/rumbo-norte-mark.png`,
  image: `${CFG.dominio}/assets/og-imagen.jpg`,
  description: 'Servicio de reclutamiento independiente en español: selecciona candidatos en España para agencias de trabajo temporal certificadas de Países Bajos, Bélgica y Alemania y les explica antes las condiciones reales. Gratuito para el candidato.',
  email: CFG.correo,
  telephone: CFG.telefono.replace(/\s/g, ''),
  founder: { '@type': 'Person', name: 'Iván Guerra Arroyo' },
  areaServed: ['ES', 'NL', 'BE', 'DE'],
  knowsLanguage: ['es', 'en']
};

function registrationForm(form) {
  const fields = ['form-name', 'subject', 'bot-field', 'nombre', 'prefijo', 'telefono', 'email', 'destino', 'idiomas', 'carnet', 'sector', 'disponibilidad', 'edad', 'mensaje', 'consentimiento_rgpd'];
  return `<form name="${form.name}" data-netlify="true" netlify-honeypot="bot-field" hidden>${fields.map((f) => `<input name="${f}">`).join('')}</form>`;
}

function html(name, page, script) {
  const url = `${CFG.dominio}${page.path === '/' ? '/' : page.path}`;
  const image = `${CFG.dominio}/assets/og-imagen.jpg`;
  const body = ReactDOMServer.renderToString(RumboNorteApp(name));
  const home = name === 'inicio';
  return `<!doctype html>
<html lang="es" data-page="${name}">
<head>
<meta charset="utf-8">
${name === 'noencontrada' ? `<base href="${SUB}/">\n` : ''}<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${escape(page.title)}</title>
<meta name="description" content="${escape(page.description)}">
<meta name="robots" content="${SUB ? 'noindex, nofollow' : page.hidden ? 'noindex, follow' : 'index, follow'}">
<meta name="author" content="Iván Guerra Arroyo">
<meta name="theme-color" content="#15345c">
<link rel="canonical" href="${url}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${CFG.marca}">
<meta property="og:locale" content="es_ES">
<meta property="og:url" content="${url}">
<meta property="og:title" content="${escape(page.title)}">
<meta property="og:description" content="${escape(page.description)}">
<meta property="og:image" content="${image}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${escape(page.title)}">
<meta name="twitter:description" content="${escape(page.description)}">
<meta name="twitter:image" content="${image}">
<link rel="icon" href="assets/logos/favicon.png" type="image/png">
<link rel="apple-touch-icon" href="assets/logos/apple-touch-icon.png">
<link rel="preload" href="assets/fuentes/anton-latin.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="assets/fuentes/figtree-latin.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="${css}">
<noscript><style>${NOSCRIPT}</style></noscript>
${home ? `<script type="application/ld+json">${JSON.stringify(org)}</script>\n` : ''}</head>
<body>
<div id="root">${body}</div>
${home ? `${registrationForm(sandbox.RumboNorteContenido.inicio.candidatura.form)}\n<script type="importmap">${IMPORT_MAP}</script>\n` : ''}<script defer src="${base}"></script>
<script defer src="${script}"></script>
</body>
</html>
`;
}

const scripts = {};
for (const [name, page] of Object.entries(PAGES)) {
  const key = page.content.join('-');
  scripts[key] = scripts[key] || emit(key, 'js', [...page.content.map((c) => read(`js/contenido/${c}.js`)), read('js/app.js')].join('\n'));
  writeFileSync(join(DIST, page.file), html(name, page, scripts[key]));
}

const today = new Date().toISOString().slice(0, 10);
const listed = Object.values(PAGES).filter((p) => !p.hidden);
writeFileSync(join(DIST, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${listed.map((p) => `  <url>\n    <loc>${CFG.dominio}${p.path}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${p.priority}</priority>\n  </url>`).join('\n')}
</urlset>
`);
writeFileSync(join(DIST, 'robots.txt'), SUB ? 'User-agent: *\nDisallow: /\n' : `User-agent: *\nAllow: /\n\nSitemap: ${CFG.dominio}/sitemap.xml\n`);

const mapHash = createHash('sha256').update(IMPORT_MAP).digest('base64');
writeFileSync(join(DIST, '_headers'), `/*
  X-Content-Type-Options: nosniff
  X-Frame-Options: SAMEORIGIN
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=()
  Content-Security-Policy: default-src 'self'; script-src 'self' 'sha256-${mapHash}'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; font-src 'self'; connect-src 'self' blob:; form-action 'self'; base-uri 'self'; frame-ancestors 'self'
/static/*
  Cache-Control: public, max-age=31536000, immutable
/assets/fuentes/*
  Cache-Control: public, max-age=31536000, immutable
/lib/three/*
  Cache-Control: public, max-age=604800
`);

if (SUB) writeFileSync(join(DIST, '.nojekyll'), '');
console.log(`dist/ listo: ${Object.keys(PAGES).length} páginas${SUB ? `, para ${SUB}/` : ''}`);
