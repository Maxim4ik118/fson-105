import { useEffect, useState } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";

import Loader from "../components/Loader/Loader";
import SearchPostsForm from "../components/SearchPostsForm/SearchPostsForm";

import { requestAllPosts, requestPostsBySearchValue } from "../services/api";

const PostsPage = () => {
  const [posts, setPosts] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null); 
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  console.log(location);

  const query = searchParams.get("query");

  useEffect(() => {
    const fetchPostsBySearchValue = async () => {
      try {
        setIsLoading(true);
        if (query) {
          const data = await requestPostsBySearchValue(query);
          setPosts(data.posts);
        } else {
          const data = await requestAllPosts();
          setPosts(data.posts);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPostsBySearchValue();
  }, [query]);

  const onSearch = (searchTerm) => {
    setSearchParams({
      "query": searchTerm,
    });
  };

  return (
    <div>
      <SearchPostsForm defaultSearchValue={query} onSearch={onSearch} />

      {query !== null && <p>Search value: {query}</p>}

      {isLoading && <Loader />}
      {error !== null && (
        <p style={{ color: "red" }}>{error}. Please, try again later.</p>
      )}
      {Array.isArray(posts) &&
        posts.map((post) => {
          return (
            <Link state={{ from: location }} to={`/posts/${post.id}`} key={post.id}>
              <h3>Title: {post.title}</h3>
              <p>Body: {post.body}</p>
              <p>Reviews: {JSON.stringify(post.reactions)}</p>
              <p>Tags: {post.tags.join(", ")}</p>
            </Link>
          );
        })}
      {Array.isArray(posts) && posts.length === 0 && (
        <p>
          За вашим запитом &quot;{query}&quot; не знайдено жодного поста.
          Спробуйте, будь ласка, з іншим ключовим словом.
        </p>
      )}
    </div>
  );
};

export default PostsPage;
