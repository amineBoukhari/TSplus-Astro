import { defineConfig } from 'astro/config';
import { remarkModifiedTime } from './remark-modified-time.mjs';
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [remarkModifiedTime]
  },
  integrations: [    react({
    include: ['**/react/*'],
  })]
});