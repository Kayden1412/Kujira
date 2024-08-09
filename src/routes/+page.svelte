<script>
	import { Button, Card  } from 'svelte-ux';
	export let data;
</script>

<main class=" pl-2 pr-2 grid grid-cols-2 gap-4">
	
     {#each data.data as d}
		   
      <a href="/anime/{d.mal_id}">
	    <Card class="flex">
			<img 
			  src={d.images.webp.image_url}
			  >
				<span class="mb-8">{d.title}</span>
		</Card>
		</a>
	 {/each}
	
</main>
