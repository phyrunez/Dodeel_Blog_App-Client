import { createSlice } from "@reduxjs/toolkit";

const userInitialState = {
    userInfo: null,
    allUsers: []
}

const userSlice = createSlice({
    name: "user",
    initialState: userInitialState,
    reducers: {
        addUser: (state, action) => {
            if(Array.isArray(state.allUsers)) {
                return {
                    ...state,
                    allUsers: [...state.allUsers, action.payload]
                }
            }
        },
        setUserInfo(state, action) {
            state.userInfo = action.payload
        },
        resetUserInfo(state, action) {
            state.userInfo = null
        }
    }
})

const userActions = userSlice.actions
const userReducer = userSlice.reducer

export { userActions, userReducer };