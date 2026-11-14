#!/usr/bin/env node
// Genera dist/: cada página ya pintada en HTML, con sus datos para buscadores, en los cuatro idiomas
// (español en la raíz; inglés, polaco y portugués en /en/, /pl/ y /pt/), lista para subir a Hostinger.
// Con BASE=/RumboNorte genera la demo de GitHub Pages: la misma web en esa subcarpeta y sin indexar.
// Con ZIP=1 deja además rumbonorte-web.zip con el contenido de dist/, para entregarlo.
import { createHash } from 'node:crypto';
import { cpSync, existsSync, mkdirSync, readFileSync, readdirSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { dirname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';
import { zip } from './herramientas/zip.mjs';

const ROOT = dirname(fileURLToPath(import.meta.url));
const WEB = join(ROOT, 'web');
const DIST = join(ROOT, 'dist');
const read = (f) => readFileSync(join(WEB, f), 'utf8');
const hash = (s) => createHash('sha256').update(s).digest('hex').slice(0, 10);
const sha = (s) => createHash('sha256').update(s).digest('base64');
const SUB = (process.env.BASE || '').replace(/\/+$/, '');
const escape = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

// Comunes a todos los idiomas: React, la configuración y los componentes.
const VENDOR = ['lib/react.js', 'lib/react-dom.js', 'js/config.js', 'js/bundle.js'];
// Propios de cada idioma: textos de interfaz, páginas, menú y pie; después, el contenido de la página.
const SHARED = ['textos', 'paginas', 'comun'];
const CSS = ['css/fuentes.css', 'css/tokens.css', 'css/bundle.css', 'css/site.css', 'css/asistente.css'];
const NOSCRIPT = '.rn-country[hidden]{display:block}.rn-country{animation:none}.rn-jobs{display:block;height:auto}.rn-job{margin-bottom:12px}.rn-job .rn-job-plate,.rn-job .rn-job-body{position:static;width:auto;margin:0;opacity:1}.rn-job-hit{display:none}';
// Marca la página como «con JavaScript» antes de pintar, para que el menú móvil no dé un salto.
const JS_FLAG = "document.documentElement.classList.add('rn-js')";

// Lee la configuración para saber los idiomas.
const cfgBox = vm.createContext({});
cfgBox.window = cfgBox;
vm.runInContext(read('js/config.js'), cfgBox);
const CFG = cfgBox.RumboNorteConfig;
const LANGS = CFG.idiomas.map((l) => ({ ...l, dir: l.code === 'es' ? '' : `${l.code}/` }));

// Archivo fuente de cada pieza en cada idioma. En /en/, /pl/ y /pt/ las imágenes cuelgan de la raíz.
function source(lang, name) {
  const text = read(lang.dir ? `js/contenido/${lang.code}/${name}.js` : `js/contenido/${name}.js`);
  return lang.dir ? text.replace(/(['"])assets\//g, '$1../assets/') : text;
}
const importMap = (lang) => JSON.stringify({ imports: { three: `${lang.dir ? '../' : './'}lib/three/three.module.min.js` } });

rmSync(DIST, { recursive: true, force: true });
mkdirSync(join(DIST, 'static'), { recursive: true });
mkdirSync(join(DIST, 'js'), { recursive: true });
mkdirSync(join(DIST, 'lib'), { recursive: true });
cpSync(join(WEB, 'assets'), join(DIST, 'assets'), { recursive: true });
cpSync(join(WEB, 'lib/three'), join(DIST, 'lib/three'), { recursive: true });
cpSync(join(WEB, 'lib/gsap'), join(DIST, 'lib/gsap'), { recursive: true });
for (const f of ['paises-3d.js', 'camino.js', 'heroe.js', 'proceso.js', 'cifras.js', 'titulos.js', 'desplegables.js', 'detalles.js', 'candidatura.js', 'lectura.js', 'recorrido.js', 'nomina.js', 'flujo.js', 'gsap.js', 'asistente.js', 'asistente-datos.js']) cpSync(join(WEB, 'js', f), join(DIST, 'js', f));
for (const l of LANGS.filter((x) => x.dir)) {
  mkdirSync(join(DIST, 'js', l.code), { recursive: true });
  cpSync(join(WEB, 'js', l.code, 'asistente-datos.js'), join(DIST, 'js', l.code, 'asistente-datos.js'));
}

function emit(name, ext, text) {
  const file = `${name}.${hash(text)}.${ext}`;
  writeFileSync(join(DIST, 'static', file), text);
  return `static/${file}`;
}

const css = emit('site', 'css', CSS.map(read).join('\n').replace(/\/\*[\s\S]*?\*\//g, '').replace(/\n\s*/g, '\n').trim());
const vendor = emit('base', 'js', VENDOR.map(read).join('\n'));

function organization(lang, description) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: CFG.marca,
    url: `${CFG.dominio}/${lang.dir}`,
    logo: `${CFG.dominio}/assets/logos/rumbo-norte-mark.png`,
    image: `${CFG.dominio}/assets/og-imagen.jpg`,
    description,
    email: CFG.correo,
    telephone: CFG.telefono.replace(/\s/g, ''),
    founder: { '@type': 'Person', name: 'Iván Guerra Arroyo' },
    areaServed: ['ES', 'PL', 'PT', 'NL', 'BE', 'DE'],
    knowsLanguage: ['es', 'en', 'pl', 'pt']
  };
}

const pageUrl = (lang, page) => `${CFG.dominio}/${lang.dir}${page.path === '/' ? '' : page.path.replace(/^\//, '')}`;

function html(lang, sandbox, name, page, script) {
  const { RumboNorteApp, ReactDOMServer, RumboNorteIdioma: I } = sandbox;
  const url = pageUrl(lang, page);
  const image = `${CFG.dominio}/assets/og-imagen.jpg`;
  const body = ReactDOMServer.renderToString(RumboNorteApp(name));
  const home = name === 'inicio';
  const up = lang.dir ? '../' : '';
  const alternates = page.hidden ? '' : [...LANGS.map((l) => `<link rel="alternate" hreflang="${l.code}" href="${pageUrl(l, page)}">`),
    `<link rel="alternate" hreflang="x-default" href="${pageUrl(LANGS[0], page)}">`].join('\n') + '\n';
  return `<!doctype html>
<html lang="${lang.code}" data-page="${name}">
<head>
<meta charset="utf-8">
${name === 'noencontrada' ? `<base href="${SUB}/${lang.dir}">\n` : ''}<meta name="viewport" content="width=device-width, initial-scale=1">
<script>${JS_FLAG}</script>
<title>${escape(page.title)}</title>
<meta name="description" content="${escape(page.description)}">
<meta name="robots" content="${SUB ? 'noindex, nofollow' : page.hidden ? 'noindex, follow' : 'index, follow'}">
<meta name="author" content="Iván Guerra Arroyo">
<meta name="theme-color" content="#15345c">
<link rel="canonical" href="${url}">
${alternates}<meta property="og:type" content="website">
<meta property="og:site_name" content="${CFG.marca}">
<meta property="og:locale" content="${I.ogLocale}">
${LANGS.filter((l) => l.code !== lang.code).map((l) => `<meta property="og:locale:alternate" content="${sandboxLocale[l.code]}">`).join('\n')}
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
<link rel="icon" href="${up}assets/logos/favicon.png" type="image/png">
<link rel="apple-touch-icon" href="${up}assets/logos/apple-touch-icon.png">
<link rel="preload" href="${up}assets/fuentes/anton-latin.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="${up}assets/fuentes/figtree-latin.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="${up}${css}">
<noscript><style>${NOSCRIPT}</style></noscript>
${home ? `<script type="application/ld+json">${JSON.stringify(organization(lang, page.description))}</script>\n` : ''}</head>
<body>
<div id="root">${body}</div>
${home ? `<script type="importmap">${importMap(lang)}</script>\n` : ''}<script defer src="${up}${vendor}"></script>
<script defer src="${up}${script}"></script>
</body>
</html>
`;
}

// React pinta las páginas aquí igual que en el navegador, para que luego solo tenga que engancharse.
function sandboxFor(lang, content) {
  const box = vm.createContext({ console, URL, TextEncoder, setTimeout, clearTimeout });
  box.window = box.self = box;
  vm.runInContext(read('lib/react.js'), box);
  vm.runInContext(readFileSync(join(ROOT, 'herramientas/lib/react-dom-server.js'), 'utf8'), box);
  VENDOR.slice(2).forEach((f) => vm.runInContext(read(f), box));
  [...SHARED, ...content].forEach((c) => vm.runInContext(source(lang, c), box));
  vm.runInContext(read('js/app.js'), box);
  return box;
}

const CONTENT = ['inicio', 'guia', 'metas', 'quien', 'legal'];
const sandboxLocale = {};
const built = [];
for (const lang of LANGS) {
  const box = sandboxFor(lang, CONTENT);
  sandboxLocale[lang.code] = box.RumboNorteIdioma.ogLocale;
  if (box.RumboNorteIdioma.code !== lang.code) throw new Error(`contenido/${lang.code}/textos.js declara el idioma ${box.RumboNorteIdioma.code}`);
  built.push({ lang, box });
}

let pages = 0;
const sitemap = [];
for (const { lang, box } of built) {
  const PAGES = box.RumboNortePaginas;
  if (lang.dir) mkdirSync(join(DIST, lang.dir), { recursive: true });
  const scripts = {};
  for (const [name, page] of Object.entries(PAGES)) {
    const key = page.content.join('-');
    scripts[key] = scripts[key] || emit(`${lang.code}-${key}`, 'js', [...SHARED, ...page.content].map((c) => source(lang, c)).concat(read('js/app.js')).join('\n'));
    writeFileSync(join(DIST, lang.dir, page.file), html(lang, box, name, page, scripts[key]));
    pages += 1;
    if (!page.hidden) sitemap.push({ page, lang });
  }
}

const today = new Date().toISOString().slice(0, 10);
writeFileSync(join(DIST, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${sitemap.map(({ page, lang }) => `  <url>\n    <loc>${pageUrl(lang, page)}</loc>\n${LANGS.map((l) => `    <xhtml:link rel="alternate" hreflang="${l.code}" href="${pageUrl(l, page)}"/>`).join('\n')}\n    <lastmod>${today}</lastmod>\n    <priority>${page.priority}</priority>\n  </url>`).join('\n')}
</urlset>
`);
writeFileSync(join(DIST, 'robots.txt'), SUB ? 'User-agent: *\nDisallow: /\n' : `User-agent: *\nAllow: /\n\nSitemap: ${CFG.dominio}/sitemap.xml\n`);

// Receptor del formulario (PHP). En GitHub Pages no se ejecuta: allí la web ofrece seguir por WhatsApp.
writeFileSync(join(DIST, 'enviar.php'), read('enviar.php')
  .replace('{{CORREO}}', CFG.correo).replace('{{REMITENTE}}', CFG.remitente).replace('{{MARCA}}', CFG.marca));

// Cabeceras de seguridad, caché y páginas de error para Apache/LiteSpeed (Hostinger).
const hashes = [JS_FLAG, ...LANGS.map(importMap)].filter((v, i, a) => a.indexOf(v) === i).map((s) => `'sha256-${sha(s)}'`).join(' ');
const csp = `default-src 'self'; script-src 'self' ${hashes}; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; font-src 'self'; connect-src 'self' blob:; form-action 'self'; base-uri 'self'; frame-ancestors 'self'; object-src 'none'`;
writeFileSync(join(DIST, '.htaccess'), `# Generado por build.mjs. Hostinger (LiteSpeed) y Apache leen este archivo.
Options -Indexes
DirectoryIndex index.html
ErrorDocument 404 ${SUB}/404.html

# Para forzar HTTPS cuando el certificado esté activo (también se puede activar en hPanel):
# RewriteEngine On
# RewriteCond %{HTTPS} off
# RewriteRule ^ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

AddType model/gltf-binary .glb
AddType font/woff2 .woff2
AddType image/webp .webp
AddDefaultCharset utf-8

<IfModule mod_headers.c>
  Header always set X-Content-Type-Options "nosniff"
  Header always set X-Frame-Options "SAMEORIGIN"
  Header always set Referrer-Policy "strict-origin-when-cross-origin"
  Header always set Permissions-Policy "camera=(), microphone=(), geolocation=()"
  Header always set Content-Security-Policy "${csp}"
  # Los archivos con huella en el nombre (static/) y las fuentes no cambian nunca.
  <FilesMatch "\\.[0-9a-f]{10}\\.(js|css)$">
    Header set Cache-Control "public, max-age=31536000, immutable"
  </FilesMatch>
  <FilesMatch "\\.(woff2)$">
    Header set Cache-Control "public, max-age=31536000, immutable"
  </FilesMatch>
  <FilesMatch "\\.(glb|webp|png|jpg|svg|json)$">
    Header set Cache-Control "public, max-age=604800"
  </FilesMatch>
  <FilesMatch "\\.html$">
    Header set Cache-Control "no-cache"
  </FilesMatch>
</IfModule>

<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/css text/plain text/xml application/javascript text/javascript application/json image/svg+xml application/xml model/gltf-binary
</IfModule>
`);
for (const l of LANGS.filter((x) => x.dir)) writeFileSync(join(DIST, l.dir, '.htaccess'), `ErrorDocument 404 ${SUB}/${l.dir}404.html\n`);

if (SUB) writeFileSync(join(DIST, '.nojekyll'), '');
console.log(`dist/ listo: ${pages} páginas en ${LANGS.length} idiomas${SUB ? `, para ${SUB}/` : ''}`);

if (process.env.ZIP) {
  const walk = (dir) => readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });
  const out = join(ROOT, 'rumbonorte-web.zip');
  zip(out, walk(DIST).map((p) => ({ name: relative(DIST, p).split('\\').join('/'), data: readFileSync(p) })));
  console.log(`Zip para entregar: ${relative(ROOT, out)}${existsSync(out) ? ` (${Math.round(statSync(out).size / 1024)} KB)` : ''}`);
}
