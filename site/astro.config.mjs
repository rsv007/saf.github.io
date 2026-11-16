// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import { SITE } from "./src/data/content.ts";

// Plain static site: works on Netlify or Cloudflare Pages with no server.
export default defineConfig({
  site: SITE.url,
  output: "static",
  vite: { plugins: [tailwindcss()] },
  integrations: [sitemap({ filter: (page) => !page.includes("/mascots") && !page.includes("/thanks") })],
});
