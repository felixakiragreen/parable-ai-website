import icon_twitter from './icons/twitter'
import icon_facebook from './icons/facebook'
import icon_tiktok from './icons/tiktok'
import icon_instagram from './icons/instagram'
import icon_youtube from './icons/youtube'
import icon_linkedin from './icons/linkedin'
import icon_email from './icons/email'

import type { SocialLink } from '@/types'
import socialLinks from './socials.json'

const transform = {
	transform: {
		scale: 0.65,
		translate: {
			x: 10,
			y: 10,
		},
	},
}

export const twitter: SocialLink = {
	...socialLinks.twitter,
	...icon_twitter,
	...transform,
}

export const facebook: SocialLink = {
	...socialLinks.facebook,
	...icon_facebook,
	...transform,
}

export const tiktok: SocialLink = {
	...socialLinks.tiktok,
	...icon_tiktok,
	...transform,
}

export const instagram: SocialLink = {
	...socialLinks.instagram,
	...icon_instagram,
	...transform,
}

export const youtube: SocialLink = {
	...socialLinks.youtube,
	...icon_youtube,
	...transform,
}

export const linkedin: SocialLink = {
	...socialLinks.linkedin,
	...icon_linkedin,
	...transform,
}

export const email: SocialLink = {
	look: 'felix',
	...socialLinks.email,
	...icon_email,
	transform: {
		...transform.transform,
		translate: {
			x: 7.5,
			y: 8,
		},
	},
}

export const socials: SocialLink[] = [
	//
	twitter,
	facebook,
	tiktok,
	instagram,
	youtube,
	linkedin,
	email,
]
