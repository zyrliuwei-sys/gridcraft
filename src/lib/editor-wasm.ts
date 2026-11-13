type AssetBinding = { fetch: (request: Request) => Promise<Response> };

// Only this pinned upstream asset may be mapped to compressed storage. It is
// kept out of Nitro's static manifest so the request reaches this handler.
const WASM_PATH = '/editor-app/gridcraft-web-fdc723373f2aa0d8_bg.wasm';

export async function serveEditorWasm(
  request: Request,
  assets?: AssetBinding
): Promise<Response | undefined> {
  const url = new URL(request.url);
  if (!assets || url.pathname !== WASM_PATH) return;
  if (request.method !== 'GET' && request.method !== 'HEAD') {
    return new Response(null, { status: 405, headers: { Allow: 'GET, HEAD' } });
  }
  url.pathname += '.gz';
  url.search = '';
  // Do not forward cookies, Range, or conditional headers for another
  // representation. ASSETS contains the raw gzip file, with no encoding rule.
  const stored = await assets.fetch(
    new Request(url, { method: request.method })
  );
  if (!stored.ok)
    return new Response('Editor asset unavailable', { status: 503 });
  const gzip = (request.headers.get('Accept-Encoding') || '')
    .split(',')
    .some((part) => {
      const [name, ...parameters] = part.trim().split(';');
      const quality = parameters.find((parameter) =>
        parameter.trim().startsWith('q=')
      );
      return (
        name === 'gzip' && (!quality || Number(quality.trim().slice(2)) > 0)
      );
    });
  const headers = new Headers({
    'Content-Type': 'application/wasm',
    'Cache-Control': 'public, max-age=31536000, immutable',
    Vary: 'Accept-Encoding',
    'X-Content-Type-Options': 'nosniff',
  });
  if (gzip) headers.set('Content-Encoding', 'gzip');
  const body =
    request.method === 'HEAD'
      ? null
      : gzip
        ? stored.body
        : stored.body?.pipeThrough(new DecompressionStream('gzip'));
  // workerd otherwise compresses an already compressed body a second time.
  const options: ResponseInit & { encodeBody: 'manual' } = {
    headers,
    encodeBody: 'manual',
  };
  return new Response(body, options);
}
