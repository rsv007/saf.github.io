// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import { SITE } from "./src/data/content.ts";

// Plain static site, published on GitHub Pages by .github/workflows/deploy.yml (no server needed).
export default defineConfig({
  site: SITE.url,
  output: "static",
  vite: { plugins: [tailwindcss()] },
  integrations: [sitemap({ filter: (page) => !page.includes("/mascots") })],
});
