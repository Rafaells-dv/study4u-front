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
                    <article>
                        <h1 className="title">Título da sala</h1>
                        <p className="text" id="desc-sala">Descrição da sala</p>
                    </article>
                    <div id="conteudos">
                        <Card titulo="Titulo conteúdo"/>
                        <Card titulo="Pitagoras"/>
                        <Card titulo="Trigonometria"/>
                        <Card titulo="Trigonometria"/>
                        <Card titulo="Trigonometria"/>
                        <Card titulo="Trigonometria"/>
                    </div>
                    <div id="sala-options">
                        <p>Botão excluir se o usuario é o dono da pagina e botão sair se não for o dono</p>
                        <input type="button" name="excluir" value="Excluir" />
                        <input type="button" name="sairSala" value="Sair da sala" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sala