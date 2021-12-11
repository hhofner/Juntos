<script>
	let isCollapsed = false;	
</script>

<nav>
	<h1>
		Juntos!
	</h1>
	<a href="/">
		Log In
	</a>
</nav>

<slot></slot>

<footer>
	Footer here
</footer>

<style>
	nav {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: baseline;
	}
	/* 	TODO: Remove colors default styling */
	a {
		border: black 1px solid;
		text-decoration: none;	
	}
</style>