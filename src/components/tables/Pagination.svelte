<script lang="ts">

    import type {Sizing} from '../../types/Sizing';
	import Column from '../grids/Column.svelte';
	import Row from '../grids/Row.svelte';
	import SmallText from '../typography/SmallText.svelte';

    export let size: Sizing = 'md'
    export let currentPage: number
    export let pageSize: number
    export let totalPage: number
    export let totalRecord: number
    export let onPageChange: Function

    let btnSize = 'btn-md ' + size;

    const onPrevPage = () => {
        if(currentPage == 1)
            onPageChange(1);
        else 
            onPageChange(currentPage - 1)
    }

    const onNextPage = () => {
        if(currentPage == totalPage)
            onPageChange(totalPage);
        else 
            onPageChange(currentPage + 1)
    }

    const onFirstPage = () => {
        onPageChange(1);
    }

    const onLastPage = () => {
        onPageChange(totalPage);
    }

    if(pageSize > totalRecord) {
        pageSize = totalRecord
    }
</script>

<Row className="w-full text-right mt-10 justify-between">
    <Column className="content-center">
        <SmallText>Showing {pageSize} of {totalRecord} Item(s) </SmallText>
    </Column>
    <div class={"btn-group " + btnSize}>
        <button class={"btn " + btnSize} on:click={onFirstPage}>First</button>
        <button class={"btn " + btnSize} on:click={onPrevPage}>«</button>
        <button class={"btn " + btnSize + " btn-active"}>{currentPage}</button>
        <button class={"btn " + btnSize} on:click={onNextPage}>»</button>
        <button class={"btn " + btnSize} on:click={onLastPage}>Last</button>
    </div>
</Row>