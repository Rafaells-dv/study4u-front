import React from "react";
import Sidebar from "../../components/Sidebar.jsx"
import "./Home.css"

function Home() {
    return (
        <>
        <div id="private">
            <Sidebar />
            <div id="home">
                <input type="search" name="pesquisar" placeholder="Pesquisar salas..."/>
            </div>
        </div>
        </>
        
    )
}

export default Home;