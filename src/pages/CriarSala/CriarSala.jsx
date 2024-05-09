import React from "react";
import Sidebar from "../../components/Sidebar.jsx"
import "./CriarSala.css"

function CriarSala() {
    return (
        <>
            <div id="private">
                <Sidebar />
                <div id="criar-sala">
                    <h1 className="title">Crie sua sala!</h1>
                    <form>
                        <input type="text" className="title" name="tituloSala" placeholder="Titulo da sala"/>
                        <textarea type="text" className="text" name="descricao" placeholder="Descrição da sala"/>
                        <input type="submit" className="text" value="Criar sala"/>
                    </form>
                </div>
            </div>
        </>
    )
}

export default CriarSala