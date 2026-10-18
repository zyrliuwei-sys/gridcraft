import { useState } from 'react';
import {
  ArrowDownToLine,
  ArrowRight,
  ArrowUpRight,
  Grid2X2,
} from 'lucide-react';

import { Link } from '@/core/i18n/navigation';
import { m } from '@/paraglide/messages.js';
import { getLocale } from '@/paraglide/runtime.js';
import { GridcraftFooter, GridcraftHeader } from '@/blocks/gridcraft-chrome';
import { GridcraftResources } from '@/blocks/gridcraft-resources';
import { GridcraftStory } from '@/blocks/gridcraft-story';

import '@/styles/gridcraft-home.css';

export function GridcraftHome() {
  const [expenses, setExpenses] = useState(['1240', '385', '94']);
  const [sample, setSample] = useState<'sales' | 'budget' | 'grades'>('sales');
  const total = expenses.reduce((sum, value) => sum + (Number(value) || 0), 0);
  const samples = [
    { id: 'sales' as const, label: m['gc.home.sales'](), image: 'hero' },
    { id: 'budget' as const, label: m['gc.home.budget'](), image: 'budget' },
    {
      id: 'grades' as const,
      label: m['gc.home.grades'](),
      image: 'grades-formulas',
    },
  ];
  const current = samples.find((item) => item.id === sample)!;
  const expenseLabels = [
    m['gc.home.rent'](),
    m['gc.home.food'](),
    m['gc.home.travel'](),
  ];

  return (
    <div className="gc-home">
      <a href="#main" className="gc-skip">
        {m['gc.home.skip']()}
      </a>
      <GridcraftHeader home />
      <main id="main">
        <section className="gc-hero" aria-labelledby="gc-hero-title">
          <div className="gc-hero-heading">
            <p className="gc-hero-kicker">{m['gc.home.kicker']()}</p>
            <h1 id="gc-hero-title">
              {m['gc.home.title']()} <em>{m['gc.home.title_accent']()}</em>
            </h1>
            <p className="gc-hero-description">{m['gc.home.description']()}</p>
            <div className="gc-hero-actions">
              <Link className="gc-primary" href="/editor">
                {m['gc.home.try']()}
                <ArrowUpRight size={18} />
              </Link>
              <a className="gc-secondary" href="#download">
                <ArrowDownToLine size={16} />
                {m['gc.home.desktop']()}
              </a>
            </div>
          </div>
          <div
            className="gc-sample-picker"
            role="group"
            aria-label={m['gc.home.samples']()}
          >
            {samples.map((item) => (
              <button
                key={item.id}
                aria-pressed={sample === item.id}
                onClick={() => setSample(item.id)}
              >
                {item.label}
                <ArrowUpRight size={13} />
              </button>
            ))}
          </div>
          <div className="gc-canvas">
            <section
              className="gc-mini-sheet"
              aria-label={m['gc.home.budget_demo']()}
            >
              <div className="gc-mini-title">
                <Grid2X2 size={14} />
                {m['gc.home.monthly']()}
              </div>
              <table>
                <thead>
                  <tr>
                    <th scope="col" />
                    <th scope="col">A</th>
                    <th scope="col">B</th>
                  </tr>
                </thead>
                <tbody>
                  {expenses.map((value, index) => (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{expenseLabels[index]}</td>
                      <td>
                        <input
                          aria-label={expenseLabels[index]}
                          type="number"
                          min="0"
                          step="1"
                          value={value}
                          onChange={(event) =>
                            setExpenses((previous) =>
                              previous.map((old, i) =>
                                i === index ? event.target.value : old
                              )
                            )
                          }
                        />
                      </td>
                    </tr>
                  ))}
                  <tr className="gc-total">
                    <th scope="row">4</th>
                    <td>{m['gc.home.total']()}</td>
                    <td>
                      <output aria-live="polite">
                        {total.toLocaleString(getLocale(), {
                          maximumFractionDigits: 2,
                        })}
                      </output>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p>{m['gc.home.edit_hint']()}</p>
            </section>
            <figure className="gc-product-preview">
              <img
                src={`/imgs/gridcraft/${current.image}.webp`}
                alt={m['gc.home.preview_alt']({ sample: current.label })}
                width="1600"
                height="1000"
                fetchPriority="high"
              />
              <figcaption>
                <span>{m['gc.home.preview_caption']()}</span>
                <Link href={`/editor?sample=${sample}`}>
                  {m['gc.home.open_sample']()}
                  <ArrowUpRight size={14} />
                </Link>
              </figcaption>
            </figure>
            <div className="gc-formula-card">
              <span>{m['gc.home.formula_label']()}</span>
              <code>
                <b>ƒx</b> =SUM(B1:B3)
              </code>
              <div>
                <span>{m['gc.home.result']()}</span>
                <output aria-live="polite">
                  {total.toLocaleString(getLocale(), {
                    maximumFractionDigits: 2,
                  })}
                </output>
              </div>
            </div>
          </div>
        </section>
        <section className="gc-intro">
          <p>{m['gc.home.intro']()}</p>
          <a
            href="https://github.com/storytold/gridcraft"
            target="_blank"
            rel="noopener noreferrer"
          >
            {m['gc.home.source']()}
            <ArrowUpRight size={15} />
          </a>
        </section>
        <GridcraftStory />
        <GridcraftResources />
        <section className="gc-closing">
          <Grid2X2 size={32} strokeWidth={1} />
          <h2>{m['gc.home.closing_title']()}</h2>
          <p>{m['gc.home.closing_body']()}</p>
          <Link href="/editor" className="gc-primary">
            {m['gc.home.try']()}
            <ArrowRight size={17} />
          </Link>
        </section>
      </main>
      <GridcraftFooter />
    </div>
  );
}
