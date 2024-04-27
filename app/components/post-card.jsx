export function PostCard({ post }) {
  const { title, content } = post;

  return (
    <div className="border">
      <h1>{title}</h1>
      <p>{content}</p>
      <button>delete</button>
    </div>
  );
}
