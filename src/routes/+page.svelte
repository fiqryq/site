<script lang="ts">
	import Header from '$lib/components/header.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<main>
	<Header>
		<p class=" text-muted">
			I'm a software engineer based in Indonesia with 4+ years of remote work experience.
		</p>
		<p class="text-balance text-muted">
			Currently: I'm working <span class="cursor-pointer underline underline-offset-1 hover:italic"
				>@kitabisa</span
			> as Frontend Engineer.
		</p>
		<a
			href="mailto:hi@fiqry.dev"
			class="w-fit rounded-3xl bg-black p-2 px-4 text-white transition-transform hover:scale-95"
			>Get In Touch</a
		>
	</Header>

	<section class="container pt-24" aria-labelledby="writings-section">
		<div class="flex items-center justify-between">
			<h2 id="writings-section" class="pb-2 text-muted">Writings</h2>
		</div>
		<article class="flex flex-col gap-2">
			{#each data.featuredWritings as writing}
				<a
					href="/{writing.slug}"
					class="-mx-3 flex cursor-pointer flex-col rounded-md px-3 py-3 no-underline hover:bg-zinc-50"
				>
					<span class="text-primary">{writing.title}</span>
					<span class="line-clamp-1 text-muted">{writing.description}</span>
				</a>
			{/each}
		</article>
	</section>

	<section class="container pt-24 pb-12" aria-labelledby="contact-heading">
		<h2 id="contact-heading" class="pb-2 text-muted">Contact</h2>
		<nav aria-label="Social links">
			<ul class="flex flex-col *:cursor-pointer *:underline *:underline-offset-1 *:hover:italic">
				<li>
					<a href="https://github.com/fiqryq" target="_blank" rel="noopener noreferrer">GitHub</a>
				</li>
				<li>
					<a href="https://linkedin.com/in/fiqrychoerudin" target="_blank" rel="noopener noreferrer"
						>LinkedIn</a
					>
				</li>
				<li><a href="mailto:hi@fiqry.dev">Email</a></li>
			</ul>
		</nav>
	</section>
</main>
