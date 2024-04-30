import React from "react";
import "./Cadastro.css";

function Cadastro() {
    return (
        <div id="cadastro">
            <form id="cadastro-form">
                <p className="title">Cadastre-se</p>
                <div id="cadastro-inputs">
                    <input className="text" type="text" name="name" placeholder="Nome:"/>
                    <input className="text" type="email" name="email" placeholder="Email:"/>
                    <input className="text" type="password" name="password" placeholder="Senha:"/>
                    <input className="text" type="submit" name="cadastrar" value="Cadastrar"/>
                </div>
            </form>
        </div>
    )
}

export default Cadastro;