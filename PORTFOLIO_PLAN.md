# Veterinarian Portfolio Website — Build Plan for Claude Code

> **How to use this file:** Put it in an empty folder, open Claude Code in that folder, and say:
> "Read PORTFOLIO_PLAN.md and do Phase 0. Stop and show me when it's done."
> Then do one phase at a time. Don't ask for everything at once.

---

## 0. Who this is for (read first, Claude Code)

- The owner (Rev) is a **veterinarian** applying for veterinary jobs. He is **not a coder**. Explain what you did in plain language after each phase.
- Ask Rev for all content (bio, experience, credentials, photos). **Never invent credentials, dates, clinics, cases or testimonials.** Use clearly marked placeholders like `[ASK REV: DVM school + year]` until he gives you the real thing.
- Never skip a phase's "Done when" checks.
- Commit to git after each phase with a clear message, so any step can be undone.

---

## 1. Goal

A professional online portfolio that backs up Rev's CV when he applies for veterinary positions. A hiring manager or practice owner should be able to see within 10 seconds:

1. Who he is and what kind of vet he is
2. That he's qualified and licensed
3. His clinical experience and skills
4. How to get his CV and contact him

It should feel **warm, calm and trustworthy**, like a good clinic: clean, friendly, never flashy. It must load fast and work well on a phone, since many people will open it from an email or a job application.

---

## 2. Tech stack (fixed — don't swap without asking)

| Job | Tool | Notes |
|---|---|---|
| Site framework | **Astro** (latest) | Fast static site. Start from the **Starfolio** theme (astro.build/themes/details/starfolio) for its single-data-file setup, then restyle completely. Keep its MIT license file and credit. |
| Styling | **Tailwind CSS v4** | Comes with Starfolio. |
| UI pieces | **shadcn/ui** + **Magic UI** (number ticker only) | Keep it minimal. |
| Animation | **GSAP** (ScrollTrigger + DrawSVG) | Free, `npm install gsap`. Used for only 2–3 effects. |
| Simple reveals | **Plain CSS** scroll-driven animations (`animation-timeline: view()`) | Wrap in `@supports` and the reduced-motion query. |
| Page transitions | **Astro View Transitions** | Gentle crossfade. |
| CV download | A PDF of Rev's CV in `/public` | Rev supplies the file. |
| Hosting | **Netlify** or **Cloudflare Pages** (free tier), deploy from GitHub | Auto-deploys on every push. |

No smooth-scroll library, no 3D, no heavy animated backgrounds. React components only load where needed (`client:visible`).

---

## 3. Design concept — "Calm Clinic"

