import { useState } from 'react';
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  Download,
  FileSpreadsheet,
  Plus,
} from 'lucide-react';

import { Link } from '@/core/i18n/navigation';
import { m } from '@/paraglide/messages.js';

import '@/styles/gridcraft-resources.css';

type Guide = {
  id: string;
  category: string;
  title: string;
  description: string;
  image: string;
  tag: string;
  time: string;
};
type Platform = 'mac' | 'windows' | 'linux';
const releaseBase =
  'https://github.com/storytold/gridcraft/releases/download/v0.7.0/';

function GuideCard({ guide }: { guide: Guide }) {
  const slug =
    guide.id === 'start'
      ? 'getting-started'
      : guide.id === 'analysis'
        ? 'charts-and-pivots'
        : 'formulas';
  return (
    <Link className={`gc-guide gc-guide-${guide.id}`} href={`/guides/${slug}`}>
      <div className="gc-guide-image">
        <img loading="lazy" src={guide.image} alt={guide.title} />
        <span className="gc-guide-open">
          <ArrowUpRight size={20} />
        </span>
      </div>
      <div className="gc-guide-copy">
        <div className="gc-guide-meta">
          <span>{guide.tag}</span>
          <span>{guide.time}</span>
        </div>
        <h3>{guide.title}</h3>
        <p>{guide.description}</p>
        <span className="gc-guide-read">
          {m['gc.resources.guide.read']()}
          <ArrowRight size={14} />
        </span>
      </div>
    </Link>
  );
}

