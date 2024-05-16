import React, {createContext, useContext, useEffect, useState} from "react";
import { UserContext } from "./UserContext";

export const AuthContext = createContext()

function AuthProvider({children}) {

    const [auth, setAuth] = useState(false);

    const {user} = useContext(UserContext);

    useEffect(()=>{
        if (user.token != null) {
            setAuth(true)
        } else {
            setAuth(false)
        }
    } , [user])

    return (
        <AuthContext.Provider value={{auth, setAuth}}>
           {children}
        </AuthContext.Provider >
    )
}

export default AuthProvider;
