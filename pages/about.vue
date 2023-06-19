<template>
	<MainTitle>About me</MainTitle>
	<main>
		<ContentDoc />
	</main>
</template>

<script setup lang="ts"></script>

<style scoped>
main:deep(h1) {
	@apply font-bold text-3xl font-mono;
}
</style>
