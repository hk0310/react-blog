import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom/";

export default function BlogDetails() {
  const { id } = useParams();
  const {
    data: post,
    error,
    isPending,
  } = useFetch("http://localhost:8000/posts/" + id);
  const history = useHistory();

  function handleClick() {
    fetch("http://localhost:8000/posts/" + id, {
      method: "DELETE",
    }).then(() => history.push("/"));
  }

  return (
    <div className="post-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {post && (
        <article>
          <h2>{post.title}</h2>
          <p>By {post.author}</p>
          <div>{post.body}</div>
          <button onClick={handleClick}>Delete</button>
        </article>
      )}
    </div>
  );
}
