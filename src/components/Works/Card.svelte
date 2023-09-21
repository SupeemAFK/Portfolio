<script>
    import DiGithubBadge from 'svelte-icons/di/DiGithubBadge.svelte'
</script>

<div class=" bg-neutral-900 text-white rounded-md">
    <div class="rounded-t-md">
        <img class="object-cover rounded-t-md" src="https://designshack.net/wp-content/uploads/placeholder-image.png" alt="" />
    </div>
    <div class="p-5">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium at quas,</p>
    </div>
    <div class="flex justify-end p-5">
        <a href="https://github.com/">
            <div class="border-2 border-white hover:bg-white hover:text-neutral-900 flex items-center p-2 rounded-md text-xs transition-all duration-300">
                <p>View Project</p>
                <div class="w-5 h-5 ml-1">
                    <DiGithubBadge />
                </div>
            </div>
        </a>
    </div>
</div>