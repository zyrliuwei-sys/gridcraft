import { createFileRoute } from '@tanstack/react-router';

import { envConfigs } from '@/config';
import { m } from '@/paraglide/messages.js';
import { getLocale, localizeUrl } from '@/paraglide/runtime.js';
import { GridcraftEditor, type EditorSample } from '@/blocks/gridcraft-editor';

export const Route = createFileRoute('/editor')({
  validateSearch: (
    search: Record<string, unknown>
  ): { sample?: EditorSample } => ({
    sample:
      search.sample === 'sales' ||
      search.sample === 'budget' ||
      search.sample === 'grades'
        ? search.sample
        : undefined,
  }),
  loader: () => {
    const locale = getLocale();
    return {
      title: m['gc.editor.meta_title']({}, { locale }),
      description: m['gc.editor.meta_description']({}, { locale }),
      url: localizeUrl(`${envConfigs.app_url}/editor`, { locale }).href,
    };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: loaderData.title },
          { name: 'description', content: loaderData.description },
          { property: 'og:title', content: loaderData.title },
          { property: 'og:description', content: loaderData.description },
          { property: 'og:url', content: loaderData.url },
          { property: 'og:type', content: 'website' },
          {
            property: 'og:image',
            content: `${envConfigs.app_url}/brand/gridcraft-social.png`,
          },
          { name: 'twitter:card', content: 'summary_large_image' },
        ]
      : [],
    links: loaderData ? [{ rel: 'canonical', href: loaderData.url }] : [],
  }),
  component: EditorPage,
});

function EditorPage() {
  const { sample } = Route.useSearch();
  return <GridcraftEditor key={sample ?? 'blank'} sample={sample} />;
}
