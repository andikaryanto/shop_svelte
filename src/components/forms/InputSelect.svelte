<script lang="ts">
	import type { InputSelectType } from "src/types/input/InputSelectType";
    
    export let value: any;
    export let name: string
    export let onSelect: any = null;
    export let items: Array<InputSelectType>;
    export let className: string = "";

    const onSelectChange = (e: any) => {
        onSelect(e.target.value);
    }   

</script>

<select on:change={onSelectChange} value={value} name={name} class={className}>
    {#each items as item }
         <option value={item.key}>{item.value}</option>
    {/each}
</select>