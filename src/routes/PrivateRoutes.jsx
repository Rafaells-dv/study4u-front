import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import SalasUser from "../pages/SalasUser/SalasUser";

function PrivateRoutes() {
    return (
    <>
        
        <Routes>
           <Route path="/home" element={<Home />} />
           <Route path="/minhas-salas" element={<SalasUser />} />
        </Routes>
        
    </>
    )
}

export default PrivateRoutes