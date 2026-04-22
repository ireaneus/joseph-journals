// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://ireaneus.github.io/joseph-journals/',
	base: '/joseph-journals',
	devToolbar: {
		enabled: false,
	},
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
  					label: 'Bio', autogenerate: { directory: 'bio' },
  				},
  				{
  					label: 'Articles',
  					collapsed: true,
  					items: [
  						{ label: 'Series', autogenerate: { directory: 'sermons/series' } },
  						{ label: 'Topical', autogenerate: { directory: 'sermons/topics' } },
  						{ label: 'Scripture Index', autogenerate: { directory: 'sermons/scripture-index' } },
  					],
  				},
  				{ label: 'Devotions', collapsed: true, autogenerate: { directory: 'devotion' } },
  				{ label: 'Bible Studies', collapsed: true, autogenerate: { directory: 'bible-study' } },
				{ label: 'Resources', collapsed: true, autogenerate: { directory: 'resource' } },
			]
		}),
	],
});
