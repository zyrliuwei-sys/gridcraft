import { createFileRoute } from '@tanstack/react-router';

import { envConfigs } from '@/config';
import { getConfig } from '@/modules/config/service';

export const Route = createFileRoute('/ads.txt')({
  server: {
    handlers: {
      GET: async () => {
        // The publisher ID carries a "ca-" prefix in the AdSense UI, but
        // ads.txt wants the bare "pub-…" form.
        const code =
          (await getConfig('adsense_code'))?.trim() || envConfigs.adsense_code;
        const pubId = code.replace(/^ca-/, '');
        const body = `google.com, ${pubId}, DIRECT, f08c47fec0942fa0`;
        return new Response(body, {
          headers: { 'Content-Type': 'text/plain; charset=utf-8' },
        });
      },
    },
  },
});
