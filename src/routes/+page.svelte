<script>
    import Skills from "../components/Skills.svelte";
    import Education from "../components/Education.svelte";
    import Works from "../components/Works.svelte";
    import Model from "../components/Model.svelte";
    import Contacts from "../components/Contacts.svelte";
    import Typewriter from 'svelte-typewriter'
</script>

<div class="py-5 md:px-96 px-5">
    <div class="absolute md:w-96 w-screen top-0 left-0 md:left-1/2 md:-ml-48 h-72 mt-5">
        <Model />
    </div>
    <div class="mt-[19.25rem]">
        <Typewriter mode="loop">
            <h1 class="text-center text-3xl font-semibold">Peemmaphat Sripongsai</h1>
        </Typewriter>
        <Education />
        <Skills />
        <Works />
        <Contacts />
    </div>
</div>
