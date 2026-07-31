import { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router";
import { useAuth } from "../context/AuthContext";

export default function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const redirectTo = location.state?.from || "/blog";

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = login(username, password);

    if (!result.success) {
      setError(result.error);
      return;
    }

    setError("");
    navigate(redirectTo, { replace: true });
  };

  return (
    <div className="mx-auto flex min-h-[70vh] max-w-md flex-col justify-center px-6 py-12">
      <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--accent)" }}>
        Welcome back
      </p>
      <h1 className="font-display mt-2 text-3xl font-semibold tracking-tight">
        Log in
      </h1>
      <p className="mt-2 text-sm" style={{ color: "var(--ink-soft)" }}>
        Log in to leave comments on posts. Any username and a password of 4+ characters will work — this is a demo, not a real account system.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-8 rounded-xl border p-6"
        style={{ borderColor: "var(--line)", backgroundColor: "var(--paper-raised)" }}
      >
        <div className="space-y-4">
          <div>
            <label htmlFor="username" className="mb-1 block text-xs font-medium" style={{ color: "var(--ink-soft)" }}>
              Username
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full rounded-lg border px-3 py-2 text-sm outline-none"
              style={{ borderColor: "var(--line)", backgroundColor: "var(--paper)", color: "var(--ink)" }}
            />
          </div>

          <div>
            <label htmlFor="password" className="mb-1 block text-xs font-medium" style={{ color: "var(--ink-soft)" }}>
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg border px-3 py-2 text-sm outline-none"
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
            className="w-full rounded-lg px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: "var(--accent)" }}
          >
            Log in
          </button>
        </div>
      </form>

      <p className="mt-4 text-center text-sm" style={{ color: "var(--ink-soft)" }}>
        <Link to="/" className="font-semibold" style={{ color: "var(--accent)" }}>
          ← Back to home
        </Link>
      </p>
    </div>
  );
}
