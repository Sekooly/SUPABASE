import static
from os import path

class ExtensionlessCling(static.Cling):
    """
    Serve static extensionless files.
    
    Serve static files just like static.Cling with the added
    ability to serve a file without its file extension. For
    example, a request for ``/foo/bar`` would serve the file
    ``/foo/bar.html`` if it exists.
    
    A subclass of static.Cling: https://github.com/rmohr/static3
    """
    
    default_extension = '.html'
    
    def _full_path(self, path_info):
        """Return the full path from which to read."""
        pth = self.root + path_info
        if (not path.exists(pth) and
                path.splitext(pth)[1] == '' and
                path.isfile(pth + self.default_extension)):
            pth += self.default_extension
        return pth


if __name__ == '__main__':
    from wsgiref.simple_server import make_server
    root = path.dirname(path.abspath(__file__))
    app = ExtensionlessCling(root)
    make_server("localhost", 8888, app).serve_forever()