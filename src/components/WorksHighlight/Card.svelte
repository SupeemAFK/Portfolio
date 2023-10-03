<script lang="ts">
    export let projectName = "";
    export let details = "";
    export let img = "";
</script>

<a href="/works">
    <div class=" bg-neutral-900 text-white rounded-md cursor-pointer xl:grayscale-[50%] hover:grayscale-0 hover:scale-110 transition-all duration-300">
        <div class="rounded-t-md">
            <img class="object-cover rounded-t-md" src={img} alt={projectName} />
        </div>
        <div class="p-5">
            <h1 class="text-2xl font-semibold">{projectName}</h1>
            <p>{details}</p>
        </div>
        <div class="xl:hidden flex justify-center p-5">
            <a href="/works">
                <button class="p-2 bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 rounded-md">View Project</button>
            </a>
        </div>
    </div>
</a>