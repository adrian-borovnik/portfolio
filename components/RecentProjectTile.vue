<template>
	<div class="flex flex-col md:flex-row space-y-2 md:space-y-0">
		<span class="font-dm-mono font-medium text-2xl md:hidden">
			{{ project.title }}
		</span>
		<img
			:src="project.img"
			class="w-full md:w-[16rem] md:mr-8 aspect-[16/10] object-cover"
		/>
		<div class="flex-1 flex flex-col justify-between">
			<span
				class="font-dm-mono font-medium text-2xl hidden md:block"
			>
				{{ project.title }}
			</span>

			<p class="text-sm mb-2 md:mb-0">
				{{ project.description }}
			</p>
			<div class="flex space-x-2 font-dm-mono font-medium">
				<span
					v-for="tech in project.techStack"
					:key="tech"
					class="border-black border-2 px-3 py-1"
					>{{ tech }}</span
				>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
const { project } = defineProps<{
	project: Project
}>()
</script>

<style scoped></style>
