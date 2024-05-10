import React, {useState} from "react";
import "./Conteudo.css"
import Sidebar from "../../components/Sidebar";
import Card from "../../components/Card";

function Conteudo() {

    const [isEditEnabled, setEditEnabled] = useState(false)

    function edit() {
        setEditEnabled(true)
    }

    function salvar() {
        setEditEnabled(false)
    }

    return (
        <>
        <div id="private">
            <Sidebar />
            <div id="conteudo-sala">
                <article id="conteudo-info">
                    <h1 className="title">Titulo conteúdo</h1>
                    <p className="text" id="ref-sala">Sala do conteudo</p>
                    <p className="text" id="data-conteudo">20/03/2024</p>
                </article>
                <div id="conteudo">

                    {isEditEnabled ? 
                    <form>
                        <textarea className="text" id="conteudo-text" name="conteudoTexto" placeholder="Editar texto.."></textarea>
                        <input type="button" name="salvarEdit" value="Salvar" onClick={salvar}/>
                    </form> 
                    : <p className="text" id="conteudo-text">text</p>}
                    
                </div>
                <div id="conteudo-options">
                    <input type="button" name="editarConteudo" value="Editar conteúdo" onClick={edit}/>
                    <div>
                        <input type="button" name="excluirConteudo" value="Excluir" />
                        <input type="button" name="voltar" value="Voltar" />
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default Conteudo