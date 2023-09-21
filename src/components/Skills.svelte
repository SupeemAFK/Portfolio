<script>
    import Tool from "./Tool.svelte";
    import { laguages, applicationsTools, databasesTools, machineLearningTools, gameDevelopmentTools } from "../data/Tools";
</script>

<div class="mt-10" id="Skills">
    <h1 class="text-xl font-semibold">Skills</h1>
    <div class="mt-5">
        <p class="font-semibold">Languages</p>
        <div class="flex flex-wrap mt-2">
            {#each laguages as tool}
                <Tool name={tool.name} svg={tool.svg} />
            {/each}
        </div>
    </div>
    <div class="mt-5">
        <p class="font-semibold">Web/Mobile Applications</p>
        <div class="flex flex-wrap mt-2">
            {#each applicationsTools as tool}
                <Tool name={tool.name} svg={tool.svg} />
            {/each}
        </div>
    </div>
    <div class="mt-5">
        <p class="font-semibold">Databases</p>
        <div class="flex flex-wrap mt-2">
            {#each databasesTools as tool}
                <Tool name={tool.name} svg={tool.svg} />
            {/each}
        </div>
    </div>
    <div class="mt-5">
        <p class="font-semibold">Machine Learning</p>
        <div class="flex flex-wrap mt-2">
            {#each machineLearningTools as tool}
                <Tool name={tool.name} svg={tool.svg} />
            {/each}
        </div>
    </div>
    <div class="mt-5">
        <p class="font-semibold">Game Development</p>
        <div class="flex flex-wrap mt-2">
            {#each gameDevelopmentTools as tool}
                <Tool name={tool.name} svg={tool.svg} />
            {/each}
        </div>
    </div>
</div>