import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import SalasUser from "../pages/SalasUser/SalasUser";
import Sala from "../pages/Sala/Sala";

function PrivateRoutes() {
    return (
    <>
        
        <Routes>
           <Route path="/home" element={<Home />} />
           <Route path="/minhas-salas" element={<SalasUser />} />
           <Route path="/sala" element={<Sala />} />
        </Routes>
        
    </>
    )
}

export default PrivateRoutes