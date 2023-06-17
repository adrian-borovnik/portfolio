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
})
