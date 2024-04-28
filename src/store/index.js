import { configureStore } from '@reduxjs/toolkit'

import { userReducer } from './reducers/userReducer'

const getUserInfoFromStorage = localStorage.getItem('user-account') ? JSON.parse(localStorage.getItem('user-account')) : null

const initialState = {
    user: { getUserInfoFromStorage }
}

const store = configureStore({
    reducer: {
        user: userReducer
    },
    preloadedState: initialState
})

export default store;