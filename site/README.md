# Shaina Furman, DVM — portfolio website

A fast, static website built with [Astro](https://astro.build) and Tailwind CSS,
based on the [Starfolio](https://github.com/webrating/starfolio) template (MIT license, see `LICENSE`).

- **All text:** `src/data/content.ts` (instructions at the top of the file)
- **Colors & fonts:** `src/styles/theme.css`
- **Photos:** `public/photos/` · **Downloadable CV:** `public/cv.pdf`

Run locally: `npm install`, then `npm run dev` and open http://localhost:4321

Live at https://shainafurman.github.io. Every push to `main` rebuilds and publishes the site
(GitHub Actions, `.github/workflows/deploy.yml`), usually within a minute.

The downloadable CV is `public/cv.pdf`; the CV page (`/cv`) shows the same words from `src/data/cv.ts`,
so update both together. Never put Shaina's phone number or personal email on the site or in the PDF.
