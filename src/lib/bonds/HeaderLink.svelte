<script lang="ts">
	import { page } from '$app/stores'

	import { Link, Text } from '@/lib/bonds'

	export let route: string
	export let label: string

	$: isActive = $page.url.pathname === route
</script>

<Link url={route}>
	<Text
		css={{
			//
			// color: '$primary',
			fontWeight: '$bold',
			// color: isActive ? '$primary' : undefined,
			// fontWeight: isActive ? '$black' : null,
		}}
	>
		<slot />
	</Text>
</Link>
