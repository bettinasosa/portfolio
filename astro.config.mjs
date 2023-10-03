import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';
import netlify from '@astrojs/netlify/functions';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  polyfills: true,
  integrations: [tailwind(), compress(), react()],
  output: 'server',
  adapter: netlify()
});