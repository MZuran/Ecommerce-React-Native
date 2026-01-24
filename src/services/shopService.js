import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const testQuery = "cards.json?limitToFirst=10&orderBy=\"name\"";
const allCardsQuery = "cards.json";

export const shopApi = createApi({
    reducerPath: 'shopApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://boardgame-app-7410d-default-rtdb.firebaseio.com' }),

    endpoints: (builder) => ({

        getAllCards: builder.query({
            query: () => allCardsQuery,
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

        getCardById: builder.query({
            query: (id) => `cards/${id}.json`,
            transformResponse: (response, meta, id) =>
                response ? { id, ...response } : null,
        }),

        updateCardStock: builder.mutation({
            query: ({ cardId, stock }) => ({
                url: `cards/${cardId}.json`,
                method: 'PATCH',
                body: { stock },
            }),
        }),

        updateCardStockByAmount: builder.mutation({
            query: ({ cardId, delta }) => ({
                url: `cards/${cardId}/stock.json`,
                method: 'PUT',
                body: { ".sv": { increment: -delta, }, },
            }),
        }),

        postOrder: builder.mutation({
            query: (newOrder) => ({
                url: 'orders.json',
                method: 'POST',
                body: newOrder,
            }),
        }),

        updateOrder: builder.mutation({
            query: ({ id, updateData }) => ({
                url: `orders/${id}.json`,
                method: 'PUT',
                body: updateData,
            }),
        }),

        deleteOrder: builder.mutation({
            query: (id) => ({
                url: `orders/${id}.json`,
                method: 'DELETE',
            }),
        }),


    }),
})

export const {

    useGetAllCardsQuery,
    useGetCardsByArchetypeQuery,
    useGetCardByIdQuery,

    useUpdateCardStockMutation,
    useUpdateCardStockByAmountMutation,

    usePostOrderMutation,
    useUpdateOrderMutation,
    useDeleteOrderMutation,

} = shopApi

