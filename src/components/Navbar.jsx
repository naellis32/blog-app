import { Link, useLocation, useNavigate } from "react-router";
import { useTheme } from "../context/ThemeContext";
import { useAuth } from "../context/AuthContext";

function NavLink({ to, children }) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className="relative px-1 py-2 text-sm font-medium transition-colors"
      style={{ color: isActive ? "var(--accent)" : "var(--ink-soft)" }}
    >
      {children}
      {isActive && (
        <span
          className="absolute -bottom-[1px] left-0 right-0 h-[2px] rounded-full"
          style={{ backgroundColor: "var(--accent)" }}
        />
      )}
    </Link>
  );
}

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header
      className="sticky top-0 z-10 border-b backdrop-blur"
      style={{
        borderColor: "var(--line)",
        backgroundColor: "color-mix(in srgb, var(--paper) 85%, transparent)",
      }}
    >
      <nav className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-4 px-6 py-4">
        <Link
          to="/"
          className="font-display text-xl font-semibold tracking-tight"
        >
          Marginalia
        </Link>

        <div className="flex flex-wrap items-center gap-6">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/blog">Blog Posts</NavLink>
          <NavLink to="/contact">Contact</NavLink>

          {isAuthenticated ? (
            <div className="flex items-center gap-3">
              <span className="text-sm" style={{ color: "var(--ink-soft)" }}>
                {user.username}
              </span>
              <button
                onClick={handleLogout}
                className="rounded-lg border px-3 py-1.5 text-sm font-semibold transition-colors"
                style={{ borderColor: "var(--line)", color: "var(--ink)" }}
              >
                Log out
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="rounded-lg px-3 py-1.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "var(--accent)" }}
            >
              Login
            </Link>
          )}

          <button
            onClick={toggleTheme}
            aria-label="Toggle dark and light theme"
            className="flex h-8 w-8 items-center justify-center rounded-full border text-sm transition-transform hover:scale-105"
            style={{ borderColor: "var(--line)", color: "var(--ink)" }}
          >
            {theme === "dark" ? "☀" : "☾"}
          </button>
        </div>
      </nav>
    </header>
  );
}
