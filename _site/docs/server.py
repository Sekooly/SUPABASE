import http.server
import ssl

server_address = ('localhost', 8000)
httpd = http.server.HTTPServer(server_address, http.server.SimpleHTTPRequestHandler)
httpd.socket = ssl.wrap_socket (httpd.socket,
								certfile='./server.pem',
								server_side=True,
								ssl_version=ssl.PROTOCOL_TLS)
httpd.serve_forever()