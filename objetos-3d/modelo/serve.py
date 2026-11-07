import http.server, os, re, sys

OUT = sys.argv[2]
os.makedirs(OUT, exist_ok=True)


class H(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-store')
        super().end_headers()

    def do_POST(self):
        name = re.sub(r'[^a-z0-9.-]', '', self.path.rsplit('/', 1)[-1])
        data = self.rfile.read(int(self.headers['Content-Length']))
        with open(os.path.join(OUT, name), 'wb') as f:
            f.write(data)
        self.send_response(200)
        self.end_headers()

    def log_message(self, *a):
        pass


http.server.ThreadingHTTPServer(('127.0.0.1', int(sys.argv[1])), H).serve_forever()
