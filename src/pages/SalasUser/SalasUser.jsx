import React, {useContext, useEffect, useState} from "react";
import { UserContext } from "../../contexts/UserContext";
import Sidebar from "../../components/Sidebar/Sidebar.jsx"
import Salas from "../../components/Salas/Salas.jsx";
import "./SalasUser.css"
import { useNavigate } from "react-router-dom";

function SalasUser() {

    const navigate = useNavigate();
    const {setUser, user} = useContext(UserContext);

    const [salas, setSalas] = useState([]);

    function handleChange(event) {
        setSearch(event.target.value)

    }

    const userClasses = async (event) => {
        try{
            const request = await fetch(`http://localhost:8080/turmas/usuario/${user.id}`, {
                method: "GET",
                headers: { 
                    "Content-Type": "application/json",
                    'Authorization': 'Bearer ' + localStorage.getItem('token'),
                },
            });

            if (request.ok) {
                const salas = await request.json()
                setSalas(salas)
            } else {  
                console.error('Erro ao procurar salas do usuario:', response.statusText);
            }
        } catch(error) {
            console.log('Erro ao procurar salas do usuario')
        }
    }

    useEffect(()=>{
        userClasses();
    }, [])


    return (
        <>
            <div id="private">
                <Sidebar />
                <div id="salas-user">
                    <div className="grupo-salas">
                        {salas.map((sala) => 
                            <div key={sala.id} onClick={() => {navigate(`/sala/${sala.id}`)}} style={{cursor: 'pointer'}}>
                                <Salas 
                                    titulo={sala.titulo}
                                    desc={sala.descricao}
                                />
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default SalasUser