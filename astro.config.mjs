// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Journals of a Preacher',
			sidebar: [
				{
					label: 'Start Here',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Joseph Journals', link: '/' },
					],
				},
				{
					label: 'Journals',
					autogenerate: { directory: 'sermons' }
				},
			],
		}),
	],
});
