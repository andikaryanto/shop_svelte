<script lang="ts">
	import Row from "../../components/grids/Row.svelte";
	import Column from "../../components/grids/Column.svelte";
	import SmallText from "../../components/typography/SmallText.svelte";
	import Table from "../../components/tables/Table.svelte";
	import Pagination from "../../components/tables/Pagination.svelte";
    import {listPageStore} from '../../stores/listPageStore';
	import InputText from "../../components/forms/InputText.svelte";
	import InputSelect from "../../components/forms/InputSelect.svelte";

    export let totalPage: number;
    export let totalRecord: number;
    export let isLoading: boolean = false;
    export let itemKeys: string[];
    // export let addRoute: string = '';

    const onPageChange = (value: any) => {
        listPageStore.update(list => {
            return {
                ...list,
                page: parseInt(value)
            }
        });
    }
    
    const onInput = (value: any) => {
        listPageStore.update(list => {
            return {
                ...list,
                temp_search: value,
                page: 1
            }
    });
    }

    const onChange = (value: any) => {
        listPageStore.update(list => {
            return {
                ...list,
                search_value: value,
                page: 1
            }
        });
    }
    
    const onSelectRowPerPage = (value: any) => {        
        listPageStore.update(list => {
            return {
                ...list,
                size:  parseInt(value),
                page: 1
            }
        });
    }

    const selectItems = [
        {
            key: "5",
            value: "5"
        },
        {
            key: "10",
            value: "10"
        },
        {
            key: "15",
            value: "15"
        }
    ];

</script>

<Column className="pb-8 justify-between"> 
    <Column>
        <Row className="pr-4 content-center">
            <SmallText>Rows per page </SmallText> 
        </Row>
        <InputSelect value={$listPageStore.size.toString()} onSelect={onSelectRowPerPage} items={selectItems} name="size"/>
    </Column>
    <Column>
        <InputText onChange={onChange} onInput={onInput} size="sm" className="input-sm" name="search" placeholder="Search" value={$listPageStore.search_value}/>
        <!-- {addComponent} -->
    </Column>
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