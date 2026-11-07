"""Tres islas de Rumbo Norte, modeladas por codigo en Blender.

Uso: blender --background --python islas.py -- preview|bake
"""
import json, math, os, random, sys
import bpy, bmesh
from mathutils import Matrix, Vector

H = os.path.dirname(os.path.abspath(__file__))
MODE = sys.argv[sys.argv.index('--') + 1] if '--' in sys.argv else 'preview'
OUT = os.environ.get('RN_OUT', f'{H}/salida')
os.makedirs(OUT, exist_ok=True)
SIL = {k: [(x * 1.36, y * 1.36) for x, y in v] for k, v in json.load(open(f'{H}/datos/siluetas.json')).items()}

# ---- materiales: yeso de maqueta y un solo acento
PAL = {
    'yeso': (0.86, 0.84, 0.80), 'yeso2': (0.72, 0.70, 0.66), 'piedra': (0.55, 0.53, 0.50),
    'sombra': (0.30, 0.29, 0.28), 'acento': (0.95, 0.20, 0.012), 'verde': (0.50, 0.56, 0.43),
    'salvia': (0.62, 0.68, 0.55), 'arena': (0.76, 0.66, 0.50), 'niebla': (0.58, 0.67, 0.74), 'agua': (0.46, 0.58, 0.66),
}
ORDER = list(PAL)
YESO, YESO2, PIEDRA, SOMBRA, ACENTO, VERDE, SALVIA, ARENA, NIEBLA, AGUA = range(10)


def materials():
    out = []
    for n, c in PAL.items():
        m = bpy.data.materials.new(n)
        m.use_nodes = True
        b = m.node_tree.nodes['Principled BSDF']
        b.inputs['Base Color'].default_value = (*c, 1)
        b.inputs['Roughness'].default_value = .62
        b.inputs['Specular IOR Level'].default_value = .25
        out.append(m)
    return out


class Mesh:
    def __init__(self):
        self.bm = bmesh.new()

    def tag(self, verts, mat):
        for v in verts:
            for f in v.link_faces:
                f.material_index = mat

    def box(self, c, s, mat=YESO, rz=0, ry=0, rx=0):
        M = (Matrix.Translation(c) @ Matrix.Rotation(rz, 4, 'Z') @ Matrix.Rotation(ry, 4, 'Y')
             @ Matrix.Rotation(rx, 4, 'X') @ Matrix.Diagonal((*s, 1)))
        self.tag(bmesh.ops.create_cube(self.bm, size=1, matrix=M)['verts'], mat)

    def cone(self, c, r1, r2, h, n=16, mat=YESO, rx=0, rz=0):
        M = Matrix.Translation(c) @ Matrix.Rotation(rz, 4, 'Z') @ Matrix.Rotation(rx, 4, 'X')
        M = M @ Matrix.Translation((0, 0, h / 2))
        self.tag(bmesh.ops.create_cone(self.bm, cap_ends=True, segments=n, radius1=r1, radius2=r2, depth=h, matrix=M)['verts'], mat)

    def ball(self, c, r, mat=YESO, sz=1, sub=3):
        M = Matrix.Translation(c) @ Matrix.Diagonal((r, r, r * sz, 1))
        self.tag(bmesh.ops.create_icosphere(self.bm, subdivisions=sub, radius=1, matrix=M)['verts'], mat)

    def prism(self, pts, depth, c=(0, 0, 0), mat=YESO, rz=0, axis='y'):
        """Extruye un perfil 2D. Con axis='y' el perfil se dibuja en XZ; con 'z', en XY."""
        M = Matrix.Translation(c) @ Matrix.Rotation(rz, 4, 'Z')
        if axis == 'y':
            a = [self.bm.verts.new(M @ Vector((x, -depth / 2, z))) for x, z in pts]
            b = [self.bm.verts.new(M @ Vector((x, depth / 2, z))) for x, z in pts]
        else:
            a = [self.bm.verts.new(M @ Vector((x, y, 0))) for x, y in pts]
            b = [self.bm.verts.new(M @ Vector((x, y, depth))) for x, y in pts]
        n = len(pts)
        fs = [self.bm.faces.new(a), self.bm.faces.new(b[::-1])]
        for i in range(n):
            j = (i + 1) % n
            fs.append(self.bm.faces.new((a[i], a[j], b[j], b[i])))
        for f in fs:
            f.material_index = mat
        bmesh.ops.recalc_face_normals(self.bm, faces=fs)
        return fs

    def object(self, name, mats, origin=(0, 0, 0)):
        bmesh.ops.triangulate(self.bm, faces=self.bm.faces)
        me = bpy.data.meshes.new(name)
        self.bm.to_mesh(me)
        self.bm.free()
        for m in mats:
            me.materials.append(m)
        ob = bpy.data.objects.new(name, me)
        bpy.context.collection.objects.link(ob)
        return ob


