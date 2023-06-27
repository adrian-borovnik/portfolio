<template>
	<!-- <MainTitle>Something about me...</MainTitle>
	<p>
		My name is Adrian Borovnik, a computer science student at
		University of Maribor.
	</p> -->
	<article>
		<ContentDoc></ContentDoc>
	</article>
</template>

<script setup lang="ts"></script>

<style scoped>
article:deep(h1) {
	@apply font-dm-mono font-medium text-3xl mt-8 mb-4 dark:text-zinc-100;
}

article:deep(p) {
	@apply text-lg mb-4;
}
</style>
