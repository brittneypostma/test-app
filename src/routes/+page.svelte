<script>
	import {
		LiquorGlassBottleSolid,
		ListSolid,
		DeliveryTruckSolid,
		DollarSignCircleSolid
	} from '@getprovi/craft';
	const iconMap = {
		LiquorGlassBottleSolid,
		ListSolid,
		DollarSignCircleSolid,
		DeliveryTruckSolid
	};
</script>

{#each Object.values(iconMap) as icon}
	<svelte:component this={icon} width={48} height={48} class="text-brand" />
{/each}
