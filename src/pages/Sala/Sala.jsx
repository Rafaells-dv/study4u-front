import React from "react";
import Sidebar from "../../components/Sidebar"
import Card from "../../components/Card.jsx"
import "./Sala.css"

function Sala() {
    return (
        <>
            <div id="private">
                <Sidebar />
                <div id="sala">
                    <h1 className="title">Título da sala</h1>
                    <p className="text" id="desc-sala">Descrição da sala</p>
                    <div id="conteudos">
                        <Card titulo="Titulo conteúdo"/>
                        <Card titulo="Pitagoras"/>
                        <Card titulo="Trigonometria"/>
                    </div>
                    <input type="button" name="sair" value="sair"/>
                </div>
            </div>
        </>
    )
}

export default Sala