def slab(m, pts, z0, z1, scale, mat, bevel=.02, seg=3):
    """Placa con la silueta del pais; el borde superior va redondeado."""
    p = [(x * scale, y * scale) for x, y in pts]
    a = [m.bm.verts.new((x, y, z0)) for x, y in p]
    b = [m.bm.verts.new((x, y, z1)) for x, y in p]
    n = len(p)
    faces = [m.bm.faces.new(a), m.bm.faces.new(b[::-1])]
    edges = []
    for i in range(n):
        j = (i + 1) % n
        faces.append(m.bm.faces.new((a[i], a[j], b[j], b[i])))
    for f in faces:
        f.material_index = mat
    bmesh.ops.recalc_face_normals(m.bm, faces=faces)
    m.bm.edges.ensure_lookup_table()
    rim = [e for e in m.bm.edges if e.verts[0] in set(a) | set(b) and e.verts[1] in set(a) | set(b)
           and abs(e.verts[0].co.z - e.verts[1].co.z) < 1e-6]
    if bevel:
        bmesh.ops.bevel(m.bm, geom=rim, offset=bevel, segments=seg, profile=.5, affect='EDGES', clamp_overlap=True)


def strata(m, pts, top):
    slab(m, pts, -.06, 0, 1, top, .02, 3)
    slab(m, pts, -.3, -.06, .985, YESO, .03, 3)
    slab(m, pts, -.48, -.3, .9, YESO2, .03, 3)
    slab(m, pts, -.62, -.48, .76, PIEDRA, .03, 3)
    slab(m, pts, -.72, -.62, .56, SOMBRA, .03, 2)


# ---- pequenas piezas
def gable_house(m, x, y, w=.15, h=.34, d=.2, mat=YESO, rz=0):
    s = w / 6
    pts = [(-w / 2, 0), (w / 2, 0), (w / 2, h), (w / 2 - s, h), (w / 2 - s, h + s * 1.2), (w / 2 - 2 * s, h + s * 1.2),
           (w / 2 - 2 * s, h + s * 2.4), (s * .6, h + s * 2.4), (s * .6, h + s * 3.6), (-s * .6, h + s * 3.6), (-s * .6, h + s * 2.4),
           (-w / 2 + 2 * s, h + s * 2.4), (-w / 2 + 2 * s, h + s * 1.2), (-w / 2 + s, h + s * 1.2), (-w / 2 + s, h), (-w / 2, h)]
    m.prism(pts, d, (x, y, 0), mat, rz)
    R = Matrix.Rotation(rz, 4, 'Z')
    for r in range(2):
        for c in (-1, 1):
            p = R @ Vector((c * w * .22, -d / 2 - .002, h * (.42 + .32 * r)))
            m.box((x + p.x, y + p.y, p.z), (w * .2, .006, h * .17), SOMBRA, rz)
    p = R @ Vector((0, -d / 2 - .002, h * .1))
    m.box((x + p.x, y + p.y, p.z), (w * .24, .006, h * .2), SOMBRA, rz)


def inside(pts, x, y):
    c = False
    for i in range(len(pts)):
        (x1, y1), (x2, y2) = pts[i], pts[(i + 1) % len(pts)]
        if (y1 > y) != (y2 > y) and x < (x2 - x1) * (y - y1) / (y2 - y1) + x1:
            c = not c
    return c


