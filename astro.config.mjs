// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import partytown from '@astrojs/partytown';

export default defineConfig({
  site: 'https://www.divorcios.ar',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [
    sitemap(), 
    partytown({
      config: {
        forward: ['dataLayer.push'],
      },
      // AGREGAMOS ESTO: Copia los archivos de la librería a la carpeta pública
      lib: true, 
    }),
  ]
});