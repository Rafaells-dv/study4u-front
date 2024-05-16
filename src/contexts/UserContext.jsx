import React, {createContext, useState} from "react";

export const UserContext = createContext()

function UserProvider({children}) {

    const [user, setUser] = useState({
        "id": localStorage.getItem("id"),
        "token": localStorage.getItem("token"),
        "name": localStorage.getItem("nome"),
        "email": localStorage.getItem("email"),
    })

    return (
        <UserContext.Provider value={{user, setUser}}>
           {children}
        </UserContext.Provider >
    )
}

export default UserProvider;