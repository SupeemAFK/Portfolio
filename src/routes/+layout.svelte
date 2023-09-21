<script>
    import "../app.css";
    import Navbar from "../components/Navbar.svelte";
</script>
  
<Navbar />
<main class="bg-neutral-800 text-white">
    <slot />
</main>

<style>
	main {
		position: relative;
		margin: 0 auto;
		padding: var(--nav-h) 0 0 0;
	}
</style>