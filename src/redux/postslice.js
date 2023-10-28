import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
    },
    reducers: {
        addPost: (state, action) => {
            state.posts.push(action.payload)
        },
        removePost: (state,action) => {
            state.posts = state.posts.filter(e => e.id != action.payload.id)
        }
    },
});

export const { addPost ,removePost} = postSlice.actions;

export default postSlice.reducer;
