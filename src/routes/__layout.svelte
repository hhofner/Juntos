<script>
	import 'chota';
	import { Container, Nav } from 'svelte-chota';
</script>

<Container class='is-full-screen'>
	<Nav>
		<a slot='left' href="/" class="brand">Juntos!</a>
		<a slot='right' class="active" href="/">Login 1</a>
	</Nav>

		<slot></slot>

	<footer>
		Footer here
	</footer>
</Container>

<style>
	footer {
			margin-top: auto;
	}
</style>