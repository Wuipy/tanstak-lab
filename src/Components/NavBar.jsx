
import { Link } from "@tanstack/react-router"

const NavBar = () => {
    return (
        <nav className="bg-gray-800 text-white px-6 py-4 flex justify-between items-center shadow">
            <Link to="/" className="text-lg font-medium hover:text-gray-300">
            Home
            </Link>
            <Link to="/login" className="text-lg font-medium hover:text-gray-300">
            Login
            </Link>
            <Link to="/users" className="text-lg font-medium hover:text-gray-300">
            Users
            </Link>
        </nav>
    )
}

export default NavBar;