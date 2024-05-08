import React from "react";
import Sidebar from "../../components/Sidebar.jsx"
import "./SalasUser.css"

function SalasUser() {
    return (
        <>
            <div id="private">
                <Sidebar />
                <div id="salas-user">
                    <input type="search" className="text" name="pesquisar" placeholder="Pesquisar salas..."/>
                    <div id="salas">
                        <p>Mostrar salas do usuário</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SalasUser