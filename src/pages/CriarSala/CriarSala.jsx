import React, { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import Sidebar from "../../components/Sidebar/Sidebar.jsx"
import { useNavigate } from "react-router-dom";
import { Input } from "../../components/Input/Input.jsx";
import Button from "../../components/Button/Button.jsx";
import { Form, FormContainer } from "./style.js";
import { Container } from "../../components/Container/Container.jsx";
import { TextArea } from "../../components/TextArea/TextArea.jsx";	
import { toast } from "react-toastify";

function CriarSala() {

    const navigate = useNavigate();

    const [form, setForm] = useState({tituloSala: '', descricaoSala: ''});    
    
    const {user} = useContext(UserContext);

    function handleChange(event) {
        setForm({...form, [event.target.name]: event.target.value});
    }

    
    const createTurma = async (event) => {
        event.preventDefault();
        
        if (!form.tituloSala || !form.descricaoSala) {
            toast.error("Preencha todos os campos!")
            return
        }

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
                    toast.success("Sala criada com sucesso!")
                    navigate(`/sala/${createdClass.id}`)
                    
                } else {  
                    toast.error("Erro ao criar sala!")
                    console.error('Erro ao criar sala:', response.statusText);
                }
        } catch(error) {
            console.error('Erro ao fazer criar sala', error);
        }}
    
    return (
        <>
            <Container>
                <Sidebar />
                <Form action="/criar-sala" method="POST" onSubmit={createTurma}>
                    <h1 className="title">Crie sua sala!</h1>
                    <FormContainer>
                        <Input type="text" className="title" name="tituloSala" placeholder="Titulo da sala" onChange={handleChange}/>
                        <TextArea type="text" className="text" name="descricaoSala" placeholder="Descrição da sala" onChange={handleChange}/>
                        <Button type="submit" className="text" name="criaSala">Criar sala</Button>
                    </FormContainer>
                </Form>
            </Container>
        </>
    )
}

export default CriarSala