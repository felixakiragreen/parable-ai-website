<script lang="ts">
	import { Box, Span, Image } from '@/lib/atoms'
	import {
		Content,
		Stack,
		Inline,
		Text,
		Break,
		Grid,
		Button,
	} from '@/lib/bonds'
	// import { Image } from '@/lib/atoms'

	import forge from '@/assets/forge.jpg'
	import coal from '@/assets/coal.jpg'
	import logo from '@/assets/fakelogo.svg'
	import brush from '@/assets/fakebrush.svg'
</script>

<Stack>
	<!-- 1 -->

	<Box
		css={{
			backgroundImage: `url(${forge})`,
			backgroundRepeat: 'no-repeat',
			backgroundSize: 'contain',
			backgroundPosition: 'right top',
		}}
	>
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
					background: `linear-gradient(
						to right,
						hsla(0, 0%, 100%, 1) 0%,
						hsla(0, 0%, 100%, 1) 50%,
						hsla(0, 0%, 100%, 0.8) 100%
					)`,
				}}
			>
				<Image
					url={logo}
					css={{
						height: '120px',
					}}
				/>
			</Stack>

			<Stack
				align="center"
				alignV="center"
				gap="lg"
				css={{
					color: '$grey-50',
				}}
			>
				<Text
					css={{
						fontSize: '$6xl',
						fontWeight: '$black',
					}}>Thing Forge</Text
				>

				<Text
					css={{
						fontSize: '$2xl',
						fontWeight: '$thin',
						fontStyle: 'italic',
					}}>What do you want to make?</Text
				>
			</Stack>
		</Inline>
	</Box>

	<!-- 2 -->

	<Box
		css={{
			backgroundColor: '$grey-50',
			backgroundImage: `url(${brush})`,
			backgroundRepeat: 'no-repeat',
			backgroundPosition: '-300% top',
		}}
	>
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
						p: '$24',
					}}
				>
					<Text look="heading">About Parable</Text>

					<Text look="body"
						>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum
						repellendus quod neque temporibus ab rerum doloribus vitae explicabo
						magnam assumenda debitis eaque, nesciunt quis repellat perferendis
						veritatis est tempore non.</Text
					>
				</Stack>
			</Stack>

			<Stack align="center" alignV="center">
				<Stack
					gap="lg"
					css={{
						p: '$24',
					}}
				>
					<Text look="heading">What does Thing Forge do?</Text>
					<Text look="body"
						>Task Forge is a universal AI interface for makers. Unlike
						single-model AI interfaces, Parable connects to any public AI model
						or work environment, enabling users to bring the familiarity and
						skill they've developed on their Parable interface to any model,
						flattening the learning curve and maximizing their productivity.</Text
					>
				</Stack>
			</Stack>
		</Inline>
	</Box>

	<!-- 3 -->

	<Box
		css={{
			backgroundImage: `url(${coal})`,
			backgroundRepeat: 'no-repeat',
			backgroundSize: 'cover',
			backgroundPosition: 'right top',
		}}
	>
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
					background: `linear-gradient(
						to right,
						hsla(0, 0%, 100%, 0.9) 0%,
						hsla(0, 0%, 100%, 0.7) 90%,
						hsla(0, 0%, 100%, 0.0) 100%
					)`,
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
					background: `linear-gradient(
						to right,
						hsla(0, 0%, 0%, 0.0) 0%,
						hsla(0, 0%, 0%, 0.3) 10%,
						hsla(0, 0%, 0%, 0.6) 100%
					)`,
				}}
			>
				<Text look="heading">Alpha Details</Text>

				<Button look="magic" size="xl"
					><Text css={{ fontWeight: '$bold' }}>Register for the Alpha</Text
					></Button
				>
			</Stack>
		</Inline>
	</Box>

	<!--  -->
</Stack>
