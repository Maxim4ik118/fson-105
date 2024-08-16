import { useEffect, useRef, useState } from "react";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";
import { requestSinglePostData } from "../services/api";
import Loader from "../components/Loader/Loader";

const PostDetailsPage = () => {
  const { postId } = useParams();
  const [postDetails, setPostDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();

  const backLinkRef = useRef(location.state?.from ?? "/posts");

  useEffect(() => {
    const fetchPostDetails = async () => {
      try {
        setIsLoading(true);
        const data = await requestSinglePostData(postId);
        setPostDetails(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPostDetails();
  }, [postId]);

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
