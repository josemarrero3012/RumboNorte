#!/usr/bin/env python3
"""Sirve la web en localhost y recarga el navegador al guardar cambios."""
import http.server, os, sys

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'web')
PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 4321
RELOAD = b"""<script>(function(){var v;setInterval(function(){fetch('/__v').then(function(r){return r.text()}).then(function(t){if(v&&v!==t)location.reload();v=t}).catch(function(){})},800)})()</script></body>"""


def version():
    return max(os.path.getmtime(os.path.join(d, f)) for d, _, fs in os.walk(ROOT) for f in fs)


class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *a, **k):
        super().__init__(*a, directory=ROOT, **k)

    def end_headers(self):
        self.send_header('Cache-Control', 'no-store')
        super().end_headers()

    def send_bytes(self, body, kind):
        self.send_response(200)
        self.send_header('Content-Type', kind)
        self.send_header('Content-Length', str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def do_GET(self):
        path = self.path.split('?')[0]
        if path == '/__v':
            return self.send_bytes(str(version()).encode(), 'text/plain')
        if path == '/' or path.endswith('.html') or not os.path.exists(ROOT + path):
            # Todas las páginas comparten el mismo armazón: app.js elige cuál pintar según la dirección.
            with open(os.path.join(ROOT, 'index.html'), 'rb') as f:
                return self.send_bytes(f.read().replace(b'</body>', RELOAD), 'text/html; charset=utf-8')
        super().do_GET()

    def do_POST(self):
        # En local no hay Netlify: el formulario responde bien sin guardar nada.
        self.rfile.read(int(self.headers.get('Content-Length', 0)))
        self.send_bytes(b'ok', 'text/plain')

    def log_message(self, *a):
        pass


if __name__ == '__main__':
    print(f'Web en http://localhost:{PORT}')
    http.server.ThreadingHTTPServer(('127.0.0.1', PORT), Handler).serve_forever()
