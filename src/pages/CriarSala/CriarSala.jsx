import React, { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import Sidebar from "../../components/Sidebar.jsx"
import "./CriarSala.css"

function CriarSala() {

    const [form, setForm] = useState({tituloSala: '', descricaoSala: ''});    
    
    const {setUser, user} = useContext(UserContext);

    function handleChange(e) {
        setForm({...form, [e.target.name]: e.target.value});
    }

    
    const createTurma = async (event) => {
        event.preventDefault();
        try{
            const request = await fetch(`http://localhost:8080/turmas?id=${user.id}`, {
                method: "POST",
                headers: { 
                    "Content-Type": "application/json",
                    Authorization: 'Bearer' + user.token,
                },
                body: JSON.stringify({
                    titulo: form.titulo,
                    descricao: form.descricao
                })
                });
            
                if (request.ok) {
                    const data = await request.json(); // Transforma a resposta em JSON
                    console.log(data)
                    
                } else {  
                    console.error('Erro ao criar sala:', response.statusText);
                }
        } catch(error) {
            console.error('Erro ao fazer criar sala', error);
        }}
    
    
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