import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="not-found">
      <h2>Sorry</h2>
      <p>The requested page does not exist :(</p>
      <Link to="/">Home</Link>
    </div>
  );
}
