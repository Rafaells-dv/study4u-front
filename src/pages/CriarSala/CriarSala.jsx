import React, { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import Sidebar from "../../components/Sidebar.jsx"
import "./CriarSala.css"
import { useNavigate } from "react-router-dom";

function CriarSala() {

    const navigate = useNavigate();

    const [form, setForm] = useState({tituloSala: '', descricaoSala: ''});    
    
    const {setUser, user} = useContext(UserContext);

    function handleChange(event) {
        setForm({...form, [event.target.name]: event.target.value});
    }

    
    const createTurma = async (event) => {
        event.preventDefault();
        console.log(form)
        console.log(localStorage.getItem('token'))

        try{
            const request = await fetch(`http://localhost:8080/turmas?id=` + user.id, {
                method: "POST",
                headers: { 
                    "Content-Type": "application/json",
                    'Authorization': 'Bearer ' + localStorage.getItem('token'),
                },
                body: JSON.stringify({
                    titulo: form.tituloSala,
                    descricao: form.descricaoSala
                })
                });
            
                if (request.ok) {
                    const createdClass = await request.json(); // Transforma a resposta em JSON

                    navigate(`/sala/${createdClass.id}`)
                    
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