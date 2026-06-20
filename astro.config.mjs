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
			head: [
				{ tag: 'link', attrs: { rel: 'preconnect', href: 'https://fonts.googleapis.com' } },
				{ tag: 'link', attrs: { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' } },
				{
					tag: 'link',
					attrs: {
						rel: 'stylesheet',
						href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600&family=Source+Serif+4:ital,opsz,wght@0,8..60,300;0,8..60,400;0,8..60,500;1,8..60,300;1,8..60,400&display=swap',
					},
				},
			],
			components: {
				PageTitle: './src/components/starlight/PageTitle.astro',
				Sidebar: './src/components/starlight/Sidebar.astro',
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
						{ label: 'Ezekiel Series', slug: 'articles/series/ezekiel' },
						{ label: 'Topical', slug: 'articles/topical/topical' },
						{ label: 'Scripture Index', slug: 'articles/scripture-index/scripture-index' },
					],
				},
				{ label: 'Devotions', slug: 'devotions/devotion' },
				{
					label: 'Nursery Bible',
					collapsed: true,
					items: [
						{ label: 'Series Home', slug: 'nursery-bible' },
						{ label: 'The Seven Days of Creation', slug: 'nursery-bible/the-seven-days' },
					],
				},
				{ label: 'Bible Studies', slug: 'bible-study/biblestudy' },
				{ label: 'Resources', slug: 'resources/resource' },
			]
		}),
	],
});
