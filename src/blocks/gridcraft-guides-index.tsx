import { m } from '@/paraglide/messages.js';
import { GridcraftFooter, GridcraftHeader } from '@/blocks/gridcraft-chrome';
import { getGridcraftGuides } from '@/blocks/gridcraft-guide-content';
import { GridcraftGuideList } from '@/components/gridcraft-guide-list';

import '@/styles/gridcraft-resources.css';

export function GridcraftGuidesIndex() {
  return (
    <div className="gc-home gc-resources">
      <GridcraftHeader />
      <main className="gc-resource-container gc-guide-index">
        <header className="gc-section-heading">
          <h1>{m['gc.site.guides_title']()}</h1>
          <p>{m['gc.site.guides_description']()}</p>
        </header>
        <section aria-labelledby="gc-guide-library-title">
          <h2 id="gc-guide-library-title" className="gc-learn-subheading">
            {m['gc.site.guides']()}
          </h2>
          <GridcraftGuideList guides={getGridcraftGuides('en')} />
        </section>
      </main>
      <GridcraftFooter />
    </div>
  );
}
