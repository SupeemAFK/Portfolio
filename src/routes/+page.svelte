<script>
    import Skills from "../components/Skills/Skills.svelte";
    import Education from "../components/Education.svelte";
    import WorksHighlight from "../components/WorksHighlight/WorksHighlight.svelte";
    import Model from "../components/3DModel/Model.svelte";
    import Contacts from "../components/Contacts.svelte";
    import Typewriter from 'svelte-typewriter'
</script>

<div>
    <div class="flex xl:flex-row flex-col md:mt-32 mt-24">
        <div class="relative flex-1 py-40 left-30">
            <div class="absolute top-0 left-0 w-full h-full ">
                <Model />
            </div>
        </div>
        <div class="xl:mt-0 flex flex-col xl:items-end items-center">
            <div>
                <div class="flex flex-wrap xl:flex-row flex-col items-center">
                    <h1 class="md:text-6xl text-5xl font-semibold">Peemmaphat</h1>
                    <h1 class="text-end md:text-6xl text-5xl font-semibold lg:ml-3">Sripongsai</h1>
                </div>
            </div>
            <div class="flex items-center mt-10">
                <Typewriter class="text-white" mode="loop">
                    <h1 class="text-center md:text-5xl text-4xl font-semibold text-cyan-400">Web</h1>
                    <h1 class="text-center md:text-5xl text-4xl font-semibold text-violet-400">Game</h1>
                    <h1 class="text-center md:text-5xl text-4xl font-semibold text-orange-400">AI</h1>
                </Typewriter>
                <h1 class="text-center md:text-5xl text-4xl font-semibold ml-2">Developer</h1>
            </div>
            <div class="mt-10 w-3/4">
                <p class="text-xl">Hello I a am high schooler and a developer who love to develop new things</p>
            </div>
        </div>
    </div>
    <div class="md:mt-52">
        <Education />
        <Skills />
        <WorksHighlight />
        <Contacts />
    </div>
</div>
