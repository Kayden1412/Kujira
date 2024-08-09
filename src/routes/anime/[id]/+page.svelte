<script lang="ts">
	import { Card } from 'svelte-ux';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="mt-20 relative flex justify-center items-center">
	<img src={data.data.images.webp.image_url} class="w-40 h-auto" />
	<span
		class="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-white text-lg px-2 py-1 text-center max-w-full truncate"
	>
		{data.data.title}
	</span>
  
</div>
