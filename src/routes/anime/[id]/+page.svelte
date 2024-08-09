<script lang="ts">
	import { Card } from 'svelte-ux';
    import type { PageData } from './$types';
    
    export let data: PageData;
</script>

<Card class="flex justify-center">
   <img 
     src={data.data.images.webp.image_url}
     class="w-125px h-auto"
     >
</Card>