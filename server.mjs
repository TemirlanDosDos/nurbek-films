import http from 'node:http';
import { createReadStream } from 'node:fs';
import { stat } from 'node:fs/promises';
import path from 'node:path';
const root = path.resolve('public');
const types = { '.html':'text/html; charset=utf-8', '.css':'text/css; charset=utf-8', '.js':'text/javascript; charset=utf-8', '.json':'application/json', '.svg':'image/svg+xml', '.webp':'image/webp', '.jpg':'image/jpeg', '.png':'image/png', '.mp4':'video/mp4', '.webm':'video/webm' };
http.createServer(async (req, res) => {
  try {
    const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    const filename = path.resolve(root, '.' + (pathname === '/' ? '/index.html' : pathname));
    if (!filename.startsWith(root + path.sep)) { res.writeHead(403).end(); return; }
    const info = await stat(filename);
    if (!info.isFile()) throw new Error('Not a file');
    const headers = { 'Content-Type': types[path.extname(filename)] || 'application/octet-stream', 'Accept-Ranges': 'bytes', 'Cache-Control':'no-cache' };
    const range = req.headers.range?.match(/^bytes=(\d+)-(\d*)$/);
    if (range) {
      const start = Number(range[1]);
      const end = Math.min(range[2] ? Number(range[2]) : info.size - 1, info.size - 1);
      if (start > end || start >= info.size) { res.writeHead(416, {'Content-Range':`bytes */${info.size}`}).end(); return; }
      res.writeHead(206, {...headers, 'Content-Length':end-start+1, 'Content-Range':`bytes ${start}-${end}/${info.size}`});
      createReadStream(filename, {start, end}).pipe(res);
    } else {
      res.writeHead(200, {...headers, 'Content-Length':info.size});
      if (req.method === 'HEAD') res.end(); else createReadStream(filename).pipe(res);
    }
  } catch { res.writeHead(404).end('Not found'); }
}).listen(4175, '127.0.0.1', () => console.log('Local: http://127.0.0.1:4175'));
