<script lang="ts">
    import FaAlignJustify from 'svelte-icons/fa/FaAlignJustify.svelte'
    export let setOpenSidebar: () => void;
</script>

<div class="p-5 h-16 fixed top-0 left-0 z-20 w-full bg-neutral-900 text-white flex justify-between">
    <div>
        <a href="/">Portfolio</a>
    </div>
    <div class="md:block hidden">
        <a href="#Aboutme">Aboutme</a>
        <a class="ml-2" href="#Education">Education</a>
        <a class="ml-2" href="#Skills">Skills</a>
        <a class="ml-2" href="#Works">Works</a>
        <a class="ml-2" href="#Contacts">Contacts</a>
    </div>
    <div class="md:hidden block">
        <button class="w-5 h-5" on:click={setOpenSidebar}><FaAlignJustify /></button>
    </div>
</div>
