import React, {useState} from "react";
import { useParams } from "react-router-dom";

function FormConteudo({ setShowForm }) {

    const [form, setForm] = useState({})
    const { id } = useParams();
    
    function handleChange(event) {
        setForm({...form, [event.target.name]: event.target.value})
    }

    async function handleAdd(event) {
        event.preventDefault()
        
        const request = await fetch(`http://localhost:8080/conteudos?idTurma=${id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem('token'),
            },
            body: JSON.stringify({
                titulo: form.tituloConteudo,
                descricao: form.descricaoConteudo,
            })
        })

        if (request.ok) {
            const data = request.json()
            console.log(data)
        }
        


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
                <input type="text" className="title" name="tituloConteudo" placeholder="Titulo do conteúdo" onChange={handleChange}/>
                <textarea type="text" className="text" name="descricaoConteudo" placeholder="Descrição do conteúdo" onChange={handleChange}/>
                <input type="submit" className="text" value="Adicionar" onClick={handleAdd}/>
                <input type="submit" className="text" value="Cancelar" onClick={handleCancel}/>
            </form>
        </>
    )
}

export default FormConteudo