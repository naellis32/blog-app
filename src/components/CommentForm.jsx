import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function CommentForm({ onAddComment }) {
  const { user } = useAuth();
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!comment.trim()) {
      setError("Please write a comment before submitting.");
      return;
    }

    onAddComment({ name: user.username, comment: comment.trim() });
    setComment("");
    setError("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl border p-5"
      style={{ borderColor: "var(--line)", backgroundColor: "var(--paper-raised)" }}
    >
      <h3 className="font-display text-lg font-semibold">Leave a comment</h3>
      <p className="mt-1 text-xs" style={{ color: "var(--ink-soft)" }}>
        Commenting as <span className="font-semibold">{user.username}</span>
      </p>

      <div className="mt-4 space-y-3">
        <div>
          <label htmlFor="comment-text" className="mb-1 block text-xs font-medium" style={{ color: "var(--ink-soft)" }}>
            Comment
          </label>
          <textarea
            id="comment-text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Share your thoughts..."
            rows={3}
            className="w-full resize-none rounded-lg border px-3 py-2 text-sm outline-none"
            style={{ borderColor: "var(--line)", backgroundColor: "var(--paper)", color: "var(--ink)" }}
          />
        </div>

        {error && (
          <p className="text-xs" style={{ color: "#c0392b" }}>
            {error}
          </p>
        )}

        <button
          type="submit"
          className="rounded-lg px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          style={{ backgroundColor: "var(--accent)" }}
        >
          Submit comment
        </button>
      </div>
    </form>
  );
}
