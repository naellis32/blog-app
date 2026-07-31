import { Link } from "react-router";
import { useAuth } from "../context/AuthContext";
import posts from "../data/posts";

export default function HomePage() {
  const { isAuthenticated, user } = useAuth();

  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--accent)" }}>
        A small, honest blog
      </p>

      <h1 className="font-display mt-3 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
        Marginalia
      </h1>

      <p className="mt-5 max-w-xl text-lg leading-relaxed" style={{ color: "var(--ink-soft)" }}>
        {isAuthenticated
          ? `Welcome back, ${user.username}. Notes from working through a React project — in the order things actually got figured out, not the order they'd be explained in a tutorial.`
          : "Notes from working through a React project, written as things actually got figured out — not the order they'd be explained in a tutorial. Log in to join the conversation in the comments."}
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          to="/blog"
          className="rounded-lg px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          style={{ backgroundColor: "var(--accent)" }}
        >
          Explore Blog
        </Link>

        {!isAuthenticated && (
          <Link
            to="/login"
            className="rounded-lg border px-5 py-2.5 text-sm font-semibold transition-colors"
            style={{ borderColor: "var(--line)", color: "var(--ink)" }}
          >
            Log in
          </Link>
        )}
      </div>

      <div className="mt-16 border-t pt-10" style={{ borderColor: "var(--line)" }}>
        <h2 className="font-display text-xl font-semibold">Latest posts</h2>
        <div className="mt-5 flex flex-col gap-4">
          {posts.slice(0, 3).map((post) => (
            <Link
              key={post.id}
              to={`/post/${post.slug}`}
              className="group flex items-baseline justify-between gap-4 border-b pb-4 last:border-b-0"
              style={{ borderColor: "var(--line)" }}
            >
              <span className="font-medium transition-colors group-hover:opacity-80">
                {post.title}
              </span>
              <span className="shrink-0 text-xs" style={{ color: "var(--ink-soft)" }}>
                {post.date}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
