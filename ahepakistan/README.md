# AHE Pakistan — Academy for Holistic Education

Premium motion website for the Academy for Holistic Education Pakistan (SECP CUIN 0305112),
built to the "Modern Organic / Sophisticated Calming" brand system.

Live test deploy: https://test.ahepakistan.org — auto-deployed via GitHub Actions on every
push to `ahepakistan/**`, uploaded to the Hostinger `test` subdomain via FTP.

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

## Before going live — still outstanding

1. **Annual report PDFs.** `public/documents/` has the real SECP certificate. The
   2024/2025/2026 annual reports (per `ahepakistan.org/annual-reports/`) haven't been
   supplied yet — Reports page shows "Coming Soon" for each until the PDFs land in
   `public/documents/ahe-annual-report-<year>.pdf` and `reports[].available` is flipped
   to `true` in `src/data/site.ts`.
2. **Social profile URLs.** Footer icons render muted (no real Facebook/Instagram/
   LinkedIn/YouTube URLs exist yet). Fill in `socialLinks` in `src/data/site.ts` —
   icons activate automatically once a URL is non-empty.
3. **Partner form backend.** The intake form on the partner page currently confirms
   client-side only; wire it to a real endpoint or form service.
4. **Emotional domain program.** No named program exists yet for the Emotional domain —
   the site notes this on the Emotional Development page.
5. **Photography.** Most `PhotoSlot`s are still gradient placeholders (About Us leadership
   portraits, Reports, Blog post images). Real program photography is wired in for the
   hero, all 4 domains, and 5 flagship programs.

## Known issues

- **Occasional FTP connection timeouts.** This host's FTP occasionally drops the
  control socket mid-deploy, failing the GitHub Actions run outright (not silently —
  it shows as a failed run). A retry push almost always succeeds. Not yet worth
  automating a retry-on-failure step unless it keeps recurring.

## Known issue — Hostinger image optimizer rejecting new uploads

As of 2026-07-12, the `test` subdomain's LiteSpeed image optimizer was returning
`422 Invalid source image` for new image uploads (confirmed with a trivial 100×100
solid-color PNG, so not specific to any one photo's content). Unresolved as of this
writing — worth re-testing now that the deploy pipeline itself is fixed (see below),
since it may have been a downstream symptom of the same misconfiguration.

The real playground photo (`public/images/students-playground-source.jpg`) is in the
repo but not currently referenced in `AboutUs.tsx` (see the `TODO` comment there) —
re-wire it once confirmed working.

## Resolved — deploy pipeline was silently no-op'ing for hours (2026-07-12)

`FTP_SERVER_DIR` was changed away from its correct value (`public_html/`) while
debugging an unrelated image issue, based on a misreading of the FTP account's
directory structure. This caused every deploy to report "success" while actually
uploading to the wrong location (a set of folders sitting as siblings to
`public_html` rather than inside it) — the live site silently stopped updating for
several hours across ~15 deploys before this was caught. `FTP_SERVER_DIR` is
confirmed correct at `public_html/` now. If deploys ever silently stop reflecting on
the live site again: don't trust a green "success" status alone — verify with a
uniquely-named marker file and check its `Last-Modified` header, or connect with an
FTP client directly to confirm the account's actual root/chroot structure before
changing `FTP_SERVER_DIR`.
