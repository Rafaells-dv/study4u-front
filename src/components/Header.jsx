import Login from "../screens/Login.jsx";
import Sobre from "../screens/Sobre.jsx";
import Cadastro from "../screens/Cadastro.jsx";
import LandPage from "../screens/LandPage.jsx";
import { BrowserRouter, Link, Route, Routes} from "react-router-dom";
import "./Header.css"

function Header(){
    return (
        <BrowserRouter forceRefresh={true}>
            <header>
                <nav>
                    <Link to="/">
                        <p className="title">Study4u</p>
                    </Link>
                    <div id="nav-options">
                        <Link to="/login">
                            <input type="button" className="title" value="Logar"/>
                        </Link>
                        <Link to="/cadastro">
                            <input type="button" className="title" value="Cadastre-se"/>
                        </Link>
                        <Link to="/about">
                            <input type="button" className="title" value="Sobre"/>
                        </Link>
                    </div> 
                </nav>
            </header>
            <Routes>
                <Route path="/" element={<LandPage />} />
                <Route path="/login" element={<><Login /></>} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/about" element={<Sobre />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Header;