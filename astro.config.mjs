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
						{ label: 'Home', slug: 'index' },
					],
				},
				{
					label: 'Sermons',
					items: [
      					{ label: 'Overview', slug: 'sermons' },
      				  	{ label: 'First Sermon Draft', slug: 'sermons/drafts/first-sermon' },
					],
				},
			],
		}),
	],
});
