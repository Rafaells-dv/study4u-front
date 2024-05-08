import React from "react";
import "./Sidebar.css"

function Sidebar() {
    return (
        <header>
            <nav id="private">
                <h1 class="title">nome usuario</h1>
                <div id="side-options">
                    <a href="/home"><input type="button" className="title" value="Salas"/></a>
                    <a href="/minhas-salas"><input type="button" className="title" value="Minhas Salas"/></a>
                    <a href="/"><input type="button" className="title" value="Criar Salas"/></a>
                </div>
                <input type="button" className="title" value="Logout"/>
            </nav>
        </header>
    )
    
}

export default Sidebar