def forest(m, name, n, seed, keep):
    """Arboles repartidos dentro de la silueta, lejos de las zonas en `keep` (x0, y0, x1, y1)."""
    r = random.Random(seed)
    pts = [(x * .9, y * .9) for x, y in SIL[name]]
    done, tries = [], 0
    while len(done) < n and tries < 4000:
        tries += 1
        x, y = r.uniform(-1.5, 1.5), r.uniform(-1.6, 1.6)
        if not inside(pts, x, y) or any(a < x < c and b < y < d for a, b, c, d in keep):
            continue
        if any(math.hypot(x - p, y - q) < .13 for p, q in done):
            continue
        done.append((x, y))
        tree(m, x, y, r.uniform(.8, 1.2))


def ribbon(m, pts, w, mat=None):
    mat = AGUA if mat is None else mat
    left, right = [], []
    for i, (x, y) in enumerate(pts):
        a, b = pts[max(i - 1, 0)], pts[min(i + 1, len(pts) - 1)]
        dx, dy = b[0] - a[0], b[1] - a[1]
        L = math.hypot(dx, dy) or 1
        nx, ny = -dy / L * w / 2, dx / L * w / 2
        left.append((x + nx, y + ny))
        right.append((x - nx, y - ny))
    m.prism(left + right[::-1], .008, (0, 0, -.002), mat, axis='z')


def greenhouse(m, x, y, n=3):
    for i in range(n):
        m.prism([(-.05, 0), (.05, 0), (.05, .07), (0, .11), (-.05, .07)], .3, (x + i * .1, y, 0), YESO)
        m.box((x + i * .1, y - .151, .05), (.06, .004, .05), SOMBRA)


def tree(m, x, y, s=1, mat=VERDE):
    m.cone((x, y, 0), .012 * s, .009 * s, .06 * s, 6, YESO2)
    m.ball((x, y, .1 * s), .062 * s, mat, 1.1, 2)


def person(m, x, y, mat=YESO, s=1):
    m.cone((x, y, 0), .017 * s, .012 * s, .055 * s, 8, mat)
    m.ball((x, y, .07 * s), .014 * s, mat, 1, 2)


def windmill(m, mats, x, y):
    m.cone((x, y, 0), .17, .105, .5, 8, YESO)
    m.cone((x, y, .19), .205, .205, .016, 8, YESO2)
    m.cone((x, y, .5), .115, .09, .03, 8, YESO2)
    m.ball((x, y, .545), .095, ACENTO, .72, 3)
    for a in range(8):
        t = a / 8 * math.tau
        m.box((x + math.cos(t) * .2, y + math.sin(t) * .2, .1), (.008, .008, .19), YESO2)
    hub = (x, y - .115, .55)
    s = Mesh()
    s.cone((0, 0, 0), .017, .017, .06, 10, YESO2, rx=math.pi / 2)
    for k in range(4):
        t = k * math.pi / 2
        R = Matrix.Rotation(t, 4, 'Y')
        def P(px, pz):
            return R @ Vector((px, -.022, pz))
        s.box(P(0, .205), (.012, .01, .4), YESO2, ry=t)
        s.box(P(.03, .24), (.044, .008, .3), ACENTO, ry=t)
        for i in range(6):
            s.box(P(.03, .1 + i * .056), (.056, .012, .006), YESO, ry=t)
    o = s.object('gira_z_molino', mats)
    o.location = hub
    return o


def turbine(m, mats, x, y, h=.72, name='gira_z_turbina'):
    m.cone((x, y, 0), .022, .009, h, 12, YESO)
    m.box((x, y - .005, h + .005), (.03, .07, .032), YESO2)
    s = Mesh()
    s.ball((0, -.04, 0), .019, YESO, 1, 2)
    for k in range(3):
        t = k * math.tau / 3
        R = Matrix.Rotation(t, 4, 'Y')
        pts = [(-.012, .01), (.017, .01), (.012, .11), (.002, .3), (-.003, .3)]
        M = R
        v = [s.bm.verts.new(M @ Vector((a, -.044, b))) for a, b in pts]
        u = [s.bm.verts.new(M @ Vector((a, -.036, b))) for a, b in pts]
        fs = [s.bm.faces.new(v), s.bm.faces.new(u[::-1])]
        for i in range(len(v)):
            j = (i + 1) % len(v)
            fs.append(s.bm.faces.new((v[i], v[j], u[j], u[i])))
        bmesh.ops.recalc_face_normals(s.bm, faces=fs)
    o = s.object(name, mats)
    o.location = (x, y, h + .005)
    return o


