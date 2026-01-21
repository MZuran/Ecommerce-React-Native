import { configureStore } from "@reduxjs/toolkit";
import { shopApi } from "../services/shopService";
import { authApi } from "../services/authService";

import counterReducer from './slices/counterSlice';
import cartReducer from './slices/cartSlice';
import authReducer from './slices/authSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        cart: cartReducer,
        auth: authReducer,
        [shopApi.reducerPath]: shopApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
    },

    middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware(),
        shopApi.middleware,
        authApi.middleware,
    ],
    
});

/*
    Para usar el estado global importamos useSelector y useDispatch

    const counter = useSelector(state => state.counter.count)

    Para ejecutar las funciones del slice las importamos del archivo (por ejemplo increment)
    y hacemos:

    useDispatch(increment())
*/

/*
    para usar el RTK query hacemos el 
    import {useGetAllCardsQuery} from ...

    const {data, error, isLoading} = useGetAllCardsQuery(params)
*/