import React, {useContext, useState} from "react";
import { UserContext } from "../../contexts/UserContext";
import Sidebar from "../../components/Sidebar.jsx"
import Salas from "../../components/Salas.jsx";
import "./SalasUser.css"

function SalasUser() {

    const {setUser, user} = useContext(UserContext);
    const [search, setSearch] = useState('');

    function handleChange(event) {
        setSearch(event.target.value)

    }

    const userClasses = async (event) => {
        try{
            const request = await fetch(`http://localhost:8080/turmas/usuario/${user.id}`, {
                method: "GET",
                headers: { 
                    "Content-Type": "application/json",
                    Authorization: 'Bearer' + user.token,
                },
            });

            if (request.ok) {
                const data = await request.json()
                console.log(data)

            } else {  
                console.error('Erro ao procurar salas do usuario:', response.statusText);
            }
        } catch(error) {
            console.log('Erro ao procurar salas do usuario')
        }
    }


    return (
        <>
            <div id="private">
                <Sidebar />
                <div id="salas-user">
                    <input type="search" className="text" name="pesquisar" placeholder="Pesquisar salas..." onChange={handleChange}/>
                    <div className="grupo-salas">
                        <Salas titulo="Matemática 2° ano" desc="Sala para estudos de mátemática do 2° ano do médio"/>
                        <Salas titulo="Java iniciante" desc="Inicie sua jornada em Java"/>
                        <Salas titulo="Java iniciante" desc="Inicie sua jornada em Java"/>
                        <Salas titulo="Java iniciante" desc="Inicie sua jornada em Java"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SalasUser