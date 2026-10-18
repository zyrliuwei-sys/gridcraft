# Online editor specification

Target: src/blocks/gridcraft-editor.tsx, src/routes/editor.tsx, src/styles/gridcraft-editor.css, public/editor-app/. Dark workspace chrome. Depends on global DM Sans and dark neutral theme. Header 64px, footer ~36px, iframe fills remaining dynamic viewport. Mint accent oklch(0.84 0.12 155), background oklch(0.14 0.004 260), text oklch(0.96 0.003 100), border oklch(0.29 0.008 260). Reuse locale-aware Link. Brand via envConfigs.app_name.

Click model: user explicitly launches vendored official GridCraft v0.7.0 WebAssembly editor; support sample=sales, budget, grades. Show initial launch panel and alpha/download advice, loading and retry state. Mobile desktop recommendation without blocking use. Back home, guide link /#learn, full-screen/open app action. No fake spreadsheet replacement.

Download official gridcraft-web-0.7.0.zip from official GitHub release, verify SHA256 ad10af2baf9c7ed4ccbd81e32b37698f5075cdf4f26b726fee7fc7938a3a8d27, safely inspect ZIP paths then extract to public/editor-app. Retain upstream license and notices. Root absolute asset URLs may need base-path adaptation; document any changes. Store a script for reproducibility. No credentials or APIs. Query sample whitelist. Use m['gc.editor.*'] message functions, provide bilingual keys in docs/research/editor-messages.json for root to merge; don't edit messages/\*.json. No edits to global styles/root/package or routeTree.gen.ts. Root handles build.

Validate browser canvas actually renders if possible. All writes apply_patch except binary downloads/extraction. No git commits.
