#!/usr/bin/env python3
"""Separa cada imagen de originales/trabajos en dos capas para animarlas: las líneas y el acento naranja.

El fondo se vuelve transparente, las líneas pasan al negro de la marca y el acento a su naranja exacto,
aunque la imagen generada traiga tonos algo distintos. También calcula dónde está el acento.

Uso: python3 herramientas/preparar_trabajos.py
"""
import json, os, statistics
from PIL import Image, ImageChops, ImageFilter

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = f'{ROOT}/originales/trabajos'
OUT = f'{ROOT}/web/assets/trabajos'
W, H = 1200, 800
MARGIN = .05
INK, ORANGE = (22, 22, 22), (253, 93, 3)
IDS = ['almacen', 'carretilla', 'alimentacion', 'invernaderos', 'limpieza', 'construccion']


def fit(im):
    """Recorta el fondo que sobra y encaja el dibujo en el lienzo 3:2, para que todos tengan un tamaño parecido."""
    im = im.convert('RGB')
    corners = [im.getpixel(p) for p in ((4, 4), (im.width - 5, 4), (4, im.height - 5), (im.width - 5, im.height - 5))]
    paper = tuple(int(statistics.median(c[i] for c in corners)) for i in range(3))
    box = ImageChops.difference(im, Image.new('RGB', im.size, paper)).convert('L').point(lambda p: 255 if p > 40 else 0).getbbox()
    im = im.crop(box)
    k = min(W * (1 - 2 * MARGIN) / im.width, H * (1 - 2 * MARGIN) / im.height)
    im = im.resize((round(im.width * k), round(im.height * k)), Image.LANCZOS)
    canvas = Image.new('RGB', (W, H), paper)
    canvas.paste(im, ((W - im.width) // 2, (H - im.height) // 2))
    return canvas, sum(paper) // 3


def accent_mask(im):
    h, s, v = im.convert('HSV').split()
    hit = ImageChops.multiply(h.point(lambda p: 255 if 4 <= p <= 32 else 0), s.point(lambda p: 255 if p >= 100 else 0))
    hit = ImageChops.multiply(hit, v.point(lambda p: 255 if p >= 110 else 0))
    return hit.filter(ImageFilter.GaussianBlur(.8)).point(lambda p: min(255, int(p * 1.6)))


def layer(color, alpha):
    out = Image.new('RGBA', (W, H), (*color, 0))
    out.putalpha(alpha)
    return out


def centre(mask):
    box = mask.point(lambda p: 255 if p > 128 else 0).getbbox()
    if not box:
        return [50, 50]
    return [round((box[0] + box[2]) / 2 / W * 100, 1), round((box[1] + box[3]) / 2 / H * 100, 1)]


data = {}
for name in IDS:
    src = next((f'{SRC}/{name}{ext}' for ext in ('.png', '.jpg', '.jpeg', '.webp') if os.path.exists(f'{SRC}/{name}{ext}')), None)
    if not src:
        print('falta', name)
        continue
    im, paper = fit(Image.open(src))
    accent = accent_mask(im)
    top = paper - 10
    ink = im.convert('L').point(lambda p: max(0, min(255, (top - p) * 255 // max(1, top - 40))))
    ink = ImageChops.multiply(ink, ImageChops.invert(accent))
    layer(INK, ink).save(f'{OUT}/{name}-lineas.webp', quality=82, alpha_quality=80, method=6)
    layer(ORANGE, accent).save(f'{OUT}/{name}-acento.webp', quality=82, alpha_quality=80, method=6)
    data[name] = centre(accent)
    print(name, data[name], os.path.getsize(f'{OUT}/{name}-lineas.webp') // 1024, 'KB')

with open(f'{ROOT}/web/js/contenido/trabajos.js', 'w', encoding='utf8') as f:
    f.write('/* Generado por herramientas/preparar_trabajos.py: dónde está el acento de cada imagen, en %. */\n')
    f.write(f'window.RumboNorteTrabajos = {json.dumps(data)};\n')
