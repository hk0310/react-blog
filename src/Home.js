import { useState } from "react";

export default function Home() {
  const [posts, setPosts] = useState([
    { id: 1, title: "First post", content: "lorem ipsum", author: "Khai" },
    { id: 2, title: "Second post", content: "lorem ipsum", author: "Darrow" },
    { id: 3, title: "Third post", content: "lorem ipsum", author: "Sevro" },
  ]);

  return (
    <div className="home">
      {posts.map((post) => (
        <div className="blog-preview" key={post.id}>
          <h2>{post.title}</h2>
          <p>By {post.author}</p>
        </div>
      ))}
    </div>
  );
}
