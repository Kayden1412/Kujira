<script>
	import { Button, Card } from 'svelte-ux';
	export let data;
</script>

<main class="pt-4 pl-2 pr-2 grid grid-cols-2 gap-4">
	{#each data.data as d}
		<a href="/anime/{d.mal_id}">
			<Card class="relative">
				<img src={d.images.webp.image_url} class="w-full h-auto" />
				<span
					class="truncate absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-2 py-1 text-center w-full"
				>
					{d.title}
				</span>
			</Card>
		</a>
	{/each}
</main>
