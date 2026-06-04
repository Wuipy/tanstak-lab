import UsersList from "../Components/UsersList";
import Login from "../Components/Login";
import AddUserButton from "../Components/AddUserButton";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext.jsx";

const UsersPage = () => {
    const queryClient = new QueryClient();
      
    const { user } = useContext(AuthContext)

    return (
        <QueryClientProvider client={queryClient}>
            { user ?             
             <div className="p-4">
                <AddUserButton/>                
                <UsersList />
            </div>
             : <Login/>
            }
        </QueryClientProvider>
    );
}

export default UsersPage;