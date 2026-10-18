import { createFileRoute, notFound } from '@tanstack/react-router';

import { envConfigs } from '@/config';
import { getLocale, localizeUrl } from '@/paraglide/runtime.js';
import { GridcraftGuide } from '@/blocks/gridcraft-guide';
import { getGridcraftGuides } from '@/blocks/gridcraft-guide-content';

export const Route = createFileRoute('/guides/$slug')({
  loader: ({ params }) => {
    const locale = getLocale();
    const guide = getGridcraftGuides(locale).find(
      (item) => item.slug === params.slug
    );
    if (!guide) throw notFound();
    return {
      guide,
      locale,
      url: localizeUrl(`${envConfigs.app_url}/guides/${guide.slug}`, { locale })
        .href,
    };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const { guide, locale, url } = loaderData;
    return {
      meta: [
        { title: `${guide.title} | ${envConfigs.app_name}` },
        { name: 'description', content: guide.description },
        { property: 'og:title', content: guide.title },
        { property: 'og:description', content: guide.description },
        { property: 'og:type', content: 'article' },
        { property: 'og:url', content: url },
        {
          property: 'og:image',
          content: `${envConfigs.app_url}/imgs/gridcraft/${guide.image}.webp`,
        },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
      links: [{ rel: 'canonical', href: url }],
      scripts: [
        {
          type: 'application/ld+json',
          children: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'TechArticle',
            headline: guide.title,
            description: guide.description,
            url,
            inLanguage: locale,
            image: `${envConfigs.app_url}/imgs/gridcraft/${guide.image}.webp`,
            isPartOf: {
              '@type': 'WebSite',
              name: envConfigs.app_name,
              url: envConfigs.app_url,
            },
          }).replace(/</g, '\\u003c'),
        },
      ],
    };
  },
  component: GuidePage,
});
function GuidePage() {
  return <GridcraftGuide guide={Route.useLoaderData().guide} />;
}
