<template>
	<div
		class="grid place-items-start w-full font-dm text-gray-900 dark:text-zinc-200 bg-white dark:bg-zinc-900 relative"
	>
		<main
			class="flex flex-col max-w-[43.5rem] w-full min-h-screen mx-auto sm:px-8 px-4"
		>
			<header
				class="flex justify-between items-center w-full h-24 text-lg font-dm-mono font-medium"
			>
				<NuxtLink to="/" class="cursor-pointer"
					>ADRIAN BOROVNIK</NuxtLink
				>
				<div class="md:hidden" @click="handleDrawer">
					<Icon name="fa6-solid:bars" size="2rem" />
				</div>
				<div
					class="z-50 absolute top-24 right-0 h-full bg-amber-500"
					:class="`${drawer}`"
				>
					test
				</div>

				<div class="md:flex space-x-4 hidden">
					<NuxtLink
						v-for="link in links"
						:key="link.page"
						:to="link.to"
						class="hover:text-green-500 transition-colors cursor-pointer"
					>
						{{ link.page }}
					</NuxtLink>
				</div>
			</header>
			<article class="flex-1">
				<slot />
			</article>
			<footer
				class="flex justify-between items-center w-full h-24 text-lg font-dm-mono font-medium"
			>
				<NuxtLink to="/" class="cursor-pointer"
					>ADRIAN BOROVNIK</NuxtLink
				>
				<span>June 2023</span>
			</footer>
		</main>
	</div>
</template>

<script setup lang="ts">
// Todo seperate file
const links = ref([
	{ page: 'About', to: '/about' },
	{ page: 'Projects', to: '/projects' },
	{ page: 'Contact', to: '/contact' },
])

const drawer = ref<string>('hidden')

const handleDrawer = () => {
	if (drawer.value == 'hidden') drawer.value = 'block'
	else drawer.value = 'hidden'
}
</script>
