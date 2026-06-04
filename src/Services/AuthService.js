import axios from "axios";
import { jwtDecode } from "jwt-decode";

// Producción (Netlify): /api → proxy a http://lab5progra4.runasp.net
// Desarrollo local: http://localhost:5219
export const API_BASE_URL =
  import.meta.env.VITE_API_URL ||
  (import.meta.env.DEV ? "http://localhost:5219" : "/api");

export const client = axios.create({
  baseURL: API_BASE_URL,
});

export async function login({ email, password }) {
  const response = await client.post("/login", { email, password });
  return response.data.token;
}

export function decodeToken(token) {
  return jwtDecode(token);
}

const ROLE_CLAIM =
  "http://schemas.microsoft.com/ws/2008/06/identity/claims/role";
const EMAIL_CLAIM =
  "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress";
const ID_CLAIM =
  "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier";

export function getUserFromDecodedToken(decoded) {
  return {
    id: decoded[ID_CLAIM] ?? decoded.sub,
    email: decoded[EMAIL_CLAIM] ?? decoded.email,
    role: decoded.role ?? decoded[ROLE_CLAIM],
  };
}
