<script lang="ts">
	import { Span } from '@/lib/atoms'
	import { Content, Stack, Inline, Text, Break, Grid } from '@/lib/bonds'
</script>

<Content
	css={{
		bg: '$orange700',
	}}
>
	<slot />
</Content>
