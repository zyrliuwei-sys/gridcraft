# GridCraft first edition handoff

Completed 2026-10-18 from the interrupted 2026-10-17 work.

## Delivered

- Replaced the Hotel Lobby homepage with a bilingual GridCraft guide and workspace.
- Dark editorial canvas, Instrument Serif / DM Sans, mint actions, custom grid favicon.
- Working budget inputs with live totals and selectable official workbook previews.
- Three actionable guides, category filtering, accessible dialogs, Excel comparison,
  platform download tabs, alpha guidance, FAQ and community link.
- `/editor` launches the actual upstream v0.7.0 app with sales/budget/grades samples,
  loading/error/retry states, fullscreen, standalone tab and WebGL fallback.
- Homepage/editor metadata and current public sitemap; old business modules retained.
- No deployment or git commit. Existing wrangler.production.json edits preserved.

## Verification

- `pnpm build` passed, as did `pnpm exec tsc --noEmit`.
- Chrome screenshots inspected at desktop and mobile/tablet sizes; no document
  horizontal overflow at 390px and 767px CSS viewport widths.
- Browser verified budget input totals, filtering, guide dialog/Escape close,
  mobile nav, Windows/Linux download hrefs, and English/Chinese locale switching.
- Official budget workbook rendered successfully in the iframe. Entered
  `GridCraft QA` into A1 and confirmed the cell edit visually.
- File > Save As > Download (.xlsx) returned to the workbook and cleared its
  edited indicator. The browser connector did not report a download event;
  the resulting XLSX bytes were not independently inspected.
- Initial simultaneous dev/build caused generated Paraglide file conflicts;
  running the production build with the dev server stopped passed.

## Sources and assets

- https://github.com/storytold/gridcraft/tree/v0.7.0
- https://github.com/storytold/gridcraft/releases/tag/v0.7.0
- https://getartcraft.com/apps/gridcraft
- https://www.microsoft.com/en-us/microsoft-365/excel
- https://flora.ai/ (visual direction only, no copied images)

Five upstream screenshots in `public/imgs/gridcraft/` were downloaded from the
v0.7.0 GitHub contents API (`docs/images/hero-sales.png`, `budget.png`,
`grades-formulas.png`, `pivot.png`, `format-chart.png`) and converted to WebP,
max 1600px wide, quality 87. Source project licenses are retained at
`public/editor-app/LICENSE-MIT` and `LICENSE-APACHE`.

See `editor-vendor.md` for the release checksum and reproducible vendoring script.
The app's uncompressed WASM is about 18 MB and loads only after explicit launch.
The surrounding site is bilingual; upstream app CJK limitations remain.

## Local preview

Port 3000 already belongs to the user's DeckCraft server. GridCraft uses 3001
for this session. To run subsequently: `pnpm dev --port 3001` (Vite also
chooses the next available port automatically when 3000 is busy).

The existing authentication/payment/admin and old project routes are retained,
but they are not promoted by this edition's homepage or sitemap. No new database
schema or business backend is required by the guide/editor experience.

## SEO and brand refinement

The later 2026-10-18 pass adds approximately 1,284 English homepage words, three
indexable bilingual guide pages, a redesigned editor welcome with sample choices,
shared site chrome, metadata/schema updates and a brand asset package. See
`../BRAND.md` for the design system and `SEO-CONTENT.md` for page intent, word-count
method and checks. Start this preview explicitly with `pnpm dev --port 3001`.
