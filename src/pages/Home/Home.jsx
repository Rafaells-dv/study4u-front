import React from "react";
import Sidebar from "../../components/Sidebar.jsx"
import "./Home.css"

function Home() {
    return (
        <>
        <div id="private">
            <Sidebar />
            <div id="home">
                <input type="search" className="text" name="pesquisar" placeholder="Pesquisar salas..."/>
                <div id="salas">
                    <p>Mostrar salas</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Home;