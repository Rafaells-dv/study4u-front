import React, {createContext, useState, useEffect} from "react";

export const AuthContext = createContext()

function AuthProvider({children}) {
    const [auth, setAuth] = useState(() => JSON.parse(localStorage.getItem('token')) || false)

    useEffect(() => {
        localStorage.setItem('token', JSON.stringify(auth))
    }, [auth])

    return (
        <AuthContext.Provider value={{auth, setAuth}}>
           {children}
        </AuthContext.Provider >
    )
}

export default AuthProvider;
