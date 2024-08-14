import { useParams } from "react-router-dom";

const PostComments = () => {
  const { postId } = useParams();
  return <div>PostComments. ID: {postId}.</div>;
};

export default PostComments;
