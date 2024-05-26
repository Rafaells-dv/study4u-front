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
import DynamicForm from "../../components/DynamicForm/DynamicForm.jsx";

function Home() {

    const navigate = useNavigate()

    const [search, setSearch] = useState('')
    const [salas, setSalas] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [showFormNovaSala, setShowFormNovaSala] = useState(false)

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

    async function getSalas() {
        try {
            await fetch(`http://localhost:8080/turmas/usuario/${user.id}`, {
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
    }
    useEffect(()=>{
        getSalas()
    }, [])

    //Form nova sala configs
    const [form, setForm] = useState({});

    async function enterClass(event) {
        event.preventDefault()
        console.log(form)

        const request = await fetch(`http://localhost:8080/turmas/${form.idSala}/atribuir-usuario?usuarioId=${user.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem('token')
            }
        })

        if (request.ok) {
            const data = request.json()
            getSalas()
            setShowFormNovaSala(false)
        } else (error) => {
            console.log(error)
        }
    }
    
    const fieldsNovaSala = [
        {
            name: "idSala", 
            type: "text", 
            placeholder: "Código da sala que deseja entrar.", 
            tag: "input"
        }
    ]

    const buttonsNovaSala = [
        {
            text: "Entrar",
            function: enterClass
        }
    ]
    return (
        <>
        <Container>
            <Sidebar />
            {showFormNovaSala && (
                <DynamicForm fields={fieldsNovaSala} buttons={buttonsNovaSala}
                form={form} setForm={setForm}
                />
            )}
            <HomeContainer>
                <HomeInputs>
                    <Input type="search" className="text" name="pesquisar" placeholder="Pesquisar salas..." onChange={event => setSearch(event.target.value)} value={search}/>
                    <Button onClick={() => setShowFormNovaSala(true)}>Nova Sala</Button>
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