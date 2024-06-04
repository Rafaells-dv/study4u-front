import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { Form } from "./style";
import { toast } from "react-toastify";

function Cadastro() {

    const navigate = useNavigate();
    
    const [form, setForm] = useState({});    
    
    function handleChange(e) {
        setForm({...form, [e.target.name]: e.target.value});
    }
    
    const createUser = async (event) => {
        event.preventDefault()

        if (!form.email || !form.name || !form.password) {
            toast.error("Preencha todos os campos!")
            return
        }
        
        const request = await fetch('http://localhost:8080/usuarios', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email: form.email,
                nome: form.name,
                senha: form.password
              })
        })

        if (request.status >= 200 && request.status <= 299) {
            toast.success("Usuário cadastrado com sucesso!")
            navigate("/login")
            return
          } else {
            toast.error("Erro ao cadastrar usuário!")
          }
        
        }
    
    return (
        <>
            <main>
                <Form onSubmit={createUser}>
                    <p className="title">Cadastre-se</p>
                    <div id="cadastro-inputs">
                        <Input className="text" type="text" name="name" placeholder="Nome:" onChange={handleChange}/>
                        <Input className="text" type="email" name="email" placeholder="Email:" onChange={handleChange}/>
                        <Input className="text" type="password" name="password" placeholder="Senha:" onChange={handleChange}/>
                        <Button className="text cadastro-input" name="cadastrar">Cadastrar</Button>
                    </div>
                </Form>
            </main>
        </>
    )
}

export default Cadastro;