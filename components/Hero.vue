<template>
	<div class="flex w-full py-24 space-x-10">
		<img
			src="https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=881&q=80"
			alt=""
			class="max-w-[10rem] aspect-square rounded-full"
		/>
		<div
			class="flex flex-col justify-center items-start w-full space-y-4"
		>
			<p class="text-3xl font-medium">
				Hey, I’m Adrian.
				<span class="text-gray-400">
					Computer science student and Frontend developer.
				</span>
			</p>
			<div class="flex space-x-4 font-dm-mono font-medium">
				<a
					v-for="link in socialLinks"
					:key="link.link"
					:href="link.to"
					target="_blank"
					class="flex justify-start items-center space-x-2"
				>
					<Icon
						:name="`logos:${link.icon}`"
						color="black"
						size="1.2rem"
					/>
					<span>{{ link.link }}</span>
				</a>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
// TODO seperate data file
const socialLinks = ref<SocialLink[]>([
	{
		link: 'GitHub',
		icon: 'github-icon',
		to: 'https://github.com/adrian-borovnik',
	},
	{
		link: 'LinkedIn',
		icon: 'linkedin-icon',
		to: 'https://github.com/adrian-borovnik',
	},
	{
		link: 'Twitter',
		icon: 'twitter',
		to: 'https://github.com/adrian-borovnik',
	},
])
</script>
