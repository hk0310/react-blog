import { useState } from "react";
import { useHistory } from "react-router-dom/";

export default function Create() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Khai");
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    const post = { title, body, author };

    setIsPending(true);

    fetch("http://localhost:8000/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post),
    }).then(() => {
      setIsPending(false);
      history.push("/");
    });
  }

  return (
    <div className="create">
      <h2>Add a New Post</h2>
      <form onSubmit={handleSubmit}>
        <label>Post title: </label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Content: </label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        ></textarea>

        <label>Author: </label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="Khai">Khai</option>
          <option value="Darrow">Darrow</option>
        </select>

        {!isPending && <button>Post</button>}
        {isPending && <button disabled>Posting...</button>}
      </form>
    </div>
  );
}
