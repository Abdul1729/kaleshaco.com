import { createServer } from "node:http";
import { createReadStream, existsSync, statSync } from "node:fs";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "dist");
const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;

const ROUTES = {
  "/": "index.html",
  "/services": "services.html",

  "/services/dpdpa": "services/dpdpa.html",
  "/services/iso": "services/iso.html",
  "/services/soc-2": "services/soc-2.html",
  "/services/soc-1": "services/soc-1.html",
  "/services/soc-3": "services/soc-3.html",
  "/services/cert-in": "services/cert-in.html",
  "/services/rbi-audit": "services/rbi-audit.html",
  "/services/sebi-audit": "services/sebi-audit.html",
  "/services/irdai-audit": "services/irdai-audit.html",
  "/services/dot": "services/dot.html",
  "/services/meity": "services/meity.html",
  "/services/other-grc": "services/other-grc.html",
  "/services/tax": "services/tax.html",
  "/services/financial-services": "services/financial-services.html",
  "/services/forensic-audit": "services/forensic-audit.html",

  "/company/about": "company/about.html",
  "/company/leadership": "company/leadership.html",
  "/company/blogs": "company/blogs.html",
  "/company/data-security-policy": "company/data-security-policy.html",
};

const CONTENT_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".json": "application/json",
};

function safeAssetPath(urlPath) {
  const decoded = decodeURIComponent(urlPath);
  const resolved = path.normalize(path.join(ROOT, decoded));
  if (!resolved.startsWith(ROOT)) return null;
  return resolved;
}

const server = createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const routeFile = ROUTES[url.pathname];

  if (routeFile) {
    const filePath = path.join(ROOT, routeFile);
    res.writeHead(200, { "Content-Type": CONTENT_TYPES[".html"] });
    createReadStream(filePath).pipe(res);
    return;
  }

  const assetPath = safeAssetPath(url.pathname);
  if (assetPath && existsSync(assetPath) && statSync(assetPath).isFile()) {
    const ext = path.extname(assetPath);
    res.writeHead(200, { "Content-Type": CONTENT_TYPES[ext] ?? "application/octet-stream" });
    createReadStream(assetPath).pipe(res);
    return;
  }

  res.writeHead(404, { "Content-Type": "text/plain" });
  res.end("Not found");
});

server.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}/`);
});
