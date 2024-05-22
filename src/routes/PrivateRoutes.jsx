import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import SalasUser from "../pages/SalasUser/SalasUser";
import CriarSala from "../pages/CriarSala/CriarSala";
import Sala from "../pages/Sala/Sala";
import Login from "../pages/Login/Login.jsx";
import Sobre from "../pages/Sobre/Sobre.jsx";
import Cadastro from "../pages/Cadastro/Cadastro.jsx";
import LandPage from "../pages/LandPage/LandPage.jsx";
import Header from '../components/Header/Header.jsx';

function PrivateRoutes() {
    return (
    <>
        <Routes>
            <Route path="/" element={<><Header /><LandPage /></>} />
            <Route path="/login" element={<><Header /><Login /></>} />
            <Route path="/cadastro" element={<><Header /><Cadastro /></>} />
            <Route path="/sobre" element={<><Header /><Sobre /></>} />
            <Route path="/home" element={<Home />} />
            <Route path="/minhas-salas" element={<SalasUser />} />
            <Route path="/sala/:id" element={<Sala />} />
            <Route path="/criar-sala" element={<CriarSala />} />
        </Routes>
    </>
    )
}

export default PrivateRoutes