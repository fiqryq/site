<script lang="ts">
	import { onMount } from 'svelte';
	import { works } from '../constant/works';
	import '@blossom-carousel/core/style.css';
	import { BlossomCarousel } from '@blossom-carousel/svelte';
	import { ArrowUpRight } from '@lucide/svelte';

	let mounted = false;

	onMount(() => {
		mounted = true;
	});
</script>

<div class="container">
	{#if mounted}
		<BlossomCarousel class="carousel">
			{#each works as work}
				<div class="slide cursor-pointer px-1">
					<video autoPlay muted loop playsInline class="rounded-xl">
						<source src={work.cover} type="video/webm" class="rounded-2xl" />
					</video>
					<div class="mt-4.5 flex flex-col gap-2">
						<h3 class="font-semibold capitalize">{work.title}</h3>
						<p class="line-clamp-2 text-balance">{work.description}</p>
						<a
							href={work.link}
							target="_blank"
							rel="noopener noreferrer"
							class="inline-flex w-fit items-center gap-2 underline underline-offset-1 hover:italic"
							aria-label="View {work.title} on GitHub"
						>
							<span>{new URL(work.link).hostname + new URL(work.link).pathname}</span>
							<ArrowUpRight size="1.2em" />
						</a>
					</div>
				</div>
			{/each}
		</BlossomCarousel>
	{/if}
</div>
