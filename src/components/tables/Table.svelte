

<script lang="ts">
	import Column from "../grids/Column.svelte";

    export let numbered: boolean = false;
    export let headers: string[];
    
</script>

<Column className="overflow-x-auto">
    <table class="table table-zebra w-full">
        <thead class="text-primary">
            <tr>
                {#if numbered}
                    <th></th>
                {/if}
                {#each headers as header , index (header)}
                    <th>{header}</th>
                {/each}
            </tr>
        </thead>
        <tbody> 
        <slot/>
        </tbody>
    </table>
</Column>