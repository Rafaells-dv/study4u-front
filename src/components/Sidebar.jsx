import React, {useContext, useEffect} from "react";
import NavButton from "./NavButton";
import "./Sidebar.css"
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

function Sidebar() {

    const navigate = useNavigate();

    const {setUser, user, getUserDetail} = useContext(UserContext);

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

    useEffect(()=>{
        getUserDetail()
    }, [])

    return (
        <header>
            <nav id="private">
                <h1 className="title">{user.name}</h1>
                <div id="side-options">
                    <NavButton className="title" onClick={handleClick} name="home">Salas</NavButton>
                    <NavButton className="title" onClick={handleClick} name="criar-sala">Criar Salas</NavButton>
                </div>
                <NavButton type="button" className="title" value="Logout" onClick={logout}>Logout</NavButton>
            </nav>
        </header>
    )
    
}

export default Sidebar