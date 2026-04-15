// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://ireaneus.github.io/joseph-journals/',
	base: '/joseph-journals',
	integrations: [
		starlight({
			title: 'Journals of a Preacher',
			customCss: ['./src/styles/theme.css'],
			sidebar: [
  				{ label: 'Home', link: '/' },
  				{
  					label: 'Sermons',
  					items: [
  						{ label: 'Series', autogenerate: { directory: 'sermons/series' } },
  						{ label: 'Topics', autogenerate: { directory: 'sermons/topics' } },
  						{ label: 'Scripture Index', autogenerate: { directory: 'sermons/scripture-index' } },
  					],
  				},
  				{ label: 'Devotions', autogenerate: { directory: 'devotions' } },
  				{ label: 'Bible Studies', autogenerate: { directory: 'bible-studies' } },
			]
		}),
	],
});
