<script lang="ts">
	import { stitch } from '@/ui'
	import type { CSS } from '@/ui'

	export let css: CSS = null

	const ss = stitch({
		// backgroundColor: "$background",
		// color: "$foreground",

		mx: 'auto',
		maxWidth: '$screen-lg',
		// py: '$4',
		// px: '$4',

		// '@sm': {
		// 	px: '$8',
		// },
		// '@lg': {
		// 	px: '$0',
		// },
		// '@xl': {
		// 	px: '$0',
		// },
	})
</script>

<section class={ss({ css })}>
	<slot />
</section>
