import { defineMDSveXConfig as defineConfig } from 'mdsvex'

const config = defineConfig({
	extensions: ['.svelte.md', '.md', '.mdx', '.svx'],

	layout: {
		index: './src/lib/cells/LayoutIndex.svelte',
		_: './src/lib/cells/LayoutIndex.svelte',
	},

	smartypants: {
		dashes: 'oldschool',
	},

	remarkPlugins: [],
	rehypePlugins: [],
})

export default config
