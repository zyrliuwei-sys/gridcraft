import assert from 'node:assert/strict';
import { readdir, readFile, stat, unlink, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { gunzipSync, gzipSync } from 'node:zlib';

// Keep the checked-in upstream distribution byte-for-byte intact. Only the
// Cloudflare output uses gzip transport to fit the 25 MiB static-asset limit.
const limit = 25 * 1024 * 1024;

export async function prepareCloudflareAssets() {
  const publicDir = new URL('../.output/public/', import.meta.url);
  const editorDir = new URL('editor-app/', publicDir);

  for (const file of await readdir(editorDir)) {
    if (!/^gridcraft-web-[a-f0-9]+_bg\.wasm$/.test(file)) continue;
    const source = await readFile(
      new URL(`../public/editor-app/${file}`, import.meta.url)
    );
    assert.deepEqual(source.subarray(0, 4), Buffer.from([0, 97, 115, 109]));
    const compressed = gzipSync(source, { level: 9 });
    assert(
      compressed.length <= limit,
      `${file} still exceeds the Cloudflare limit`
    );
    assert.deepEqual(gunzipSync(compressed), source);
    await writeFile(new URL(`${file}.gz`, editorDir), compressed);
    // This runs BEFORE Nitro indexes public assets. The original URL must
    // reach the Worker, which supplies the transport encoding explicitly.
    await unlink(new URL(file, editorDir));
    console.log(
      `${file}: ${source.length} → ${compressed.length} bytes (lossless gzip)`
    );
  }

  for (const file of await readdir(publicDir, { recursive: true })) {
    const info = await stat(new URL(file, publicDir));
    assert(
      !info.isFile() || info.size <= limit,
      `Oversized asset: ${join('.output/public', file)}`
    );
  }
}
