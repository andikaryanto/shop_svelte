import { createClient, setContextClient } from '@urql/svelte';

class Query {
    
    protected identityParams: string = '';
    protected queryParams: string = '';
    protected variables: any = {};

    constructor(){
        const client = createClient({
            url: 'http://localhost:3000/graphql',
        });
        
        setContextClient(client);
    }

    queryName(): string {
        return '';
    }

    build(){
    }

    identity(): string {
        return '';
    }

    
    keys(): string{
        return '';
    }

    setIdentityParameters(identityParams: string){
        this.identityParams = identityParams
        return this;
    }

    setQueryParameters(queryParams: string){
        this.queryParams = queryParams
        return this;
    }

    setVariables(variables: any) {
        this.variables = variables;
        return this;
    }

    getVariables() {
        return this.variables;
    }

    fetch() {

    }
}

export default Query;