// Client-side i18n runtime.
//
// Language resolution order: saved preference -> browser language -> English.
// The chosen language is written to <html data-lang="..."> and <html lang="...">.
// Static strings are switched by CSS (see BaseLayout); this module handles
// attribute strings, JS-driven strings, and the language toggle buttons.

import { ui, langFromTag, translate, type Lang } from './ui';

export const LANG_STORAGE_KEY = 'lang';
export const LANG_EVENT = 'lang-change';

declare global {
  interface Window {
    __i18n?: {
      t: (key: string, vars?: Record<string, string | number>) => string;
      getLang: () => Lang;
      setLang: (lang: Lang) => void;
      refresh: () => void;
    };
  }
}

function readStoredLang(): Lang | null {
  try {
    const value = window.localStorage.getItem(LANG_STORAGE_KEY);
    return value === 'en' || value === 'zh' ? value : null;
  } catch {
    return null;
  }
}

function writeStoredLang(lang: Lang): void {
  try {
    window.localStorage.setItem(LANG_STORAGE_KEY, lang);
  } catch {
    // Ignore storage failures (private mode, etc.)
  }
}

/** Language currently applied to the document. */
export function getLang(): Lang {
  return document.documentElement.getAttribute('data-lang') === 'zh' ? 'zh' : 'en';
}

/** Translate using the active document language. */
export function t(key: string, vars?: Record<string, string | number>): string {
  return translate(getLang(), key, vars);
}

/** Apply every [data-i18n-text] and [data-i18n-attr] element on the page. */
export function refresh(): void {
  document.querySelectorAll<HTMLElement>('[data-i18n-text]').forEach((el) => {
    const key = el.dataset.i18nText;
    if (key) el.textContent = t(key);
  });

  document.querySelectorAll<HTMLElement>('[data-i18n-attr]').forEach((el) => {
    const spec = el.dataset.i18nAttr;
    if (!spec) return;
    for (const pair of spec.split(';')) {
      const [attr, key] = pair.split(':').map((part) => part.trim());
      if (attr && key) el.setAttribute(attr, t(key));
    }
  });
}

function syncToggles(lang: Lang): void {
  document.querySelectorAll<HTMLElement>('[data-lang-toggle]').forEach((el) => {
    el.setAttribute('aria-label', t('lang.toggle_aria'));
    el.setAttribute('lang', lang === 'zh' ? 'en' : 'zh-CN');
  });
}

/** Switch language, persist it, and notify the rest of the page. */
export function setLang(lang: Lang): void {
  document.documentElement.setAttribute('data-lang', lang);
  document.documentElement.setAttribute('lang', lang === 'zh' ? 'zh-CN' : 'en');
  writeStoredLang(lang);
  refresh();
  syncToggles(lang);
  window.dispatchEvent(new CustomEvent(LANG_EVENT, { detail: { lang } }));
}

/** Resolve the initial language and wire up the toggle buttons. Idempotent. */
export function initI18n(): void {
  const current = getLang();

  if (!window.__i18n) {
    window.__i18n = { t, getLang, setLang, refresh };
  }

  document.querySelectorAll<HTMLElement>('[data-lang-toggle]').forEach((el) => {
    if (el.dataset.langToggleBound) return;
    el.dataset.langToggleBound = 'true';
    el.addEventListener('click', () => {
      setLang(getLang() === 'zh' ? 'en' : 'zh');
    });
  });

  // Re-apply after each navigation for pages that swap the DOM.
  if (!document.documentElement.dataset.i18nPageLoadBound) {
    document.documentElement.dataset.i18nPageLoadBound = 'true';
    document.addEventListener('astro:page-load', () => {
      refresh();
      syncToggles(getLang());
      initI18n();
    });
  }

  refresh();
  syncToggles(current);
}

/** Resolve the language to use on first paint (no storage write). */
export function resolveInitialLang(): Lang {
  const stored = readStoredLang();
  if (stored) return stored;
  const fromNavigator = langFromTag(navigator.language || (navigator.languages && navigator.languages[0]));
  return fromNavigator ?? 'en';
}

export { ui };
