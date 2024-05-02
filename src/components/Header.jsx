import "./Header.css"

function Header(){
    return (
            <header>
                <nav>
                    <a href="/"><p className="title">Study4u</p></a>
                    <div id="nav-options">
                        <a href="/login"><input type="button" className="title" value="Logar"/></a>
                        <a href="/cadastro"><input type="button" className="title" value="Cadastre-se"/></a>
                        <a href="/sobre"><input type="button" className="title" value="Sobre"/></a>
                    </div> 
                </nav>
            </header>
    )
}

export default Header;