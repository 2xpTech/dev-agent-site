import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://2xptech.github.io',
  base: '/dev-agent-site',
  integrations: [tailwind()],
});