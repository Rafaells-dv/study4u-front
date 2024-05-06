import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login/Login.jsx";
import Sobre from "../pages/Sobre/Sobre.jsx";
import Cadastro from "../pages/Cadastro/Cadastro.jsx";
import LandPage from "../pages/LandPage/LandPage.jsx";

function PublicRoutes() {
    return (
        <>
            <Routes>
                <Route path="/" element={<LandPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/sobre" element={<Sobre />} />
            </Routes>    
        </>
    )
}

export default PublicRoutes