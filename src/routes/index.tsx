import { createFileRoute } from '@tanstack/react-router';

import { envConfigs } from '@/config';
import { m } from '@/paraglide/messages.js';
import { getLocale, localizeUrl } from '@/paraglide/runtime.js';
import { GridcraftHome } from '@/blocks/gridcraft-home';

export const Route = createFileRoute('/')({
  loader: () => {
    const locale = getLocale();
    return {
      title: m['common.metadata.title']({}, { locale }),
      description: m['common.metadata.description']({}, { locale }),
      url: localizeUrl(`${envConfigs.app_url}/`, { locale }).href,
      locale,
    };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: loaderData.title },
          { name: 'description', content: loaderData.description },
          { property: 'og:title', content: loaderData.title },
          { property: 'og:description', content: loaderData.description },
          { property: 'og:type', content: 'website' },
          { property: 'og:url', content: loaderData.url },
          { name: 'twitter:title', content: loaderData.title },
          { name: 'twitter:description', content: loaderData.description },
          {
            property: 'og:image',
            content: `${envConfigs.app_url}/brand/gridcraft-social.png`,
          },
          { name: 'twitter:card', content: 'summary_large_image' },
        ]
      : [],
    links: loaderData ? [{ rel: 'canonical', href: loaderData.url }] : [],
    scripts: loaderData
      ? [
          {
            type: 'application/ld+json',
            children: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebPage',
              name: loaderData.title,
              description: loaderData.description,
              url: loaderData.url,
              inLanguage: loaderData.locale,
              isPartOf: {
                '@type': 'WebSite',
                name: envConfigs.app_name,
                url: envConfigs.app_url,
              },
              about: {
                '@type': 'SoftwareApplication',
                name: 'GridCraft',
                applicationCategory: 'BusinessApplication',
                creator: {
                  '@type': 'Organization',
                  name: 'ArtCraft',
                  url: 'https://getartcraft.com',
                },
              },
            }).replace(/</g, '\\u003c'),
          },
        ]
      : [],
  }),
  component: GridcraftHome,
});