def brandenburg(m, x, y):
    m.box((x, y, .012), (.86, .3, .024), YESO2)
    for r in (-.085, .085):
        for i in range(6):
            cx = x - .3 + i * .12
            m.cone((cx, y + r, .024), .021, .018, .29, 12, YESO)
            m.box((cx, y + r, .031), (.05, .05, .014), YESO2)
            m.box((cx, y + r, .31), (.05, .05, .012), YESO2)
    for i in range(5):
        cx = x - .24 + i * .12
        m.box((cx, y, .17), (.022, .12, .29), YESO)
    m.box((x, y, .345), (.78, .28, .05), YESO)
    m.box((x, y, .378), (.8, .3, .016), YESO2)
    m.prism([(-.26, 0), (.26, 0), (.2, .05), (.1, .05), (.1, .09), (-.1, .09), (-.1, .05), (-.2, .05)], .22, (x, y, .386), YESO)
    m.box((x, y, .5), (.1, .05, .028), ACENTO)
    for k in (-1, 1):
        m.box((x + k * .03, y - .01, .535), (.016, .04, .05), ACENTO)
    m.ball((x, y + .012, .58), .018, ACENTO, 1.4, 2)
    for k in (-1, 1):
        m.box((x + k * .52, y, .1), (.18, .24, .2), YESO)
        m.box((x + k * .52, y, .205), (.2, .26, .012), YESO2)
        for i in (-1, 1):
            m.box((x + k * .52 + i * .05, y - .122, .09), (.03, .006, .12), SOMBRA)


def factory(m, x, y, rz=0):
    pts = [(-.33, 0), (.33, 0), (.33, .14)]
    n = 4
    for i in range(n):
        xr = .33 - i * .165
        pts += [(xr, .235), (xr - .165, .14)] if i < n - 1 else [(xr, .235), (xr - .165, .14)]
    m.prism(pts, .34, (x, y, 0), YESO, rz)
    R = Matrix.Rotation(rz, 4, 'Z')
    for i in range(n):
        xr = .33 - i * .165 - .004
        p = R @ Vector((xr, 0, .19))
        m.box((x + p.x, y + p.y, p.z), (.008, .3, .082), ACENTO, rz)
    for k in range(5):
        p = R @ Vector((-.26 + k * .13, -.172, .07))
        m.box((x + p.x, y + p.y, p.z), (.075, .006, .08), SOMBRA, rz)
    for k, h in ((-.2, .45), (-.1, .38)):
        p = R @ Vector((k, .22, 0))
        m.cone((x + p.x, y + p.y, 0), .035, .024, h, 14, YESO2)
        m.cone((x + p.x, y + p.y, h - .03), .027, .027, .018, 14, ACENTO)


def belfry(m, x, y):
    m.box((x, y, .11), (.24, .24, .22), YESO)
    m.box((x, y, .225), (.26, .26, .014), YESO2)
    m.box((x, y, .36), (.2, .2, .27), YESO)
    m.box((x, y, .5), (.22, .22, .014), YESO2)
    m.cone((x, y, .505), .1, .1, .17, 8, YESO, rz=math.pi / 8)
    m.cone((x, y, .67), .112, .112, .012, 8, YESO2, rz=math.pi / 8)
    m.cone((x, y, .68), .07, .012, .13, 8, ACENTO, rz=math.pi / 8)
    m.ball((x, y, .82), .012, ACENTO, 1, 2)
    for z, w, hh in ((.11, .08, .13), (.36, .07, .17)):
        m.box((x, y - .122 if z < .2 else y - .102, z), (w, .006, hh), SOMBRA)
    m.box((x, y - .102, .585), (.05, .006, .09), SOMBRA)
    for a in (-1, 1):
        for b in (-1, 1):
            m.cone((x + a * .106, y + b * .106, .5), .012, .004, .1, 6, YESO2)
    m.box((x + .26, y + .02, .08), (.3, .17, .16), YESO)
    m.prism([(-.15, 0), (.15, 0), (0, .09)], .17, (x + .26, y + .02, .16), YESO2)
    m.box((x - .26, y + .02, .08), (.3, .17, .16), YESO)
    m.prism([(-.15, 0), (.15, 0), (0, .09)], .17, (x - .26, y + .02, .16), YESO2)


