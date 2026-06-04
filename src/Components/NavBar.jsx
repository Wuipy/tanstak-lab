import { Link, useNavigate } from "@tanstack/react-router";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

const NavBar = () => {
  const { isAuthenticated, isAdmin, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate({ to: "/login" });
  };

  return (
    <nav className="bg-gray-800 text-white px-6 py-4 flex justify-between items-center shadow">
      <Link to="/" className="text-lg font-medium hover:text-gray-300">
        Home
      </Link>
      <div className="flex gap-6 items-center">
        {!isAuthenticated && (
          <Link to="/login" className="text-lg font-medium hover:text-gray-300">
            Login
          </Link>
        )}
        {isAuthenticated && (
          <Link to="/users" className="text-lg font-medium hover:text-gray-300">
            Users
          </Link>
        )}
        {isAdmin && (
          <Link to="/admin" className="text-lg font-medium hover:text-gray-300">
            Admin
          </Link>
        )}
        {isAuthenticated && (
          <button
            onClick={handleLogout}
            className="text-lg font-medium hover:text-gray-300"
          >
            Cerrar sesión
          </button>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
