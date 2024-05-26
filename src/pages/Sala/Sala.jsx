import React, { useContext, useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar.jsx"
import ConteudoCard from "../../components/ConteudoCard/ConteudoCard.jsx"
import Button from "../../components/Button/Button.jsx";
import { useParams, useNavigate } from "react-router-dom";
import DynamicForm from "../../components/DynamicForm/DynamicForm.jsx";
import { Container } from "../../components/Container/Container.jsx";
import { Conteudos, Options, SalaContainer } from "./style.js";
import { UserContext } from "../../contexts/UserContext.jsx";
import ConfirmDelete from "../../components/ConfirmDelete/ConfirmDelete.jsx";
import DeleteButton from "../../components/DeleteButton/DeleteButton.jsx";


function Sala() {

    const [showForm, setShowForm] = useState(false)
    const [classDetail, setClassDetail] = useState({})
    const [conteudos , setConteudos] = useState([])
    const [isCreator, setIsCreator] = useState(false)
    const [showConfirmDeleteSala, setShowConfirmDeleteSala] = useState(false)
    const [showConfirmDeleteConteudo, setShowConfirmDeleteConteudo] = useState(false)
    const [conteudoDelete, setConteudoDelete] = useState({})

    const {user} = useContext(UserContext)
    const { id } = useParams()
    const navigate = useNavigate()

    const classDetails = async () => {
        const requestClass = await fetch(`http://localhost:8080/turmas/consultar-turma/${id}`, {
            method: "GET",
            headers: { 
                "Content-Type": "application/json",
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
            },
        })

        if (requestClass.ok) {
            const classDetail = await requestClass.json(); // Transforma a resposta em JSON
            console.log(classDetail)
            setClassDetail(classDetail)

            if (classDetail.criador.id == user.id) {
                setIsCreator(true)
            } else {
                setIsCreator(false)
            }

        } else {  
            console.error('Erro ao criar sala:', response.statusText);
        }
    }

    const getConteudos = async () => {
        const requestConteudo = await fetch(`http://localhost:8080/conteudos/turma/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem('token'),
            },
        })

        if (requestConteudo.ok) {
            const conteudoList = await requestConteudo.json();
            setConteudos(conteudoList);

        } else {
            console.log('Erro ao criar sala:', response.statusText);
        }

    }

    useEffect(()=>{
        classDetails();
        getConteudos();
    }, [])

    function addConteudo() {
        setShowForm(true)
    }

    function confirmDeleteSala() {
        setShowConfirmDeleteSala(true)
    }

    function confirmDeleteConteudo(idConteudo ,tituloConteudo) {
        setShowConfirmDeleteConteudo(true)
        setConteudoDelete({
            id: idConteudo,
            titulo: tituloConteudo
        })
    }
    
    async function handleDeleteSala(event) {
        event.preventDefault()
        setShowConfirmDeleteSala(false)
        navigate("/home")
    }

    async function handleDeleteConteudo(event) {
        event.preventDefault()
        console.log(conteudoDelete)
        setShowConfirmDeleteConteudo(false)
    }

    function handleCancel(event) {
        event.preventDefault()
        console.log("cancelar")
        setShowForm(false)
        setShowConfirmDeleteSala(false)
        setShowConfirmDeleteConteudo(false)
    }

    //Tratamento do formulário
    const [form, setForm] = useState({});

    async function handleAdd(event) {
        event.preventDefault()
        
        const request = await fetch(`http://localhost:8080/conteudos?idTurma=${id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem('token'),
            },
            body: JSON.stringify({
                titulo: form.tituloConteudo,
                descricao: form.descricaoConteudo,
            })
        })

        if (request.ok) {
            getConteudos()
        }
        
        setShowForm(false)
    }

    //Formulário de adicionar conteúdo
    const addConteudoFields = [
        {
            name: "tituloConteudo", 
            type: "text", 
            placeholder: "Titulo do conteúdo", 
            tag: "input"
        }, 
        {
            name: "descricaoConteudo", 
            type: "text", 
            placeholder: "Descrição do conteúdo", 
            tag: "textarea"
        },
    ]

    const addConteudoButtons = [
        {
            text: "Adicionar",
            function: handleAdd,
        },
        {
            text: "Cancelar",
            function: handleCancel,
        }
    ]

    //Formulário de deletar sala
    const deleteSalaButtons = [
        {
            text: "Sim",
            function: handleDeleteSala,
        },
        {
            text: "Não",
            function: handleCancel,
        }
    ]

    const deleteSalaTitle = "Deseja realmente excluir a sala?"

    //Formulário de deletar conteúdo
    const deleteConteudoButtons = [
        {
            text: "Sim",
            function: handleDeleteConteudo,
        },
        {
            text: "Não",
            function: handleCancel,
        }
    ]

    const deleteConteudoTitle = `Deseja realmente excluir o conteúdo ${conteudoDelete.titulo}?`

    return (
        <>
            <Container>
                <Sidebar />
                {showForm && (
                    <DynamicForm fields={addConteudoFields} buttons={addConteudoButtons}
                        form={form} setForm={setForm}
                    />
                )}
                {showConfirmDeleteSala && (
                    <ConfirmDelete text={deleteSalaTitle} buttons={deleteSalaButtons} 
                        form={form} setForm={setForm}
                    />
                )}
                {showConfirmDeleteConteudo && (
                    <ConfirmDelete text={deleteConteudoTitle} buttons={deleteConteudoButtons} 
                        form={form} setForm={setForm}
                    />
                )}
                <SalaContainer>
                    <article>
                        <h1 className="title">{classDetail.titulo}</h1>
                        <p className="text" id="desc-sala">{classDetail.descricao}</p>
                    </article>
                    <Conteudos>
                        {conteudos.map((conteudo) => (
                            isCreator ? (
                                <div key={conteudo.id} style={{'width': '100%'}}>
                                    <ConteudoCard idConteudo={conteudo.id} titulo={conteudo.titulo} descricao={conteudo.descricao} data={conteudo.dataCriacao} confirmDeleteConteudo={confirmDeleteConteudo}/>
                                </div>
                            ) : (
                                <div key={conteudo.id} style={{'width': '100%'}}>
                                    <ConteudoCard titulo={conteudo.titulo} descricao={conteudo.descricao} data={conteudo.dataCriacao}/>
                                </div>
                            )
                        ))}
                    </Conteudos>
                    <Options>
                        {isCreator && <Button onClick={addConteudo}>Adicionar Conteudo</Button>}
                        <div>
                            {isCreator ? 
                                <DeleteButton onClick={confirmDeleteSala} />
                            : 
                                <Button type="button" name="sairSala" >Sair da sala</Button>
                            }
                        </div>
                    </Options>
                </SalaContainer>
            </Container>
        </>
    )
}

export default Sala