<template>
	<Hero />
	<div class="flex flex-col space-y-12">
		<p class="font-dm-mono font-medium text-lg">RECENT PROJECTS</p>

		<NuxtLink
			v-for="(project, index) in projects"
			:to="`/projects/${index}`"
		>
			<RecentProjectTile :key="project.title" :project="project" />
		</NuxtLink>

		<NuxtLink to="/projects" class="font-dm-mono font-medium text-end">
			See more >
		</NuxtLink>
	</div>
</template>

<script setup lang="ts">
import projects from '../data/projects'
</script>
