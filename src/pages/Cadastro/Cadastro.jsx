import React, { useState } from "react";
import "./Cadastro.css";

function Cadastro() {

    const [form, setForm] = useState({name: '', email: '', password: ''});    
    
    function handleChange(e) {
        setForm({...form, [e.target.name]: e.target.value});
    }
    
    const createUser = async (event) => {
        event.preventDefault()
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
            alert("usuário criado com sucesso")
            navigate("/login")
            return
          }
        
        }
    
    return (
        <>
            <main>
                <form action="/cadastro" method="POST" id="cadastro-form" onSubmit={createUser}>
                    <p className="title">Cadastre-se</p>
                    <div id="cadastro-inputs">
                        <input className="text" type="text" name="name" placeholder="Nome:" onChange={handleChange}/>
                        <input className="text" type="email" name="email" placeholder="Email:" onChange={handleChange}/>
                        <input className="text" type="password" name="password" placeholder="Senha:" onChange={handleChange}/>
                        <input className="text" type="submit" name="cadastrar" value="Cadastrar"/>
                    </div>
                </form>
            </main>
        </>
    )
}

export default Cadastro;