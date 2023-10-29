import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { Api } from "../api/Api";



export const store = configureStore({
    reducer: combineReducers({
        [Api.reducerPath]: Api.reducer
    }),
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        }).concat(Api.middleware)
})
setupListeners(store.dispatch)
