# GridCraft content and SEO pass

Updated 2026-10-18.

## Search intent and page ownership

| Page                        | Primary intent                   | Supporting phrases                                                                      |
| --------------------------- | -------------------------------- | --------------------------------------------------------------------------------------- |
| `/`                         | GridCraft / GridCraft ArtCraft   | open-source spreadsheet, free Excel alternative, GridCraft download, GridCraft vs Excel |
| `/editor`                   | GridCraft online editor          | ArtCraft spreadsheet workspace, online XLSX editor, GridCraft samples                   |
| `/guides/getting-started`   | GridCraft XLSX guide             | open Excel files in GridCraft, edit XLSX online, save a workbook                        |
| `/guides/formulas`          | GridCraft formulas               | GridCraft SUM tutorial, GridCraft IF formula, ArtCraft spreadsheet functions            |
| `/guides/charts-and-pivots` | GridCraft charts and PivotTables | GridCraft data analysis, source tables, grouped summaries                               |

Chinese equivalents live under `/zh`. These are intent assignments, not search
volume estimates or ranking guarantees.

## Homepage copy

The English SSR `<main>` contains **1,284 words** with all guide cards and the
macOS download tab selected. Count includes FAQ disclosure answers, which are
present in the HTML. It excludes navigation, footer, image alt text, metadata,
script contents and the three linked tutorial articles. A word is an alphanumeric
sequence, optionally joined with an apostrophe or hyphen.

The main text uses “GridCraft” 32 times and “GridCraft ArtCraft” twice, spread
through explanatory copy, section headings and useful questions. The exact
long-tail also appears in the page title and description-related context.
No hidden keyword blocks or meta-keywords tag were added.

Content now explains the ArtCraft relationship, local XLSX workflow, formula
practice, chart/PivotTable preparation, platform downloads, practical Excel
tradeoffs, browser saving and alpha limitations. It distinguishes the independent
site from the upstream app.

Three tutorial pages add approximately 443, 431 and 467 English main-content
words respectively, including headings, code examples and related-guide links.

## Technical implementation

- One H1 per page and descriptive H2/H3 hierarchy.
- Locale-specific titles/descriptions and absolute canonical URLs.
- Open Graph and Twitter cards; a new 1200×630 branded share image for home/editor.
- Homepage WebPage JSON-LD with software/creator context; tutorial TechArticle JSON-LD.
- Crawlable guide links replace modal-only tutorial content.
- Shared header/footer and related guides connect discovery, instruction and editor use.
- Sitemap includes the three new guide paths and their language alternates.
- Unknown tutorial slugs return HTTP 404.
- The official WASM app still downloads only after an explicit launch.

## Sources checked

- [GridCraft v0.7.0 README](https://github.com/storytold/gridcraft/blob/v0.7.0/README.md)
- [Official ArtCraft product page](https://getartcraft.com/apps/gridcraft)
- [Official GitHub release](https://github.com/storytold/gridcraft/releases/tag/v0.7.0)
- [Microsoft Excel](https://www.microsoft.com/en-us/microsoft-365/excel)

Capabilities are phrased around the pinned app and existing source descriptions.
No invented user counts, performance percentages or complete Excel-compatibility
claims. Tutorials are original practical examples with manually checkable results.

## Checks

SSR checks confirmed 200 responses, exactly one H1, nonempty descriptions and
canonical links on the English home/editor/all guides and sampled Chinese pages.
The guide schema parses as JSON, the sitemap contains all guide URLs, and an
unknown slug returns 404. Browser checks cover desktop/mobile layout, filtering,
mobile navigation, tutorial-to-editor links and selected workbook startup.
