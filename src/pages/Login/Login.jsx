import React, { useState, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { UserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import { Input } from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { Form, ContainerInput } from "./style.js";
import { toast } from "react-toastify";

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

         if (!form.email || !form.password) {
            toast.error("Preencha todos os campos!")
            return
        }

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
                 const response = await request.json(); // Transforma a resposta em JSON
                 console.log(response)

                 if (response.token == "Acesso negado") {
 
                    console.log("email ou senha incorretos")
                    toast.error("Email ou senha incorretos!")
                 } else {
 
                     localStorage.setItem('token', response.token)
 
                     const request = await fetch(`http://localhost:8080/usuarios/${response.userId}`, {
                         method: "GET",
                         headers: { 
                             "Content-Type": "application/json",
                         }});
 
                     if (request.ok) {
                         const user = await request.json(); // Transforma a resposta em JSON
                         console.log(user)
 
                         localStorage.setItem('id', user.id)
 
                         setUser({
                             "id": localStorage.getItem('id'),
                             "token": localStorage.getItem('token'),
                             "name": user.nome,
                             "email": user.email,
                         })
                        
                         toast.success("Login efetuado com sucesso!")
                         navigate("/home")
 
                     } else {
                        toast.error("Erro ao fazer login!")
                         console.log(request.error)
                     }
                     
                 }
                 
 
             } else {
                toast.error("Erro ao fazer login!")
                console.error('Erro ao fazer login:', response.statusText);
             }
 
         } catch (error) {
            toast.error("Erro ao fazer login!")
            console.error('Erro ao fazer login:', error);
         }
 
     }
 

    return (
    <>
        <main>
            <Form onSubmit={handleLogin}>
                <article>
                    <p className="title">Study4U</p>
                    <p className="text">Comece a mudar o seu futuro.</p>
                </article>
                <ContainerInput>
                    <p className="title">Login</p>
                    <Input className="text" type="email" name="email" placeholder="Email:" onChange={handleChange}/>
                    <Input className="text" type="password" name="password" placeholder="Senha:" onChange={handleChange} />
                    <Button className="text" type="submit" name="logar" value="Logar">Logar</Button>
                    <div className="text">
                        <a href="">Esqueceu sua senha?</a>
                        <a href="/cadastro">Cadastrar</a>
                    </div>
                </ContainerInput>
            </Form>
        </main>
    </>
    )
}

export default Login;