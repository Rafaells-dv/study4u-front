import React, {useContext, useState} from "react";
import Sidebar from "../../components/Sidebar.jsx"
import Salas from "../../components/Salas.jsx";
import "./Home.css"
import { UserContext } from "../../contexts/UserContext.jsx";

function Home() {

    const {setUser, user} = useContext(UserContext)

    const [search, setSearch] = useState('');

    function handleChange(event) {
        setSearch(event.target.value)

        const searchClasses = async (event) => {
            try {
                const request = await fetch(`http://localhost:8080/pesquisar-titulo?pesquisa=${search}`, {
                    method: "GET",
                    headers: { 
                        "Content-Type": "application/json",
                        Authorization: 'Bearer' + user.token,
                    },
                });
    
                if(request.ok) {
                    const data = await request.json(); // Transforma a resposta em JSON
                    console.log(data)
                }
            } catch(error) {
                console.log('Erro ao pesquisar salas', error)
            }
        }
        
        console.log(searchClasses)
    }


    return (
        <>
        <div id="private">
            <Sidebar />
            <div id="home">
                <input type="search" className="text" name="pesquisar" placeholder="Pesquisar salas..." onChange={handleChange}/>
                <div className="grupo-salas">
                    <Salas titulo="Matemática 2° ano" desc="Sala para estudos de mátemática do 2° ano do médio"/>
                    <Salas titulo="Matemática 2° ano" desc="Sala para estudos de mátemática do 2° ano do médio"/>
                    <Salas titulo="Matemática 2° ano" desc="Sala para estudos de mátemática do 2° ano do médio"/>
                    <Salas titulo="Matemática 2° ano" desc="Sala para estudos de mátemática do 2° ano do médio"/>
                    <Salas titulo="Matemática 2° ano" desc="Sala para estudos de mátemática do 2° ano do médio"/>
                    <Salas titulo="Matemática 2° ano" desc="Sala para estudos de mátemática do 2° ano do médio"/>
                </div>
            </div>
        </div>
        </>
    )
}

export default Home;