import os
from http.server import SimpleHTTPRequestHandler, HTTPServer
import subprocess


class RequestHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header(
            "Cache-Control", "no-store, no-cache, must-revalidate")
        return super().end_headers()


if __name__ == "__main__":
    subprocess.Popen(["python", "scripts/createList.py"])
    server_address = ("", 3000)
    httpd = HTTPServer(server_address, RequestHandler)
    httpd.serve_forever()
