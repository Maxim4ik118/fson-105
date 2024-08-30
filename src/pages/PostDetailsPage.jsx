import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";

import Loader from "../components/Loader/Loader";
import {
  selectPostsError,
  selectPostsIsLoading,
  selectPostsPostDetails,
} from "../redux/posts/posts.selectors";
import { apiGetPostDetails } from "../redux/posts/posts.operations";

const PostDetailsPage = () => {
  const { postId } = useParams();
  const dispatch = useDispatch();
  const location = useLocation();

  const postDetails = useSelector(selectPostsPostDetails);
  const isLoading = useSelector(selectPostsIsLoading);
  const error = useSelector(selectPostsError);

  const backLinkRef = useRef(location.state?.from ?? "/posts");

  useEffect(() => {
    if (!postId) return;

    dispatch(apiGetPostDetails(postId));
  }, [postId, dispatch]);

  return (
    <div>
      <Link to={backLinkRef.current}>⬅ Go back</Link>
      <br />
      Post Details. ID: {postId}
      {postDetails !== null && (
        <div>
          <h1>{postDetails.title}</h1>
          <p>{postDetails.body}</p>
        </div>
      )}
      <div>
        <NavLink to="comments">Comments</NavLink>
        <NavLink to="reviews">Reviews</NavLink>
      </div>
      <div>
        <Outlet />
      </div>
      {isLoading && <Loader />}
      {error !== null && (
        <p style={{ color: "red" }}>{error}. Please, try again later.</p>
      )}
    </div>
  );
};

export default PostDetailsPage;
