<script lang="ts">
	import { stitch } from '@/ui'
	import Link from './Link.svelte'
	import IconSocial from './IconSocial.svelte'
	import Square from './SvgSquare.svelte'

	export let url
	export let newTab = true
	export let hex
	export let hue
	export let path
	export let transform

	// variants
	export let symbol = null
	export let ground = null
	export let hoverSymbol = null
	export let hoverGround = null
</script>

<Link {url} {newTab} look="clean">
	<IconSocial
		brandHue={hue}
		brandExact={hex}
		{...{ symbol, ground, hoverSymbol, hoverGround }}
		{path}
		{transform}
	/>
</Link>