def containers(m, x, y):
    rows = [(0, 0, ACENTO), (1, 0, YESO), (2, 0, YESO2), (0, 1, YESO2), (1, 1, ACENTO), (0, 2, YESO)]
    for col, lvl, c in rows:
        m.box((x + col * .136, y, .03 + lvl * .058), (.128, .06, .052), c)
    for col, lvl, c in [(0, 0, YESO), (1, 0, YESO2), (2, 0, ACENTO), (1, 1, YESO)]:
        m.box((x + col * .136, y + .072, .03 + lvl * .058), (.128, .06, .052), c)


def crane(m, mats, x, y):
    for a in (-1, 1):
        for b in (-1, 1):
            m.box((x + a * .07, y + b * .07, .14), (.016, .016, .28), YESO)
    m.box((x, y, .29), (.18, .18, .022), YESO2)
    for a in (-1, 1):
        m.box((x + a * .07, y, .13), (.012, .16, .012), YESO2)
    s = Mesh()
    s.box((0, 0, .03), (.09, .09, .06), YESO)
    s.box((0, -.22, .075), (.024, .62, .022), ACENTO)
    s.box((0, .14, .05), (.05, .14, .04), YESO2)
    s.cone((0, 0, .06), .012, .006, .13, 8, YESO2)
    s.box((0, -.42, -.09), (.004, .004, .3), SOMBRA)
    s.box((0, -.42, -.245), (.06, .03, .016), SOMBRA)
    o = s.object('gira_y_grua', mats)
    o.location = (x, y, .3)
    return o


def arrow(mats):
    """La flecha del logotipo, en volumen: marca el pais elegido."""
    m = Mesh()
    m.prism([(0, .19), (.13, -.15), (0, -.07), (-.13, -.15)], .05, (0, 0, -.025), ACENTO, axis='z')
    o = m.object('flecha', mats)
    return o


# ---- las tres islas
def holanda(mats):
    m = Mesh()
    strata(m, SIL['holanda'], SALVIA)
    objs = [windmill(m, mats, -.02, .33)]
    for i, (x, y, w, h, mt) in enumerate([(-.5, -.3, .15, .3, YESO), (-.35, -.3, .13, .36, YESO), (-.205, -.3, .15, .28, YESO2),
                                          (-.06, -.3, .13, .34, YESO), (.09, -.3, .15, .3, YESO), (.235, -.3, .13, .25, YESO2)]):
        gable_house(m, x, y, w, h, .2, mt)
    ribbon(m, [(-.82, -.5), (.56, -.5)], .11)
    m.box((-.13, -.5, .012), (.12, .15, .012), YESO)
    for i in range(7):
        c = ACENTO if i % 2 == 0 else VERDE
        m.box((.3 + i * .066, .24, .012), (.056, .52, .024), c)
    greenhouse(m, -.72, .1)
    forest(m, 'holanda', 16, 7, [(-.8, -.72, .62, -.12), (-.4, .05, .3, .7), (.2, -.1, .85, .6), (-.82, -.1, -.38, .3)])
    person(m, .02, -.66, ACENTO)
    person(m, -.1, -.64)
    person(m, -.3, -.66)
    return m, objs


