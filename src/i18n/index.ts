import { de } from './de';
import { en } from './en';
import type { Lang, Translations } from './types';

const translations: Record<Lang, Translations> = { de, en };

/** Paare für Language-Switcher und hreflang */
export const routePairs: [string, string][] = [
  ['/', '/en'],
  ['/assets', '/en/assets'],
  ['/portfolio', '/en/portfolio'],
  ['/docs', '/en/docs'],
  ['/docs/savesystempro', '/en/docs/savesystempro'],
  ['/docs/project-slimmer', '/en/docs/project-slimmer'],
  ['/kontakt', '/en/contact'],
  ['/ueber-mich', '/en/about'],
  ['/impressum', '/en/legal-notice'],
];

export function getTranslations(lang: Lang): Translations {
  return translations[lang];
}

export function getLangFromPath(path: string): Lang {
  const normalized = path.replace(/\/$/, '') || '/';
  return normalized === '/en' || normalized.startsWith('/en/') ? 'en' : 'de';
}

export function getAlternatePath(path: string): string {
  const normalized = path.replace(/\/$/, '') || '/';
  const lang = getLangFromPath(normalized);

  for (const [dePath, enPath] of routePairs) {
    if (lang === 'de' && normalized === dePath) return enPath;
    if (lang === 'en' && normalized === enPath) return dePath;
  }

  return lang === 'de' ? '/en' : '/';
}

export function getHomePath(lang: Lang): string {
  return lang === 'de' ? '/' : '/en';
}

export function getLegalPath(lang: Lang): string {
  return lang === 'de' ? '/impressum' : '/en/legal-notice';
}

export function getDocsPath(lang: Lang): string {
  return lang === 'de' ? '/docs' : '/en/docs';
}

export function getDocSlugPath(lang: Lang, slug: string): string {
  const base = getDocsPath(lang);
  return `${base}/${slug}`;
}

export { de, en };
export type { Lang, Translations } from './types';
