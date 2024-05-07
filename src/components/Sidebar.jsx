import React from "react";
import "./Sidebar.css"

function Sidebar() {
    return (
        <header>
            <nav id="private">
                <h1 class="title">nome usuario</h1>
                <div>
                    <p class="text">salas</p>
                    <p class="text">minhas salas</p>
                    <p class="text">criar sala</p>
                    
                </div>
                <p class="text">logout</p>
            </nav>
        </header>
    )
    
}

export default Sidebar