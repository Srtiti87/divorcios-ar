import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.divorcios.ar',

  vite: {
    plugins: [tailwindcss()]
  },

  redirects: {
    '/costo-de-un-divorcio': '/costo-divorcio-buenos-aires',
    '/divorcio-con-hijos-buenos-aires': '/divorcio-con-hijos-ciudad-buenos-aires',
  },

  integrations: [
    sitemap(), 
    // Eliminamos Partytown de aquí
  ]
});
