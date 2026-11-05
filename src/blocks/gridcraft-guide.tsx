import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';

import { Link } from '@/core/i18n/navigation';
import { m } from '@/paraglide/messages.js';
import { GridcraftFooter, GridcraftHeader } from '@/blocks/gridcraft-chrome';
import {
  getGridcraftGuides,
  type GridcraftGuideContent,
} from '@/blocks/gridcraft-guide-content';
import {
  GridcraftArticleBody,
  GuideLinks,
} from '@/components/gridcraft-article-body';

import '@/styles/gridcraft-guide.css';

export function GridcraftGuide({ guide }: { guide: GridcraftGuideContent }) {
  const article = 'sections' in guide ? guide : undefined;
  const allGuides = getGridcraftGuides();
  const related = article
    ? article.relatedSlugs.flatMap((slug) =>
        allGuides.filter((item) => item.slug === slug)
      )
    : allGuides.filter((item) => item.slug !== guide.slug).slice(0, 3);
  return (
    <div className="gc-home gc-guide-page">
      <GridcraftHeader />
      <main>
        <article className="gc-article">
          <nav
            className="gc-breadcrumb"
            aria-label={m['gc.guides.breadcrumb']()}
          >
            <Link href="/">{m['gc.guides.home']()}</Link>
            <span>/</span>
            <Link href="/#learn">{m['gc.home.nav.learn']()}</Link>
            <span>/</span>
            <span>{guide.tag}</span>
          </nav>
          <header className="gc-article-header">
            <div className="gc-article-meta">
              <span>{guide.tag}</span>
              <span>{guide.time}</span>
            </div>
            {article && (
              <p className="gc-article-updated">
                <time dateTime={article.updated}>
                  {m['gc.guides.updated']()}
                </time>
              </p>
            )}
            <h1>{guide.title}</h1>
            <p>{guide.description}</p>
            <Link
              href={`/editor?sample=${guide.sample}`}
              className="gc-primary"
            >
              {m['gc.guides.try_sample']()}
              <ArrowUpRight size={16} />
            </Link>
          </header>
          <figure className="gc-article-cover">
            <img
              src={`/imgs/gridcraft/${guide.image}.webp`}
              width="1600"
              height="1000"
              alt={article?.imageAlt ?? guide.title}
              fetchPriority="high"
            />
            <figcaption>
              {article?.imageCaption ?? m['gc.home.preview_caption']()}
            </figcaption>
          </figure>
          <div className="gc-article-layout">
            <aside className="gc-article-aside">
              <p>{m['gc.guides.contents']()}</p>
              <nav aria-label={m['gc.guides.contents']()}>
                {article ? (
                  article.sections.map((section) => (
                    <a key={section.id} href={`#${section.id}`}>
                      {section.title}
                    </a>
                  ))
                ) : (
                  <>
                    <a href="#before">{m['gc.guides.before']()}</a>
                    <a href="#practice">{m['gc.guides.practice']()}</a>
                    <a href="#next">{m['gc.guides.next']()}</a>
                  </>
                )}
              </nav>
              <Link href="/#learn">
                <ArrowLeft size={13} />
                {m['gc.guides.all']()}
              </Link>
            </aside>
            <div className="gc-article-body">
              {'sections' in guide ? (
                <>
                  <GridcraftArticleBody
                    intro={guide.intro}
                    sections={guide.sections}
                  />
                  <section className="gc-article-source">
                    <h2>{m['gc.guides.sources']()}</h2>
                    <p>{m['gc.guides.source_context']()}</p>
                    <GuideLinks links={guide.sources} />
                  </section>
                </>
              ) : (
                <>
                  <p className="gc-article-lead">{guide.intro}</p>
                  <section id="before">
                    <h2>{m['gc.guides.before']()}</h2>
                    <p>{guide.before}</p>
                  </section>
                  <section id="practice">
                    <h2>{m['gc.guides.practice']()}</h2>
                    <ol className="gc-article-steps">
                      {guide.steps.map((step) => (
                        <li key={step}>{step}</li>
                      ))}
                    </ol>
                    <figure className="gc-code-example">
                      <pre>
                        <code>{guide.example}</code>
                      </pre>
                      <figcaption>{guide.exampleCaption}</figcaption>
                    </figure>
                  </section>
                  <section id="next">
                    <h2>{m['gc.guides.next']()}</h2>
                    <p>{guide.after}</p>
                    <p className="gc-article-note">{guide.note}</p>
                  </section>
                  <div className="gc-article-source">
                    <span>{m['gc.guides.source_label']()}</span>
                    <a
                      href="https://github.com/storytold/gridcraft/tree/v0.7.0"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {m['gc.home.source']()}
                      <ArrowUpRight size={13} />
                    </a>
                  </div>
                </>
              )}
            </div>
          </div>
        </article>
        <section className="gc-related">
          <h2>{m['gc.guides.related']()}</h2>
          <div>
            {related.map((item) => (
              <Link key={item.slug} href={`/guides/${item.slug}`}>
                <span>{item.tag}</span>
                <h3>{item.title}</h3>
                <ArrowRight size={20} />
              </Link>
            ))}
          </div>
        </section>
      </main>
      <GridcraftFooter />
    </div>
  );
}
