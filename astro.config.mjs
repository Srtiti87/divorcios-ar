// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // PASO 2: Agregamos la URL oficial para que el sitemap funcione
  site: 'https://www.divorcios.ar',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()]
});