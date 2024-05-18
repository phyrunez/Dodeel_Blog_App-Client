import { createSlice } from "@reduxjs/toolkit";

const postInitialState = { postDetails: null }

const postSlice = createSlice({
    name: "post",
    initialState: postInitialState,
    reducers: {
        setPostDetails(state, action) {
            state.postDetails = action.payload
        }
    }
})

const postActions = postSlice.actions;
const postReducer = postSlice.reducer

export { postActions, postReducer };