<script>
    import GameworksCard from "../../components/Works/GameworksCard.svelte";
    let workFields = "application";
</script>

<div class="border-2 border-red-500">
    <div class="flex justify-center">
        <select on:change={e => workFields = e.target.value} class="bg-neutral-700 p-3 rounded-xl cursor-pointer" name="Work Fields">
            <option value="application">Web/Mobile Application works</option>
            <option value="machineLearning">Machine Learning works</option>
            <option value="gameDevelopment">Game Development works</option>
        </select>
    </div>
    <div class="mt-10 flex flex-col items-center">
        {#if workFields == "application"}
            <div>
                {#each [0, 1] as num}
                    <GameworksCard projectName="Project name" tools={["Blender"]} details="kuy" sourceCode="nahee" links={[{ header: "Demo", link: "https://www.youtube.com/watch?v=qMQ4P-vI3JI" }]} />
                {/each}
            </div>
        {:else if workFields == "machineLearning"}
            <div>
                {#each [0, 1] as num}
                    <GameworksCard />
                {/each}
            </div>
        {:else if workFields == "gameDevelopment"}
            <div>
                {#each [0, 1] as num}
                    <GameworksCard projectName="Project name" details="kuy" links={[{ header: "Trailer", link: "https://www.youtube.com/watch?v=qMQ4P-vI3JI" }]} tools={["unity", "unreal", "blender"]} available={["itch.io", "steam", "playstore"]} />
                {/each}
            </div>
        {/if}
    </div>
</div>