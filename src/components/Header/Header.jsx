// Header.jsx
import React from "react";
import NavButton from "../NavButton/NavButton"; // Make sure this import is correct
import { Nav } from "./style.js";

function Header() {
    return (
        <header>
            <Nav id="public">
                <a href="/">
                    <p id="headerTitle" className="title">Study4u</p>
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
            </Nav>
        </header>
    );
}

export default Header;