export function GridcraftResources() {
  const [filter, setFilter] = useState('all');
  const [platform, setPlatform] = useState<Platform>('mac');
  const guides: Guide[] = [
    {
      id: 'start',
      category: 'start',
      tag: m['gc.resources.guide.start.tag'](),
      time: m['gc.resources.guide.start.time'](),
      title: m['gc.resources.guide.start.title'](),
      description: m['gc.resources.guide.start.description'](),
      image: '/imgs/gridcraft/budget.webp',
    },
    {
      id: 'formulas',
      category: 'formulas',
      tag: m['gc.resources.guide.formulas.tag'](),
      time: m['gc.resources.guide.formulas.time'](),
      title: m['gc.resources.guide.formulas.title'](),
      description: m['gc.resources.guide.formulas.description'](),
      image: '/imgs/gridcraft/grades-formulas.webp',
    },
    {
      id: 'analysis',
      category: 'analysis',
      tag: m['gc.resources.guide.analysis.tag'](),
      time: m['gc.resources.guide.analysis.time'](),
      title: m['gc.resources.guide.analysis.title'](),
      description: m['gc.resources.guide.analysis.description'](),
      image: '/imgs/gridcraft/pivot.webp',
    },
  ];
  const filters = [
    { id: 'all', label: m['gc.resources.filter.all']() },
    { id: 'start', label: m['gc.resources.filter.start']() },
    { id: 'formulas', label: m['gc.resources.filter.formulas']() },
    { id: 'analysis', label: m['gc.resources.filter.analysis']() },
  ];
  const comparisons = [
    [
      m['gc.resources.compare.license'](),
      m['gc.resources.compare.license.gc'](),
      m['gc.resources.compare.license.excel'](),
    ],
    [
      m['gc.resources.compare.cost'](),
      m['gc.resources.compare.cost.gc'](),
      m['gc.resources.compare.cost.excel'](),
    ],
    [
      m['gc.resources.compare.platforms'](),
      m['gc.resources.compare.platforms.gc'](),
      m['gc.resources.compare.platforms.excel'](),
    ],
    [
      m['gc.resources.compare.workflow'](),
      m['gc.resources.compare.workflow.gc'](),
      m['gc.resources.compare.workflow.excel'](),
    ],
    [
      m['gc.resources.compare.macros'](),
      m['gc.resources.compare.macros.gc'](),
      m['gc.resources.compare.macros.excel'](),
    ],
    [
      m['gc.resources.compare.maturity'](),
      m['gc.resources.compare.maturity.gc'](),
      m['gc.resources.compare.maturity.excel'](),
    ],
  ];
  const platforms = {
    mac: {
      label: m['gc.resources.download.mac'](),
      architecture: m['gc.resources.download.mac.arch'](),
      file: 'gridcraft-0.7.0-macos-universal.dmg',
      steps: [
        m['gc.resources.download.mac.step1'](),
        m['gc.resources.download.mac.step2'](),
        m['gc.resources.download.mac.step3'](),
      ],
    },
    windows: {
      label: m['gc.resources.download.windows'](),
      architecture: m['gc.resources.download.windows.arch'](),
      file: 'gridcraft-0.7.0-windows-x64.msi',
      steps: [
        m['gc.resources.download.windows.step1'](),
        m['gc.resources.download.windows.step2'](),
        m['gc.resources.download.windows.step3'](),
      ],
    },
    linux: {
      label: m['gc.resources.download.linux'](),
      architecture: m['gc.resources.download.linux.arch'](),
      file: 'gridcraft-0.7.0-linux-x86_64.AppImage',
      steps: [
        m['gc.resources.download.linux.step1'](),
        m['gc.resources.download.linux.step2'](),
        m['gc.resources.download.linux.step3'](),
      ],
    },
  };
  const currentPlatform = platforms[platform];
  const faqs = [
    [m['gc.resources.faq.free.q'](), m['gc.resources.faq.free.a']()],
    [
      m['gc.resources.faq.affiliation.q'](),
      m['gc.resources.faq.affiliation.a'](),
    ],
    [
      m['gc.resources.faq.compatibility.q'](),
      m['gc.resources.faq.compatibility.a'](),
    ],
    [m['gc.resources.faq.browser.q'](), m['gc.resources.faq.browser.a']()],
    [m['gc.resources.faq.macros.q'](), m['gc.resources.faq.macros.a']()],
  ];

  return (
    <div className="gc-resources">
      <section
        className="gc-resource-section"
        id="features"
        aria-labelledby="gc-features-title"
      >
        <div className="gc-resource-container">
          <div className="gc-feature-layout">
            <div className="gc-feature-copy">
              <h2 id="gc-features-title">
                {m['gc.resources.features.title']()}
              </h2>
              <p className="gc-section-intro">
                {m['gc.resources.features.description']()}
              </p>
              <ul className="gc-feature-points">
                <li>
                  <Check />
                  {m['gc.resources.features.xlsx']()}
                </li>
                <li>
                  <Check />
                  {m['gc.resources.features.functions']()}
                </li>
                <li>
                  <Check />
                  {m['gc.resources.features.local']()}
                </li>
              </ul>
              <div className="gc-resource-actions">
                <Link className="gc-resource-button" href="/editor">
                  {m['gc.resources.open_editor']()}
                  <ArrowUpRight size={17} />
                </Link>
                <a className="gc-resource-textlink" href="#learn">
                  {m['gc.resources.features.learn']()}
                  <ArrowDown size={16} />
                </a>
              </div>
              <p className="gc-alpha-note">
                {m['gc.resources.features.alpha']()}
              </p>
            </div>
            <div className="gc-feature-visual">
              <img
                loading="lazy"
                src="/imgs/gridcraft/format-chart.webp"
                alt={m['gc.resources.features.image_alt']()}
              />
              <span className="gc-visual-caption">
                {m['gc.resources.features.caption']()}
              </span>
            </div>
          </div>
          <div className="gc-feature-facts">
            <div>
              <strong>{m['gc.resources.facts.xlsx.value']()}</strong>
              <span>{m['gc.resources.facts.xlsx.label']()}</span>
            </div>
            <div>
              <strong>{m['gc.resources.facts.functions.value']()}</strong>
              <span>{m['gc.resources.facts.functions.label']()}</span>
            </div>
            <div>
              <strong>{m['gc.resources.facts.source.value']()}</strong>
              <span>{m['gc.resources.facts.source.label']()}</span>
            </div>
            <div>
              <strong>{m['gc.resources.facts.platform.value']()}</strong>
              <span>{m['gc.resources.facts.platform.label']()}</span>
            </div>
          </div>
        </div>
      </section>

      <section
        className="gc-resource-section gc-learn-section"
        id="learn"
        aria-labelledby="gc-learn-title"
      >
        <div className="gc-resource-container">
          <div className="gc-section-heading">
            <div>
              <h2 id="gc-learn-title">{m['gc.resources.learn.title']()}</h2>
            </div>
            <p>{m['gc.resources.learn.description']()}</p>
          </div>
          <div
            className="gc-guide-filters"
            role="group"
            aria-label={m['gc.resources.filter.label']()}
          >
            {filters.map((item) => (
              <button
                type="button"
                key={item.id}
                aria-pressed={filter === item.id}
                onClick={() => setFilter(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div
            className={`gc-guides ${filter !== 'all' ? 'gc-guides-filtered' : ''}`}
          >
            {guides
              .filter((guide) => filter === 'all' || guide.category === filter)
              .map((guide) => (
                <GuideCard key={guide.id} guide={guide} />
              ))}
          </div>
          <p className="gc-learning-footnote">
            <FileSpreadsheet size={15} />
            {m['gc.resources.learn.footnote']()}
          </p>
        </div>
      </section>

      <section
        className="gc-resource-section"
        id="compare"
        aria-labelledby="gc-compare-title"
      >
        <div className="gc-resource-container">
          <div className="gc-section-heading">
            <div>
              <h2 id="gc-compare-title">{m['gc.resources.compare.title']()}</h2>
            </div>
            <p>{m['gc.resources.compare.description']()}</p>
          </div>
          <div
            className="gc-compare-scroll"
            role="region"
            aria-label={m['gc.resources.compare.table_label']()}
            tabIndex={0}
          >
            <table className="gc-compare-table">
              <thead>
                <tr>
                  <th scope="col">{m['gc.resources.compare.column']()}</th>
                  <th scope="col">
                    <span className="gc-table-brand">
                      {m['gc.resources.compare.gridcraft']()}
                    </span>
                    <span className="gc-table-sub">
                      {m['gc.resources.compare.gc_subtitle']()}
                    </span>
                  </th>
                  <th scope="col">
                    {m['gc.resources.compare.excel']()}
                    <span className="gc-table-sub">
                      {m['gc.resources.compare.excel_subtitle']()}
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row) => (
                  <tr key={row[0]}>
                    <th scope="row">{row[0]}</th>
                    <td>{row[1]}</td>
                    <td>{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="gc-compare-sources">
            <p>{m['gc.resources.compare.note']()}</p>
            <div>
              <a
                href="https://github.com/storytold/gridcraft"
                target="_blank"
                rel="noreferrer"
              >
                {m['gc.resources.compare.source_gc']()}
                <ArrowUpRight size={14} />
              </a>
              <a
                href="https://www.microsoft.com/en-us/microsoft-365/excel"
                target="_blank"
                rel="noreferrer"
              >
                {m['gc.resources.compare.source_excel']()}
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        className="gc-resource-section"
        id="download"
        aria-labelledby="gc-download-title"
      >
        <div className="gc-resource-container">
          <div className="gc-download-layout">
            <div className="gc-download-intro">
              <h2 id="gc-download-title">
                {m['gc.resources.download.title']()}
              </h2>
              <p className="gc-section-intro">
                {m['gc.resources.download.description']()}
              </p>
              <div className="gc-download-art">
                <img
                  loading="lazy"
                  src="/imgs/gridcraft/hero.webp"
                  alt={m['gc.resources.download.image_alt']()}
                />
              </div>
              <p className="gc-download-browser">
                {m['gc.resources.download.browser']()}
                <Link href="/editor">
                  {m['gc.resources.download.browser_link']()}
                  <ArrowUpRight size={15} />
                </Link>
              </p>
            </div>
            <div className="gc-download-panel">
              <div
                className="gc-platform-tabs"
                role="tablist"
                aria-label={m['gc.resources.download.platform_label']()}
              >
                {(Object.keys(platforms) as Platform[]).map((item) => (
                  <button
                    type="button"
                    key={item}
                    id={`gc-platform-${item}`}
                    role="tab"
                    aria-selected={platform === item}
                    aria-controls="gc-download-content"
                    tabIndex={platform === item ? 0 : -1}
                    onClick={() => setPlatform(item)}
                    onKeyDown={(event) => {
                      const keys = Object.keys(platforms) as Platform[];
                      const index = keys.indexOf(item);
                      if (
                        event.key === 'ArrowRight' ||
                        event.key === 'ArrowLeft' ||
                        event.key === 'Home' ||
                        event.key === 'End'
                      ) {
                        event.preventDefault();
                        const next =
                          event.key === 'Home'
                            ? keys[0]
                            : event.key === 'End'
                              ? keys[2]
                              : keys[
                                  (index +
                                    (event.key === 'ArrowRight' ? 1 : 2)) %
                                    3
                                ];
                        setPlatform(next);
                        document.getElementById(`gc-platform-${next}`)?.focus();
                      }
                    }}
                  >
                    {platforms[item].label}
                  </button>
                ))}
              </div>
              <div
                id="gc-download-content"
                className="gc-download-content"
                role="tabpanel"
                tabIndex={0}
                aria-labelledby={`gc-platform-${platform}`}
              >
                <div className="gc-release-label">
                  {m['gc.resources.download.version']()}
                </div>
                <h3>
                  {m['gc.resources.download.for_platform']({
                    platform: currentPlatform.label,
                  })}
                </h3>
                <p className="gc-download-arch">
                  {currentPlatform.architecture}
                </p>
                <a
                  className="gc-resource-button gc-download-button"
                  href={`${releaseBase}${currentPlatform.file}`}
                >
                  <Download size={18} />
                  {m['gc.resources.download.button']({
                    platform: currentPlatform.label,
                  })}
                  <ArrowDown size={17} />
                </a>
                <ol className="gc-install-steps">
                  {currentPlatform.steps.map((step, index) => (
                    <li key={step}>
                      <span>{String(index + 1).padStart(2, '0')}</span>
                      <p>{step}</p>
                    </li>
                  ))}
                </ol>
                <a
                  className="gc-resource-textlink"
                  href="https://github.com/storytold/gridcraft/releases"
                  target="_blank"
                  rel="noreferrer"
                >
                  {m['gc.resources.download.releases']()}
                  <ArrowUpRight size={15} />
                </a>
                <p className="gc-download-warning">
                  {m['gc.resources.download.warning']()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="gc-resource-section gc-faq-section"
        id="faq"
        aria-labelledby="gc-faq-title"
      >
        <div className="gc-resource-container gc-faq-layout">
          <div>
            <h2 id="gc-faq-title">{m['gc.resources.faq.title']()}</h2>
            <p className="gc-section-intro">
              {m['gc.resources.faq.description']()}
            </p>
            <a
              className="gc-resource-textlink"
              href="https://discord.gg/artcraft"
              target="_blank"
              rel="noreferrer"
            >
              {m['gc.resources.faq.community']()}
              <ArrowUpRight size={16} />
            </a>
          </div>
          <div className="gc-faq-list">
            {faqs.map(([question, answer]) => (
              <details key={question}>
                <summary>
                  {question}
                  <Plus size={18} />
                </summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
