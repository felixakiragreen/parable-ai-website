<script>
	export let viewBox

	// TEMP: removed
	// fill-rule="evenodd"
	// clip-rule="evenodd"
	// stroke-line-join="round"
	// stroke-linecap="round"
	// stroke-linejoin="round"
	// stroke-miter-limit={2}
</script>

<svg {viewBox} x="0%" y="0%" width="100%" height="100%" {...$$props}>
	<slot />
</svg>
