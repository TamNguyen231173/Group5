import { apiService } from './apiService';
import { Pokemon } from './type';

export const demoApiSlice = apiService.injectEndpoints({
    endpoints: (builder) => ({
        getPokemon: builder.query<Pokemon[], void>({
            query: () => '/pokemon',
            keepUnusedDataFor: 5,
        }),
    }),
});

export const { useGetPokemonQuery } = demoApiSlice;
