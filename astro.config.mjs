// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Journals of a Preacher',
			sidebar: [
  				{ label: 'Home', link: '/' },
  				{ label: 'Sermons', autogenerate: { directory: 'sermons' } },
  				{ label: 'Devotions', autogenerate: { directory: 'devotions' } },
  				{ label: 'Bible Studies', autogenerate: { directory: 'bible-studies' } },
  				{ label: 'Guides', autogenerate: { directory: 'guides' } },
  				{ label: 'References', autogenerate: { directory: 'reference' } },
			]
		}),
	],
});