- **Feel:** warm, caring, professional. Lots of white space. Soft rounded shapes. Real photos of Rev with animals do the heavy lifting.
- **Colors (put these in one theme file so they're easy to change):**
  - Background: warm off-white `#FAF7F2`
  - Surface/cards: `#FFFFFF`
  - Main text: deep teal-navy `#1F3A44`
  - Muted text: `#5E6E73`
  - Primary accent: sage green `#7BA591`
  - Secondary accent (buttons, highlights): soft coral `#E8836B`
  - Check color contrast meets WCAG AA; darken the accents for text if needed.
- **Fonts (free, from Fontsource or Google Fonts):**
  - Headings: a warm serif such as **Fraunces**
  - Body: a clean, readable sans such as **Source Sans 3** or **Inter**
- **Visual motifs:**
  - A thin **heartbeat (ECG) line** as a signature element: drawn once in the hero, reused faintly as a section divider
  - Rounded cards with soft shadows
  - Small, simple line icons for skill groups (stethoscope, scalpel, X-ray, tooth, etc.) from an open-source icon set like **Lucide**

### 3a. Cute animal mascots ("cute in the details, serious in the content")

- **Two mascots: a dog and a cat**, drawn by Claude Code as **original, simple SVG line art** in the theme colors (thin rounded strokes, minimal detail, friendly faces). Same stroke width as the ECG line so everything looks like one family.
  - If Rev has a pet, base one mascot on it (ask for a photo and name).
  - Do **not** use or imitate any known cartoon character or brand mascot.
- Store each drawing as its own SVG component in `src/components/mascots/` so they can be reused and animated.
- **Where they appear (and nowhere else):**
  1. **Hero:** the ECG line's last heartbeat turns into the cat's ears / dog's head outline (signature moment)
  2. **Peeking pets:** the cat peeks over the top edge of one card in Experience or About; the dog pops up beside the Contact section
  3. **Skills:** each species in the "Species" group gets a tiny animal icon (dog, cat, rabbit, bird, horse, cow… only the species Rev treats)
  4. **Footer:** the cat sleeps curled up next to "Thanks for visiting." On desktop, its eyes open and follow the mouse when it's near
  5. **404 page:** the dog runs across the screen. Text: "This patient escaped." with a button back home
  6. **Optional:** a paw-print trail along the page edge that fills in as you scroll (ask Rev)
- **Rules:**
  - Mascots are decoration only. Headings, credentials, experience and layout stay professional.
  - Max one mascot visible on screen at a time (except the Skills icons).
  - Every mascot SVG gets `aria-hidden="true"`; they're decorative.
- **Fallback option:** if hand-drawn SVGs don't look good enough, free LottieFiles animations (Lottie Simple License, allows commercial use) may be used instead, via the `@lottiefiles/dotlottie-web` player, loaded only when visible. Avoid any asset that requires a credit link or a paid license.
- **Light theme by default.** A dark mode toggle is optional (ask Rev).
- **Rule:** No component ships with its demo colors or default settings. Restyle everything to this theme.

---

## 4. Site map

1. **Home** (one scrolling page)
   - Hero
   - About / philosophy of care
   - Experience
   - Clinical skills
   - Education, licensure & certifications
   - Case highlights (optional)
   - Testimonials (only if Rev has real ones)
   - Contact
2. **CV page** at `/cv`: a clean, printable web version of his CV plus a "Download PDF" button. Add print styles so it prints neatly.
3. **Case detail pages** at `/cases/[name]` (optional, only if Rev wants case highlights)
4. **404 page**: "This patient escaped." with the dog mascot running across the screen and a button back home

---

## 5. Section-by-section spec

### Hero
- Large professional photo of Rev (ideally with an animal, in a clinical or friendly setting).
- Name with credential: `[Name], DVM`
- One-line summary (placeholder: "Small animal veterinarian focused on compassionate, evidence-based care.")
- Location line: `[City, State] · [Open to relocation? ASK REV]`
- Two buttons: **Download CV** (primary, coral) and **Contact me** (secondary).
- Signature animation: the ECG line draws itself across under the name, and its final beat morphs into the cat/dog outline (GSAP DrawSVG + MorphSVG, ~2 s, once). See Section 3a.

### About / philosophy of care
- 3–5 sentence bio in Rev's own voice (first person).
- A short "How I practice" line or 3 small value cards (e.g. client communication, fear-free handling, evidence-based medicine). Rev picks the values.
- Optional: photo of Rev with his own pet, if he has one.

### Experience
- Vertical **timeline**: role, clinic/hospital, city, dates, 2–3 bullet highlights each.
- Include externships, rotations, internships and relevant pre-vet roles (tech/assistant work) if Rev wants them.
- Timeline line and dots fade in as you scroll (CSS).

### Clinical skills
- Grouped cards with icons. Example groups (Rev confirms the real ones):
  - **Species:** dogs, cats, exotics, large animal, equine… (each with its own tiny mascot-style animal icon, see Section 3a)
  - **Surgery:** spay/neuter, soft tissue, orthopedic…
  - **Medicine:** internal medicine, dermatology, emergency/critical care…
  - **Diagnostics & imaging:** radiography, ultrasound, cytology…
  - **Dentistry**
  - **Other:** practice software, languages spoken, client education
- Optional "by the numbers" row with counters that tick up when visible (e.g. years of experience, procedures performed). **Only use numbers Rev provides.**

### Education, licensure & certifications
- DVM: school, year
- Undergraduate degree (optional)
- State license(s): state + status. Link to the state's public license verification page if Rev wants. Ask before showing license numbers.
- NAVLE status, USDA accreditation, DEA registration, etc., but **only items Rev confirms**.
- Certifications (e.g. Fear Free, CPR) and continuing education highlights.
- Clean card layout with small badge-style labels.

### Case highlights (optional, ask Rev)
- 2–3 short, **fully anonymized** case stories: presenting problem → what Rev did → outcome → what he learned.
- **Privacy rules:** no client names, no identifiable record numbers, no clinic-internal info. Patient photos only with owner permission. Add a small note: "Cases shared with owner permission; details changed for privacy."

### Testimonials (only if real)
- Quotes from supervisors, colleagues or clients, with name/role, **and only with their permission**. Never write placeholder testimonials that could ship by accident. Hide this section entirely until Rev provides real ones.

### Contact
- Email (button + copy-to-clipboard) and LinkedIn.
- Optional simple form via Netlify Forms (free); ask Rev.
- **Don't** show a home address or personal phone number unless Rev specifically asks.
- Footer: © year, "Built with Astro", template credit line, and the sleeping cat mascot ("Thanks for visiting").

---

## 6. Animation rules (keep it calm)

Only these things move:
1. Hero ECG line draws in and morphs into the mascot (once, on load)
2. Sections gently fade + slide up 16px as they enter view (CSS)
3. Experience timeline line grows as you scroll (CSS or GSAP)
4. Counters tick up (if the numbers row is used)
5. Soft hover feedback on buttons and cards (slight lift, color shift)
6. Gentle page crossfade between pages
7. Peeking pets slide up/over their edge when their section enters view (once each)
8. Footer cat: slow breathing loop; eyes open and follow the mouse when near (desktop only)
9. 404 dog runs across once
10. Optional paw-print scroll trail

Hard rules:
- **Respect reduced motion:** if the visitor's device has "reduce motion" on, show everything instantly with no movement.
- Animate only `transform` and `opacity` (plus the SVG stroke for the ECG line).
- No loading screen, no autoplay video with sound, no cursor effects, no parallax.
- Motion should feel like reassurance, not a show.

---

## 7. Content file

All of Rev's text lives in **one file** (Starfolio's data file), so he can edit it without touching code. Add fields as needed (experience entries, skill groups, credentials, cases, testimonials) instead of hard-coding text in components. Each optional section turns off automatically if its data is empty. Add a comment at the top of that file explaining in plain English how to edit it.

