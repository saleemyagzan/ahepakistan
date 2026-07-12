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

## Deployment

Automated via GitHub Actions on every push to `ahepakistan/**`: builds the site and
`rsync`s `dist/` to the Hostinger `test` subdomain over SSH (see
`.github/workflows/deploy.yml`). Requires the `SSH_PRIVATE_KEY` repo secret, whose
public half is in Hostinger's authorized SSH keys (hPanel → Advanced → SSH Access).
The workflow md5-verifies `index.html` on the server after each sync and fails loudly
if it doesn't match the build — so a green run genuinely means the files landed.

### The CDN caveat (important)

`test.ahepakistan.org` is fronted by Hostinger's CDN (DNS `ALIAS` → `cdn.hstgr.net`).
The CDN caches responses and **auto-clears every ~30 minutes**, so a fresh deploy can
look stale for up to half an hour even though the files are correct on the server. For
an immediate refresh: hPanel → **Advanced → Cache Manager → Purge All**. To make the
test subdomain always reflect deploys instantly, turn **off** "Automatic cache" there
(leave it on for the eventual production domain, where caching is desirable for speed).

This CDN layer was the root cause of a long debugging session on 2026-07-12: FTP,
lftp, and rsync all deployed correctly, but the CDN kept serving cached copies, making
every deploy *look* like a silent no-op. Verified conclusively by SSHing in and reading
files straight off disk (they were always correct) — the fix was simply purging the CDN.

## Known issue — Hostinger image optimizer rejecting new uploads

Earlier on 2026-07-12 the LiteSpeed image optimizer returned `422 Invalid source image`
for freshly-uploaded images. This was very likely another symptom of the CDN serving
stale/optimized responses — worth re-testing now that the CDN cause is understood. The
real playground photo (`public/images/students-playground-source.jpg`) is in the repo
but not yet referenced in `AboutUs.tsx` (see the `TODO` there) — re-wire it and confirm.
