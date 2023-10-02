<script lang="ts">
    import DiGithubBadge from 'svelte-icons/di/DiGithubBadge.svelte'
    import IoLogoFacebook from 'svelte-icons/io/IoLogoFacebook.svelte'
    import IoLogoInstagram from 'svelte-icons/io/IoLogoInstagram.svelte'
    import IoLogoTwitter from 'svelte-icons/io/IoLogoTwitter.svelte'
</script>

<div class="mt-10 ">
    <div class="relative top-[-30vh]" id="Contacts"></div>    
    <h1 class="text-xl font-semibold">Contacts</h1>
    <div class="mt-3">
        <a href="https://twitter.com/PeemSripongsai">
            <div class="flex items-center">
                <div class="w-8 h-8">
                    <IoLogoTwitter />
                </div>
                <p>@PeemSripongsai</p>
            </div>
        </a>
        <a href="https://www.facebook.com/profile.php?id=100004604085826">
            <div class="flex items-center mt-2">
                <div class="w-8 h-8">
                    <IoLogoFacebook />
                </div>
                <p>Peem Sripongsai</p>
            </div>
        </a>
        <a href="https://www.instagram.com/supeem_2548/?hl=en">
            <div class="flex items-center mt-2">
                <div class="w-8 h-8">
                    <IoLogoInstagram />
                </div>
                <p>@Supeem_2548</p>
            </div>
        </a>
        <a href="https://github.com/SupeemAFK">
            <div class="flex items-center mt-2">
                <div class="w-8 h-8">
                    <DiGithubBadge />
                </div>
                <p>SupeemAFK</p>
            </div>
        </a>
    </div>
</div>