---

## 8. Build phases

Do one phase per session. After each, run the site locally, show Rev, explain in plain words, and commit.

### Phase 0 — Setup
- Check Node.js and git are installed; if not, tell Rev exactly how to install them.
- Create the project from the Starfolio theme. Run it locally.
- Create a GitHub repo (walk Rev through it).
- **Done when:** the untouched template runs at `localhost` and is pushed to GitHub.

### Phase 1 — Strip and theme
- Delete sections/pages not in the site map (blog, hackathons, etc.).
- Apply Section 3: colors, fonts, icons, ECG line SVG. Put colors and fonts in one theme file.
- **Done when:** nothing looks like the original developer template; theme can be changed in one place.

### Phase 2 — Content structure
- Build every section from Section 5 and the `/cv` page **without animation**, using the content file and `[ASK REV]` placeholders.
- Go through the checklist in Section 10 with Rev and swap in real content.
- **Done when:** every page works on desktop and phone with no motion, and optional sections hide when empty.

### Phase 3 — Mascots and motion
- First draw the dog and cat mascots (Section 3a) as static SVGs and show them to Rev. **Get his OK on the drawings before animating anything.** Redraw if he doesn't like them.
- Then add the items from Section 6, one at a time. Check each on a phone-size screen.
- Add the reduced-motion handling.
- **Done when:** all effects work smoothly, and with reduced motion on, nothing moves and everything is readable.

### Phase 4 — Polish and checks
- SEO: page title like "[Name], DVM — Veterinarian in [City]", description, share image (photo + name), favicon, sitemap.
- Accessibility: alt text on every photo, visible keyboard focus, good color contrast, readable font sizes (body ≥ 16px).
- `/cv` prints cleanly on letter-size paper.
- Run Lighthouse. Target **90+** in all four scores on mobile. Fix what it flags.
- Test in Chrome, Safari and Firefox, and on a real phone.
- Search every file for leftover `[ASK REV` placeholders, template demo text or fake content. There must be none.
- **Done when:** all checks pass and no placeholders remain.

### Phase 5 — Launch
- Connect the GitHub repo to Netlify (or Cloudflare Pages). Walk Rev through each click.
- Optional: connect a custom domain, e.g. `[name]dvm.com` (ask Rev).
- Write a short `HOW_TO_UPDATE.md` for Rev: how to change text, add a job or certification, replace the CV PDF, and publish.
- **Done when:** the site is live on a public URL and Rev has updated one line himself and seen it go live.

---

## 9. Ideas board (inspiration only — never copy a design)

- Webflow "Made in Webflow" gallery, for small effect ideas: webflow.com/made-in-webflow/animation
- Siteinspire and Minimal Gallery, for clean, calm layouts
- Websites of well-designed veterinary hospitals, for tone and photo style

If Rev sends a link to something he likes, recreate the *idea* in our theme. Don't copy someone's code or images without checking the license.

---

## 10. Things to ask Rev (collect during Phase 2)

**Basics**
- [ ] Name as it should appear (with DVM)
- [ ] One-line summary: what kind of vet (small animal, mixed, emergency, exotics…), and what role he's looking for
- [ ] City/state; open to relocation?
- [ ] Professional photo(s), ideally with animals; photos he has rights to use

**About**
- [ ] 3–5 sentence bio (first person)
- [ ] 3 values / "how I practice" points

**Experience**
- [ ] Each role: title, clinic, city, dates, 2–3 highlights
- [ ] Externships, rotations, internships, research, volunteer work

**Skills**
- [ ] Species treated
- [ ] Surgical, medical, diagnostic and dental skills
- [ ] Software, languages spoken
- [ ] Any numbers for the counter row (years, procedures), only if accurate

**Credentials**
- [ ] DVM school + year; undergrad (optional)
- [ ] State license(s) and status; show verification links? show license numbers?
- [ ] NAVLE, USDA accreditation, DEA, certifications, CE highlights

**Mascots**
- [ ] Does Rev have a pet to base a mascot on? (photo + name)
- [ ] Paw-print scroll trail: yes/no

**Optional sections**
- [ ] Case highlights: yes/no, with owner permission and anonymized
- [ ] Testimonials: real quotes with permission, or skip
- [ ] Contact form: yes/no
- [ ] Dark mode toggle: yes/no

**Files & links**
- [ ] CV as PDF
- [ ] Email, LinkedIn
- [ ] Custom domain: yes/no, and which
