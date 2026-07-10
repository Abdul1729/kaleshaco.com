import * as esbuild from "esbuild";
import { mkdirSync, copyFileSync, readFileSync, writeFileSync, readdirSync, rmSync } from "node:fs";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");
const DIST = path.join(ROOT, "dist");

rmSync(DIST, { recursive: true, force: true });

const ENTRIES = {
  landing: "src/landing.tsx",
  services: "src/services.tsx",
  company: "src/company.tsx",
  serviceCategory: "src/serviceCategory.tsx",
};

const HTML_PAGES = [
  { src: "index.html", out: "index.html", entry: "landing" },
  { src: "services.html", out: "services.html", entry: "services" },
];

function collectHtml(dir) {
  return readdirSync(path.join(ROOT, dir))
    .filter((f) => f.endsWith(".html"))
    .map((f) => ({
      src: `${dir}/${f}`,
      out: `${dir}/${f}`,
      entry: dir === "company" ? "company" : "serviceCategory",
    }));
}

HTML_PAGES.push(...collectHtml("company"), ...collectHtml("services"));

await esbuild.build({
  entryPoints: Object.entries(ENTRIES).map(([name, entry]) => ({ in: entry, out: name })),
  bundle: true,
  outdir: DIST,
  format: "esm",
  splitting: true,
  minify: true,
  sourcemap: false,
  loader: {
    ".png": "file",
    ".svg": "file",
    ".jpg": "file",
  },
  assetNames: "assets/[name]-[hash]",
  chunkNames: "chunks/[name]-[hash]",
  entryNames: "[name]",
  jsx: "automatic",
});

for (const page of HTML_PAGES) {
  const html = readFileSync(path.join(ROOT, page.src), "utf8");
  const rewritten = html
    .replace(
      /<script type="module" src="[^"]*"><\/script>/,
      `<link rel="stylesheet" href="/${page.entry}.css">\n    <script type="module" src="/${page.entry}.js"></script>`,
    );
  const outPath = path.join(DIST, page.out);
  mkdirSync(path.dirname(outPath), { recursive: true });
  writeFileSync(outPath, rewritten);

  // Also serve at the extension-less clean URL (e.g. /services/soc-2/index.html)
  // in case the static host doesn't apply the .htaccess rewrite rules.
  if (page.out !== "index.html") {
    const cleanDir = path.join(DIST, page.out.replace(/\.html$/, ""));
    mkdirSync(cleanDir, { recursive: true });
    writeFileSync(path.join(cleanDir, "index.html"), rewritten);
  }
}

copyFileSync(path.join(ROOT, "public/.htaccess"), path.join(DIST, ".htaccess"));

console.log(`Built ${HTML_PAGES.length} pages and ${Object.keys(ENTRIES).length} entry bundles into dist/`);
