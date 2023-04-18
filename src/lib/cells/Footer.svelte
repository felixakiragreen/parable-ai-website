<script lang="ts">
	import { stitch } from '@/ui'

	import { Inline, Stack, Content } from '@/lib/bonds'

	import Text from '@/lib/bonds/Text.svelte'

	const ss = stitch({
		// position: 'relative',
		// '@md': {
		// 	position: 'sticky',
		// },
		// top: '$0',
		bg: '$grey-500',
		// color: '$foreground',
	})
</script>

<footer class={ss()}>
	<Content
		css={{
			// bg: '$grey-400',
			p: '$4',
		}}
	>
		<Inline align="between">
			<Inline gap="sm">
				<Text>Twitter</Text>
				<Text>Instagram</Text>
				<Text>Github</Text>
			</Inline>

			<Text>Contact</Text>
		</Inline>
	</Content>
</footer>
