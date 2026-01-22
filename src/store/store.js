import { configureStore } from "@reduxjs/toolkit";
import { shopApi } from "../services/shopService";
import { authApi } from "../services/authService";
import { userApi } from "../services/userService";

import counterReducer from './slices/counterSlice';
import cartReducer from './slices/cartSlice';
import authReducer from './slices/authSlice'
import userReducer from './slices/userSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        cart: cartReducer,
        auth: authReducer,
        user: userReducer,

        [shopApi.reducerPath]: shopApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
    },

    middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware(),
        shopApi.middleware,
        authApi.middleware,
        userApi.middleware,
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