import React, {useContext} from "react";
import "./Sidebar.css"
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

function Sidebar() {

    const navigate = useNavigate();
    const {setUser, user} = useContext(UserContext);

    function handleClick(event) {
        const url = "/" + event.target.name;
        navigate(url)
    }

    function logout() {
        localStorage.clear()
        
        setUser({
            "id": localStorage.getItem("id"),
            "token": localStorage.getItem("token"),
            "name": localStorage.getItem("nome"),
            "email": localStorage.getItem("email"),
        })

        navigate("/")
    }

    return (
        <header>
            <nav id="private">
                <h1 className="title">{user.name}</h1>
                <div id="side-options">
                    <input type="button" className="title" name="home" value="Salas" onClick={handleClick}/>
                    <input type="button" className="title" name="minhas-salas" value="Minhas Salas" onClick={handleClick}/>
                    <input type="button" className="title" name="criar-sala" value="Criar Salas" onClick={handleClick}/>
                </div>
                <input type="button" className="title" value="Logout" onClick={logout}/>
            </nav>
        </header>
    )
    
}

export default Sidebar