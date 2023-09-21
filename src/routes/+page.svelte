<script>
    import Skills from "../components/Skills/Skills.svelte";
    import Education from "../components/Education.svelte";
    import Works from "../components/Works/Works.svelte";
    import Model from "../components/3DModel/Model.svelte";
    import Contacts from "../components/Contacts.svelte";
    import Typewriter from 'svelte-typewriter'
</script>

<div>
    <div class="absolute md:w-96 w-screen top-0 left-0 md:left-1/2 md:-ml-48 h-72 mt-5">
        <Model />
    </div>
    <div class="mt-[19.25rem]">
        <Typewriter mode="loop">
            <h1 class="text-center text-3xl font-semibold">Peemmaphat Sripongsai</h1>
            <h1 class="text-center text-3xl font-semibold">Always learning new things🔥</h1>
        </Typewriter>
        <Education />
        <Skills />
        <Works />
        <Contacts />
    </div>
</div>
