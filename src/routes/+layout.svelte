<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon/favicon.ico';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Fiqry choerudin</title>
	<meta
		name="description"
		content="
   Digital garden of Fiqry Choerudin. I do web development and sometimes write about it. I use Vim, btw."
	/>
</svelte:head>
{@render children()}
