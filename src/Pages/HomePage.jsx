import Welcome from "../Components/Welcome";
import Login from "../Components/Login";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext.jsx";

const HomePage = () => {

  const { user } = useContext(AuthContext)

  return (
    <>
        { user ? <Welcome userName={user} /> : <Login/>}       
    </>
  );
}

export default HomePage;