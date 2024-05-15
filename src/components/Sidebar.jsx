import React, {useContext} from "react";
import { AuthContext } from "../contexts/AuthContext";
import "./Sidebar.css"
import { useNavigate } from "react-router-dom";

function Sidebar() {

    const navigate = useNavigate();
    const {setAuth, auth} = useContext(AuthContext);

    function handleClick(event) {
        const url = "/" + event.target.name;
        navigate(url)
    }

    function logout() {
        localStorage.setItem('token', null)
        navigate("/")
    }

    return (
        <header>
            <nav id="private">
                <h1 className="title">nome usuario</h1>
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