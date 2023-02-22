import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
    posts: [{
        id: uuidv4(),
        img: "https://kinsta.com/es/wp-content/uploads/sites/8/2020/10/tipos-de-archivos-de-imagen.png",
        title: "Title",
        description: "Description",
    }, ],
};

const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        addPost: (state, action) => {
            state.posts.push({...action.payload, id: uuidv4() });
        },
        delPost: (state, action) => {
            state.posts = state.posts.filter((post) => post.id !== action.payload);
        },
        putPost: (state, action) => {
            state.posts = state.posts.map((post) =>
                post.id === action.payload.id ? action.payload : post
            );
        },
    },
});

export const { addPost, delPost, putPost } = postSlice.actions;

export default postSlice.reducer;