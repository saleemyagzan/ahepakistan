# AHE Pakistan — Academy for Holistic Education

Premium motion website for the Academy for Holistic Education Pakistan (SECP CUIN 0305112),
built to the "Modern Organic / Sophisticated Calming" brand system.

Live test deploy: https://test.ahepakistan.org (auto-deployed via GitHub Actions on every
push to `ahepakistan/**`).

## Stack

Vite + React 18 + TypeScript + Tailwind CSS + React Router.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # typecheck + production build to dist/
```

## Brand system (non-negotiable)

- **Colors:** Emerald `#0B6E4F` (primary/CTAs) · Royal `#1F3C88` (trust bands) ·
  Gold `#C6A84E` (accents only) · Ivory `#F8F6F0` (canvas — never pure white) ·
  Ink `#2A2A2A` (body — never `#000`).
- **Domain coding:** Physical emerald · Mental royal · Emotional maroon `#8C3A44` ·
  Spiritual gold. Sub-brand "The Little Scientist": Sky `#3FA7D6`.
- **Fonts:** Playfair Display (headings, Bold H1 / Semi-Bold H2) + Poppins (everything else).
  Merriweather is reserved for formal certificates only and is not loaded on the site.
- **Motion:** ease-in-out only (`--ease-calm`), 400–800ms; scroll reveals drift 12px;
  breathing pulse only on Spiritual/Emotional accents. No bounce/spring/confetti anywhere.

## Site map

`/` · `/about-us/` · `/our-domains/` · `/programs/` (+ 10 program detail pages) ·
`/impact-stories/` · `/reports/` · `/partner-with-us-ahe-pakistan/` (single canonical
partner URL, used identically in nav, footer, and every CTA) · `/blog/` · `/privacy-policy/`.

Program dropdown pages: physical-development, mental-development, emotional-development,
spiritual-development, the-little-scientist, youth-leadership, 51-freelancers-program.
Flagship standalone pages: snow-olympiad, gb-survivor, jugnoo-camp (Jugnoo Camp spans
all four domains and deliberately gets its own page).

All content lives in `src/data/site.ts`.

## Before going live — assets AHE must supply

1. **Photography.** Every `PhotoSlot` component is a labeled placeholder awaiting real
   program photography (natural light, real students, outdoor camps / classroom
   engagement). No stock imagery was used or should be added.
2. **Official logo.** `src/components/Logo.tsx` is a brand-consistent stand-in.
   Replace with the official AHE logo files (full color / black / white / icon-only),
   preserving clear space equal to the height of the "A" in AHE.
3. **Documents.** Drop real PDFs into `public/documents/`:
   `secp-certificate-of-incorporation.pdf`, `ahe-annual-report-2024.pdf`,
   `ahe-annual-report-2023.pdf`, `ahe-annual-report-2022.pdf`.
4. **Social profiles.** Footer social icons are intentionally omitted until real profile
   URLs exist (brand rule: never link to "#").
5. **Partner form backend.** The intake form on the partner page currently confirms
   client-side only; wire it to a real endpoint or form service.
6. **Emotional domain program.** Flagged to AHE per the naming review: no named program
   exists yet for the Emotional domain — the site notes this on the Emotional
   Development page.
