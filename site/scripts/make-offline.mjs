// Builds an offline copy of the site that opens by double-clicking — no server, no internet.
// Usage:  npm run offline
// Output: ../Shaina-Furman-website-preview.zip  (homepage, CV page and CV PDF, everything packed inside)
import { readFileSync, writeFileSync, mkdirSync, rmSync, copyFileSync, existsSync } from "node:fs";
import { join, dirname, resolve } from "node:path";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { build } from "esbuild";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const outName = "Shaina-Furman-website-preview";
const outDir = join(root, "..", outName);
const zipPath = join(root, "..", `${outName}.zip`);

const HOME = "Open me - Shaina Furman website.html";
const CV = "cv.html";
const homeHref = encodeURI(HOME);

const dataUri = (file, type) => `data:${type};base64,${readFileSync(file).toString("base64")}`;

// ---- CSS: keep only the Latin font files, embed them ----
function inlineCss(href) {
  let css = readFileSync(join(dist, href), "utf8");
  css = css.replace(/@font-face\{[^}]*\}/g, (block) => {
    const m = block.match(/url\((?:"|')?(\/_astro\/[^)"']+\.woff2)(?:"|')?\)/);
    if (!m) return block;
    if (!/-latin-wght-normal\./.test(m[1])) return ""; // drop other alphabets to keep the file small
    return block.replace(m[0], `url(${dataUri(join(dist, m[1]), "font/woff2")})`);
  });
  return css;
}

// ---- JS: bundle each external script into one self-contained piece ----
async function inlineJs(src) {
  const result = await build({
    entryPoints: [join(dist, src)],
    bundle: true,
    format: "iife",
    minify: true,
    write: false,
    logLevel: "silent",
  });
  return result.outputFiles[0].text.replace(/<\/script/gi, "<\\/script");
}

async function convert(htmlFile, { isHome }) {
  let html = readFileSync(join(dist, htmlFile), "utf8");

  // Stylesheets
  for (const [tag, href] of [...html.matchAll(/<link rel="stylesheet" href="(\/_astro\/[^"]+\.css)"[^>]*>/g)]) {
    html = html.replace(tag, () => `<style>${inlineCss(href)}</style>`);
  }
  // External scripts
  for (const [tag, src] of [...html.matchAll(/<script type="module" src="(\/_astro\/[^"]+\.js)"><\/script>/g)]) {
    const code = await inlineJs(src);
    html = html.replace(tag, () => `<script>${code}</script>`);
  }

  // Icons: embed favicon, drop things that only matter on a real website
  html = html.replace('href="/favicon.svg"', () => `href="${dataUri(join(dist, "favicon.svg"), "image/svg+xml")}"`);
  html = html.replace(/<link rel="(apple-touch-icon|sitemap|canonical)"[^>]*>/g, "");

  // Links between pages
  html = html
    .replaceAll('href="/cv.pdf"', 'href="cv.pdf"')
    .replaceAll('href="/cv"', `href="${CV}"`)
    .replaceAll('href="/#', `href="${homeHref}#`)
    .replaceAll('href="/"', `href="${homeHref}"`);

  // The contact form needs the real (Netlify) website, so hide it offline
  if (isHome) html = html.replace(/<form name="contact"[\s\S]*?<\/form>/, "");

  // Sanity check: nothing should still point at the web server
  const leftovers = [...html.matchAll(/(?:href|src)="\/(?!\/)[^"]*"/g)].map((m) => m[0]);
  if (leftovers.length) throw new Error(`${htmlFile}: unconverted links: ${leftovers.join(", ")}`);
  return html;
}

console.log("Building site…");
execFileSync("npx", ["astro", "build"], { cwd: root, stdio: "ignore" });

rmSync(outDir, { recursive: true, force: true });
mkdirSync(outDir);
writeFileSync(join(outDir, HOME), await convert("index.html", { isHome: true }));
writeFileSync(join(outDir, CV), await convert("cv/index.html", { isHome: false }));
copyFileSync(join(dist, "cv.pdf"), join(outDir, "cv.pdf"));

if (existsSync(zipPath)) rmSync(zipPath);
execFileSync("zip", ["-r", "-q", `${outName}.zip`, outName], { cwd: join(root, "..") });
rmSync(outDir, { recursive: true, force: true });
console.log(`Done: ${zipPath}`);
