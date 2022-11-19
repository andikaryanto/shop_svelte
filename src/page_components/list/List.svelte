<script lang="ts">
	import Row from "../../components/grids/Row.svelte";
	import Column from "../../components/grids/Column.svelte";
	import SmallText from "../../components/typography/SmallText.svelte";
	import Table from "../../components/tables/Table.svelte";
	import Pagination from "../../components/tables/Pagination.svelte";
    import {listPageStore} from '../../stores/listPageStore';

    export let name: string = '';
    export let page: number;
    export let size: number;
    export let totalPage: number;
    export let totalRecord: number;
    export let isLoading: boolean = false;
    export let itemKeys: string[];
    export let addRoute: string = '';

    const onPageChange = (value: any) => {
        $listPageStore.page = parseInt(value);
    }

</script>

<Column className="pb-8 justify-between">
    <Column>
        <Row className="pr-4 content-center">
            <SmallText>Rows per page </SmallText> 
        </Row>
        <!-- <InputSelectUnstyled value={list.size} onChange={onSelectRowPerPage} size="sm" items={selectItems} name="size"/> -->
    </Column>
    <!-- <Column>
        <InputText onChange={onChange} onKeyDown={onKeyDown} size="sm" className="input-sm" name="search" placeholder="Search"/>
        {addComponent}
    </Column> -->
</Column>
<Table numbered={true} headers={itemKeys}>
    {#if isLoading }
     <div>loading</div>
    {:else} 
     <slot/>
    {/if}
</Table>
<Pagination size="sm" onPageChange={onPageChange} 
    currentPage={$listPageStore.page} 
    totalPage={totalPage} 
    totalRecord={totalRecord} 
    pageSize={$listPageStore.size}
/>