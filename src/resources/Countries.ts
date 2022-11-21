import QueryCollection from "./QueryCollection";

class Countries extends QueryCollection {
    constructor() {
        super();
    }

    protected queryName(): string {
        return 'countries'
    }

    protected identity(): string {
        return 'getCountries'
    }

    protected keys(): string {
        return `resources {
            id
            name
            description
        }`;
    }

}

export default new Countries();