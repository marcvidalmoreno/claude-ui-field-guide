// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	integrations: [
		starlight({
			title: 'Claude UI field guide',
			description:
				'Every interface element Claude can show in the Claude desktop app’s Code tab: purpose, actions, specs and a demo.',
			customCss: ['./src/styles/mocks.css'],
			// Element pages are short and have no headings worth listing.
			tableOfContents: false,
			components: {
				PageTitle: './src/components/PageTitle.astro',
				MarkdownContent: './src/components/MarkdownContent.astro',
			},
			sidebar: [
				{ label: 'Overview', link: '/' },
				{ label: 'About us', link: '/about/' },
				{ label: 'In the chat stream', items: [{ autogenerate: { directory: 'chat' } }] },
				{ label: 'Under the latest message', items: [{ autogenerate: { directory: 'under-message' } }] },
				{ label: 'Panes and window', items: [{ autogenerate: { directory: 'panes' } }] },
			],
		}),
	],
});
