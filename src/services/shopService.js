import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const testQuery = "cards.json?limitToFirst=10&orderBy=\"name\"";

export const shopApi = createApi({
    reducerPath: 'shopApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://boardgame-app-7410d-default-rtdb.firebaseio.com' }),

    endpoints: (builder) => ({

        getAllCards: builder.query({
            query: () => testQuery,
            transformResponse: (response) => Object.entries(response || {}).map(([id, data]) => ({ id, ...data, })),
        }),

        getCardsByArchetype: builder.query({
            query: (archetype) => {
                const orderByField = `"archetype"`;
                const equalToValue = `"${archetype}"`;
                const finalUrl = `cards.json?orderBy=${encodeURIComponent(orderByField)}&equalTo=${encodeURIComponent(equalToValue)}`
                console.log(finalUrl)
                return finalUrl;
            },
            transformResponse: (response) => Object.entries(response || {}).map(([id, data]) => ({ id, ...data })),
        }),


    }),
})

export const { useGetAllCardsQuery, useGetCardsByArchetypeQuery } = shopApi