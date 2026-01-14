<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	const { Content, title } = data;
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<main>
	<header class="container pt-10">
		<button onclick={() => history.back()} class="cursor-pointer">Back</button>
	</header>
	<article class="prose-sans container mx-auto prose py-10 prose-zinc">
		<Content />
	</article>
</main>
