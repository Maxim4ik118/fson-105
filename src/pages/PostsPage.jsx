import { useEffect, useState } from "react";

import Loader from "../components/Loader/Loader";
import { requestAllPosts, requestPostsBySearchValue } from "../services/api";
import SearchPostsForm from "../components/SearchPostsForm/SearchPostsForm";
import { Link } from "react-router-dom";

const PostsPage = () => {
  const [posts, setPosts] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null); // "Omg... Some error occured!"
  const [searchValue, setSearchValue] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsLoading(true);
        const data = await requestAllPosts();
        setPosts(data.posts);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    if (searchValue === null) return;

    const fetchPostsBySearchValue = async () => {
      try {
        setIsLoading(true);
        const data = await requestPostsBySearchValue(searchValue);
        setPosts(data.posts);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPostsBySearchValue();
  }, [searchValue]);

  const onSearch = (searchTerm) => {
    setSearchValue(searchTerm);
  };

  return (
    <div>
      <SearchPostsForm onSearch={onSearch} />

      {searchValue !== null && <p>Search value: {searchValue}</p>}

      {isLoading && <Loader />}
      {error !== null && (
        <p style={{ color: "red" }}>{error}. Please, try again later.</p>
      )}
      {Array.isArray(posts) &&
        posts.map((post) => {
          return (
            <Link to={`/posts/${post.id}`} key={post.id}>
              <h3>Title: {post.title}</h3>
              <p>Body: {post.body}</p>
              <p>Reviews: {JSON.stringify(post.reactions)}</p>
              <p>Tags: {post.tags.join(", ")}</p>
            </Link>
          );
        })}
      {Array.isArray(posts) && posts.length === 0 && (
        <p>
          За вашим запитом &quot;{searchValue}&quot; не знайдено жодного поста.
          Спробуйте, будь ласка, з іншим ключовим словом.
        </p>
      )}
    </div>
  );
};

export default PostsPage;
