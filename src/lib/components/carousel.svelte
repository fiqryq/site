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
					<video autoPlay muted loop playsInline preload="auto" class="h-full rounded-xl">
						<source src={work.cover} type="video/webm" />
					</video>
					<div class="mt-4.5 flex flex-col gap-2">
						<h1 class="font-medium text-primary capitalize">{work.title}</h1>
						<p class="line-clamp-1 text-balance text-muted">{work.description}</p>
						<a
							href={work.link}
							target="_blank"
							rel="noopener noreferrer"
							class="inline-flex w-fit items-center gap-2 text-muted underline underline-offset-1 hover:italic"
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
