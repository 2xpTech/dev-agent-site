import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://devagents.ca',
  // Remove base path for custom domain
  integrations: [tailwind()],
});