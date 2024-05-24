import React, {useContext, useEffect, useState, useMemo} from "react";
import Sidebar from "../../components/Sidebar/Sidebar.jsx"
import { useNavigate } from "react-router-dom";
import Salas from "../../components/Salas/Salas.jsx";
import { UserContext } from "../../contexts/UserContext.jsx";
import Loader from "../../components/Loader/Loader.jsx";
import Button from "../../components/Button/Button.jsx";
import { Container } from "../../components/Container/Container.jsx";
import { Input } from "../../components/Input/Input.jsx";
import { GrupoSalas, HomeContainer, HomeInputs, SalasNotFound } from "./style.js";

function Home() {

    const navigate = useNavigate()

    const [search, setSearch] = useState('')
    const [salas, setSalas] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const {user} = useContext(UserContext)

    const filteredSalas = useMemo(() => {
        return search.length > 0 
            ? salas.filter(sala => sala.titulo.toLowerCase().includes(search.toLowerCase()))
            : []
    }, [salas, search]);
    
    useEffect(() => {
        if (filteredSalas.length === 0) {
            setIsLoading(true);
            setTimeout(() => {
                setIsLoading(false);
            }, 3000);
        }
    }, [filteredSalas]);

    useEffect(()=>{
        try {
            fetch(`http://localhost:8080/turmas/usuario/${user.id}`, {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': 'Bearer ' + localStorage.getItem('token'),
                },
                }
            )
            .then(response => response.json())
            .then(data => { if (data.status == 401) {
                                console.log(data)
                            } else {
                                setSalas(data)
                            }
                        }
            )
        } catch(error) {
            console.log(error)
        }

    }, [])

    
    return (
        <>
        <Container>
            <Sidebar />
            <HomeContainer>
                <HomeInputs>
                    <Input type="search" className="text" name="pesquisar" placeholder="Pesquisar salas..." onChange={event => setSearch(event.target.value)} value={search}/>
                    <Button>Nova Sala</Button>
                </HomeInputs>
                <GrupoSalas>
                    {search.length > 0 ? (
                        filteredSalas.length > 0 ? (
                            filteredSalas.map(sala => (
                                <div key={sala.id} onClick={() => {navigate(`/sala/${sala.id}`)}} style={{cursor: 'pointer'}}>
                                    <Salas
                                        titulo={sala.titulo}
                                        desc={sala.descricao}
                                    />
                                </div>
                            ))
                        ) : ( 
                            <SalasNotFound>
                                {isLoading ? (
                                    <Loader />
                                ) : (
                                    <p className="text">Nenhuma sala encontrada.</p>
                                )}
                            </SalasNotFound>
                        )
                    ) : (
                        salas.map((sala) => (
                            <div key={sala.id} onClick={() => {navigate(`/sala/${sala.id}`)}} style={{cursor: 'pointer'}}>
                                <Salas
                                    titulo={sala.titulo}
                                    desc={sala.descricao}
                                />
                            </div>
                        ))
                    )}
                        
                </GrupoSalas>
            </HomeContainer>
        </Container>
        </>
    )
}

export default Home;