import { writable } from 'svelte/store';

export const listPageStore = writable({
    page: 1,
    size: 5,
    search_value: '',
    temp_search: ''
});