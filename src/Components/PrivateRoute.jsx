import { useContext } from "react";
import { Navigate, Outlet } from "@tanstack/react-router";
import { AuthContext } from "../Context/AuthContext";

export default function PrivateRoute() {
  const { isAuthenticated } = useContext(AuthContext);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
}
