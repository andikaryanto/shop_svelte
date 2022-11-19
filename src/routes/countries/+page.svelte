<script>
	import { getContextClient, queryStore } from "@urql/svelte";
	import Container from "../../page_components/Container.svelte";
	import Countries from "../../resources/Countries";


  let countries = Countries
    .setIdentityParameters('($page: Int, $size: Int $search_value: String)')
    .setQueryParameters('(page: $page size: $size search_value: $search_value)')
    .setVariables({
      page: 1,
      size: 5,
      search_value: ""
    })
    .fetch();

</script>

<Container pageName="Countries" menuName="country">
  {#if $countries.fetching}
  <p>Loading...</p>
  {:else if $countries.error}
  <p>Oh no... {$countries.error.message}</p>
  {:else}
  <ul>
    {#each $countries.data.countries.resources as country}
    <li>{country.name}</li>
    {/each}
  </ul>
  {/if}
</Container>
