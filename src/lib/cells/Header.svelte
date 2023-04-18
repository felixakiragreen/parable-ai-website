<script lang="ts">
	import { stitch } from '@/ui'

	import { Image } from '@/lib/atoms'
	import { Content, Inline, Text, Link, HeaderLink } from '@/lib/bonds'

	const ss = stitch({
		position: 'relative',
		// '@md': {
		// 	position: 'sticky',
		// },
		top: '$0',
		bg: '$grey-500',
		color: '$foreground',
		zIndex: 10,
	})
</script>

<header class={ss()}>
	<Content
		css={{
			bg: '$grey-500',
			p: '$4',
		}}
	>
		<Inline align="between">
			<Text>Parable</Text>
			<Text>Do more with AI</Text>
		</Inline>
	</Content>
</header>
