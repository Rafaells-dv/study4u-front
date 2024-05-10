import React from "react";

function FormConteudo({ setShowForm }) {

    function handleAdd(e) {
        e.preventDefault()
        console.log("adicionar")
        setShowForm(false)
    }

    function handleCancel(e) {
        e.preventDefault()
        console.log("cancelar")
        setShowForm(false)
    }

    return (
        <>
            <form id="add-conteudo">
                <input type="text" className="title" name="tituloConteudo" placeholder="Titulo do conteúdo"/>
                <textarea type="text" className="text" name="descricaoConteudo" placeholder="Descrição do conteúdo"/>
                <input type="submit" className="text" value="Adicionar" onClick={handleAdd}/>
                <input type="submit" className="text" value="Cancelar" onClick={handleCancel}/>
            </form>
        </>
    )
}

export default FormConteudo