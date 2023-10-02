<script>
    import "../app.css";
    import Navbar from "../components/Navbar.svelte";
	import SidebarMobile from "../components/SidebarMobile.svelte";
	import { fly } from "svelte/transition";

	export let data;
	let openSidebar = false;
	function setOpenSidebar() {
		openSidebar = !openSidebar;
	}
</script>
  
<Navbar setOpenSidebar={setOpenSidebar} />
<SidebarMobile openSidebar={openSidebar} />
<main class="bg-neutral-800 text-white">
	{#key data.url}
		<div 
			in:fly={{ x: -200, duration: 500, delay: 500 }} 
			out:fly={{ x: -200, duration: 200 }} 
			class="py-5 md:px-28 px-5 min-h-screen mt-16"
		>
			<slot />
		</div>
	{/key}
</main>

<style>
	main {
		position: relative;
		margin: 0 auto;
		padding: var(--nav-h) 0 0 0;
	}
	:global(html) {
    	scroll-behavior: smooth;
	}
</style>