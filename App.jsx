import { useState, useRef  } from 'react'
import './App.css'
import Home from './Components/Home'

function App() {

    const emailRef = useRef()
    const passwordRef = useRef('')
    const [error, setError] = useState('')
    const [user, setUser] = useState(null)
    

const login = (email, password) => {
  // Fake login check
  if (email === "admin" && password === "1234") {        
    return true;
  }
  return false;
};


const handleLogin = () => {
   const email = emailRef.current.value;
   const password = passwordRef.current.value;
   const isSuccess = login(email, password);
   if(!isSuccess)   
   {
      setError("Credenciales incorrectas");
   }
   else
   {
     setUser({email})
   }
}

  return (
    <>

           <h2>Login</h2>
        
            {
              !user ?      
              (<div>
                <input 
                type="email"
                placeholder='Correo'
                ref={emailRef}
                />
                <br/>
                <input
                type="password"
                placeholder='Contraseña'
                ref={passwordRef}
                />
                <br/>
                <button onClick={handleLogin}>Ingresar</button>
                { error && <p style={{ color: "red" }}>{error}</p> }
              </div>) : 
              (
                <Home email={user.email} />
              )
          }
        

                
    </>
  )
}

export default App


