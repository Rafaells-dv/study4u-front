import React from "react";
import Sidebar from "../../components/Sidebar.jsx"
import Salas from "../../components/Salas.jsx";
import "./Home.css"

function Home() {
    return (
        <>
        <div id="private">
            <Sidebar />
            <div id="home">
                <input type="search" className="text" name="pesquisar" placeholder="Pesquisar salas..."/>
                <div className="grupo-salas">
                    <Salas titulo="Matemática 2° ano" desc="Sala para estudos de mátemática do 2° ano do médio"/>
                    <Salas titulo="Matemática 2° ano" desc="Sala para estudos de mátemática do 2° ano do médio"/>
                    <Salas titulo="Matemática 2° ano" desc="Sala para estudos de mátemática do 2° ano do médio"/>
                    <Salas titulo="Matemática 2° ano" desc="Sala para estudos de mátemática do 2° ano do médio"/>
                    <Salas titulo="Matemática 2° ano" desc="Sala para estudos de mátemática do 2° ano do médio"/>
                    <Salas titulo="Matemática 2° ano" desc="Sala para estudos de mátemática do 2° ano do médio"/>
                </div>
            </div>
        </div>
        </>
    )
}

export default Home;