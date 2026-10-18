# GridCraft / Brand foundation

## Direction

A spreadsheet studio for curious, practical people. The site combines the
editorial space of the original Flora reference with the precision of a
worksheet. The product stays visible: real upstream screenshots, live budget
inputs, working formulas and meaningful workbook choices.

Design variance 7, motion 3, density 4. One dark theme across the marketing site,
guides and editor shell. The embedded official app controls its own appearance.

Voice: clear, useful, encouraging. Use “GridCraft” for the upstream app and
“ArtCraft” for its creator. `gridcraft.me` is an independent guide, never the
“official ArtCraft website.” Describe an alpha feature honestly; avoid claims
of perfect Excel compatibility, guaranteed speed or invented popularity.

## Colour system

| Role                    | CSS token           | OKLCH            | Approx. sRGB |
| ----------------------- | ------------------- | ---------------- | ------------ |
| Graphite background     | `--gc-bg`           | `0.17 0.012 165` | `#0b110e`    |
| Raised canvas           | `--gc-panel`        | `0.21 0.015 165` | `#121b17`    |
| Pearl text              | `--gc-text`         | `0.96 0.009 100` | `#f3f2eb`    |
| Muted sage text         | `--gc-muted`        | `0.73 0.015 155` | `#a1aba4`    |
| Quiet border            | `--gc-line`         | `0.33 0.018 165` | `#2d3833`    |
| Jade action / selection | `--gc-mint`         | `0.84 0.09 155`  | `#9bdcb1`    |
| Editorial emphasis      | `--gc-pearl`        | `0.88 0.025 120` | CSS token    |
| Data blue               | `--gc-blue`         | `0.80 0.045 245` | CSS token    |
| Blue formula panel      | `--gc-blue-panel`   | `0.27 0.027 245` | CSS token    |
| Green worksheet panel   | `--gc-panel-raised` | `0.26 0.025 155` | CSS token    |

Jade identifies actions and selections. Data blue separates the live formula
example from the green input sheet; it is not a competing CTA colour. Screenshots
retain the upstream application's own colours. No alternating light sections,
neon effects or gradient headlines.

Approximate contrast ratios, calculated from the converted sRGB tokens:
text/background 17.0:1, muted/background 8.06:1, dark button text/jade 12.05:1.

## Typography

- Display: **Instrument Serif**, regular and italic, locally bundled. Its
  editorial character continues the Flora-inspired brief; use it for marketing
  titles and article headings, not application controls or numeric data.
- Body/UI: **DM Sans Variable**, locally bundled, with PingFang SC and system
  fallbacks. Chinese display text falls back to the configured serif stack.
- Code: system monospace; tabular numerals for live totals.
- Homepage H1: 52–86px desktop scale, 53px mobile. Article H1: 42–70px;
  mobile article titles can occupy three lines when needed for clarity.
- Section headings: 38–56px. Body: 13–16px, 1.8–1.9 line height for longer
  explanations. Metadata: 10–12px. Avoid decorative uppercase strips.

## Layout and shape

- Site content width: 1280px. Header maximum: 1440px. Article maximum: 1160px;
  article reading column maximum: 690px.
- Spacing uses an 8px rhythm, with 24–36px mobile/desktop gutters. Major sections
  use 56px on mobile and approximately 86px on desktop.
- `--gc-radius-sm`: 6px for actions; `--gc-radius`: 10px for panels.
- The signature composition pairs an actual spreadsheet screenshot with a
  functional small budget and its live SUM result. Sample tabs change the real
  screenshot and the link to the corresponding official example.
- Editorial explanations use one introduction column and a structured workflow
  column. Tutorials use a quiet contents rail and an uninterrupted reading column.

## Components and states

- Primary action: solid jade with graphite text; hover moves toward pearl.
- Secondary action: panel fill and quiet border; hover strengthens the border.
- Focus: 2px jade outline with 5px offset. Do not rely on colour alone for state.
- Preview tabs: a selected underline plus `aria-pressed`.
- Workbook choices: a selected outline plus `aria-pressed`; choosing a sample
  never starts downloading the application until Launch is pressed.
- Article cards: real links to indexable pages. Filters retain pressed state.
- Editor startup: explicit loading status, timeout, error explanation, retry,
  standalone tab and upstream WebGL fallback.
- Motion: brief 10px entrance fade for hero hierarchy and subtle hover feedback.
  All motion and transitions are disabled under `prefers-reduced-motion`.

## Logo and asset package

The site's original grid mark is an independent visual identity. It is not a
reproduction of the ArtCraft trademark. In application code, render the product
name and logo from `envConfigs.app_name` / `envConfigs.app_logo`.

- `public/logo.svg` and `public/favicon.svg`: nine-cell grid mark with selected cell.
- `public/brand/gridcraft-wordmark.svg`: transparent light wordmark, jade grid.
- `public/brand/gridcraft-wordmark-mono.svg`: light monochrome lockup.
- `public/brand/gridcraft-wordmark-ink.svg`: dark lockup for light documents.
- `public/brand/gridcraft-social.png`: 1200×630 social card with real product image.

Keep at least half a mark's width as clear space. Keep the grid proportions and
avoid stretching, bevels, gradients or recolouring individual cells. SVG lockups
use DM Sans with a sans-serif fallback; web UI uses the bundled font. Upstream
screenshots and editor files retain their existing licenses and attribution.

To reproduce the social card and wordmark files, install Pillow in a Python
environment and run `python3 scripts/render-gridcraft-brand.py` after `pnpm install`.

## Implementation

Tokens: `src/styles/globals.css`. Shared marketing chrome:
`src/blocks/gridcraft-chrome.tsx`. Home and knowledge area:
`gridcraft-home.css` / `gridcraft-resources.css`. Guide layout:
`gridcraft-guide.css`. Editor selection and application shell:
`gridcraft-editor.css`.
