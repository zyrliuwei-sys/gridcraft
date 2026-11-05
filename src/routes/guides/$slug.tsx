import { createFileRoute, notFound } from '@tanstack/react-router';

import { envConfigs } from '@/config';
import { m } from '@/paraglide/messages.js';
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
    const article = 'sections' in guide ? guide : undefined;
    const images = [
      guide.image,
      ...(article?.sections.flatMap((section) =>
        section.figure ? [section.figure.image] : []
      ) ?? []),
    ].map((image) => `${envConfigs.app_url}/imgs/gridcraft/${image}.webp`);
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
        { name: 'twitter:title', content: guide.title },
        { name: 'twitter:description', content: guide.description },
        { name: 'twitter:image', content: images[0] },
        ...(article
          ? [{ property: 'article:modified_time', content: article.updated }]
          : []),
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
            image: images,
            ...(article ? { dateModified: article.updated } : {}),
            mainEntityOfPage: { '@type': 'WebPage', '@id': url },
            isPartOf: {
              '@type': 'WebSite',
              name: envConfigs.app_name,
              url: envConfigs.app_url,
            },
          }).replace(/</g, '\\u003c'),
        },
        {
          type: 'application/ld+json',
          children: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: m['gc.guides.home']({}, { locale }),
                item: localizeUrl(`${envConfigs.app_url}/`, { locale }).href,
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: m['gc.home.nav.learn']({}, { locale }),
                item: localizeUrl(`${envConfigs.app_url}/#learn`, { locale })
                  .href,
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: guide.title,
                item: url,
              },
            ],
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
