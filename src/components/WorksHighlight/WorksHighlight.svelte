<script lang="ts">
    import Card from "./Card.svelte";
    import FaAngleRight from 'svelte-icons/fa/FaAngleRight.svelte';
    import { highlightWorks } from "$lib/data/works";
</script>

<div class="mt-10 flex flex-col items-center">
    <div class="relative top-[-10vh]" id="Works"></div>    
    <h1 class="text-xl font-semibold">Works Highlights</h1>
    <div class="mt-5 grid lg:grid-cols-2 lg:gap-10 lg:w-3/4 grid-cols-1 gap-5 w-full">
        {#each highlightWorks as work}
            <Card projectName={work.projectName}  details={work.details} img={work.img} />
        {/each}
    </div>
    <a href="/works">
        <button 
            class="flex items-center mt-5 border-2 border-white p-2 rounded-md hover:bg-white hover:text-neutral-900 transition-all duration-300">
            See more of works 
            <div class="w-5 h-5 flex items-center">
                <FaAngleRight />
            </div>
        </button>
    </a>
</div> 