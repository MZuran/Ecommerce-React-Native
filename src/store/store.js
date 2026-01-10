import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './slices/counterSlice';
import { shopApi } from "../services/shopService";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        [shopApi.reducerPath]: shopApi.reducer,
    },
    middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware(),
        shopApi.middleware,  // ensure this is included as a middleware
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