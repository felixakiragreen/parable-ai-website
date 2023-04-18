<script lang="ts">
	import { Box, Span } from '@/lib/atoms'
	import {
		Content,
		Stack,
		Inline,
		Text,
		Break,
		Grid,
		Button,
	} from '@/lib/bonds'
</script>

<Stack>
	<!-- 1 -->

	<Box
		css={{
			background: `linear-gradient(
				to right,
				$grey-50 0%,
				$grey-50 48%,
				$grey-950 52%,
				$grey-950 100%
			)`,
		}}
	>
		<Content>
			<Inline
				css={{
					minHeight: '100vh',
					'> div': {
						flex: 1,
					},
				}}
			>
				<Stack
					align="center"
					alignV="center"
					css={{
						flex: 1,
					}}
				>
					<Text look="heading">Parable</Text>

					<Text look="body">Do more with AI</Text>
				</Stack>

				<Stack
					align="center"
					alignV="center"
					css={{
						color: '$grey-50',
						flex: 1,
					}}
				>
					<Text look="heading">Thing Forge</Text>

					<Text look="body">What do you want to make?</Text>
				</Stack>
			</Inline>
		</Content>
	</Box>

	<!-- 2 -->

	<Box
		css={{
			background: `linear-gradient(
				to left,
				$grey-50 0%,
				$grey-50 48%,
				$grey-950 52%,
				$grey-950 100%
			)`,
		}}
	>
		<Content>
			<Inline
				css={{
					minHeight: '100vh',
					'> div': {
						flex: 1,
					},
				}}
			>
				<Stack
					align="center"
					alignV="center"
					css={{
						color: '$grey-50',
					}}
				>
					<Stack
						gap="lg"
						css={{
							p: '$12',
						}}
					>
						<Text look="heading">About Parable</Text>

						<Text look="body"
							>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum
							repellendus quod neque temporibus ab rerum doloribus vitae
							explicabo magnam assumenda debitis eaque, nesciunt quis repellat
							perferendis veritatis est tempore non.</Text
						>
					</Stack>
				</Stack>

				<Stack align="center" alignV="center">
					<Stack
						gap="lg"
						css={{
							p: '$12',
						}}
					>
						<Text look="heading">What does Thing Forge do?</Text>
						<Text look="body"
							>Task Forge is a universal AI interface for makers. Unlike
							single-model AI interfaces, Parable connects to any public AI
							model or work environment, enabling users to bring the familiarity
							and skill they've developed on their Parable interface to any
							model, flattening the learning curve and maximizing their
							productivity.</Text
						>
					</Stack>
				</Stack>
			</Inline>
		</Content>
	</Box>

	<!-- 3 -->

	<Box
		css={{
			background: `linear-gradient(
				to right,
				$grey-50 0%,
				$grey-50 48%,
				$grey-950 52%,
				$grey-950 100%
			)`,
		}}
	>
		<Content>
			<Inline
				css={{
					minHeight: '100vh',
					'> div': {
						flex: 1,
					},
				}}
			>
				<Stack
					align="center"
					alignV="center"
					gap="lg"
					css={{
						flex: 1,
					}}
				>
					<Text look="heading">Parable News</Text>

					<Button look="magic" size="xl"
						><Text css={{ fontWeight: '$bold' }}>Contact Parable</Text></Button
					>
				</Stack>

				<Stack
					align="center"
					alignV="center"
					gap="lg"
					css={{
						color: '$grey-50',
						flex: 1,
					}}
				>
					<Text look="heading">Alpha Details</Text>

					<Button look="magic" size="xl"
						><Text css={{ fontWeight: '$bold' }}>Register for the Alpha</Text
						></Button
					>
				</Stack>
			</Inline>
		</Content>
	</Box>

	<!--  -->
</Stack>
