import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';
import netlify from '@astrojs/netlify/functions';
import react from '@astrojs/react';

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  polyfills: true,
  integrations: [tailwind(), compress(), react(), mdx()],
  output: 'server',
  adapter: netlify()
});