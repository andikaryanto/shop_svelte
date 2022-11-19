<script lang="ts">
	import Container from "../../page_components/Container.svelte";
	import Countries from "../../resources/Countries";
	import CustomableList from "../../page_components/list/CustomableList.svelte";

  import {listPageStore} from  '../../stores/listPageStore';

    $: countries = Countries
      .setIdentityParameters('($page: Int, $size: Int $search_value: String)')
      .setQueryParameters('(page: $page size: $size search_value: $search_value)')
      .setVariables({
        page: $listPageStore.page,
        size: $listPageStore.size,
        search_value: $listPageStore.search_value
      })
      .fetch();
  
</script>

<Container pageName="Countries" menuName="country">
  {#if $countries.fetching}
  <p>Loading...</p>
  {:else if $countries.error}
  <p>Oh no... {$countries.error.message}</p>
  {:else}
    <CustomableList 
      name="country"
      size={$listPageStore.size} 
      page={$listPageStore.page} 
      totalPage={$countries.data.countries.paging.total_page} 
      totalRecord={$countries.data.countries.paging.total_record} 
      isLoading={$countries.fetching} 
      itemKeys={['name', 'description']} 
      items={$countries.data.countries.resources}
    />
    {/if}
</Container>
