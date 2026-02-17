import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.divorcios.ar',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [
    sitemap(), 
    // Eliminamos Partytown de aquí
  ]
});