import { useParams } from "react-router-dom";

const PostReviews = () => {
  const { postId } = useParams();
  return <div>PostReviews. ID: {postId}</div>;
};

export default PostReviews;
