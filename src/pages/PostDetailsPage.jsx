import { useEffect, useState } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { requestSinglePostData } from "../services/api";
import Loader from "../components/Loader/Loader";

const PostDetailsPage = () => {
  const { postId } = useParams();
  const [postDetails, setPostDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null); // "Omg... Some error occured!"

  useEffect(() => {
    const fetchPostDetails = async () => {
      try {
        setIsLoading(true);
        const data = await requestSinglePostData(postId);
        console.log("data: ", data);
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
