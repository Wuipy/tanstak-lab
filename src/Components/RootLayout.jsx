import NavBar from "./NavBar"
import { Outlet } from "@tanstack/react-router"

const RootLayout = () => {
    return (
        <div>
            <NavBar />
            <div className="container mx-auto px-4 py-8">
                {/* Outlet for nested routes */}
                <Outlet />
            </div>
        </div>
    )
}

export default RootLayout;