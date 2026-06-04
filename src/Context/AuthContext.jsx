import { createContext, useState, useEffect } from "react";
import { useLogin } from "../Hooks/useLogin";
import {
  decodeToken,
  client,
  getUserFromDecodedToken,
} from "../Services/AuthService";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  const {
    mutateAsync: loginMutation,
    isPending: loginLoading,
    error: loginError,
  } = useLogin();

  const applyToken = (authToken) => {
    const decoded = decodeToken(authToken);
    const userData = getUserFromDecodedToken(decoded);
    client.defaults.headers.common["Authorization"] = `Bearer ${authToken}`;
    setToken(authToken);
    setUser(userData);
    return decoded;
  };

  const login = async (credentials) => {
    const authToken = await loginMutation(credentials);
    localStorage.setItem("authToken", authToken);
    return applyToken(authToken);
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    delete client.defaults.headers.common["Authorization"];
    setUser(null);
    setToken(null);
  };

  useEffect(() => {
    const stored = localStorage.getItem("authToken");
    if (stored) {
      try {
        applyToken(stored);
      } catch {
        localStorage.removeItem("authToken");
      }
    }
  }, []);

  const isAuthenticated = !!token;
  const isAdmin = user?.role === "admin";

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        login,
        logout,
        loginLoading,
        loginError,
        isAuthenticated,
        isAdmin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