def alemania(mats):
    m = Mesh()
    strata(m, SIL['alemania'], NIEBLA)
    brandenburg(m, -.02, .08)
    factory(m, -.08, -.56)
    objs = [turbine(m, mats, -.28, .68, .62, 'gira_z_turbina1'), turbine(m, mats, .1, .84, .72, 'gira_z_turbina2'),
            turbine(m, mats, .3, .52, .55, 'gira_z_turbina3')]
    ribbon(m, [(-.72, -1.02), (-.7, -.7), (-.8, -.3), (-.76, .2), (-.86, .6)], .065)
    forest(m, 'alemania', 30, 11, [(-.72, -.16, .68, .38), (-.5, -.82, .42, -.24), (-.42, .4, .48, 1.0), (-.98, -1.4, -.66, .7)])
    m.box((-.02, -.14, .004), (.14, .3, .008), YESO2)
    person(m, -.02, -.1, ACENTO)
    person(m, .06, -.16)
    person(m, -.09, -.2)
    return m, objs


def belgica(mats):
    m = Mesh()
    strata(m, SIL['belgica'], ARENA)
    belfry(m, -.1, -.08)
    objs = [crane(m, mats, .02, .56)]
    containers(m, -.62, .3)
    ribbon(m, [(-.52, -.12), (-.42, .05), (-.26, .18), (-.14, .46), (-.2, .86)], .07)
    for x, y, h, mt in ((.38, -.22, .28, YESO), (.5, -.22, .32, YESO2), (.62, -.22, .26, YESO)):
        gable_house(m, x, y, .115, h, .17, mt)
    m.box((-.1, -.3, .004), (.34, .14, .008), YESO2)
    forest(m, 'belgica', 20, 5, [(-.6, -.42, .36, .2), (.28, -.36, .74, -.02), (-.72, .18, .3, .95), (-.9, -.42, -.1, .5)])
    person(m, -.1, -.33, ACENTO)
    person(m, -.02, -.34)
    person(m, -.2, -.36)
    return m, objs


BUILD = {'holanda': holanda, 'alemania': alemania, 'belgica': belgica}
POS = {'belgica': (-3.3, -.35, .1), 'holanda': (0, .75, .3), 'alemania': (3.3, -.25, .18)}
POS_TALL = {'holanda': (-.2, 4.9, .25), 'alemania': (.1, 0, .1), 'belgica': (-.1, -4.6, .18)}


def build(mats):
    groups = {}
    for name, fn in BUILD.items():
        m, objs = fn(mats)
        base = m.object(f'base_{name}', mats)
        root = bpy.data.objects.new(f'isla_{name}', None)
        bpy.context.collection.objects.link(root)
        for o in [base] + objs:
            o.parent = root
        groups[name] = (root, [base] + objs)
    return groups


def world(strength=.58):
    w = bpy.data.worlds.new('w')
    w.use_nodes = True
    w.node_tree.nodes['Background'].inputs[0].default_value = (1, .985, .96, 1)
    w.node_tree.nodes['Background'].inputs[1].default_value = strength
    bpy.context.scene.world = w


def sun():
    s = bpy.data.lights.new('sol', 'SUN')
    s.energy = 1.65
    s.angle = math.radians(14)
    s.color = (1, .95, .88)
    o = bpy.data.objects.new('sol', s)
    bpy.context.collection.objects.link(o)
    o.rotation_euler = (math.radians(52), math.radians(-6), math.radians(-38))
    return o


def setup(samples):
    sc = bpy.context.scene
    sc.render.engine = 'CYCLES'
    p = bpy.context.preferences.addons['cycles'].preferences
    p.compute_device_type = 'OPTIX'
    p.get_devices()
    for d in p.devices:
        d.use = d.type == 'OPTIX'
    sc.cycles.device = 'GPU'
    sc.cycles.samples = samples
    sc.cycles.use_denoising = True
    sc.view_settings.view_transform = 'Standard'
    sc.view_settings.look = 'None'
    return sc


def clear():
    for o in list(bpy.data.objects):
        bpy.data.objects.remove(o)


def ground():
    bpy.ops.mesh.primitive_plane_add(size=60, location=(0, 0, -1.05))
    g = bpy.context.object
    g.name = 'suelo'
    mt = bpy.data.materials.new('suelo')
    mt.use_nodes = True
    b = mt.node_tree.nodes['Principled BSDF']
    b.inputs['Base Color'].default_value = (.86, .86, .84, 1)
    b.inputs['Roughness'].default_value = .9
    b.inputs['Specular IOR Level'].default_value = 0
    g.data.materials.append(mt)
    return g


