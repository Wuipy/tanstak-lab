import { useContext } from "react";
import { Navigate, Outlet } from "@tanstack/react-router";
import { AuthContext } from "../Context/AuthContext";

export default function AdminRoute() {
  const { isAuthenticated, isAdmin } = useContext(AuthContext);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (!isAdmin) {
    return (
      <div className="max-w-md mx-auto mt-10 p-6 bg-red-50 border border-red-200 rounded-lg">
        <h2 className="text-lg font-semibold text-red-700">Acceso denegado</h2>
        <p className="mt-2 text-red-600">
          No tienes permisos de administrador para ver esta página.
        </p>
      </div>
    );
  }

  return <Outlet />;
}
