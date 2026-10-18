import { useEffect, useRef, useState } from 'react';
import {
  ArrowDownToLine,
  ArrowUpRight,
  BookOpen,
  Grid2X2,
  LoaderCircle,
  Maximize2,
  Play,
  RotateCcw,
} from 'lucide-react';

import { Link } from '@/core/i18n/navigation';
import { envConfigs } from '@/config';
import { m } from '@/paraglide/messages.js';
import { GridcraftHeader } from '@/blocks/gridcraft-chrome';

import '@/styles/gridcraft-editor.css';

export type EditorSample = 'sales' | 'budget' | 'grades';

export function GridcraftEditor({ sample }: { sample?: EditorSample }) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'ready' | 'error'>(
    'idle'
  );
  const [attempt, setAttempt] = useState(0);
  const [selectedSample, setSelectedSample] = useState<
    EditorSample | undefined
  >(sample);
  const frame = useRef<HTMLIFrameElement>(null);
  const appUrl = `/editor-app/index.html${selectedSample ? `?sample=${selectedSample}` : ''}`;
  const active = status !== 'idle';

  useEffect(() => {
    if (status !== 'loading') return;
    const interval = window.setInterval(() => {
      try {
        const document = frame.current?.contentDocument;
        const canvas =
          document?.querySelector<HTMLCanvasElement>('#gridcraft_canvas');
        const loading = document?.getElementById('gridcraft_loading');
        // v0.7.0 removes this element only after WebRunner.start succeeds.
        // A canvas alone exists in the static HTML, before WASM has started.
        if (loading?.textContent?.includes('GridCraft failed to start:')) {
          setStatus('error');
        } else if (
          canvas &&
          canvas.width > 0 &&
          canvas.height > 0 &&
          !loading
        ) {
          setStatus('ready');
        }
      } catch {
        // The bundled app is same-origin. Keep the timeout available if loading fails.
      }
    }, 400);
    const timeout = window.setTimeout(() => setStatus('error'), 60000);
    return () => {
      window.clearInterval(interval);
      window.clearTimeout(timeout);
    };
  }, [status, attempt]);

  function launch() {
    setAttempt((value) => value + 1);
    setStatus('loading');
  }

  return (
    <div
      className={`gc-editor ${active ? 'gc-editor-active' : 'gc-editor-idle'}`}
    >
      {!active ? (
        <GridcraftHeader />
      ) : (
        <header className="gc-editor-header">
          <Link
            href="/"
            className="gc-editor-brand"
            aria-label={m['gc.editor.back']()}
          >
            <img src={envConfigs.app_logo} alt="" width="26" height="26" />
            <span>{envConfigs.app_name}</span>
            <span className="gc-editor-tag">{m['gc.editor.web']()}</span>
          </Link>
          <nav aria-label={m['gc.editor.navigation']()}>
            <Link href="/#learn" className="gc-editor-text-link">
              <BookOpen size={15} />
              <span>{m['gc.editor.guide']()}</span>
            </Link>
            <Link href="/#download" className="gc-editor-download">
              <ArrowDownToLine size={15} />
              <span>{m['gc.editor.download']()}</span>
            </Link>
          </nav>
        </header>
      )}
      <main
        className={
          active ? 'gc-editor-main' : 'gc-editor-main gc-editor-main-launch'
        }
      >
        {!active ? (
          <section className="gc-editor-launch" aria-labelledby="editor-title">
            <div className="gc-editor-welcome">
              <p className="gc-editor-eyebrow">{m['gc.editor.eyebrow']()}</p>
              <h1 id="editor-title">{m['gc.editor.title']()}</h1>
              <p className="gc-editor-intro">{m['gc.editor.intro']()}</p>
              <button className="gc-editor-primary" onClick={launch}>
                <Play size={15} fill="currentColor" />
                {m['gc.editor.launch']()}
                <ArrowUpRight size={17} />
              </button>
              <p className="gc-editor-alpha">{m['gc.editor.alpha']()}</p>
              <div className="gc-editor-support">
                <BookOpen size={17} />
                <div>
                  <span>{m['gc.editor.guide_label']()}</span>
                  <p>{m['gc.editor.guide_body']()}</p>
                  <Link href="/guides/getting-started">
                    {m['gc.editor.guide']()}
                    <ArrowUpRight size={13} />
                  </Link>
                </div>
              </div>
            </div>
            <div className="gc-editor-starters">
              <h2>{m['gc.editor.choose']()}</h2>
              <div className="gc-editor-sample-grid">
                <button
                  aria-pressed={!selectedSample}
                  onClick={() => setSelectedSample(undefined)}
                  className="gc-starter gc-starter-blank"
                >
                  <span className="gc-starter-image">
                    <Grid2X2 size={38} strokeWidth={1} />
                  </span>
                  <strong>{m['gc.editor.blank']()}</strong>
                  <span>{m['gc.editor.blank_desc']()}</span>
                </button>
                <button
                  aria-pressed={selectedSample === 'sales'}
                  onClick={() => setSelectedSample('sales')}
                  className="gc-starter"
                >
                  <span className="gc-starter-image">
                    <img src="/imgs/gridcraft/hero.webp" alt="" />
                  </span>
                  <strong>{m['gc.editor.sales']()}</strong>
                  <span>{m['gc.editor.sales_desc']()}</span>
                </button>
                <button
                  aria-pressed={selectedSample === 'budget'}
                  onClick={() => setSelectedSample('budget')}
                  className="gc-starter"
                >
                  <span className="gc-starter-image">
                    <img src="/imgs/gridcraft/budget.webp" alt="" />
                  </span>
                  <strong>{m['gc.editor.budget']()}</strong>
                  <span>{m['gc.editor.budget_desc']()}</span>
                </button>
                <button
                  aria-pressed={selectedSample === 'grades'}
                  onClick={() => setSelectedSample('grades')}
                  className="gc-starter"
                >
                  <span className="gc-starter-image">
                    <img src="/imgs/gridcraft/grades-formulas.webp" alt="" />
                  </span>
                  <strong>{m['gc.editor.grades']()}</strong>
                  <span>{m['gc.editor.grades_desc']()}</span>
                </button>
              </div>
              <div className="gc-editor-before">
                <span>{m['gc.editor.before']()}</span>
                <p>{m['gc.editor.save_tip']()}</p>
                <p className="gc-editor-mobile">{m['gc.editor.mobile']()}</p>
              </div>
            </div>
          </section>
        ) : (
          <>
            <iframe
              ref={frame}
              key={attempt}
              className="gc-editor-frame"
              src={appUrl}
              title={m['gc.editor.frame']()}
              allow="fullscreen; clipboard-read; clipboard-write"
              allowFullScreen
              onError={() => setStatus('error')}
            />
            {status === 'loading' && (
              <div className="gc-editor-loading" role="status">
                <LoaderCircle className="gc-editor-spin" size={23} />
                <span>{m['gc.editor.loading']()}</span>
              </div>
            )}
            {status === 'error' && (
              <div className="gc-editor-error" role="alert">
                <h2>{m['gc.editor.error_title']()}</h2>
                <p>{m['gc.editor.error_body']()}</p>
                <button className="gc-editor-primary" onClick={launch}>
                  <RotateCcw size={16} />
                  {m['gc.editor.retry']()}
                </button>
                <a
                  href={`${appUrl}${selectedSample ? '&' : '?'}webgl`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {m['gc.editor.webgl']()}
                  <ArrowUpRight size={14} />
                </a>
              </div>
            )}
          </>
        )}
      </main>
      <footer className="gc-editor-footer">
        <span>{m['gc.editor.version']()}</span>
        <span className="gc-editor-credit">{m['gc.editor.credit']()}</span>
        {active && (
          <div>
            <button
              onClick={() => {
                void frame.current?.requestFullscreen().catch(() => {});
              }}
            >
              <Maximize2 size={13} />
              {m['gc.editor.fullscreen']()}
            </button>
            <a href={appUrl} target="_blank" rel="noopener noreferrer">
              {m['gc.editor.open']()}
              <ArrowUpRight size={13} />
            </a>
          </div>
        )}
      </footer>
    </div>
  );
}
