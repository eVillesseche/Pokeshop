<script context="module">
	export const ssr = true;
</script>

<script>
	import Shop from '$lib/components/shop.svelte'
	let nPage = 1;
</script>

<svelte:head>
    <title>Pokeshop</title>
</svelte:head>

<main>
    <Shop/>
</main>

<style>
*{
	padding: 0;
	margin: 0;
	box-sizing: border-box;
}
	main {
		text-align: center;
		max-width: 240px;
		margin: 0 auto;
	}
	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>