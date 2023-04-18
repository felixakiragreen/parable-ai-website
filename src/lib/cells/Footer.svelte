<script lang="ts">
	import { stitch } from '@/ui'

	import { Inline, Stack, Content, Text } from '@/lib/bonds'

	import Socials from '@/lib/cells/Socials.svelte'

	const ss = stitch({
		bg: '$grey-950',
	})
</script>

<footer class={ss()}>
	<Content
		css={{
			p: '$4',
		}}
	>
		<Inline align="center">
			<Socials
				size="lg"
				symbol="bg"
				ground="cl"
				hoverSymbol="be"
				hoverGround="hl"
				css={{
					pointerEvents: 'auto',
				}}
			/>
		</Inline>
	</Content>
</footer>
