<script lang="typescript">
	import { slide } from 'svelte/transition';

	export let title = "Section Title";
	export let folded = false;
</script>

<section>
	<h2 on:click={() => folded=!folded}>{title}</h2>

	{#if !folded}
		<div transition:slide>
			<slot></slot>
		</div>
	{/if}
</section>

<style>
	section {
		width:  100%;
	}
	h2 {
		cursor: pointer;
	}
</style>