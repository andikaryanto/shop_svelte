<script>
    import SideBar from "../components/sidebar/SideBar.svelte";
    import SideBarGroup from "../components/sidebar/SideBarGroup.svelte";
    import SideBarItem from "../components/sidebar/SideBarItem.svelte";

    export let activeMenu = "";

    const menus = [
        {
            header: 'Dashboard',
            childs: [
                {
                caption: 'Dashboard',
                route: '/dashboard',
                isActive: activeMenu == "dashboard"
                },]
        }, {
            header: 'Area',
            childs: [{
                caption: 'Country',
                route: '/countries',
                isActive: activeMenu == "country"
            },
            {
                caption: 'Island',
                route: '/island',
                isActive: activeMenu == "island"
            }
            ]
        },
        {
            header: 'About',
            childs: [
                {
                caption: 'About',
                route: '/about',
                isActive: activeMenu == "about"
                },]
        }
    ];
</script>

<SideBar>
    {#each menus as menu}
    <SideBarGroup caption={menu.header}>
        {#each menu.childs as child}
        <SideBarItem href={child.route} isActive={child.isActive}>{child.caption}</SideBarItem> 
        {/each}
    </SideBarGroup>
    {/each}

</SideBar>

