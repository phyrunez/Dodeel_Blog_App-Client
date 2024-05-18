import { configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from "redux-persist"
import storage from "redux-persist/lib/storage"
import {rootReducer} from "./rootReducer"

const getUserInfoFromStorage = localStorage.getItem('user-account') ? JSON.parse(localStorage.getItem('user-account')) : null

const initialState = {
    user: { getUserInfoFromStorage },
    post: undefined
}

const persistConfig = {
    key: "root",
    storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    preloadedState: initialState
})

export const persistor = persistStore(store)