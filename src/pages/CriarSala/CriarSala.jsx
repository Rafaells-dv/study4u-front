import React, { useState } from "react";
import Sidebar from "../../components/Sidebar.jsx"
import "./CriarSala.css"

function CriarSala() {

    const [form, setForm] = useState({tituloSala: '', descricaoSala: ''});    
    
    function handleChange(e) {
        setForm({...form, [e.target.name]: e.target.value});
    }

    const createTurma = async (event) => {
        event.preventDefault();
        const request = await fetch(`http://localhost:8080/turmas?id=${idUser}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                titulo: form.titulo,
                descricao: form.descricao
              })
            });
    }
    
    
    return (
        <>
            <div id="private">
                <Sidebar />
                <div id="criar-sala">
                    <h1 className="title">Crie sua sala!</h1>
                    <form action="/criar-sala" method="POST" onSubmit={createTurma}>
                        <input type="text" className="title" name="tituloSala" placeholder="Titulo da sala" onChange={handleChange}/>
                        <textarea type="text" className="text" name="descricaoSala" placeholder="Descrição da sala" onChange={handleChange}/>
                        <input type="submit" className="text" name="criaSala" value="Criar sala"/>
                    </form>
                </div>
            </div>
        </>
    )
}

export default CriarSala