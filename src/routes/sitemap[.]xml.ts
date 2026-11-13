import { createFileRoute } from '@tanstack/react-router';

import { envConfigs } from '@/config';
import {
  gridcraftBilingualGuideSlugs,
  gridcraftSearchGuideSlugs,
  gridcraftSearchGuideUpdated,
  gridcraftTestedGuideSlugs,
} from '@/lib/gridcraft-guides';
import { baseLocale, locales, localizeUrl } from '@/paraglide/runtime.js';

const STATIC_PATHS = [
  '',
  '/editor',
  ...gridcraftBilingualGuideSlugs.map((slug) => `/guides/${slug}`),
];

type Entry = {
  path: string;
  lastModified?: string;
  changeFrequency: string;
  priority: number;
  languages?: readonly (typeof locales)[number][];
};

function urlFor(path: string, locale: string): string {
  return localizeUrl(`${envConfigs.app_url}${path || '/'}`, {
    locale: locale as (typeof locales)[number],
  }).href;
}

// One <url> per language version, each listing every alternate (Google's
// recommended hreflang form) — so /zh pages are real <loc>s that crawlers and
// the IndexNow sitemap submit pick up, not just alternates of the en page.
function entryXml(e: Entry): string {
  const languages = e.languages ?? locales;
  const alternates = [
    ...languages.map(
      (loc) =>
        `    <xhtml:link rel="alternate" hreflang="${loc}" href="${urlFor(e.path, loc)}"/>`
    ),
    `    <xhtml:link rel="alternate" hreflang="x-default" href="${urlFor(e.path, baseLocale)}"/>`,
  ].join('\n');
  return languages
    .map((loc) =>
      [
        '  <url>',
        `    <loc>${urlFor(e.path, loc)}</loc>`,
        alternates,
        e.lastModified ? `    <lastmod>${e.lastModified}</lastmod>` : null,
        `    <changefreq>${e.changeFrequency}</changefreq>`,
        `    <priority>${e.priority}</priority>`,
        '  </url>',
      ]
        .filter(Boolean)
        .join('\n')
    )
    .join('\n');
}

export const Route = createFileRoute('/sitemap.xml')({
  server: {
    handlers: {
      GET: async () => {
        const entries: Entry[] = STATIC_PATHS.map((path) => ({
          path,
          changeFrequency: path === '/blog' ? 'daily' : 'weekly',
          priority: path === '' ? 1 : 0.8,
          lastModified: gridcraftSearchGuideSlugs.some(
            (slug) => path === `/guides/${slug}`
          )
            ? gridcraftSearchGuideUpdated
            : undefined,
        }));
        // New content is English-only; do not advertise nonexistent /zh pages.
        for (const path of [
          '/privacy-policy',
          '/terms-of-service',
          '/acceptable-use-policy',
          '/about',
          '/contact',
          '/guides',
          ...gridcraftTestedGuideSlugs.map((slug) => `/guides/${slug}`),
        ]) {
          entries.push({
            path,
            languages: ['en'],
            changeFrequency: 'monthly',
            priority: path.startsWith('/guides') ? 0.8 : 0.5,
            ...(path.startsWith('/guides') ||
            path === '/about' ||
            path === '/contact'
              ? { lastModified: '2026-11-13' }
              : {}),
          });
        }

        // Only published project articles belong in the sitemap. The bundled
        // ShipAny tutorial posts are demo content and carry noindex.
        try {
          const { listPublishedArticles } =
            await import('@/modules/posts/service');
          const rows = await listPublishedArticles().catch(() => []);
          if (rows.length > 0) {
            entries.push({
              path: '/blog',
              changeFrequency: 'weekly',
              priority: 0.7,
            });
          }
          for (const post of rows) {
            entries.push({
              path: `/blog/${post.slug}`,
              lastModified: new Date(post.createdAt).toISOString(),
              changeFrequency: 'monthly',
              priority: 0.6,
            });
          }
        } catch {
          // Database unreachable — keep the static project pages.
        }

        const xml = [
          '<?xml version="1.0" encoding="UTF-8"?>',
          '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
          ...entries.map(entryXml),
          '</urlset>',
          '',
        ].join('\n');

        return new Response(xml, {
          headers: { 'Content-Type': 'application/xml' },
        });
      },
    },
  },
});
