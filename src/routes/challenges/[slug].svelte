<script context="module">
	/** @type {import('@sveltejs/kit').Load} */
	export async function load({ page, fetch, session, stuff }) {

		if (true) {
			return {
				props: {
					route: `${page.params.slug}` 
				}
			};
		}

		return {
			status: res.status,
			error: new Error(`Could not load ${url}`)
		};
	}
</script>

<script lang="ts">
	import { challenges } from "$lib/stores.ts";
	// export async function load({}) {}:
	export let route: string | undefined;
</script>

<h2>
	All Challenges 
</h2>


