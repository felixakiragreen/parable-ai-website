<script lang="ts">
	import { stitch } from '@/ui'
	import type { CSS } from '@/ui'
	import { baseColors } from '@/types'

	import { Button } from '@/lib/atoms'

	export let css: CSS = null
	export let look = 'main'
	export let size = 'md'
	export let rounding = 'default'
	export let disabled = null

	// specials
	export let colorful = null
	export let stateful = null

	const ss = stitch({
		// DEFAULT STYLE
		cursor: 'pointer',
		transition: '$1',
		border: 0,
		fontFamily: '$sans',
		// textTransform: 'uppercase',

		// DISABLED STYLE
		'&:disabled': {
			cursor: 'not-allowed',
			bg: '$grey-300',
		},
		'&:disabled:hover': {
			bg: '$grey-400',
			// color: '$grey400',
		},

		$$Back: '$colors$primary', // background
		$$Edge: '$colors$clear', // border
		$$Text: '$colors$primaryText', // foreground
		$$Ring: '$colors$primaryFocus', // focus

		$$BackHover: '$colors$primaryHover',
		$$EdgeHover: '$colors$clear',
		$$TextHover: '$colors$primaryText',
		$$RingHover: '$colors$primaryFocus',

		// $$CornerNo: '$radii$no',
		// $$CornerMd: '$radii$md',
		// $$CornerFull: '$radii$full',
		// no: {
		// 	borderRadius: '$none',
		// },
		// md: {
		// 	borderRadius: '$base',
		// },
		// full: {
		// 	borderRadius: '$full',
		// },

		// $$BackFocus
		// $$EdgeFocus: '$colors$lowlight',
		// $$TextFocus
		// $$RingFocus

		// Applied Styles

		bg: '$$Back',
		color: '$$Text',
		'&:hover': {
			bg: '$$BackHover',
			color: '$$TextHover',
		},

		'&:active': {},
		'&:focus': {
			outline: 'none',
			// boxShadow: [
			// 	//
			// 	'0 0 0px 3px $colors$background',
			// 	'0 0 0px 6px $$Ring',
			// ].join(', '),
		},

		// borderRadius: '$$Corner',

		variants: {
			rounding: {
				no: {
					// borderRadius: '$none',
					// $$Corner: '$radii$no',
					$$Corner: '$radii$no',
					borderRadius: '$$Corner',
				},
				md: {
					// $$Corner: '$$CornerMd',
					$$Corner: '$radii$md',
					borderRadius: '$$Corner',
					// borderRadius: '$base',
				},
				full: {
					// $$Corner: '$$CornerFull',
					$$Corner: '$radii$full',
					borderRadius: '$$Corner',
					// borderRadius: '$full',
				},
			},
			look: {
				main: {
					textTransform: 'uppercase',
					'&:active': {
						transform: 'translate(0, 1px)',
					},
				},
				holo: {
					$$Back: '$colors$clear',
					$$Text: '$colors$primary',
					$$Edge: '$colors$primaryFocus',
					border: '1px solid $$Edge',
					fontFamily: '$mono',

					$$BackHover: '$colors$primaryFaded',
					$$TextHover: '$colors$primaryHover',
					// textTransform: 'uppercase',
					'&:hover': {
						// bg: '$$Back',
						// color: '$$Text',
						// boxShadow: '$hard',
					},
					'&:active': {
						// boxShadow:
						// 	'1px 1px 0px 0 rgba(0, 0, 0), inset 1px 1px 0px 2px rgba(0, 0, 0, 0.5)',
						transform: 'translate(0, 1px)',
						// color: '$foreground',
					},
				},
				clean: {
					$$Back: '$colors$clear',
					$$Text: '$colors$primary',
					$$BackHover: '$colors$clear',
					$$TextHover: '$colors$primaryHover',

					// color: '$$Back',
					// border: '1px solid $orange400',
					// fontFamily: '$mono',
					textTransform: 'initial',
					'&:hover': {
						// bg: '$$Back',
						// color: '$$Text',
						// boxShadow: '$hard',
					},
					'&:active': {
						// boxShadow:
						// 	'1px 1px 0px 0 rgba(0, 0, 0), inset 1px 1px 0px 2px rgba(0, 0, 0, 0.5)',
						// transform: 'translate(3px, 3px)',
						transform: 'translate(0, 1px)',
						// color: '$foreground',
					},
				},
				tabbed: {
					bg: '$clear',
					// color: '$$Back',
					border: '1px solid $clear',
					// fontFamily: '$mono',
					textTransform: 'uppercase',
					// letterSpacing: '0.05em',
					'&:hover': {
						bg: '$$Back',
					},
					// '&.active': {
					// 	color: '$foreground',
					// },
					// '&.inactive': {
					// 	bg: '$grey100',
					// },
				},
				skeu: {
					bg: '$colors$primary',
					linearGradient: 'to bottom, $colors$clear, $colors$green-500',
					// boxShadow: '$hard',
					boxShadow: [
						// '0 0 2px 3px $colors$depthIn',
						// '0 0 0px 6px $colors$depthOut',
						'inset 0 0 0px 1px $colors$blackA50',
						'inset 0 1px 0px 1px $colors$whiteA25',
					].join(', '),

					// color: '$foreground',
					// transform: 'translate(0, 0, 0)',
					// transform: 'perspective(-1px)',
					// transform: 'translate3d(10px, 10px, 0px)',
					// transform: 'translateX(4px) translateY(4px)',
					// transform: 'perspective(-1px) translateX(4px) translateY(4px)',
					// transform: 'perspective(500px) translate3d(3px, 3px, 100px)',
					'&:focus': {
						boxShadow: [
							'0 0 2px 3px $colors$green-300',
							'0 0 0px 6px $colors$green-400',
							'inset 0 0 0px 1px $colors$blackA50',
							'inset 0 1px 0px 1px $colors$whiteA75',
						].join(', '),
					},
					'&:hover': {
						bg: '$$HV',
					},
					'&:active': {
						// bg: '$$Back',
						linearGradient: 'to bottom, $colors$green-500, $colors$green-400',
						boxShadow: [
							// '0 -1px 2px 3px $colors$depthIn',
							// '0 -1px 0px 6px $colors$depthOut',
							'inset 0 0px 0px 1px $colors$blackA50',
							'inset 0 1px 0px 1px $colors$blackA25',
							'inset 0 0px 8px 1px $colors$blackA25',
						].join(', '),
						transform: 'translate(0, 1px)',
					},
				},
				magic: {
					$$Corner: '$radii$2xl',
					position: 'relative',
					borderRadius: '$$Corner',
					bg: '$colors$clear',
					p: '$0',
					outlineOffset: '4px',

					// linearGradient: 'to bottom, $colors$clear, $colors$green-500',
					'.front': {
						display: 'block',
						bg: '$$Back',
						borderRadius: '$$Corner',
						transform: 'translateY(-4px)',
						willChange: 'transform',
						transition: 'transform 600ms cubic-bezier(.3, .7, .4, 1)',
					},

					'&:hover': {
						bg: '$colors$purple-600',

						'.front': {
							transition: 'transform 250ms cubic-bezier(.3, .7, .4, 1.5)',
							transform: 'translateY(-6px)',
						},
					},

					'&:active': {
						'.front': {
							transform: 'translateY(-2px)',
						},
					},

					'.shadow': {
						position: 'absolute',
						top: '0',
						left: '0',
						width: '100%',
						height: '100%',
						borderRadius: '$$Corner',
						background: 'hsl(0deg 0% 0% / 0.25)',
						transform: 'translateY(2px)',
						filter: 'blur(2px)',
					},

					'.edge': {
						position: 'absolute',
						top: '0',
						left: '0',
						width: '100%',
						height: '100%',
						borderRadius: '$$Corner',
						background: `linear-gradient(
							to left,
							$colors$purple-950 0%,
							$colors$purple-900 8%,
							$colors$purple-900 92%,
							$colors$purple-950 100%
						)`,
					},
				},
			},
			size: {
				xs: {
					'.front': {
						px: '$1',
						py: '$0_5',
						text: '$xs',
					},
				},
				sm: {
					'.front': {
						px: '$2',
						py: '$1',
						text: '$sm',
					},
				},
				md: {
					'.front': {
						px: '$3',
						py: '$1_5',
						text: '$md',
					},
				},
				lg: {
					'.front': {
						px: '$4',
						py: '$2',
						text: '$lg',
					},
				},
				xl: {
					'.front': {
						px: '$6',
						py: '$3',
						text: '$xl',
					},
				},
			},

			//
			// TODO: make colorful work with holo
			colorful: {
				...baseColors.reduce(
					(acc, color) => ({
						...acc,
						[color]: {
							$$Back: `$colors$${color}400`,
							$$BackHover: `$colors$${color}300`,
							$$Ring: `$colors$${color}600`,
						},
					}),
					{},
				),
			},
			stateful: {
				selected: {
					//
				},
				muted: {
					//
				},
			},
		},

		compoundVariants: [
			...baseColors.map((color) => ({
				colorful: color,
				stateful: 'selected',
				css: {
					boxShadow: `0 0 0px 3px $colors$${color}600`,
				},
			})),
			//
			...baseColors.map((color) => ({
				colorful: color,
				stateful: 'muted',
				css: {
					$$Back: '$colors$faded',
					$$BackHover: `$colors$${color}600`,
					$$Text: `$colors$${color}400`,
				},
			})),
		],
	})
</script>

<Button
	cls={ss}
	vrt={{ look, size, rounding, colorful, stateful }}
	{css}
	{disabled}
	on:click
>
	<span class="shadow" />
	<span class="edge" />
	<span class="front">
		<slot />
	</span>
</Button>
