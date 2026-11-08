"""Las tres placas de Rumbo Norte, modeladas por codigo en Blender.

Uso: blender --background --python islas.py -- preview|bake
Despues del horneado, exportar.py pasa los modelos y la luz a la web.
"""
import json, math, os, sys
import bpy, bmesh
from mathutils import Matrix, Vector
from mathutils.geometry import tessellate_polygon

H = os.path.dirname(os.path.abspath(__file__))
MODE = sys.argv[sys.argv.index('--') + 1] if '--' in sys.argv else 'preview'
OUT = os.environ.get('RN_OUT', f'{H}/salida')
os.makedirs(OUT, exist_ok=True)
SIL = json.load(open(f'{H}/datos/siluetas.json'))

# ---- materiales: yeso blanco y un gris de apoyo. El camino y la bandera los dibuja la web.
PAL = {'yeso': (0.93, 0.93, 0.925), 'yeso2': (0.66, 0.66, 0.65)}
YESO, YESO2 = range(2)
GROSOR = .3
# Mastil y bandera: aqui solo dejan su sombra en la luz. Los mismos datos estan en paises-3d.js.
MASTIL, BANDERA_W, BANDERA_H = .92, .6, .4
BANDERA = {'paises-bajos': (.25, .55), 'alemania': (0, .25), 'belgica': (.12, .35)}


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


def mesh_object(name, bm, mats):
    me = bpy.data.meshes.new(name)
    bm.to_mesh(me)
    bm.free()
    for m in mats:
        me.materials.append(m)
    ob = bpy.data.objects.new(name, me)
    bpy.context.collection.objects.link(ob)
    return ob


def placa(name, mats):
    """Placa con la silueta del pais. Paredes suaves y UV a mano: la cara de arriba
    ocupa casi toda la textura y la pared es una sola tira, sin cortes entre tramos."""
    pts = SIL[name]
    n = len(pts)
    bm = bmesh.new()
    uv = bm.loops.layers.uv.new('luz')
    low = [bm.verts.new((x, y, -GROSOR)) for x, y in pts]
    top = [bm.verts.new((x, y, 0)) for x, y in pts]
    dist = [0]
    for i in range(n):
        (x1, y1), (x2, y2) = pts[i], pts[(i + 1) % n]
        dist.append(dist[-1] + math.hypot(x2 - x1, y2 - y1))
    for i in range(n):
        j = (i + 1) % n
        f = bm.faces.new((low[i], low[j], top[j], top[i]))
        f.material_index = YESO2
        f.smooth = True
        u0, u1 = .01 + .98 * dist[i] / dist[-1], .01 + .98 * dist[i + 1] / dist[-1]
        for loop, c in zip(f.loops, ((u0, .008), (u1, .008), (u1, .048), (u0, .048))):
            loop[uv].uv = c
    x0, y0 = min(p[0] for p in pts), min(p[1] for p in pts)
    s = .93 / max(max(p[0] for p in pts) - x0, max(p[1] for p in pts) - y0)
    walls = list(bm.faces)
    # La tapa, triangulada aqui: el triangulador de bmesh en Blender 5 rellenaba por fuera de las bahias
    # (triangulos fuera de la costa que salian negros en la web). tessellate_polygon no lo hace.
    for t in tessellate_polygon([[v.co for v in top]]):
        a, b, c = (pts[i] for i in t)
        if (b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0]) < 0:
            t = t[::-1]
        cap = bm.faces.new([top[i] for i in t])
        for loop in cap.loops:
            loop[uv].uv = (.01 + (loop.vert.co.x - x0) * s, .06 + (loop.vert.co.y - y0) * s)
    bmesh.ops.triangulate(bm, faces=walls)
    return mesh_object(f'base_{name}', bm, mats)


def sombras(name, mats):
    """Lo que solo cuenta para la luz: el fondo de la placa, el mastil y la bandera."""
    bm = bmesh.new()
    bm.faces.new([bm.verts.new((x, y, -GROSOR)) for x, y in reversed(SIL[name])])
    x, y = BANDERA[name]
    bmesh.ops.create_cone(bm, cap_ends=True, segments=8, radius1=.011, radius2=.011, depth=MASTIL,
                          matrix=Matrix.Translation((x, y, MASTIL / 2)))
    bmesh.ops.create_cube(bm, size=1, matrix=Matrix.Translation((x + BANDERA_W / 2, y, MASTIL - BANDERA_H / 2 - .02))
                          @ Matrix.Diagonal((BANDERA_W, .01, BANDERA_H, 1)))
    return mesh_object(f'sombras_{name}', bm, mats)


POS = {'belgica': (-3.3, -.35, .1), 'paises-bajos': (0, .4, .3), 'alemania': (3.3, -.25, .18)}


def build(mats):
    groups = {}
    for name in SIL:
        base, extra = placa(name, mats), sombras(name, mats)
        root = bpy.data.objects.new(f'isla_{name}', None)
        bpy.context.collection.objects.link(root)
        base.parent = extra.parent = root
        groups[name] = (root, base, extra)
    return groups


def world(strength=.82):
    w = bpy.data.worlds.new('w')
    w.use_nodes = True
    w.node_tree.nodes['Background'].inputs[0].default_value = (1, .985, .96, 1)
    w.node_tree.nodes['Background'].inputs[1].default_value = strength
    bpy.context.scene.world = w


def sun():
    s = bpy.data.lights.new('sol', 'SUN')
    s.energy = 1.35
    s.angle = math.radians(14)
    s.color = (1, .98, .95)
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
    for n, (root, _, _) in groups.items():
        root.location = POS[n]
    ground()
    world()
    sun()
    sc = setup(int(os.environ.get('RN_SPP', 160)))
    cam = bpy.data.cameras.new('cam')
    # Misma camara que la web (paises-3d.js).
    half = math.tan(math.radians(16.3 / 2))
    w, h = 1800, 800
    dist = max(5.3 / (half * w / h), 2.4 / half)
    look = .35
    cam.sensor_fit = 'VERTICAL'
    cam.lens = cam.sensor_height / 2 / half
    co = bpy.data.objects.new('cam', cam)
    bpy.context.collection.objects.link(co)
    tilt = math.radians(47)
    co.location = (0, -look - math.cos(tilt) * dist, math.sin(tilt) * dist)
    co.rotation_euler = (math.radians(43), 0, 0)
    sc.camera = co
    sc.render.resolution_x, sc.render.resolution_y = w, h
    sc.render.filepath = f'{OUT}/preview.png'
    bpy.ops.render.render(write_still=True)


def bake_island(name, groups, size, samples):
    root, base, _ = groups[name]
    for n, (_, a, b) in groups.items():
        a.hide_render = b.hide_render = n != name
    bpy.ops.object.select_all(action='DESELECT')
    base.select_set(True)
    bpy.context.view_layer.objects.active = base
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
    root.select_set(True)
    bpy.context.view_layer.objects.active = root
    bpy.ops.export_scene.gltf(filepath=f'{OUT}/{name}.glb', export_format='GLB', use_selection=True,
                              export_materials='NONE', export_normals=False, export_tangents=False, export_apply=True)
    print('HECHO', name, len(base.data.polygons), 'caras')


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
if MODE == 'preview':
    preview()
