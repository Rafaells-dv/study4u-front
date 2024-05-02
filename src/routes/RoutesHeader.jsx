import React from "react"
import { Route, Routes } from "react-router-dom";
import Login from "../screens/Login.jsx";
import Sobre from "../screens/Sobre.jsx";
import Cadastro from "../screens/Cadastro.jsx";
import LandPage from "../screens/LandPage.jsx";

export function RoutesHeader() {
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