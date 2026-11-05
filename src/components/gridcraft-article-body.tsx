import { Link } from '@/core/i18n/navigation';

export type GuideLink = { href: string; label: string };
export type GuideFigure = {
  image: string;
  alt: string;
  caption: string;
  width?: number;
  height?: number;
};
export type GuideSection = {
  id: string;
  title: string;
  paragraphs?: string[];
  steps?: string[];
  bullets?: string[];
  figure?: GuideFigure;
  table?: { headers: string[]; rows: string[][] };
  example?: { code: string; caption: string };
  questions?: { question: string; answer: string }[];
  links?: GuideLink[];
};

export type GridcraftArticleCard = {
  id: string;
  slug: string;
  category: string;
  sample: string;
  image: string;
  imageAlt: string;
  imageCaption: string;
  title: string;
  description: string;
  tag: string;
  time: string;
};

export type GridcraftArticle = GridcraftArticleCard & {
  intro: string;
  sections: GuideSection[];
  sources: GuideLink[];
  relatedSlugs: string[];
  updated: string;
};

export function GuideLinks({ links }: { links: GuideLink[] }) {
  return (
    <ul className="gc-article-links">
      {links.map((link) => (
        <li key={link.href}>
          {link.href.startsWith('/editor-app/') ? (
            <a href={link.href}>{link.label}</a>
          ) : (
            <Link href={link.href}>{link.label}</Link>
          )}
        </li>
      ))}
    </ul>
  );
}

export function GridcraftArticleBody({
  intro,
  sections,
}: {
  intro: string;
  sections: GuideSection[];
}) {
  return (
    <>
      <p className="gc-article-lead">{intro}</p>
      {sections.map((section) => (
        <section id={section.id} key={section.id}>
          <h2>{section.title}</h2>
          {section.paragraphs?.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {section.steps && (
            <ol className="gc-article-steps">
              {section.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          )}
          {section.bullets && (
            <ul className="gc-article-bullets">
              {section.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          )}
          {section.table && (
            <div
              className="gc-article-table-scroll"
              role="region"
              aria-label={section.title}
              tabIndex={0}
            >
              <table className="gc-article-table">
                <thead>
                  <tr>
                    {section.table.headers.map((header) => (
                      <th scope="col" key={header}>
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {section.table.rows.map((row) => (
                    <tr key={row[0]}>
                      {row.map((cell, index) =>
                        index === 0 ? (
                          <th scope="row" key={index}>
                            {cell}
                          </th>
                        ) : (
                          <td key={index}>{cell}</td>
                        )
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {section.example && (
            <figure className="gc-code-example">
              <pre>
                <code>{section.example.code}</code>
              </pre>
              <figcaption>{section.example.caption}</figcaption>
            </figure>
          )}
          {section.figure && (
            <figure className="gc-article-figure">
              <a
                href={`/imgs/gridcraft/${section.figure.image}.webp`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={section.figure.alt}
              >
                <img
                  src={`/imgs/gridcraft/${section.figure.image}.webp`}
                  alt={section.figure.alt}
                  width={section.figure.width ?? 1600}
                  height={section.figure.height ?? 1000}
                  loading="lazy"
                  decoding="async"
                />
              </a>
              <figcaption>{section.figure.caption}</figcaption>
            </figure>
          )}
          {section.questions?.map((item) => (
            <div key={item.question} className="gc-article-answer">
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </div>
          ))}
          {section.links && <GuideLinks links={section.links} />}
        </section>
      ))}
    </>
  );
}
