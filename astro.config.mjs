// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import vanillaExtractPlugin from '@vanilla-extract/vite-plugin';

// https://astro.build/config
export default defineConfig({
  vite: {
    // @ts-ignore
    plugins: [vanillaExtractPlugin()],
  },
  integrations: [mdx()],
});
