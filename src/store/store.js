import { configureStore } from "@reduxjs/toolkit";
import { shopApi } from "../services/shopService";

import counterReducer from './slices/counterSlice';
import cartReducer from './slices/cartSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        cart: cartReducer,
        [shopApi.reducerPath]: shopApi.reducer,
    },
    middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware(),
        shopApi.middleware,
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