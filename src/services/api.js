import axios from "axios";

export const requestAllPosts = async () => {
  const { data } = await axios.get("https://dummyjson.com/posts");
  return data;
};

export const requestSinglePostData = async (postId) => {
  const { data } = await axios.get(`https://dummyjson.com/posts/${postId}`);
  return data;
};

export const requestPostsBySearchValue = async (searchValue) => {
  const { data } = await axios.get(
    `https://dummyjson.com/posts/search?q=${searchValue}`
  );
  return data;
};
