import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";

function PrivateRoutes() {
    return (
    <>
        
        <Routes>
           <Route path="/home" element={<Home />} />
        </Routes>
        
    </>
    )
}

export default PrivateRoutes