import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://molavec.github.io',
	// base: '/molavec-astro/',
	integrations: [mdx(), sitemap()],
});
