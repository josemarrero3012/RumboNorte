#!/usr/bin/env python3
"""Dibuja el mapa de Europa del inicio a partir de Natural Earth (world-atlas, 3d/datos/countries-50m.json).

Deja en web/assets/mapa/europa.svg la tierra en un grupo «tierra» y, dentro, Países Bajos, Bélgica y
Alemania con su propio id, para que el inicio los resalte con <use>. Al acabar escribe las posiciones del
origen (Madrid) y de cada chincheta, que van en web/js/contenido/inicio.js (hero.map).

Solo necesita Python 3: python3 herramientas/mapa_europa.py
"""
import json, math, os

H = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.join(H, '..', '3d', 'datos', 'countries-50m.json')
OUT = os.path.join(H, '..', 'web', 'assets', 'mapa', 'europa.svg')

LON0, LAT0 = 10, 52          # centro de la proyección azimutal equivalente de Lambert (la de ETRS89-LAEA)
WEST, EAST = (-11.5, 44), (31, 54)    # el borde izquierdo pasa por Portugal y el derecho por Bielorrusia
NORTH, SOUTH = (10, 64.5), (10, 35)   # arriba el sur de Escandinavia, abajo el estrecho
W = 1000                     # ancho del dibujo, en unidades del viewBox
TOL = .45                    # simplificación: lo que se puede mover un punto, en unidades
MIN_AREA = 6                 # islas más pequeñas que esto no se dibujan
IDS = {'Netherlands': 'nl', 'Belgium': 'be', 'Germany': 'de'}
PINS = {'origen': (-3.7, 40.4), 'nl': (5.55, 52.25), 'be': (4.6, 50.6), 'de': (10.2, 51.05)}


def laea(lon, lat):
    l, p, l0, p0 = map(math.radians, (lon, lat, LON0, LAT0))
    k = math.sqrt(2 / (1 + math.sin(p0) * math.sin(p) + math.cos(p0) * math.cos(p) * math.cos(l - l0)))
    return (k * math.cos(p) * math.sin(l - l0),
            -k * (math.cos(p0) * math.sin(p) - math.sin(p0) * math.cos(p) * math.cos(l - l0)))


X0, X1 = laea(*WEST)[0], laea(*EAST)[0]
Y0, Y1 = laea(*NORTH)[1], laea(*SOUTH)[1]
S = W / (X1 - X0)
HGT = round((Y1 - Y0) * S)


def project(lon, lat):
    x, y = laea(lon, lat)
    return ((x - X0) * S, (y - Y0) * S)


def clip(ring, m=20):
    """Recorta un anillo al rectángulo del dibujo con un margen, para no cargar Rusia ni África enteras."""
    edges = [(0, -m, 1), (0, W + m, -1), (1, -m, 1), (1, HGT + m, -1)]
    for axis, v, sign in edges:
        out = []
        for i, cur in enumerate(ring):
            prev = ring[i - 1]
            ci, pi = (cur[axis] - v) * sign >= 0, (prev[axis] - v) * sign >= 0
            if ci != pi:
                t = (v - prev[axis]) / (cur[axis] - prev[axis])
                out.append((prev[0] + (cur[0] - prev[0]) * t, prev[1] + (cur[1] - prev[1]) * t))
            if ci:
                out.append(cur)
        ring = out
        if not ring:
            break
    return ring


def simplify(pts):
    """Douglas-Peucker sobre un anillo abierto."""
    if len(pts) < 3:
        return pts
    keep = [False] * len(pts)
    keep[0] = keep[-1] = True
    stack = [(0, len(pts) - 1)]
    while stack:
        a, b = stack.pop()
        (ax, ay), (bx, by) = pts[a], pts[b]
        dx, dy = bx - ax, by - ay
        n = math.hypot(dx, dy)
        best, idx = 0, None
        for i in range(a + 1, b):
            # En un anillo cerrado el primer tramo empieza y acaba en el mismo punto: ahí cuenta la distancia a él.
            d = abs(dy * (pts[i][0] - ax) - dx * (pts[i][1] - ay)) / n if n else math.hypot(pts[i][0] - ax, pts[i][1] - ay)
            if d > best:
                best, idx = d, i
        if idx is not None and best > TOL:
            keep[idx] = True
            stack += [(a, idx), (idx, b)]
    return [p for p, k in zip(pts, keep) if k]


def area(r):
    return abs(sum(r[i - 1][0] * r[i][1] - r[i][0] * r[i - 1][1] for i in range(len(r)))) / 2


def main():
    t = json.load(open(SRC))
    sc, tr = t['transform']['scale'], t['transform']['translate']
    arcs = []
    for a in t['arcs']:
        x = y = 0
        pts = []
        for dx, dy in a:
            x += dx
            y += dy
            pts.append((x * sc[0] + tr[0], y * sc[1] + tr[1]))
        arcs.append(pts)

    def ring(ids):
        out = []
        for i in ids:
            p = arcs[i] if i >= 0 else arcs[~i][::-1]
            out += p[1:] if out else p
        return out

    paths = []
    for g in t['objects']['countries']['geometries']:
        polys = g['arcs'] if g['type'] == 'MultiPolygon' else [g['arcs']] if g['type'] == 'Polygon' else []
        d = []
        for poly in polys:
            for k, ids in enumerate(poly):
                pts = ring(ids)
                # Fuera del recuadro holgado no hay nada que dibujar (y la proyección se deforma lejos del centro).
                if not any(-30 < lon < 60 and 25 < lat < 75 for lon, lat in pts):
                    continue
                r = clip([project(lon, lat) for lon, lat in pts])
                if len(r) < 3 or (k == 0 and area(r) < MIN_AREA):
                    continue
                r = simplify(r + r[:1])[:-1]
                if len(r) < 3:
                    continue
                d.append('M' + 'L'.join(f'{x:.1f} {y:.1f}' for x, y in r) + 'Z')
        if d:
            name = g.get('properties', {}).get('name', '')
            paths.append((IDS.get(name), ''.join(d).replace('.0 ', ' ').replace('.0L', 'L').replace('.0Z', 'Z')))

    # Los tres destinos al final, para que su borde no quede tapado por los vecinos.
    paths.sort(key=lambda p: p[0] is not None)
    body = '\n'.join(f'<path{f" id={chr(34)}{i}{chr(34)}" if i else ""} d="{d}"/>' for i, d in paths)
    os.makedirs(os.path.dirname(OUT), exist_ok=True)
    with open(OUT, 'w') as f:
        f.write(f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {HGT}" fill="#2b4c78" stroke="#15345c">\n'
                f'<g id="tierra">\n{body}\n</g>\n</svg>\n')
    print(f'{OUT}: {os.path.getsize(OUT) // 1024} KB, viewBox 0 0 {W} {HGT}')
    for k, (lon, lat) in PINS.items():
        x, y = project(lon, lat)
        print(f'  {k}: [{x:.0f}, {y:.0f}]')


if __name__ == '__main__':
    main()
