import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_KEY = "AIzaSyBEkoWzBSlKkiIrT1M_gzg6hk6eM3hFhLA"

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://identitytoolkit.googleapis.com/v1/", }),

    endpoints: (builder) => ({

        // Registro
        signup: builder.mutation({
            query: (auth) => ({
                url: `accounts:signUp?key=${API_KEY}`,
                method: "POST",
                body: auth
            }) 
        }),

        // Iniciar sesión
        login: builder.mutation({
            query: (auth) => ({
                url: `accounts:signInWithPassword?key=${API_KEY}`,
                method: "POST",
                body: auth
            })
        }),

    })

})

export const {
    useSignupMutation,
    useLoginMutation
} = authApi