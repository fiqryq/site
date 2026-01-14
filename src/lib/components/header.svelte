<script lang="ts">
	let { children } = $props();
</script>

<section class="container flex flex-col gap-4 pt-10" aria-labelledby="hero-heading">
	<header>
		<a href="/" id="hero-heading text-lg" class="font-medium text-primary">Fiqry Choerudin</a>
	</header>
	{@render children()}
</section>
