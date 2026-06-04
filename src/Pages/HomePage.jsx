import { useContext } from "react";
import { Link } from "@tanstack/react-router";
import Welcome from "../Components/Welcome";
import { AuthContext } from "../Context/AuthContext.jsx";

const HomePage = () => {
  const { user, isAuthenticated } = useContext(AuthContext);

  return (
    <>
      {isAuthenticated ? (
        <Welcome userName={user?.email} />
      ) : (
        <div className="p-4">
          <p className="text-gray-700">
            Bienvenido.{" "}
            <Link to="/login" className="text-blue-600 hover:underline">
              Iniciar sesión
            </Link>
          </p>
        </div>
      )}
    </>
  );
};

export default HomePage;
