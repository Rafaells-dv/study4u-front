import React, { useState } from "react";
import Sidebar from "../../components/Sidebar"
import Card from "../../components/Card.jsx"
import FormConteudo from "../../components/FormConteudo";
import "./Sala.css"
import { Form } from "react-router-dom";

function Sala() {

    const [showForm, setShowForm] = useState(false)

    function addConteudo() {
        console.log("clicado")
        setShowForm(true)
    }

    const listaConteudoVelha = 1 //fazer requisição dos conteúdos pela api

    return (
        <>
            <div id="private">
                <Sidebar />
                {showForm && (  <div id="form-popup"><FormConteudo setShowForm={setShowForm}/></div>)}
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
                        <input type="button" name="editarConteudo" value="Adicionar conteúdo" onClick={addConteudo}/>
                        <div>
                            <input type="button" name="excluir" value="Excluir" />
                            <input type="button" name="sairSala" value="Sair da sala" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sala