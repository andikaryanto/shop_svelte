import { Client, createClient, setContextClient } from '@urql/svelte';

class Query {
    
    protected identityParams: string = '';
    protected queryParams: string = '';
    protected variables: any = {};
    protected client: any;

    constructor(){
        this.client = createClient({
            url: 'http://localhost:3000/graphql',
        });
        
    }

    protected setContext(){
        setContextClient(this.client);
        return this;
    }

    protected queryName(): string {
        return '';
    }

    protected build(){
    }

    protected identity(): string {
        return '';
    }

    
    protected keys(): string{
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

    protected getVariables() {
        return this.variables;
    }

    fetch(context: Client) {

    }
}

export default Query;