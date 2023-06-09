import type * as Stitches from '@stitches/core'

function rgba(hexCode: string, opacity: number) {
	let hex = hexCode.replace('#', '')

	if (hex.length === 3) {
		hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`
	}

	const r = parseInt(hex.substring(0, 2), 16)
	const g = parseInt(hex.substring(2, 4), 16)
	const b = parseInt(hex.substring(4, 6), 16)

	return `rgba(${r},${g},${b},${opacity / 100})`
}

function convertColors(
	input: Record<string, Record<string, string>>,
): Record<string, string> {
	const output: Record<string, string> = {}
	for (const [colorName, shades] of Object.entries(input)) {
		for (const [shade, hexCode] of Object.entries(shades)) {
			output[`${colorName}-${shade}`] = hexCode
		}
	}
	return output
}

const color = {
	black: '#000000',
	white: '#ffffff',
	clear: 'hsla(0, 0%, 0%, 0)',

	// brand
	night: '#130b0e',
	purple: '#640848',
	orange: '#b61515',
	blue: '#759e9f',
	red: '#74252c',
	yellow: '#e1bb5d',

	// grey
	...convertColors({
		grey: {
			'50': '#f8f7f7',
			'100': '#e5e1e3',
			'200': '#cac4c7',
			'300': '#a99ea3',
			'400': '#87787f',
			'500': '#6c6066',
			'600': '#564d51',
			'700': '#463e42',
			'800': '#3b3538',
			'900': '#332e30',
			'950': '#130c0e',
		},
	}),

	// purple
	...convertColors({
		purple: {
			'50': '#f0e0e8',
			'100': '#e9d3de',
			'200': '#e4bed4',
			'300': '#d99bbe',
			'400': '#ce6fa4',
			'500': '#ba4089',
			'600': '#823565',
			'700': '#630848',
			'800': '#491336',
			'900': '#300d24',
			'950': '#13010e',
		},
	}),

	// red
	...convertColors({
		red: {
			'50': '#fcf3f4',
			'100': '#f8e7e9',
			'200': '#f2d4d7',
			'300': '#eab8bc',
			'400': '#dd8d94',
			'500': '#cf636c',
			'600': '#c3414c',
			'700': '#a3333d',
			'800': '#882b33',
			'900': '#74252b',
			'950': '#3a1216',
		},
	}),

	// blue
	...convertColors({
		blue: {
			'50': '#f5f8f7',
			'100': '#ddeae9',
			'200': '#bbd4d3',
			'300': '#91b7b7',
			'400': '#759e9f',
			'500': '#507a7c',
			'600': '#3e6063',
			'700': '#345051',
			'800': '#2d4042',
			'900': '#283839',
			'950': '#141d1f',
		},
	}),

	// yellow
	...convertColors({
		yellow: {
			'50': '#fcf8ee',
			'100': '#f6eccf',
			'200': '#ecd89b',
			'300': '#e1bb5d',
			'400': '#dca943',
			'500': '#d38c2d',
			'600': '#bb6d24',
			'700': '#9b5022',
			'800': '#7f4021',
			'900': '#69351e',
			'950': '#3b1b0d',
		},
	}),

	// orange
	...convertColors({
		orange: {
			'50': '#edded4',
			'100': '#f2dcce',
			'200': '#f4dbcd',
			'300': '#f0c6b2',
			'400': '#e6997a',
			'500': '#d86a46',
			'600': '#b45631',
			'700': '#843f1f',
			'800': '#683118',
			'900': '#4d1e14',
			'950': '#160803',
		},
	}),

	// green
	...convertColors({
		green: {
			'50': '#faf6eb',
			'100': '#f2edd4',
			'200': '#e8e0b0',
			'300': '#d6c980',
			'400': '#c4b754',
			'500': '#a89b38',
			'600': '#897f2a',
			'700': '#6e6826',
			'800': '#545121',
			'900': '#47451f',
			'950': '#26250d',
		},
	}),
}

// const lightThemeColors = {
// 	//
// 	background: '$white',
// 	foreground: '$grey900',
// 	//
// 	faint: '$grey200',
// 	faded: '$grey300',
// 	jaded: '$grey400',
// 	muted: '$grey500',
// 	dusky: '$grey700',
// 	//
// 	highlight: '$green700',
// 	lowlight: '$blue700',
// 	//
// 	depthIn: '$grey200',
// 	depthOut: '$grey300',
// }

const darkThemeColors = {
	// THEME dependent tokens
	//
	// background: '$grey-950',
	// foreground: '$grey-50',

	background: '$grey-50',
	foreground: '$grey-950',
	//
	faint: '$grey-800',
	faded: '$grey-700',
	jaded: '$grey-600',
	muted: '$grey-500',
	dusky: '$grey-300',
	//
	highlight: '$purple-700',
	lowlight: '$blue-400',
	//
	depthIn: '$grey-800',
	depthOut: '$grey-700',
	// depthIn: rgba(color.white, 5),
	// depthOut: rgba(color.white, 15),
}

export const colors = {
	...color,
	//
	whiteA25: rgba(color.white, 25),
	whiteA50: rgba(color.white, 50),
	whiteA75: rgba(color.white, 75),
	blackA25: rgba(color.black, 25),
	blackA50: rgba(color.black, 50),
	blackA75: rgba(color.black, 75),

	//
	primary: '$purple-700',
	primaryHover: '$purple-600',
	primaryFocus: '$purple-500',
	primaryFaded: '$purple-300',
	primaryText: '$purple-50',

	// experiments
	// green200A50: rgba(color.green200, 50),
	// green300A50: rgba(color.green300, 50),
	// green400A50: rgba(color.green400, 50),
	//

	//
	...darkThemeColors,
}

const space = {
	0: '0px', // 0px
	px: '1px', // 1px
	'0_5': '0.125rem', // 2px
	1: '0.25rem', // 4px
	'1_5': '0.375rem', // 6px
	2: '0.5rem', // 8px
	'2_5': '0.625rem', // 10px
	3: '0.75rem', // 12px
	'3_5': '0.875rem', // 14px
	4: '1rem', // 16px
	5: '1.25rem', // 20px
	6: '1.5rem', // 24px
	7: '1.75rem', // 28px
	8: '2rem', // 32px
	9: '2.25rem', // 36px
	10: '2.5rem', // 40px
	11: '2.75rem', // 44px
	12: '3rem', // 48px
	14: '3.5rem', // 56px
	16: '4rem', // 64px
	20: '5rem', // 80px
	24: '6rem', // 96px
	28: '7rem', // 112px
	32: '8rem', // 128px
	36: '9rem', // 144px
	40: '10rem', // 160px
	44: '11rem', // 176px
	48: '12rem', // 192px
	52: '13rem', // 208px
	56: '14rem', // 224px
	60: '15rem', // 240px
	64: '16rem', // 256px
	72: '18rem', // 288px
	80: '20rem', // 320px
	96: '24rem', // 384px
	112: '28rem', // 448px
	128: '32rem', // 512px
	144: '36rem', // 576px
	160: '40rem', // 640px
	'-px': '-1px', // 1px
	'-0_5': '-0.125rem', // 2px
	'-1': '-0.25rem', // 4px
	'-1_5': '-0.375rem', // 6px
	'-2': '-0.5rem', // 8px
	'-2_5': '-0.625rem', // 10px
	'-3': '-0.75rem', // 12px
	'-3_5': '-0.875rem', // 14px
	'-4': '-1rem', // 16px
	'-5': '-1.25rem', // 20px
	'-6': '-1.5rem', // 24px
	'-7': '-1.75rem', // 28px
	'-8': '-2rem', // 32px
	'-9': '-2.25rem', // 36px
	'-10': '-2.5rem', // 40px
	'-11': '-2.75rem', // 44px
	'-12': '-3rem', // 48px
	'-14': '-3.5rem', // 56px
	'-16': '-4rem', // 64px
	'-20': '-5rem', // 80px
	'-24': '-6rem', // 96px
	'-28': '-7rem', // 112px
	'-32': '-8rem', // 128px
	'-36': '-9rem', // 144px
	'-40': '-10rem', // 160px
	'-44': '-11rem', // 176px
	'-48': '-12rem', // 192px
	'-52': '-13rem', // 208px
	'-56': '-14rem', // 224px
	'-60': '-15rem', // 240px
	'-64': '-16rem', // 256px
	'-72': '-18rem', // 288px
	'-80': '-20rem', // 320px
	'-96': '-24rem', // 384px
	'-112': '-28rem', // 448px
	'-128': '-32rem', // 512px
	'-144': '-36rem', // 576px
	'-160': '-40rem', // 640px
}

const spacing = {
	no: space[0],
	xs: space[1],
	sm: space[2],
	md: space[4],
	lg: space[6],
	xl: space[8],
	'2xl': space[10],
	'3xl': space[12],
	'4xl': space[16],
	'5xl': space[20],
	'6xl': space[24],
	'7xl': space[28],
	'8xl': space[32],
	'9xl': space[36],
}

// create a util...

const max = {
	'0': '0rem',
	none: 'none',
	xs: '20rem',
	sm: '24rem',
	md: '28rem',
	lg: '32rem',
	xl: '36rem',
	'2xl': '42rem',
	'3xl': '48rem',
	'4xl': '56rem',
	'5xl': '64rem',
	'6xl': '72rem',
	'7xl': '80rem',
	full: '100%',
	min: 'min-content',
	max: 'max-content',
	prose: '65ch',
	'screen-w': '100vw',
	'screen-h': '100vh',
	'screen-sm': '640px',
	'screen-md': '768px',
	'screen-lg': '1024px',
	'screen-xl': '1280px',
	'screen-2xl': '1536px',
}

// TODO: create util for css={{ scrollMarginTop: '$48' }}

// max-w-0	max-width: 0rem;
// max-w-none	max-width: none;
// max-w-xs	max-width: 20rem;
// max-w-sm	max-width: 24rem;
// max-w-md	max-width: 28rem;
// max-w-lg	max-width: 32rem;
// max-w-xl	max-width: 36rem;
// max-w-2xl	max-width: 42rem;
// max-w-3xl	max-width: 48rem;
// max-w-4xl	max-width: 56rem;
// max-w-5xl	max-width: 64rem;
// max-w-6xl	max-width: 72rem;
// max-w-7xl	max-width: 80rem;
// max-w-full	max-width: 100%;
// max-w-min	max-width: min-content;
// max-w-max	max-width: max-content;
// max-w-prose	max-width: 65ch;
// max-w-screen-sm	max-width: 640px;
// max-w-screen-md	max-width: 768px;
// max-w-screen-lg	max-width: 1024px;
// max-w-screen-xl	max-width: 1280px;
// max-w-screen-2xl	max-width: 1536px;

export const tokens = {
	colors,
	space: {
		...space,
		...spacing,
	},
	sizes: {
		...space,
		...max,
	},
	fontSizes: {
		xs: '0.75rem',
		sm: '0.875rem',
		md: '1rem',
		lg: '1.125rem',
		xl: '1.25rem',
		'2xl': '1.5rem',
		'3xl': '1.875rem',
		'4xl': '2.25rem',
		'5xl': '3rem',
		'6xl': '3.75rem',
		'7xl': '4.5rem',
		'8xl': '6rem',
		'9xl': '8rem',
	},
	fonts: {
		main: 'Inter, georgia, apple-system, sans-serif',
		mono: '"Azeret Mono", menlo, monospace',
		sans: 'Inter, georgia, apple-system, sans-serif',
	},
	fontWeights: {
		thin: '100',
		light: '300',
		base: '400',
		semi: '500',
		bold: '700',
		black: '900',
	},
	lineHeights: {
		xs: '1rem',
		sm: '1.25rem',
		md: '1.5rem',
		lg: '1.75rem',
		xl: '2rem',
		'2xl': '2.25rem',
		'3xl': '2.5rem',
		'4xl': '2.75rem',
		'5xl': '1',
		'6xl': '1',
		'7xl': '1',
		'8xl': '1',
		'9xl': '1',
	},
	//
	// letterSpacings: {},
	// sizes: {},
	borders: {
		none: '0',
		muted: '1px solid $colors$muted',
	},
	borderWidths: {
		1: '1px',
	},
	borderStyles: {},
	radii: {
		// no: '0px',
		// xs: '0.125rem',
		// sm: '0.25rem',
		// md: '0.375rem',
		// lg: '0.5rem',
		// xl: '0.75rem',
		// '2xl': '1rem',
		// '3xl': '1.5rem',
		// full: '9999px',
		no: '0px',
		xs: '0.125rem',
		sm: '0.25rem',
		// base: '0.375rem',
		md: '0.375rem',
		lg: '0.5rem',
		xl: '0.75rem',
		'2xl': '1rem',
		'3xl': '1.25rem',
		'4xl': '1.5rem',
		'5xl': '1.75rem',
		'6xl': '2rem',
		'7xl': '2.5rem',
		'8xl': '3rem',
		'9xl': '4rem',
		full: '9999px',
	},
	shadows: {
		popup: '0 0 6px 0 rgba(0, 0, 0, 0.67)',
		sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
		hard: '4px 4px 0px 0 $colors$black',
		base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
		md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
		lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
		xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
		'2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
		'3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
		inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
		none: 'none',
	},
	// zIndices: {},
	transitions: {
		1: 'all cubic-bezier(0.4, 0, 0.2, 1) 150ms',
		2: 'opacity cubic-bezier(0.4, 0, 0.2, 1) 150ms',
		3: 'all cubic-bezier(0.4, 0, 0.2, 1) 350ms',
	},
}

export const utils = {
	m: (value: Stitches.ScaleValue<'space'>) => ({
		marginTop: value,
		marginBottom: value,
		marginLeft: value,
		marginRight: value,
	}),
	mt: (value: Stitches.ScaleValue<'space'>) => ({
		marginTop: value,
	}),
	mr: (value: Stitches.ScaleValue<'space'>) => ({
		marginRight: value,
	}),
	mb: (value: Stitches.ScaleValue<'space'>) => ({
		marginBottom: value,
	}),
	ml: (value: Stitches.ScaleValue<'space'>) => ({
		marginLeft: value,
	}),
	mx: (value: Stitches.ScaleValue<'space'>) => ({
		marginLeft: value,
		marginRight: value,
	}),
	my: (value: Stitches.ScaleValue<'space'>) => ({
		marginTop: value,
		marginBottom: value,
	}),
	p: (value: Stitches.ScaleValue<'space'>) => ({
		paddingTop: value,
		paddingBottom: value,
		paddingLeft: value,
		paddingRight: value,
	}),
	pt: (value: Stitches.ScaleValue<'space'>) => ({
		paddingTop: value,
	}),
	pr: (value: Stitches.ScaleValue<'space'>) => ({
		paddingRight: value,
	}),
	pb: (value: Stitches.ScaleValue<'space'>) => ({
		paddingBottom: value,
	}),
	pl: (value: Stitches.ScaleValue<'space'>) => ({
		paddingLeft: value,
	}),
	px: (value: Stitches.ScaleValue<'space'>) => ({
		paddingLeft: value,
		paddingRight: value,
	}),
	py: (value: Stitches.ScaleValue<'space'>) => ({
		paddingTop: value,
		paddingBottom: value,
	}),
	text: (value) => ({
		fontSize: value,
		lineHeight: value,
	}),
	w: (value: Stitches.ScaleValue<'sizes'>) => ({
		width: value,
	}),
	h: (value: Stitches.ScaleValue<'sizes'>) => ({
		height: value,
	}),
	size: (value: Stitches.ScaleValue<'sizes'>) => ({
		w: value,
		h: value,
	}),
	surrounding: (value: Stitches.ScaleValue<'space'>) => ({
		top: value,
		right: value,
		bottom: value,
		left: value,
	}),
	s: (value: Stitches.ScaleValue<'space'>) => ({
		// Unfortunately gap doesn't work on mobile Safari
		gap: value,
		// '& > * + *': {
		// 	ml: value,
		// },
	}),
	sx: (value: Stitches.ScaleValue<'space'>) => ({
		// Unfortunately gap doesn't work on mobile Safari
		columnGap: value,
		// '& > * + *': {
		// 	ml: value,
		// },
	}),
	sy: (value: Stitches.ScaleValue<'space'>) => ({
		// Unfortunately gap doesn't work on mobile Safari
		rowGap: value,
		// '& > * + *': {
		// 	mt: value,
		// },
	}),
	backdropFilter: (value) => ({
		backdropFilter: value,
		'-webkit-backdrop-filter': value,
	}),
	linearGradient: (value) => ({
		backgroundImage: `linear-gradient(${value})`,
	}),
	blur: (value) => ({
		filter: `blur(${value})`,
	}),
	bg: (value: Stitches.PropertyValue<'color'>) => ({
		backgroundColor: value,
	}),
	clip: (value) => {
		const values = {
			hexagon:
				'polygon(50% 0, 93.3% 25%, 93.3% 75%, 50% 100%, 6.7% 75%, 6.7% 25%)',
		}

		return {
			clipPath: values[value] || value,
		}
	},
	b: (value: Stitches.PropertyValue<'color'>) => {
		// TODO: rework
		// const [value1, value2] = value.split('-')
		// `${}-${
		// type BorderValue = Stitches.PropertyValue<'color'>

		return {
			border: `1px solid ${value}`,
		}
	},
	truncate: () => ({
		overflow: 'hidden',
		whiteSpace: 'nowrap',
		textOverflow: 'ellipsis',
	}),
}

// --tw-space-y-reverse: 0;
// margin-top: calc(0px * calc(1 - var(--tw-space-y-reverse)));
// margin-bottom: calc(0px * var(--tw-space-y-reverse));
