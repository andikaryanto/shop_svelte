<script lang="ts">
	import type { Sizing } from "../../types/Sizing";


    export let className: string;
    export let size: Sizing = 'md';
    export let onInput: any = null;
    export let onChange: any = null;
    export let placeholder: string;
    export let name: string;
    export let value: string;

    const inputSizeClass: string = "input-" + size;
    className = "form-control w-full max-w-xs " + className;

    const onValueChange = (event: any) => {
        onChange(event.target.value)
    }

    const onValueInput =  (event: any) => {
        onInput(event.target.value)
    }
</script>


<div class={className}>
    <input on:input={onValueInput} on:change={onValueChange} type="text" placeholder={placeholder} class={"input input-bordered w-full max-w-xs " + inputSizeClass} name={name} value={value}>
</div>