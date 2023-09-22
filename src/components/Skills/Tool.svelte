<script>
    export let svg = "";
    export let name = "";
</script>

<div class="flex items-center p-3">
    <div class="w-6 h-6">
        {@html svg}
    </div>
    <p>{name}</p>
</div>