<script>
    import Tool from "./Tool.svelte";
    import { laguages, applicationsTools, databasesTools, machineLearningTools, gameDevelopmentTools } from "../../data/tools.ts";
</script>

<div class="mt-10">
    <div class="relative top-[-20vh]" id="Skills"></div>    
    <h1 class="text-xl font-semibold">Skills</h1>
    <div class="grid grid-cols-2 gap-7 content-center">
        <div class="border-2 border-violet-500 py-5 md:px-5 rounded-md">
            <p class="font-semibold text-center">Languages</p>
            <div class="flex flex-wrap mt-2">
                {#each laguages as tool}
                    <Tool name={tool.name} svg={tool.svg} />
                {/each}
            </div>
        </div>
        <div class="border-2 border-violet-500 py-5 md:px-5 rounded-md">
            <p class="font-semibold text-center">Web/Mobile Applications</p>
            <div class="flex flex-wrap mt-2">
                {#each applicationsTools as tool}
                    <Tool name={tool.name} svg={tool.svg} />
                {/each}
            </div>
        </div>
        <div class="border-2 border-violet-500 py-5 md:px-5 rounded-md">
            <p class="font-semibold text-center">Databases</p>
            <div class="flex flex-wrap mt-2">
                {#each databasesTools as tool}
                    <Tool name={tool.name} svg={tool.svg} />
                {/each}
            </div>
        </div>
        <div class="border-2 border-violet-500 py-5 md:px-5 rounded-md">
            <p class="font-semibold text-center">Data analytics & Machine Learning</p>
            <div class="flex flex-wrap mt-2">
                {#each machineLearningTools as tool}
                    <Tool name={tool.name} svg={tool.svg} />
                {/each}
            </div>
        </div>
        <div class="border-2 border-violet-500 py-5 md:px-5 rounded-md">
            <p class="font-semibold text-center">Game Development</p>
            <div class="flex flex-wrap mt-2">
                {#each gameDevelopmentTools as tool}
                    <Tool name={tool.name} svg={tool.svg} />
                {/each}
            </div>
        </div>
    </div>
</div>