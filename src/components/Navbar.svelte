<script lang="ts">
    import FaAlignJustify from 'svelte-icons/fa/FaAlignJustify.svelte'
    export let setOpenSidebar: () => void;
</script>

<div class="p-5 h-16 fixed top-0 left-0 z-20 w-full bg-neutral-900 text-white flex justify-between">
    <div>
        <a href="/">Portfolio</a>
    </div>
    <div class="md:block hidden">
        <a href="#Education">Education</a>
        <a href="#Skills">Skills</a>
        <a href="#Works">Works</a>
        <a href="#Contacts">Contacts</a>
    </div>
    <div class="md:hidden block">
        <button on:click={setOpenSidebar}><FaAlignJustify /></button>
    </div>
</div>
