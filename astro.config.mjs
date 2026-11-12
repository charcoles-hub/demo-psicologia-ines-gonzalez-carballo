import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://charcoles-hub.github.io',
  base: '/demo-psicologia-ines-gonzalez-carballo',
  vite: {
    plugins: [tailwindcss()],
  },
});
