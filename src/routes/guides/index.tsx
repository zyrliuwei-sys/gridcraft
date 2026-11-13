import { createFileRoute, notFound } from '@tanstack/react-router';

import { envConfigs } from '@/config';
import { m } from '@/paraglide/messages.js';
import { getLocale } from '@/paraglide/runtime.js';
import { GridcraftGuidesIndex } from '@/blocks/gridcraft-guides-index';

export const Route = createFileRoute('/guides/')({
  loader: () => {
    if (getLocale() !== 'en') throw notFound();
    return {
      title: m['gc.site.guides_title']({}, { locale: 'en' }),
      description: m['gc.site.guides_description']({}, { locale: 'en' }),
    };
  },
  head: ({ loaderData }) =>
    loaderData
      ? {
          meta: [
            { title: `${loaderData.title} | ${envConfigs.app_name}` },
            { name: 'description', content: loaderData.description },
          ],
          links: [{ rel: 'canonical', href: `${envConfigs.app_url}/guides` }],
        }
      : {},
  component: GridcraftGuidesIndex,
});
