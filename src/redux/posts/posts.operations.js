import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const apiGetPostDetails = createAsyncThunk(
  "posts/getPostDetails",
  async (postId, thunkApi) => {
    try {
      const { data } = await axios.get(`https://dummyjson.com/posts/${postId}`);

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const apiGetPostsByQuery = createAsyncThunk(
  "posts/getAllByQuery",
  async (query, thunkApi) => {
    try {
      const { data } = await axios.get(
        `https://dummyjson.com/posts/search?q=${query}`
      );
      
      return data.posts;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const apiGetPosts = createAsyncThunk(
  "posts/getAll",
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get("https://dummyjson.com/posts");
      
      return data.posts;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
