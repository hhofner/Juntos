<script>
	export let data;

	import { Button } from "svelte-chota";
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';

	const progress = tweened(data.progress, {
		duration: 400,
		easing: cubicOut
	});

</script>

<div class='challenge'>
	<div class='preview' >
		<div>
			<label>{data.name}</label>
			<progress max={data.target} value={$progress}></progress>

			<small class='text-grey'> Deadline: {data.endDate} </small>

		</div>

		<span>movement graphs</span>
		<div>
					<Button primary>record</Button>
					<!--        TODO: Make these "owner" only-->
					<Button>edit</Button>
					<Button error>delete</Button>
					</div>
	</div>
</div>

<style>
    .preview {
				padding: 1rem;
        display: flex;
				flex-wrap: wrap;
        justify-content: space-between;
        margin-bottom: 2em;

				border-radius: 4px;
				border: 1px solid transparent;
    }
		.preview:hover {
        border-radius: 4px;
        border: 1px solid var(--color-lightGrey);
		}
    small {
        display: block;
    }
</style>