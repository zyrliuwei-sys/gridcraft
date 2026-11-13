# Deployment verification — 2026-11-13

Live site: https://gridcraft.me

Cloudflare version: `dde4ab6e-61cc-44c1-abe9-30b91e386d9b`.
Previous version: `a1530f95-20a3-4a52-8386-11d06c48b2d3`.
Deployed with `pnpm run cf:deploy`; existing D1, secrets and admin preserved.
No database migrations were pending or applied.

| Dimension   | Checked                                                                                                                                       | Result                                                                                                                                                              |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Responsive  | Home, guides, About, Contact and editor at 390 / 768 / 1440 px; article and legal page templates                                              | No horizontal overflow; new editor legal links wrap and have 40 px targets                                                                                          |
| Theme       | About, Contact, article and legal templates with light and dark system preferences                                                            | Existing dark brand palette remains readable in both preferences                                                                                                    |
| SEO         | All 29 live sitemap pages; page titles, descriptions, canonicals, one H1, footer links, homepage Learn entries                                | All 200; 12 guides; 5 new articles exceed 300 words and have multiple H2s; no old version or public sign-in navigation; English-only additions return 404 under /zh |
| Performance | Production Node preview in Tabbit; WASM transport on Cloudflare                                                                               | Local home LCP 2.064 s, CLS 0.00267, no long tasks observed; home does not load WASM. Editor transfer reduced from 26,298,748 to 9,658,977 bytes                    |
| Security    | Worktree scanner and manual transport review; admin guards, public config filtering, checkout pricing, webhook verification and upload checks | Scanner clean; live anonymous admin requests rejected; public config and anonymous session endpoints return 200                                                     |

The browser performance sample is a local diagnostic, not a Lighthouse score,
field CWV measurement or an INP assessment. The local Wrangler runtime required
a test-only compatibility-date override (`2026-06-10`); production retains its
configured `2026-10-18` date. Production validation uses the actual deployed Worker.

`pnpm build`, `pnpm exec tsc --noEmit`, formatting checks and `git diff --check`
passed. Cloudflare build and deployment succeeded.

The live compressed WASM decodes to the exact official SHA-256. The live budget
sample loaded with its chart; a formula produced 42, then retained 42 after XLSX
save and reopening. The editor Legal links are present before and after launch.

See `deployment-verification.json` for per-page results and transport evidence.
