import { useState } from "react";
import { client } from "../Services/AuthService";

const AdminPage = () => {
  const [message, setMessage] = useState("");

  const testAdminEndpoint = async () => {
    try {
      const response = await client.get("/admin");
      setMessage(response.data);
    } catch {
      setMessage("Error al llamar al endpoint /admin del Backend.");
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Panel de administrador</h1>
      <p className="mb-4 text-gray-600">
        Solo usuarios con rol admin pueden ver esta página.
      </p>
      <button
        onClick={testAdminEndpoint}
        className="py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded"
      >
        Probar petición GET /admin
      </button>
      {message && <p className="mt-4 text-green-700">{message}</p>}
    </div>
  );
};

export default AdminPage;
