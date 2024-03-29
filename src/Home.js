import PostList from "./PostList";
import useFetch from "./useFetch";

export default function Home() {
  const {
    data: posts,
    isPending,
    error,
  } = useFetch("http://localhost:8000/posts");

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading post data...</div>}
      {posts && <PostList posts={posts} title="All Blogs" />}
    </div>
  );
}
