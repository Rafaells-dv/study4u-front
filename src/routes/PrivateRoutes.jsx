import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import SalasUser from "../pages/SalasUser/SalasUser";
import CriarSala from "../pages/CriarSala/CriarSala";
import Sala from "../pages/Sala/Sala";

function PrivateRoutes() {
    return (
    <>
        
        <Routes>
           <Route path="/home" element={<Home />} />
           <Route path="/minhas-salas" element={<SalasUser />} />
           <Route path="/sala" element={<Sala />} />
           <Route path="/criar-sala" element={<CriarSala />} />
        </Routes>
        
    </>
    )
}

export default PrivateRoutes