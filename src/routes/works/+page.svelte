<script lang="ts">
    import WorksCard from "../../components/Works/WorksCard.svelte";
    import { allWorks, applicationDevelopmentWorks, gameDevelopmentWorks, machineLearningWorks } from "$lib/data/works"
    let workFields = "all";
</script>

<div>
    <div class="flex justify-center">
        <select on:change={e => workFields = e.currentTarget.value} class="bg-neutral-700 p-3 rounded-xl cursor-pointer" name="Work Fields">
            <option value="all">All works</option>
            <option value="application">Web/Mobile Application works</option>
            <option value="machineLearning">Machine Learning works</option>
            <option value="gameDevelopment">Game Development works</option>
        </select>
    </div>
    <div class="mt-10 flex flex-col items-center">
        <div class="grid grid-cols-auto gap-4 w-full">
            {#if workFields == "all"}
                {#each allWorks as work}
                    <WorksCard projectName={work.projectName} tools={work.tools} details={work.details} img={work.img} links={work.links} available={work.available} sourceCode={work.sourceCode} />
                {/each}
            {:else if workFields == "application"}
                {#each applicationDevelopmentWorks as work}
                    <WorksCard projectName={work.projectName} tools={work.tools} details={work.details} img={work.img} links={work.links} sourceCode={work.sourceCode} />
                {/each}
            {:else if workFields == "machineLearning"}
                {#each machineLearningWorks as work}
                    <WorksCard projectName={work.projectName} tools={work.tools} details={work.details} img={work.img} sourceCode={work.sourceCode} />
                {/each}
            {:else if workFields == "gameDevelopment"}
                {#each gameDevelopmentWorks as work}
                    <WorksCard projectName={work.projectName} details={work.details} img={work.img} links={work.links}  available={work.available} tools={work.tools} />
                {/each}
            {/if}
        </div>
    </div>
</div>