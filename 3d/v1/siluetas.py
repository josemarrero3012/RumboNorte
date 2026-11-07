"""Saca las siluetas de Holanda, Belgica y Alemania de Natural Earth (world-atlas)."""
import json, math, os
H = os.path.dirname(os.path.abspath(__file__))
t = json.load(open(f'{H}/../datos/countries-50m.json'))
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
def dp(pts, eps):
    if len(pts) < 3: return pts
    (x1, y1), (x2, y2) = pts[0], pts[-1]
    L = math.hypot(x2 - x1, y2 - y1) or 1e-9
    best, idx = 0, 0
    for i in range(1, len(pts) - 1):
        d = abs((x2 - x1) * (y1 - pts[i][1]) - (x1 - pts[i][0]) * (y2 - y1)) / L
        if d > best: best, idx = d, i
    if best > eps:
        return dp(pts[:idx + 1], eps)[:-1] + dp(pts[idx:], eps)
    return [pts[0], pts[-1]]
def chaikin(r, n=2):
    for _ in range(n):
        o = []
        for i in range(len(r)):
            a, b = r[i], r[(i + 1) % len(r)]
            o += [(a[0] * .75 + b[0] * .25, a[1] * .75 + b[1] * .25), (a[0] * .25 + b[0] * .75, a[1] * .25 + b[1] * .75)]
        r = o
    return r
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
    s = 1.12 / max(max(abs(p[0]) for p in r), max(abs(p[1]) for p in r))
    r = [(p[0] * s, p[1] * s) for p in r]
    h = dp(r[:len(r) // 2 + 1], .028)[:-1] + dp(r[len(r) // 2:] + [r[0]], .028)[:-1]
    sm = chaikin(h, 2)
    out[{'Netherlands': 'holanda', 'Belgium': 'belgica', 'Germany': 'alemania'}[name]] = sm
json.dump(out, open(f'{H}/datos/siluetas.json', 'w'))
