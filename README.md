# Web de Rumbo Norte

Web de **Rumbo Norte**, el servicio de reclutamiento independiente de Iván Guerra Arroyo. Selecciona en España candidatos para agencias de trabajo temporal certificadas de Países Bajos, Bélgica y Alemania, y les explica antes de irse las condiciones reales. Para el candidato es gratis.

**[Ver la demo](https://josemarrero3012.github.io/RumboNorte/)** · Web oficial: [proyectoholanda.com](https://proyectoholanda.com)

> La demo de GitHub Pages es la misma web que se sube a Netlify, pero no se indexa y el formulario no envía: Netlify Forms solo funciona en Netlify. Si falla el envío, la web ofrece seguir por WhatsApp. Antes de publicarla como definitiva quedan pendientes los puntos de [Pendientes](#pendientes).

Sustituye a la versión anterior, [Norte-Claro](https://github.com/josemarrero3012/Norte-Claro). Todo el contenido de aquella web está aquí, con el diseño hecho de nuevo.

## Qué incluye

- **Inicio:** presentación, los tres países en una maqueta 3D, qué hace Iván y qué no, los requisitos y los perfiles con ilustraciones animadas, el proceso en seis pasos, preguntas frecuentes y el formulario de candidatura.
- **La guía:** BSN, nómina línea a línea, alojamiento, coste de vida, contratos y cómo verificar una agencia.
- **Metas:** lo que se puede conseguir en Países Bajos y en cuánto tiempo.
- **Quién soy:** la historia de Iván y lo que no hace.
- **Legales:** privacidad e Impressum en español y alemán, más la página de gracias y la 404.

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
| `node build.mjs` | Genera en `dist/` la versión para Netlify |
| `BASE=/RumboNorte node build.mjs` | Genera la demo de GitHub Pages, en esa subcarpeta y sin indexar |
| `node herramientas/revisar.mjs` | Revisa `dist/`: textos, enlaces, cuatro anchos de pantalla, consola, formulario y vista sin JavaScript. Necesita Chromium |
| `python3 herramientas/mapa_europa.py` | Dibuja el mapa de Europa del inicio en `web/assets/mapa/europa.svg` e indica dónde van las chinchetas |

## Organización

```text
web/            La web tal como se edita
  js/config.js    Marca, dominio, WhatsApp y correo, en un solo sitio
  js/contenido/   Los textos de cada página
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
- **Netlify:** la web oficial se publica subiendo `dist/` tras ejecutar `node build.mjs`. Esa versión incluye las cabeceras de seguridad (`_headers`) y el formulario de Netlify Forms.

## Pendientes

Antes de publicar la versión definitiva:

- Permiso de las empresas cuyos logos aparecen en la portada.
- Revisión de los textos legales tras el cambio de marca.
- Confirmar que siguen vigentes las cifras de nómina, alojamiento y costes.
- Probar en un teléfono real.
- Confirmar con las agencias los requisitos de los conductores (carnet C/C+E o D, CAP y tacógrafo).
- Revisar el salario mínimo neerlandés en julio de 2027 (15,29 €/h desde el 1 de enero de 2027), en el proceso del inicio y en la guía.

## Derechos

Este repositorio no concede una licencia de reutilización. La marca Rumbo Norte, el retrato de Iván, las ilustraciones y los textos son de su titular. Los logos de las empresas son de sus respectivos dueños. React, Three.js y GSAP, igual que las tipografías Anton y Figtree, se distribuyen con sus propias licencias.
