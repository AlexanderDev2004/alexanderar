// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), react(),sitemap()],
    site : 'https://alexanderar.my.id',
  vite: {
    plugins: [tailwindcss()]
  }
});