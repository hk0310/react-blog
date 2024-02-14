import PostList from "./PostList";
import useFetch from "./useFetch";

export default function Home() {
  const {
    data: posts,
    isPending,
    error,
  } = useFetch("http://localhost:8000/posts");

  function handleDelete(postId) {
    const newPosts = posts.filter((post) => post.id !== postId);
  }

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {posts && (
        <PostList posts={posts} title="All Blogs" handleDelete={handleDelete} />
      )}
    </div>
  );
}
