import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://variuslp.github.io',
  base: '/blueprintstudio-portfolio',
  output: 'static',
  compressHTML: true,

  vite: {
    plugins: [tailwindcss()],
  },
});