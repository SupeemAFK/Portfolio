<script>
    export let openSidebar = false;
</script>

<div class={`${openSidebar ? "right-0" : "right-[-100%]"} bg-neutral-900 mt-16 fixed top-0 w-24 z-10 p-4 text-white transition-all duration-300`}>
    <div>
        <div>
            <a href="#Education">Education</a>
        </div>
        <div class="mt-2">
            <a href="#Skills">Skills</a>
        </div>
        <div class="mt-2">
            <a href="#Works">Works</a>
        </div>
        <div class="mt-2">
            <a href="#Contacts">Contacts</a>
        </div>
    </div>
</div>