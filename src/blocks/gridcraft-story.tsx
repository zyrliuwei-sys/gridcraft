import { ArrowRight } from 'lucide-react';

import { Link } from '@/core/i18n/navigation';
import { m } from '@/paraglide/messages.js';

export function GridcraftStory() {
  const workflows = [
    {
      title: m['gc.story.open.title'](),
      text: m['gc.story.open.text'](),
      href: '/guides/getting-started',
      label: m['gc.story.open.link'](),
    },
    {
      title: m['gc.story.formulas.title'](),
      text: m['gc.story.formulas.text'](),
      href: '/guides/formulas',
      label: m['gc.story.formulas.link'](),
    },
    {
      title: m['gc.story.analysis.title'](),
      text: m['gc.story.analysis.text'](),
      href: '/guides/charts-and-pivots',
      label: m['gc.story.analysis.link'](),
    },
  ];
  return (
    <section className="gc-story" aria-labelledby="gc-story-title">
      <div className="gc-story-intro">
        <h2 id="gc-story-title">{m['gc.story.title']()}</h2>
        <p className="gc-story-lead">{m['gc.story.intro']()}</p>
        <p>{m['gc.story.context']()}</p>
        <a
          href="https://github.com/storytold/gridcraft"
          target="_blank"
          rel="noopener noreferrer"
        >
          {m['gc.home.source']()}
          <ArrowRight size={15} />
        </a>
      </div>
      <div className="gc-workflows">
        {workflows.map((item) => (
          <div className="gc-workflow" key={item.href}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            <Link href={item.href}>
              {item.label}
              <ArrowRight size={14} />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
