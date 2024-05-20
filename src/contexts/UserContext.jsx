import React, {createContext, useEffect, useState} from "react";

export const UserContext = createContext()

function UserProvider({children}) {

    const [user, setUser] = useState({
        "id": localStorage.getItem("id"),
        "token": localStorage.getItem("token"),
    })

    const getUserDetail = () => {
            try {
                fetch(`http://localhost:8080/usuarios/${user.id}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + localStorage.getItem("token")
                    }
                }).then((response) => {
                    return response.json()
                }).then((data) => {
                    if (data.status == 401) {
                        console.log(data)
                    } else {
                        setUser({
                            "id": localStorage.getItem("id"),
                            "token": localStorage.getItem("token"),
                            "name": data.nome,
                            "email": data.email,
                        })
                    }
                })
            } catch (error) {
                console.log('deu merda', error)
            }
    }
    

    return (
        <UserContext.Provider value={{user, setUser, getUserDetail}}>
           {children}
        </UserContext.Provider >
    )
}

export default UserProvider;