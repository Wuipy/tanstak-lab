
import { useState, useRef  } from 'react'
import { useLogin } from '../Hooks/useLogin'
import { AuthContext } from '../Context/AuthContext'
import { useContext } from 'react'

export default function Login() {

    // 3. Consumir el contexto
    const { setUser } = useContext(AuthContext)
    
    const emailRef = useRef()
    const passwordRef = useRef()
    const [error, setError] = useState('')
    
    
    const { login } = useLogin()
    
   

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
            setUser(email)        
        }
    }


    return (
        <>        
            <div className="max-w-sm mx-auto mt-10 p-6 bg-gray-50 rounded-lg shadow">
                <input
                    type="email"
                    placeholder="Correo"
                    ref={emailRef}
                    className="w-full px-3 py-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <br />
                <input
                    type="password"
                    placeholder="Contraseña"
                    ref={passwordRef}
                    className="w-full px-3 py-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <br />
                <button
                    onClick={handleLogin}
                    className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                >
                    Ingresar
                </button>
                {error && (
                    <p className="mt-2 text-sm text-red-600">
                    {error}
                    </p>
                )}
                </div>
      
        </>
    )
}