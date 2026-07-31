import { useState } from "react";
import { Link, useParams } from "react-router";
import posts from "../data/posts";
import CommentForm from "../components/CommentForm";
import { useAuth } from "../context/AuthContext";

export default function IndividualPostPage() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);
  const { isAuthenticated } = useAuth();

  const [comments, setComments] = useState([]);

  if (!post) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-16 text-center">
        <h1 className="font-display text-2xl font-semibold">Post not found</h1>
        <p className="mt-2" style={{ color: "var(--ink-soft)" }}>
          That post doesn't exist — it may have been moved or removed.
        </p>
        <Link to="/" className="mt-4 inline-block font-semibold" style={{ color: "var(--accent)" }}>
          ← Back to all posts
        </Link>
      </div>
    );
  }

  const handleAddComment = (newComment) => {
    setComments((prev) => [...prev, newComment]);
  };

  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <Link to="/" className="text-sm font-semibold" style={{ color: "var(--accent)" }}>
        ← All posts
      </Link>

      <article className="mt-6">
        <h1 className="font-display text-4xl font-semibold tracking-tight">
          {post.title}
        </h1>
        <p className="mt-3 text-sm" style={{ color: "var(--ink-soft)" }}>
          By {post.author} · {post.date}
        </p>

        <div className="mt-8 space-y-4 leading-relaxed">
          {post.content.map((paragraph, i) => (
            <p key={i} style={{ color: "var(--ink)" }}>
              {paragraph}
            </p>
          ))}
        </div>
      </article>

      <section className="mt-14">
        <h2 className="font-display text-2xl font-semibold">
          Comments {comments.length > 0 && `(${comments.length})`}
        </h2>

        <div className="mt-5 space-y-4">
          {comments.length === 0 ? (
            <p
              className="rounded-lg border border-dashed px-4 py-6 text-center text-sm"
              style={{ borderColor: "var(--line)", color: "var(--ink-soft)" }}
            >
              No comments yet. Be the first to comment!
            </p>
          ) : (
            comments.map((c, i) => (
              <div
                key={i}
                className="rounded-lg border p-4"
                style={{ borderColor: "var(--line)", backgroundColor: "var(--paper-raised)" }}
              >
                <p className="text-sm font-semibold">{c.name}</p>
                <p className="mt-1 text-sm" style={{ color: "var(--ink-soft)" }}>
                  {c.comment}
                </p>
              </div>
            ))
          )}
        </div>

        <div className="mt-6">
          {isAuthenticated ? (
            <CommentForm onAddComment={handleAddComment} />
          ) : (
            <div
              className="rounded-xl border p-5 text-center text-sm"
              style={{ borderColor: "var(--line)", backgroundColor: "var(--paper-raised)", color: "var(--ink-soft)" }}
            >
              <Link to="/login" state={{ from: `/post/${slug}` }} className="font-semibold" style={{ color: "var(--accent)" }}>
                Log in
              </Link>{" "}
              to leave a comment.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
