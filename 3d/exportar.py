"""Pasa lo que sale del horneado a web/assets/3d."""
import os, shutil
from PIL import Image

H = os.path.dirname(os.path.abspath(__file__))
for n in ('paises-bajos', 'alemania', 'belgica'):
    shutil.copy(f'{H}/salida/{n}.glb', f'{H}/../web/assets/3d/{n}.glb')
    Image.open(f'{H}/salida/luz_{n}.png').convert('RGB').save(f'{H}/../web/assets/3d/luz-{n}.webp', quality=84, method=6)
