export default function PostList({ posts, title, handleDelete }) {
  return (
    <div className="post-list">
      <h2>{title}</h2>
      {posts.map((post) => (
        <div className="post-preview" key={post.id}>
          <h2>{post.title}</h2>
          <p>By {post.author}</p>
          <button onClick={() => handleDelete(post.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
