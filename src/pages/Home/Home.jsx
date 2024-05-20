import React, {useContext, useEffect, useState} from "react";
import Sidebar from "../../components/Sidebar.jsx"
import "./Home.css"
import { useNavigate } from "react-router-dom";
import Card from "../../components/ConteudoCard.jsx";
import Salas from "../../components/Salas.jsx";

function Home() {

    const navigate = useNavigate()

    const [search, setSearch] = useState('')
    const [classes, setClasses] = useState([])

    function handleChange(event) {
        setSearch(event.target.value)
        searchClasses()
    }

    const searchClasses = async () => {
        try {
            const request = await fetch(`http://localhost:8080/turmas/pesquisar-titulo?pesquisa=${search}`, {
                method: "GET",
                headers: { 
                    "Content-Type": "application/json",
                    "Authorization": 'Bearer ' + localStorage.getItem("token"),
                },
            });

            if(request.ok) {
                const data = await request.json(); // Transforma a resposta em JSON
                setClasses(data)
            }
        } catch(error) {
            console.log('Erro ao pesquisar salas', error)
        }
    }

    

    useEffect(()=>{
            fetch('http://localhost:8080/turmas', {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': 'Bearer ' + localStorage.getItem('token'),
                },
            })
            .then((response)=>{
                return response.json()
            })
            .then((data) => {
                setClasses(data)
            })
        }, [])
    

    return (
        <>
        <div id="private">
            <Sidebar />
            <div id="home">
                <input type="search" className="text" name="pesquisar" placeholder="Pesquisar salas..." onChange={handleChange}/>
                <div className="grupo-salas">
                    {classes.map((sala) => 
                        <div key={sala.id} onClick={() => {navigate(`/sala/${sala.id}`)}} style={{cursor: 'pointer'}}>
                            <Salas
                                titulo={sala.titulo}
                                desc={sala.descricao}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
        </>
    )
}

export default Home;