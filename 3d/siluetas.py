"""Saca las siluetas de Holanda, Belgica y Alemania de Natural Earth (world-atlas).

Necesita numpy: se ejecuta con el python que trae Blender.
"""
import json, math, os
import numpy as np

EXT, PX = 1.9, 420      # lienzo: medio ancho en unidades y pixeles por unidad
SIGMA, STEP = .08, .014  # suavizado y separacion entre puntos, en unidades (más suave: sin las ondulaciones de la costa)
H = os.path.dirname(os.path.abspath(__file__))
t = json.load(open(f'{H}/datos/countries-50m.json'))
sc, tr = t['transform']['scale'], t['transform']['translate']
arcs = []
for a in t['arcs']:
    x = y = 0; pts = []
    for dx, dy in a:
        x += dx; y += dy
        pts.append((x * sc[0] + tr[0], y * sc[1] + tr[1]))
    arcs.append(pts)
def ring(ids):
    out = []
    for i in ids:
        p = arcs[i] if i >= 0 else arcs[~i][::-1]
        out += p[1:] if out else p
    return out
def area(r):
    return abs(sum(r[i][0] * r[(i + 1) % len(r)][1] - r[(i + 1) % len(r)][0] * r[i][1] for i in range(len(r)))) / 2
def contour(r):
    """Dibuja la silueta, la difumina y saca la curva de nivel: bordes limpios y sin esquinas raras."""
    n = int(EXT * 2 * PX)
    p = np.array([((x + EXT) * PX, (EXT - y) * PX) for x, y in r])
    q = np.roll(p, -1, axis=0)
    a = np.zeros((n, n))
    for row in range(n):
        y = row + .5
        hit = (p[:, 1] > y) != (q[:, 1] > y)
        xs = np.sort(p[hit, 0] + (y - p[hit, 1]) / (q[hit, 1] - p[hit, 1]) * (q[hit, 0] - p[hit, 0]))
        for x0, x1 in zip(xs[::2], xs[1::2]):
            a[row, int(x0):int(x1)] = 1
    ky, kx = np.fft.fftfreq(n)[:, None], np.fft.rfftfreq(n)[None, :]
    a = np.fft.irfft2(np.fft.rfft2(a) * np.exp(-2 * (np.pi * SIGMA * PX) ** 2 * (kx ** 2 + ky ** 2)), s=a.shape) - .5
    links = {}
    def cross(i, j, k, l):
        t = a[i, j] / (a[i, j] - a[k, l])
        return (j + (l - j) * t, i + (k - i) * t)
    pos = {}
    s = a > 0
    edge = (s[:-1, :-1] != s[1:, 1:]) | (s[:-1, 1:] != s[:-1, :-1]) | (s[1:, :-1] != s[:-1, :-1])
    for i, j in zip(*np.nonzero(edge)):
        ends = []
        for key, c in ((('h', i, j), (i, j, i, j + 1)), (('v', i, j + 1), (i, j + 1, i + 1, j + 1)), (('h', i + 1, j), (i + 1, j, i + 1, j + 1)), (('v', i, j), (i, j, i + 1, j))):
            if (a[c[0], c[1]] > 0) != (a[c[2], c[3]] > 0):
                pos[key] = cross(*c)
                ends.append(key)
        for k in range(0, len(ends) - 1, 2):
            links.setdefault(ends[k], []).append(ends[k + 1])
            links.setdefault(ends[k + 1], []).append(ends[k])
    best, seen = [], set()
    for start in links:
        if start in seen:
            continue
        loop, prev, cur = [], None, start
        while cur not in seen:
            seen.add(cur)
            loop.append(pos[cur])
            nxt = [k for k in links[cur] if k != prev]
            if not nxt:
                break
            prev, cur = cur, nxt[0]
        if len(loop) > len(best):
            best = loop
    return [(x / PX - EXT, EXT - y / PX) for x, y in best]
def resample(r):
    p = np.array(r + r[:1])
    d = np.r_[0, np.cumsum(np.hypot(*np.diff(p, axis=0).T))]
    u = np.linspace(0, d[-1], int(d[-1] / STEP), endpoint=False)
    q = np.c_[np.interp(u, d, p[:, 0]), np.interp(u, d, p[:, 1])]
    if np.sum(q[:, 0] * np.roll(q[:, 1], -1) - np.roll(q[:, 0], -1) * q[:, 1]) < 0:
        q = q[::-1]
    return [[round(float(x), 4), round(float(y), 4)] for x, y in q]
out = {}
for g in t['objects']['countries']['geometries']:
    name = g['properties']['name']
    if name not in ('Netherlands', 'Belgium', 'Germany'): continue
    polys = g['arcs'] if g['type'] == 'MultiPolygon' else [g['arcs']]
    r = max((ring(p[0]) for p in polys), key=area)
    lat0 = sum(p[1] for p in r) / len(r)
    r = [(p[0] * math.cos(math.radians(lat0)), p[1]) for p in r]
    cx = (min(p[0] for p in r) + max(p[0] for p in r)) / 2
    cy = (min(p[1] for p in r) + max(p[1] for p in r)) / 2
    r = [(p[0] - cx, p[1] - cy) for p in r]
    s = 1.52 / max(max(abs(p[0]) for p in r), max(abs(p[1]) for p in r))
    r = [(p[0] * s, p[1] * s) for p in r]
    sm = resample(contour(r))
    out[{'Netherlands': 'paises-bajos', 'Belgium': 'belgica', 'Germany': 'alemania'}[name]] = sm
    print(name, len(r), '->', len(sm), 'ext', round(max(abs(p[0]) for p in sm), 2), round(max(abs(p[1]) for p in sm), 2))
for f in (f'{H}/datos/siluetas.json', f'{H}/../web/assets/3d/siluetas.json'):
    json.dump(out, open(f, 'w'), separators=(',', ':'))
