import React from "react";
import "./Login.css";

function Login() {
    return (
    <main>
        <form>
            <article className="title">
                <p id="login-title">Study4U</p>
                <p className="text">Comece a mudar o seu futuro.</p>
            </article>
            <div id="login-inputs">
                <p className="title">Login</p>
                <input className="text" type="email" name="email" placeholder="Email:"/>
                <input className="text" type="password" name="password" placeholder="Senha:"/>
                <input className="text" type="submit" value="Logar"/>
                <div className="text">
                    <a href="">Esqueceu sua senha?</a>
                    <a href="">Cadastrar</a>
                </div>
            </div>
        </form>
    </main>
    )
}

export default Login;