import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://blueprintstudio.at',
  base: '/',
  output: 'static',
  compressHTML: true,

  vite: {
    plugins: [tailwindcss()],
  },
});