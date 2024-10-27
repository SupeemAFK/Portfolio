<script lang="ts">
    import { fly } from 'svelte/transition'
    let openAboutMe = false;
</script>

<div class="mt-10">
    <div class="flex items-center">
        <h1 class="text-xl font-semibold">About me</h1>
    </div>
    {#if openAboutMe}
        <p 
        in:fly={{
            y: -20,
            delay: 0,
          }}
        >
            Hello! I'm a passionate developer who loves building innovative solutions across diverse fields from AI and machine learning to web and game development. I'm always up for new challenges and excited to expand my skills.

            I'm also actively involved in competitions and hackathons, where I enjoy collaborating with others and testing my abilities. Plus, I love contributing to the open-source community through events like Hacktoberfest.
            
            Outside of coding, I'm a big fan of manga, anime, and movies, and a dedicated gamer with over 100 games in my Steam library. Let's connect and see what we can create together!
            🔥🔥🔥
        </p>
        <button 
            on:click={() => {
                if (openAboutMe) openAboutMe = false;
                else openAboutMe = true;
            }} 
            class="text-blue-400 hover:text-blue-100 transition-all"
        >
            View Less↑
        </button>
    {:else}
        <button 
            on:click={() => {
                if (openAboutMe) openAboutMe = false;
                else openAboutMe = true;
            }} 
            class="text-blue-400 hover:text-blue-100 transition-all"
        >
            View More↓
        </button>
    {/if}
</div>