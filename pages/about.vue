<template>
	<article>
		<h1>Something about me...</h1>
		<p>
			My name is Adrian Borovnik, I was born on a Wednesday, in 2003,
			making me 20 years old and currently I'm a computer science
			student at University of Maribor.
		</p>
		<p>
			Throughout the years of coding, self learing and visiting
			lectures at school, I've picked up some useful skill along the
			way such as
		</p>
		<ul>
			<li v-for="skill in skills" :key="skill">{{ skill }}</li>
		</ul>
	</article>
</template>

<script setup lang="ts">
import skills from '../data/skills'
</script>

<style scoped>
article:deep(h1) {
	@apply font-dm-mono font-medium text-3xl mt-8 mb-8 dark:text-zinc-100;
}

article:deep(p) {
	@apply text-lg mb-8;
}

article:deep(li) {
	@apply border-l-green-500 border-l-2 pl-2 ml-4;
}
</style>
