// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: [
		'@nuxtjs/tailwindcss',
		'@nuxtjs/google-fonts',
		'nuxt-icon',
		'@nuxt/content',
	],
	googleFonts: {
		families: {
			'DM Sans': [400, 500, 700],
			'DM Mono': [400, 500, 700],
		},
	},
	app: {
		head: {
			charset: 'utf-8',
			viewport: 'width=device-width, initial-scale=1',
			meta: [
				{
					hid: 'author',
					name: 'author',
					content: 'Adrian Borovnik',
				},
			],
		},
	},
})
