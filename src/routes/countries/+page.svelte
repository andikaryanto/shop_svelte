<script>
	import { getContextClient, queryStore } from "@urql/svelte";
	import Container from "../../page_components/Container.svelte";
	import Countries from "../../resources/Countries";


  let query = Countries.setContext()
    .setIdentityParameters('($page: Int, $size: Int $search_value: String)')
    .setQueryParameters('(page: $page size: $size search_value: $search_value)')
    .setVariables({
      page: 1,
      size: 5,
      search_value: ""
    })
    .build();

  const a = queryStore({
        client: getContextClient(),
        query,
        variables: {
          page: 1,
          size: 5,
          search_value: ""
        }
  });

  console.log($a);

</script>

<Container pageName="About" menuName="about">
    <h1 class="text-3xl font-bold underline"> This is about page</h1>
</Container>
