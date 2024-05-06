import React, { useState, useContext } from "react";
import "./Login.css";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {

    //usuario para testes sem api
    const adminUser = {
        email: 'adminstudy@gmail.com',
        password: '123456'
    }

    //contexto de auth
    const { setAuth, auth} = useContext(AuthContext)

    //setForm para atualizar valores do formulário
    const [form, setForm] = useState({email: '', password: ''});
    
    //função para navegar entre páginas
    const navigate = useNavigate(); 

    //lidar com preenchimento do formulario
    function handleChange(e) {
        setForm({...form, [e.target.name]: e.target.value});
    }

    //lidar com formulario enviado
    function handleSubmit(e) {
        e.preventDefault()

        if (form.email === adminUser.email && form.password == adminUser.password){
            setAuth(true)
            window.alert('Login feito')
            navigate("/home");
        }
    }

    return (
    <>
        <main>
            <form id="login-form">
                <article className="title">
                    <p id="login-title">Study4U</p>
                    <p className="text">Comece a mudar o seu futuro.</p>
                </article>
                <div id="login-inputs">
                    <p className="title">Login</p>
                        <input className="text" type="email" name="email" placeholder="Email:" onChange={handleChange} />
                        <input className="text" type="password" name="password" placeholder="Senha:" onChange={handleChange} />
                        <input className="text" type="submit" name="logar" value="Logar" onClick={handleSubmit}/>
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