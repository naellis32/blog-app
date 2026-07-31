import { Link } from "react-router";
import posts from "../data/posts";

export default function BlogPostsPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--accent)" }}>
        Field notes
      </p>
      <h1 className="font-display mt-2 text-4xl font-semibold tracking-tight">
        Blog Posts
      </h1>
      <p className="mt-3 max-w-xl" style={{ color: "var(--ink-soft)" }}>
        Short write-ups from working through a React project, in the order I actually learned them.
      </p>

      <div className="mt-10 flex flex-col">
        {posts.map((post, index) => (
          <Link
            key={post.id}
            to={`/post/${post.slug}`}
            className="group flex gap-6 border-t py-6 first:border-t-0 md:py-8"
            style={{ borderColor: "var(--line)" }}
          >
            <span
              className="font-display hidden shrink-0 text-sm md:block"
              style={{ color: "var(--ink-soft)" }}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <p className="text-xs font-medium" style={{ color: "var(--ink-soft)" }}>
                {post.date} · {post.author}
              </p>
              <h2 className="font-display mt-1 text-2xl font-semibold transition-colors group-hover:opacity-80">
                {post.title}
              </h2>
              <p className="mt-2 max-w-xl" style={{ color: "var(--ink-soft)" }}>
                {post.excerpt}
              </p>
              <span
                className="mt-3 inline-block text-sm font-semibold"
                style={{ color: "var(--accent)" }}
              >
                Read post →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
