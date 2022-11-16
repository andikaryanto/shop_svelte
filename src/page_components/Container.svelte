<script>
    export let pageName = "";
    export let menuName = "";
	import Menu from "./Menu.svelte";

</script>
<div class="flex rounded-r w-screen">
    <Menu activeMenu = {menuName}/>
    <div class = "grid py-10 h-64 w-full px-6">
        <div class="text-left pb-10 text-3xl font-medium">{pageName}</div>
        <div class="w-full h-full">
            <slot />
        </div>
    </div>
</div>