<script lang="ts">
	import { socials as allSocials } from '@/lib/datum/socials'
	import IconSocialRow from '../bonds/IconSocialRow.svelte'

	export let space = 'sm'
	export let align = null
	export let size = 'md'
	export let css = null

	export let filter: string[] = null

	$: socials = filter
		? allSocials.filter((social) => filter.includes(social.title))
		: allSocials

	// variants
	export let symbol = null
	export let ground = null
	export let hoverSymbol = null
	export let hoverGround = null
</script>

<IconSocialRow
	{socials}
	{css}
	{space}
	{align}
	{size}
	{...{ symbol, ground, hoverSymbol, hoverGround }}
/>
