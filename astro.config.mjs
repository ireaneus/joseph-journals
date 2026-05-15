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
						{ label: 'Ephesians Series', slug: 'articles/series/ephesians' },
						{ label: 'James Series', slug: 'articles/series/james' },
						{ label: 'Topical', slug: 'articles/topical/topical' },
						{ label: 'Scripture Index', slug: 'articles/scripture-index/scripture-index' },
					],
				},
				{ label: 'Devotions', slug: 'devotions/devotion' },
				{ label: 'Bible Studies', slug: 'bible-study/biblestudy' },
				{ label: 'Resources', slug: 'resources/resource' },
			]
		}),
	],
});
