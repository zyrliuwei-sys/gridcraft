# Official GridCraft editor distribution

The browser app at `/editor-app/index.html` is the official upstream v0.7.0
release, embedded only after the user presses Launch GridCraft.

- Source: https://github.com/storytold/gridcraft/tree/v0.7.0
- Release: https://github.com/storytold/gridcraft/releases/tag/v0.7.0
- Archive: https://github.com/storytold/gridcraft/releases/download/v0.7.0/gridcraft-web-0.7.0.zip
- Verified SHA256: `ad10af2baf9c7ed4ccbd81e32b37698f5075cdf4f26b726fee7fc7938a3a8d27`
- Reproduce: `python3 scripts/vendor-gridcraft-editor.py`
- Reproduce from an existing download:
  `python3 scripts/vendor-gridcraft-editor.py --archive /path/to/gridcraft-web-0.7.0.zip`

The script checks the checksum before extraction, rejects unsafe ZIP paths and
symlinks, strips the single release directory, and preserves every upstream
file byte-for-byte. `LICENSE-MIT`, `LICENSE-APACHE`, `README.md`, `HOSTING.md`,
and upstream host configuration examples remain in `public/editor-app/`.
No HTML, JavaScript, WebAssembly, branding, or license changes were made.
The release already uses relative asset URLs, so no subpath adaptation is needed.

The upstream source `apps/gridcraft-web/src/web.rs` at v0.7.0 confirms:

- `sample=sales`, `sample=budget`, and `sample=grades` initialize upstream sample
  workbooks. Our route accepts only those three sample names.
- `?webgl` forces the GL backend and can be combined with `sample`.
- The static page already contains a canvas. The loading element is removed
  only after `WebRunner.start` succeeds; failed startup leaves an error message.
  The wrapper checks that condition rather than marking iframe `load` as ready.
- CJK browser locales are deliberately not selected by the upstream web app
  because its web bundle has no CJK fonts. The surrounding site is bilingual;
  the editor's own language/font limitations remain upstream behavior.

Runtime requires WebGPU or WebGL2. HTTPS (or localhost) is required for WebGPU
and browser clipboard features. The wrapper offers retry and a WebGL new-tab
fallback after startup failure or a 60-second timeout. It offers fullscreen and
a standalone tab; mobile users can launch despite the desktop recommendation.

Serve the WASM file with `Content-Type: application/wasm`, and enable gzip/Brotli
to reduce its approximately 18.9 MB uncompressed transfer. Upstream `_headers`
and `.htaccess` files are examples, not configuration automatically consumed by
TanStack Start/Nitro or a Cloudflare Worker. Production hosting must set its own
headers. No server-side API or credentials are involved in editor startup.
