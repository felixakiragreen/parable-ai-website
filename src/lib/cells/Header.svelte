<script lang="ts">
	import { stitch } from '@/ui'

	import { Image } from '@/lib/atoms'
	import { Content, Inline, Text, Link, HeaderLink } from '@/lib/bonds'

	const ss = stitch({
		position: 'absolute',
		// '@md': {
		// 	position: 'sticky',
		// },
		top: 0,
		width: '100%',
		// bg: '$grey-500',
		bg: 'hsla(0, 0%, 100%, 0.12)',
		color: '$foreground',
		zIndex: 10,

		// background: '$background_50',
		// color: '$foreground',
		backdropFilter: 'blur(20px)',
	})
</script>

<header class={ss()}>
	<Content
		css={{
			// bg: '$grey-500',
			p: '$8',
			// opacity: '0.5',
		}}
	>
		<div class="bg" />
		<Inline align="between">
			<Inline>
				<Text look="heading">Parable</Text>
				<Text>Do more with AI</Text>
			</Inline>
			<Inline gap="md">
				<HeaderLink url="/#why">Why</HeaderLink>
				<HeaderLink url="/#what">What</HeaderLink>
				<HeaderLink url="/#who">Who</HeaderLink>
			</Inline>
		</Inline>
	</Content>
</header>
