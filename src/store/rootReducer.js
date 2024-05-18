import { combineReducers } from "@reduxjs/toolkit";

import { userReducer } from './reducers/userReducer'
import { postReducer } from './reducers/postReducer'

export const rootReducer = combineReducers({
    user: userReducer,
    post: postReducer
})