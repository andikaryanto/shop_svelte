<script lang="ts">

	import TableCell from "../../components/tables/TableCell.svelte";
    import TableItem from "../../components/tables/TableItem.svelte";
    import List from "./List.svelte";

    export let name: string = '';
    export let page: number;
    export let size: number;
    export let totalPage: number;
    export let totalRecord: number;
    export let isLoading: boolean = false;
    export let itemKeys: string[];
    export let addRoute: string = '';
    export let items: Array<any>
</script>
<List 
    totalPage={totalPage} 
    totalRecord={totalRecord} 
    isLoading={isLoading} 
    itemKeys={itemKeys} 
>
{#if items.length > 0}
    {#each items as item, index(item)}
    <TableItem>
        <TableCell >{(page - 1) * size + 1 + index }</TableCell>
        {#each itemKeys as key}
            <TableCell >{item[key]}</TableCell>
        
        {/each}
    </TableItem>
    {/each}
{:else}
    <div>No Data</div>
{/if}
</List>