<script lang="ts">
	import Header from '../../components/header.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<svelte:head>
	<title>Writings</title>
</svelte:head>

<main>
	<Header>
		<p class="text-balance">
			Sometimes I write about things I'm learning or projects I'm working on. I hope you enjoy them!
		</p>
	</Header>

	<h2 id="work-heading" class="container pt-8 pb-2 text-zinc-500">Writings list</h2>
	<section class="container flex flex-col gap-2">
		{#each data.writings as writing}
			<a
				href="/writings/{writing.slug}"
				class="-mx-3 flex cursor-pointer flex-col rounded-md px-3 py-3 no-underline hover:bg-zinc-50"
			>
				<h2 class="font-semibold">
					{writing.title}
				</h2>
				<p class="line-clamp-1 text-balance text-zinc-500">{writing.description}</p>
			</a>
		{/each}
	</section>
</main>
