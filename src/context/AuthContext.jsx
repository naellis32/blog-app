import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

function getInitialUser() {
  const saved = localStorage.getItem("auth-user");
  return saved ? JSON.parse(saved) : null;
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(getInitialUser);

  useEffect(() => {
    if (user) {
      localStorage.setItem("auth-user", JSON.stringify(user));
    } else {
      localStorage.removeItem("auth-user");
    }
  }, [user]);

  // Demo-only auth: any non-empty username/password combination succeeds.
  // There's no backend here, so this just simulates a real login flow.
  const login = (username, password) => {
    if (!username.trim() || !password.trim()) {
      return { success: false, error: "Username and password are required." };
    }
    if (password.trim().length < 4) {
      return { success: false, error: "Password must be at least 4 characters." };
    }

    setUser({ username: username.trim() });
    return { success: true };
  };

  const logout = () => {
    setUser(null);
  };

  const value = {
    user,
    isAuthenticated: Boolean(user),
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
