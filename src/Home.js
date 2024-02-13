import { useState, useEffect } from "react";
import PostList from "./PostList";

export default function Home() {
  const [posts, setPosts] = useState([
    { id: 1, title: "First post", content: "lorem ipsum", author: "Khai" },
    { id: 2, title: "Second post", content: "lorem ipsum", author: "Darrow" },
    { id: 3, title: "Third post", content: "lorem ipsum", author: "Sevro" },
  ]);

  function handleDelete(postId) {
    const newPosts = posts.filter((post) => post.id !== postId);
    setPosts(newPosts);
  }

  return (
    <div className="home">
      <PostList posts={posts} title="All Blogs" handleDelete={handleDelete} />
    </div>
  );
}
