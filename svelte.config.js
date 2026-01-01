import { mdsvex, escapeSvelte } from 'mdsvex';
import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { createHighlighter } from 'shiki';

const theme = 'github-light';
const highlighter = await createHighlighter({
	themes: [theme],
	langs: [
		'javascript',
		'typescript',
		'ts',
		'js',
		'jsx',
		'tsx',
		'svelte',
		'python',
		'rust',
		'go',
		'lua',
		'bash',
		'sh',
		'shell',
		'html',
		'css',
		'scss',
		'json',
		'markdown',
		'md',
		'yaml',
		'vue'
	]
});

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		vitePreprocess(),
		mdsvex({
			highlight: {
				highlighter: async (code, lang = 'text') => {
					const html = escapeSvelte(highlighter.codeToHtml(code, { lang, theme }));
					return `{@html \`${html}\` }`;
				}
			}
		})
	],
	kit: {
		adapter: adapter({
			runtime: 'nodejs20.x'
		})
	},

	extensions: ['.svelte', '.svx']
};

export default config;
