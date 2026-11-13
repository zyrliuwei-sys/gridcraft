# Official GridCraft editor distribution

The browser app at `/editor-app/index.html` is the official upstream v0.19.1
release, embedded only after the user presses Launch GridCraft.

- Source: https://github.com/storytold/gridcraft/tree/v0.19.1
- Release: https://github.com/storytold/gridcraft/releases/tag/v0.19.1
- Archive: https://github.com/storytold/gridcraft/releases/download/v0.19.1/gridcraft-web-0.19.1.zip
- Verified SHA256: `48c5d1b101befebb3c5ba3b7a14914f01c3207934813ed07dc4251b7ae116a78`
- Reproduce: `python3 scripts/vendor-gridcraft-editor.py`
- Reproduce from an existing download:
  `python3 scripts/vendor-gridcraft-editor.py --archive /path/to/gridcraft-web-0.19.1.zip`

The script checks the checksum before extraction, rejects unsafe ZIP paths and
symlinks, strips the single release directory, and preserves every upstream
file byte-for-byte, including the nested `snippets/` JavaScript module.
A staged directory swap replaces the previous release and removes obsolete hashed assets. `LICENSE-MIT`, `LICENSE-APACHE`, `README.md`, `HOSTING.md`,
and upstream host configuration examples remain in `public/editor-app/`.
No HTML, JavaScript, WebAssembly, branding, or license changes were made.
The release already uses relative asset URLs, so no subpath adaptation is needed.

The wrapper retains the upstream launch and sample workflow:

- `sample=sales`, `sample=budget`, and `sample=grades` initialize upstream sample
  workbooks. Our route accepts only those three sample names.
- `?webgl` forces the GL backend and can be combined with `sample`.
- The static page already contains a canvas. The loading element is removed
  only after `WebRunner.start` succeeds; failed startup leaves an error message.
  The wrapper checks that condition rather than marking iframe `load` as ready.
- The surrounding site is bilingual. Editor localization and font support
  follow the unmodified upstream browser build.

Runtime requires WebGPU or WebGL2. HTTPS (or localhost) is required for WebGPU
and browser clipboard features. The wrapper offers retry and a WebGL new-tab
fallback after startup failure or a 60-second timeout. It offers fullscreen and
a standalone tab; mobile users can launch despite the desktop recommendation.

Serve the WASM file with `Content-Type: application/wasm`, and enable gzip/Brotli
to reduce its approximately 26.3 MB uncompressed transfer. Upstream `_headers`
and `.htaccess` files are examples, not configuration automatically consumed by
TanStack Start/Nitro or a Cloudflare Worker. Production hosting must set its own
headers. No server-side API or credentials are involved in editor startup.

### Cloudflare deployment packaging

The v0.19.1 WASM is 26,298,748 bytes, above Cloudflare's 25 MiB per-asset limit.
The Cloudflare-only Vite build hook in `scripts/prepare-cloudflare-assets.mjs`
stores a 9,658,977-byte gzip copy in the generated assets directory **before**
Nitro indexes it. The checked-in official distribution remains unchanged.
`src/lib/editor-wasm.ts` serves the original pinned URL through the ASSETS
binding, with `application/wasm` and explicit transport encoding. Identity
requests are decompressed as a stream; GET and HEAD are supported. A generic
`_headers` encoding rule is insufficient: workerd can double-compress that body.

When updating the vendored release, update the pinned WASM path in
`src/lib/editor-wasm.ts` too, and compare the downloaded/decompressed SHA-256
with the checked-in original before deployment. For this release it is
`e2c0add31d771b508ce1a854cd17e73384a0f68f7b5cccbb6a5021450b0b1e7c`.
