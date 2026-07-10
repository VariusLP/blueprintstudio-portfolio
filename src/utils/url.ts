/** Erzeugt eine URL unter Berücksichtigung von `base` in astro.config.mjs */
export function withBase(path = '') {
  const base = import.meta.env.BASE_URL.replace(/\/?$/, '/');

  if (!path || path === '/') {
    return base;
  }

  return `${base}${path.replace(/^\//, '')}`;
}
