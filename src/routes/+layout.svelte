<script>
    import "../app.css";
    import Navbar from "../components/Navbar.svelte";
</script>
  
<Navbar />
<main class="bg-neutral-800 text-white">
	<div class="py-5 md:px-96 px-5 min-h-screen">
		<slot />
	</div>
</main>

<style>
	main {
		position: relative;
		margin: 0 auto;
		padding: var(--nav-h) 0 0 0;
	}
</style>