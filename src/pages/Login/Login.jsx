import React, { useState, useContext } from "react";
import "./Login.css";
import { AuthContext } from "../../contexts/AuthContext";
import { UserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";

function Login() {

    //contexto de auth
    const {setAuth, auth} = useContext(AuthContext);

    //contexto de usuario
    const {setUser, user} = useContext(UserContext);

    //setForm para atualizar valores do formulário
    const [form, setForm] = useState({email: '', password: ''});
    
    //função para navegar entre páginas
    const navigate = useNavigate(); 

    //lidar com preenchimento do formulario
    function handleChange(event) {
        setForm({...form, [event.target.name]: event.target.value});
    }

    //lidar com formulario enviado
   const handleLogin = async (event) => {
        event.preventDefault();
        try { 
            //resquisição de login
            const request = await fetch('http://localhost:8080/auth/login', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email: form.email,
                    senha: form.password
                })
                });

            if (request.ok) {
                const data = await request.json(); // Transforma a resposta em JSON
                
                localStorage.setItem('token', data.token)

                setUser({id: data.id, token: data.token})
                
                navigate('/home')

            } else {
                console.error('Erro ao fazer login:', response.statusText);
            }

        } catch (error) {
            console.error('Erro ao fazer login:', error);
        }

    }

    return (
    <>
        <main>
            <form id="login-form" onSubmit={handleLogin}>
                <article className="title">
                    <p id="login-title">Study4U</p>
                    <p className="text">Comece a mudar o seu futuro.</p>
                </article>
                <div id="login-inputs">
                    <p className="title">Login</p>
                        <input className="text" type="email" name="email" placeholder="Email:" onChange={handleChange} />
                        <input className="text" type="password" name="password" placeholder="Senha:" onChange={handleChange} />
                        <input className="text" type="submit" name="logar" value="Logar" />
                    <div className="text">
                        <a href="">Esqueceu sua senha?</a>
                        <a href="/cadastro">Cadastrar</a>
                    </div>
                </div>
            </form>
        </main>
    </>
    )
}

export default Login;