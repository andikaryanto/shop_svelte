import Query from "./Query";
import { gql, queryStore, getContextClient, Client } from '@urql/svelte';

class QueryCollection extends Query {

    constructor() {
        super();
    }

    protected build(){
        this.setContext();
        const identity = this.identity();
        const querName = this.queryName();
        const key = this.keys();
        const identityParams = this.identityParams;
        const queryParams = this.queryParams;
        let query = `query ${identity} ${identityParams} {
            ${querName} ${queryParams} {
                paging {
                    page
                    size
                    next_page
                    prev_page
                    total_page
                    total_record
                }
                ${key}
            }
        }`;
       
        return gql(query);
    }

    fetch() {
        let query = this.build();
        return queryStore({
            client: getContextClient(),
            query,
            variables: this.getVariables()
        });
    }


}

export default QueryCollection;