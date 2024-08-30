import { useEffect } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";

import Loader from "../components/Loader/Loader";
import SearchPostsForm from "../components/SearchPostsForm/SearchPostsForm";

import { useDispatch, useSelector } from "react-redux";
import {
  selectPosts,
  selectPostsError,
  selectPostsIsLoading,
} from "../redux/posts/posts.selectors";
import { apiGetPosts, apiGetPostsByQuery } from "../redux/posts/posts.operations";

const PostsPage = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const posts = useSelector(selectPosts);
  const isLoading = useSelector(selectPostsIsLoading);
  const error = useSelector(selectPostsError);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("query");

  useEffect(() => {
    if (query) {
      dispatch(apiGetPostsByQuery(query));
    } else {
      dispatch(apiGetPosts())
    }
  }, [query, dispatch]);

  const onSearch = (searchTerm) => {
    setSearchParams({
      query: searchTerm,
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
            <Link
              state={{ from: location }}
              to={`/posts/${post.id}`}
              key={post.id}
            >
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