def preview():
    clear()
    mats = materials()
    groups = build(mats)
    tall = MODE == 'poster-movil'
    for n, (root, _) in groups.items():
        root.location = (POS_TALL if tall else POS)[n]
    g = ground()
    world()
    sun()
    sc = setup(int(os.environ.get('RN_SPP', 160)))
    if MODE != 'preview':
        g.is_shadow_catcher = True
        sc.render.film_transparent = True
    cam = bpy.data.cameras.new('cam')
    # Misma camara que la web (paises-3d.js) para que el poster funda sin salto con la escena.
    half = math.tan(math.radians(16.3 / 2))
    w, h = (750, 2280) if tall else (1800, 800)
    dist = 1.85 / (half * w / h) if tall else max(5.3 / (half * w / h), 2.4 / half)
    look = .2 if tall else .35
    cam.sensor_fit = 'VERTICAL'
    cam.lens = cam.sensor_height / 2 / half
    co = bpy.data.objects.new('cam', cam)
    bpy.context.collection.objects.link(co)
    tilt = math.radians(47)
    co.location = (0, -look - math.cos(tilt) * dist, math.sin(tilt) * dist)
    co.rotation_euler = (math.radians(43), 0, 0)
    sc.camera = co
    sc.render.resolution_x, sc.render.resolution_y = w, h
    sc.render.filepath = f'{OUT}/{MODE}.png'
    bpy.ops.render.render(write_still=True)


def bake_island(name, groups, size, samples):
    root, objs = groups[name]
    for n, (r, os_) in groups.items():
        for o in os_:
            o.hide_render = n != name
    bpy.ops.object.select_all(action='DESELECT')
    for o in objs:
        o.select_set(True)
    bpy.context.view_layer.objects.active = objs[0]
    bpy.ops.object.mode_set(mode='EDIT')
    bpy.ops.mesh.select_all(action='SELECT')
    bpy.ops.uv.smart_project(angle_limit=math.radians(60), island_margin=.0035, scale_to_bounds=False)
    bpy.ops.object.mode_set(mode='OBJECT')
    img = bpy.data.images.new(f'luz_{name}', size, size, float_buffer=True)
    nodes = []
    for mt in bpy.data.materials:
        if not mt.node_tree or mt.name == 'suelo':
            continue
        n = mt.node_tree.nodes.new('ShaderNodeTexImage')
        n.image = img
        mt.node_tree.nodes.active = n
        nodes.append((mt, n))
    sc = bpy.context.scene
    sc.cycles.samples = samples
    b = sc.render.bake
    b.margin = 8
    b.use_pass_direct = b.use_pass_indirect = True
    b.use_pass_diffuse = True
    b.use_pass_glossy = b.use_pass_transmission = False
    b.use_pass_emit = True
    bpy.ops.object.bake(type='COMBINED', use_clear=True)
    img.save_render(f'{OUT}/luz_{name}.png', scene=sc)
    for mt, n in nodes:
        mt.node_tree.nodes.remove(n)
    bpy.ops.object.select_all(action='DESELECT')
    for o in [root] + objs:
        o.select_set(True)
    bpy.context.view_layer.objects.active = root
    bpy.ops.export_scene.gltf(filepath=f'{OUT}/{name}.glb', export_format='GLB', use_selection=True,
                              export_materials='NONE', export_normals=False, export_tangents=False, export_apply=True)
    print('HECHO', name, sum(len(o.data.polygons) for o in objs), 'tris')


def bake():
    clear()
    mats = materials()
    groups = build(mats)
    ground()
    world()
    sun()
    setup(int(os.environ.get('RN_SPP', 400)))
    size = int(os.environ.get('RN_TEX', 2048))
    for n in groups:
        bake_island(n, groups, size, int(os.environ.get('RN_SPP', 400)))


if MODE == 'bake':
    bake()
if MODE in ('preview', 'poster', 'poster-movil'):
    preview()
