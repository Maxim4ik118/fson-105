import { createSlice } from "@reduxjs/toolkit";
import { apiGetPostDetails, apiGetPosts, apiGetPostsByQuery } from "./posts.operations";

const INITIAL_STATE = {
  isLoading: false,
  error: null,
  postDetails: null,
  posts: [],
};

const postsSlice = createSlice({
  name: "posts",
  initialState: INITIAL_STATE,
  extraReducers: (builder) =>
    builder
      .addCase(apiGetPostDetails.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(apiGetPostDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.postDetails = action.payload;
      })
      .addCase(apiGetPostDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(apiGetPostsByQuery.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(apiGetPostsByQuery.fulfilled, (state, action) => {
        state.isLoading = false;
        state.posts = action.payload;
      })
      .addCase(apiGetPostsByQuery.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      
      .addCase(apiGetPosts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(apiGetPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.posts = action.payload;
      })
      .addCase(apiGetPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      ,
});

export const postsReducer = postsSlice.reducer;
