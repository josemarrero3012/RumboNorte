# Web de Rumbo Norte

Web de **Rumbo Norte**, el servicio de reclutamiento independiente de Iván Guerra Arroyo. Selecciona en España candidatos para agencias de trabajo temporal certificadas de Países Bajos, Bélgica y Alemania, y les explica antes de irse las condiciones reales. Para el candidato es gratis.

**[Ver la demo](https://josemarrero3012.github.io/RumboNorte/)** · Web oficial: [proyectoholanda.com](https://proyectoholanda.com)

> La demo de GitHub Pages es la misma web que se sube a Hostinger, pero no se indexa y el formulario no envía, porque Pages no ejecuta PHP. Si falla el envío, la web ofrece seguir por WhatsApp. Antes de publicarla como definitiva quedan pendientes los puntos de [Pendientes](#pendientes).

Sustituye a la versión anterior, [Norte-Claro](https://github.com/josemarrero3012/Norte-Claro). Todo el contenido de aquella web está aquí, con el diseño hecho de nuevo.

## Qué incluye

- **Inicio:** presentación, los tres países en una maqueta 3D, qué hace Iván y qué no, los requisitos y los perfiles con ilustraciones animadas, el proceso en seis pasos, preguntas frecuentes y el formulario de candidatura.
- **La guía:** BSN, nómina línea a línea, alojamiento, coste de vida, contratos y cómo verificar una agencia.
- **Metas:** lo que se puede conseguir en Países Bajos y en cuánto tiempo.
- **Quién soy:** la historia de Iván y lo que no hace.
- **Legales:** privacidad e Impressum en español y alemán, más la página de gracias y la 404.
- **Cuatro idiomas:** español en la raíz y la web entera en inglés (`/en/`), polaco (`/pl/`) y portugués (`/pt/`), con selector en la cabecera, el menú móvil y el pie. El asistente también responde en cada idioma.

- **Botones flotantes:** WhatsApp y, encima, la brújula: un asistente que responde con lo que cuenta la web (fichas en `web/js/asistente-datos.js`) y comprueba en un minuto los tres requisitos. Funciona sin servidor.

Pensada primero para móvil. Cada página llega ya pintada en HTML, así que se lee entera sin JavaScript, y el formulario sigue enviando. Las animaciones respetan el movimiento reducido.

## Con qué está hecha

Sin dependencias que instalar. React 18 se carga como archivo, sin compilador, y `build.mjs` usa Node para pintar cada página en HTML con sus datos para buscadores (Open Graph, JSON-LD, sitemap). Las tipografías se sirven desde la propia web.

- **La maqueta de los países:** Three.js. Las placas se modelan por código en Blender, con la luz horneada en cada una.
- **Las animaciones:** GSAP con ScrollTrigger. Son el camino naranja del inicio y la nómina que se va descontando en la guía.
- **Los perfiles de trabajo:** fotos ilustrativas en un acordeón; cada panel cerrado enseña una franja de su foto y al abrirse se ve entera.

## Probarla en local

Solo hace falta Python 3 para verla y Node 22 o superior para generarla.

```bash
git clone https://github.com/josemarrero3012/RumboNorte.git
cd RumboNorte
python3 dev.py
```

Se abre en http://localhost:4321 y se recarga sola al guardar.

Si el sistema no tiene Node o Chromium, pueden ir portátiles en `.tools/` (no se sube al repositorio): Node LTS de nodejs.org en `.tools/node-*`, Chrome for Testing en `.tools/chrome-linux64` y en `.tools/bin` los accesos `node`, `npm` y `chromium`. Se usan anteponiéndolos al `PATH`:

```bash
export PATH="$PWD/.tools/bin:$PATH"
node build.mjs && node herramientas/revisar.mjs
```

| Comando | Uso |
| --- | --- |
| `python3 dev.py` | Servidor de desarrollo con recarga automática |
| `node build.mjs` | Genera en `dist/` la versión para Hostinger, en los cuatro idiomas |
| `ZIP=1 node build.mjs` | Además deja `rumbonorte-web.zip`, listo para entregar y subir a Hostinger |
| `node herramientas/comprobar.mjs` | Comprobaciones rápidas sin navegador (las ejecuta CI y bloquean la publicación si fallan): que cada traducción tenga la misma estructura, enlaces, imágenes e ids que el español, y que en `dist/` todas las páginas tengan su h1, su idioma y enlaces que existan |
| `BASE=/RumboNorte node build.mjs` | Genera la demo de GitHub Pages, en esa subcarpeta y sin indexar |
| `node herramientas/revisar.mjs` | Revisa `dist/` en navegador: cuatro anchos de pantalla, consola, formulario y vista sin JavaScript. Necesita Chromium. Termina con error si encuentra problemas |
| `python3 herramientas/mapa_europa.py` | Dibuja el mapa de Europa del inicio en `web/assets/mapa/europa.svg` e indica dónde van las chinchetas |

## Organización

```text
web/            La web tal como se edita
  js/config.js    Marca, dominio, WhatsApp y correo, en un solo sitio
  js/contenido/   Los textos de cada página en español; en/, pl/ y pt/ son sus traducciones
  js/contenido/textos.js  Textos fijos de la interfaz (botones, formulario, asistente)
  js/asistente-datos.js   Fichas del asistente; js/en/, js/pl/ y js/pt/ tienen las traducidas
  enviar.php      Recibe el formulario y lo manda por correo (Hostinger)
  js/bundle.js    Componentes, los mismos del sistema de diseño
  css/            Tokens, componentes y estilos de la web
  assets/         Imágenes, tipografías y modelos 3D que se publican
  lib/            React, Three.js y GSAP
3d/             Scripts de Blender que modelan y hornean los países
herramientas/   Revisión en navegador y preparación de imágenes
originales/     Imágenes a tamaño completo, que no se publican
build.mjs       Genera dist/
dev.py          Servidor local
```

Los enlaces y recursos usan rutas relativas, así que la misma web funciona en la raíz de un dominio y en la subcarpeta de GitHub Pages.

### Los modelos 3D

Para volver a generar los países hace falta Blender 4.5. No está en el repositorio porque ocupa 1,1 GB: se descarga en `.tools/` y se usa así:

```bash
blender --background --python 3d/islas.py -- bake
python3 3d/exportar.py
```

`exportar.py` necesita Pillow y deja los modelos y su luz en `web/assets/3d/`.

## Publicación

- **GitHub Pages:** cada cambio en `main` genera la demo y la publica con GitHub Actions ([`.github/workflows/pages.yml`](.github/workflows/pages.yml)).
- **Hostinger (web oficial):** `ZIP=1 node build.mjs` genera `rumbonorte-web.zip`. Se sube su contenido a `public_html/` (el Administrador de archivos de hPanel descomprime el zip). Incluye:
  - `enviar.php`, que recibe el formulario y lo manda por correo a la dirección de `config.js` (`correo`), con remitente `remitente`. Ese remitente tiene que ser un buzón que exista en el dominio, creado en hPanel, o el correo puede acabar en spam o no salir.
  - `.htaccess` con las cabeceras de seguridad (CSP incluida), la caché y las páginas 404 de cada idioma.
  - Tras subirla: activar el certificado SSL y «Forzar HTTPS» en hPanel, y enviar una candidatura de prueba desde cada idioma para confirmar que llega el correo.

### Idiomas

El español es el original. Cada traducción vive en `web/js/contenido/<idioma>/` (mismos archivos y misma estructura) y en `web/js/<idioma>/asistente-datos.js`. Las opciones del formulario se muestran traducidas pero envían el valor en español (`{ value: 'Logística y almacén', label: 'Logistics and warehouse' }`), así el correo llega siempre igual. Al cambiar un texto en español hay que cambiarlo en las tres traducciones; `node herramientas/comprobar.mjs` avisa si una traducción pierde o gana un bloque, un enlace o una opción.

## Pendientes

Antes de publicar la versión definitiva:

- Permiso de las empresas cuyos logos aparecen en la portada.
- Revisión de los textos legales tras el cambio de marca.
- Confirmar que siguen vigentes las cifras de nómina, alojamiento y costes.
- Probar en un teléfono real.
- Probar `enviar.php` en Hostinger con una candidatura de prueba en cada idioma.
- Que una persona nativa revise las traducciones al inglés, polaco y portugués, sobre todo la política de privacidad.
- Decidir si las versiones en otros idiomas deben seguir diciendo que el servicio selecciona candidatos en España (el mapa y el sello del inicio parten de España).
- Confirmar con las agencias los requisitos de los conductores (carnet C/C+E o D, CAP y tacógrafo).
- Revisar el salario mínimo neerlandés en julio de 2027 (15,29 €/h desde el 1 de enero de 2027), en el proceso del inicio y en la guía.

## Derechos

Este repositorio no concede una licencia de reutilización. La marca Rumbo Norte, el retrato de Iván, las ilustraciones y los textos son de su titular. Los logos de las empresas son de sus respectivos dueños. React, Three.js y GSAP, igual que las tipografías Anton y Figtree, se distribuyen con sus propias licencias.
