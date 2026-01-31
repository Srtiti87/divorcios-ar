// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
  // PASO 2: Agregamos la URL oficial para que el sitemap funcione
  site: 'https://www.divorcios.ar',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [
    sitemap(), 
    partytown({
      // Esta configuración es VITAL para Google Tag Manager
      config: {
        forward: ['dataLayer.push'],
      },
    }),
  ]
});