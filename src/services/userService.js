import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//const API_KEY = "AIzaSyBEkoWzBSlKkiIrT1M_gzg6hk6eM3hFhLA"

export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://boardgame-app-7410d-default-rtdb.firebaseio.com", }),

    endpoints: (builder) => ({

        // Actualizar o Crear pfp
        putProfilePicture: builder.mutation({
            query: ({ image, localId }) => ({
                url: `profilePictures/${localId}.json`,
                method: "PUT",
                body: { image }
            })
        }),

        // Descargar pfp
        getProfilePicture: builder.query({
            query: (localId) => `profilePictures/${localId}.json`
        })

    })

})

export const {
    usePutProfilePictureMutation,
    useGetProfilePictureQuery
} = userApi