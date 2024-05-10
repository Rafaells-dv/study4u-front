import React from "react";
import Sidebar from "../../components/Sidebar.jsx"
import Salas from "../../components/Salas.jsx";
import "./SalasUser.css"

function SalasUser() {
    return (
        <>
            <div id="private">
                <Sidebar />
                <div id="salas-user">
                    <input type="search" className="text" name="pesquisar" placeholder="Pesquisar salas..."/>
                    <div className="grupo-salas">
                        <Salas titulo="Matemática 2° ano" desc="Sala para estudos de mátemática do 2° ano do médio"/>
                        <Salas titulo="Java iniciante" desc="Inicie sua jornada em Java"/>
                        <Salas titulo="Java iniciante" desc="Inicie sua jornada em Java"/>
                        <Salas titulo="Java iniciante" desc="Inicie sua jornada em Java"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SalasUser