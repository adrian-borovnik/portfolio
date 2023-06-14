<template>
	<div class="flex space-x-6">
		<img
			:src="project.img"
			class="w-[16rem] aspect-[16/10] object-cover"
		/>
		<div class="flex-1 flex flex-col justify-between">
			<span class="font-dm-mono font-medium text-2xl">{{
				project.title
			}}</span>
			<p class="text-sm">
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
