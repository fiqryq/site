<script lang="ts">
	let { source } = $props();
</script>

<video autoPlay muted loop playsInline class="rounded-xl">
	<source src={source} type="video/webm" class="rounded-2xl" />
</video>
