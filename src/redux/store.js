import { configureStore } from "@reduxjs/toolkit";
import postslice from "./postslice";
export const store = configureStore({
    reducer: {
        posts: postslice,
    },
});