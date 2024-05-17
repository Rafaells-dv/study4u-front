// Header.jsx
import React from "react";
import NavButton from "./NavButton"; // Make sure this import is correct
import "./Header.css"

function Header() {
    return (
        <header>
            <nav id="public">
                <a href="/">
                    <p className="title">Study4u</p>
                </a>
                <div id="nav-options">
                    <a href="/login">
                        <NavButton className="title">Logar</NavButton>
                    </a>
                    <a href="/cadastro">
                        <NavButton className="title">Cadastre-se</NavButton> 
                    </a>
                    <a href="/sobre">
                        <NavButton className="title">Sobre</NavButton>
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Header;
