// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://ireaneus.github.io/joseph-journals/',
	base: '/joseph-journals',
	integrations: [
		starlight({
			title: 'Journals of a modern-day Joseph',
			customCss: ['./src/styles/theme.css'],
			components: {
				PageTitle: './src/components/starlight/PageTitle.astro',
			},
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
  				{ label: 'Devotions', autogenerate: { directory: 'devotion' } },
  				{ label: 'Bible Studies', autogenerate: { directory: 'bible-study' } },
				{ label: 'Resources', autogenerate: { directory: 'resource' } },
			]
		}),
	],
});
