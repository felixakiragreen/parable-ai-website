<script lang="ts">
	import { stitch } from '@/ui'

	import { Image } from '@/lib/atoms'
	import { Content, Inline, Text, Link, HeaderLink } from '@/lib/bonds'

	import logo from '@/assets/fakelogo.svg'

	const ss = stitch({
		position: 'absolute',
		// '@md': {
		// 	position: 'sticky',
		// },
		top: 0,
		width: '100%',
		// bg: '$grey-500',
		bg: 'hsla(0, 0%, 100%, 0.7)',
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
			p: '$4',
			// opacity: '0.5',
		}}
	>
		<div class="bg" />
		<Inline align="between" alignV="center">
			<Inline>
				<!-- <Text look="heading">Parable</Text>
				<Text>Do more with AI</Text> -->
				<Image
					url={logo}
					css={{
						width: '160px',
						// height: '120px',
					}}
				/>
			</Inline>
			<Inline
				gap="md"
				css={{
					height: '100%',
				}}
			>
				<HeaderLink url="/#why">Why</HeaderLink>
				<HeaderLink url="/#what">What</HeaderLink>
				<HeaderLink url="/#who">Who</HeaderLink>
			</Inline>
		</Inline>
	</Content>
</header>
