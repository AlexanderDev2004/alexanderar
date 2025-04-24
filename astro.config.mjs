// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
// import remarkToc from 'remark-toc';
import remarkGfm from 'remark-gfm';

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), react()],
  markdown: {
    remarkPlugins: [ remarkGfm],
    shikiConfig: {
      theme: 'github-light'
    }
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
