import { useState } from 'react';
import { ArrowUp, ArrowUpRight, Menu, X } from 'lucide-react';

import { Link } from '@/core/i18n/navigation';
import { envConfigs } from '@/config';
import { m } from '@/paraglide/messages.js';

import '@/styles/gridcraft-home.css';
import '@/styles/gridcraft-footer.css';

export function GridcraftHeader({ home = false }: { home?: boolean }) {
  const [open, setOpen] = useState(false);
  const items = [
    { hash: 'features', label: m['gc.home.nav.product']() },
    { hash: 'learn', label: m['gc.home.nav.learn']() },
    { hash: 'compare', label: m['gc.home.nav.compare']() },
    { hash: 'download', label: m['gc.home.nav.download']() },
  ];
  return (
    <header className="gc-header">
      <Link href="/" className="gc-brand">
        <img src={envConfigs.app_logo} alt="" width="30" height="30" />
        <span>{envConfigs.app_name}</span>
      </Link>
      <nav
        id="gc-mobile-nav"
        className={open ? 'gc-nav gc-nav-open' : 'gc-nav'}
        aria-label={m['gc.home.navigation']()}
      >
        {items.map((item) => (
          <Link
            key={item.hash}
            href={`${home ? '' : '/'}#${item.hash}`}
            onClick={() => setOpen(false)}
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="gc-header-actions">
        <Link href="/sign-in" className="gc-login">
          {m['common.sign.sign_in_title']()}
        </Link>
        <Link href="/editor" className="gc-nav-cta">
          {m['gc.home.start']()}
          <ArrowUpRight size={15} />
        </Link>
        <button
          className="gc-menu"
          aria-expanded={open}
          aria-controls="gc-mobile-nav"
          onClick={() => setOpen(!open)}
          aria-label={m['gc.home.menu']()}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}

export function GridcraftFooter() {
  return (
    <footer
      id="site-footer"
      className="gc-footer"
      aria-label={m['gc.home.footer_navigation']()}
    >
      <div className="gc-footer-top">
        <div className="gc-footer-brand">
          <Link href="/" className="gc-brand">
            <img src={envConfigs.app_logo} alt="" width="30" height="30" />
            <span>{envConfigs.app_name}</span>
          </Link>
          <p className="gc-footer-tagline">{m['gc.footer.tagline']()}</p>
          <p className="gc-footer-description">
            {m['gc.home.footer_description']()}
          </p>
        </div>
        <nav className="gc-footer-group" aria-labelledby="gc-footer-workspace">
          <h2 id="gc-footer-workspace">{m['gc.footer.workspace']()}</h2>
          <Link href="/editor">{m['gc.footer.editor']()}</Link>
          <Link href="/#download">{m['gc.home.nav.download']()}</Link>
          <Link href="/#compare">{m['gc.home.nav.compare']()}</Link>
        </nav>
        <nav className="gc-footer-group" aria-labelledby="gc-footer-learn">
          <h2 id="gc-footer-learn">{m['gc.home.nav.learn']()}</h2>
          <Link href="/guides/getting-started">
            {m['gc.resources.guide.start.tag']()}
          </Link>
          <Link href="/guides/formulas">
            {m['gc.resources.guide.formulas.tag']()}
          </Link>
          <Link href="/guides/charts-and-pivots">
            {m['gc.footer.analysis']()}
          </Link>
        </nav>
        <nav className="gc-footer-group" aria-labelledby="gc-footer-project">
          <h2 id="gc-footer-project">{m['gc.footer.project']()}</h2>
          <a
            href="https://getartcraft.com/apps/gridcraft"
            target="_blank"
            rel="noopener noreferrer"
          >
            {m['gc.home.official']()}
            <ArrowUpRight size={13} />
          </a>
          <a
            href="https://github.com/storytold/gridcraft"
            target="_blank"
            rel="noopener noreferrer"
          >
            {m['gc.footer.github']()}
            <ArrowUpRight size={12} />
          </a>
          <a
            href="/editor-app/LICENSE-MIT"
            target="_blank"
            rel="noopener noreferrer"
          >
            {m['gc.home.licenses']()}
          </a>
        </nav>
      </div>
      <div className="gc-footer-bottom">
        <div className="gc-footer-disclosure">
          <span>
            © {new Date().getFullYear()} {envConfigs.app_name}
          </span>
          <p>{m['gc.home.independent']()}</p>
        </div>
        <button
          type="button"
          className="gc-footer-top-button"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: window.matchMedia('(prefers-reduced-motion: reduce)')
                .matches
                ? 'instant'
                : 'smooth',
            })
          }
        >
          {m['gc.footer.back_top']()}
          <ArrowUp size={14} />
        </button>
      </div>
    </footer>
  );
}
