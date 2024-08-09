<script lang="ts">
	import { Button, NumberStepper, BarStack } from 'svelte-ux';
	import type { PageData } from './$types';

	export let data: PageData;
    $: stats = data.stats.data

    $: list = [
            { label: 'Completed', value: stats.completed, classes: { bar: 'bg-warning' } },
            { label: 'Watching', value: stats.watching, classes: { bar: 'bg-info' } },
            { label: 'Planning', value: stats.plan_to_watch, classes: { bar: 'bg-success' } },
            { label: 'Dropped', value: stats.dropped, classes: { bar: 'bg-danger' } },
        ];
    
</script>

<div class="mt-20 relative flex justify-center items-center">
	<img src="{data.info.data.images.webp.image_url}" class="w-40 h-auto" />
	<span
		class="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-white text-lg px-2 py-1 text-center max-w-full truncate"
	>
		{data.info.data.title}
	</span>
</div>

<div class="flex flex-row text-center mt-6">
	<span class="text-md">{data.info.data.score} ({data.info.data.scored_by.toLocaleString()} users)</span>
	<br />
	<Button color="success" variant="fill">Favorite</Button>
	<NumberStepper min={1} max={10} step={0.1}></NumberStepper>
</div>

<BarStack class="w-full" data={list}>
	<div
		slot="bar"
		class="w-full flex items-center gap-2 py-1 text-gray-900"
		let:item
		let:total
	>
		<span class="text-sm font-semibold">
			{((item.value / total) * 100).toFixed(2)}
		</span>

		<span class="text-[10px] ">
			({item.value.toLocaleString()})
		</span>
	</div>
</BarStack>
