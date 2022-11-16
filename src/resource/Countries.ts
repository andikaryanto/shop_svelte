import QueryCollection from "./QueryCollection";

class Countries extends QueryCollection {
    constructor() {
        super();
    }

    queryName(): string {
        return 'countries'
    }

    identity(): string {
        return 'getCountries'
    }

    keys(): string {
        return `resources {
            id
            name
            description
        }`;
    }

}

export default new Countries();