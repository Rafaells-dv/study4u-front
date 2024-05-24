import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar.jsx"
import ConteudoCard from "../../components/ConteudoCard/ConteudoCard.jsx"
import Button from "../../components/Button/Button.jsx";
import { useParams } from "react-router-dom";
import DynamicForm from "../../components/DynamicForm/DynamicForm.jsx";
import { Container } from "../../components/Container/Container.jsx";
import { Conteudos, Options, SalaContainer } from "./style.js";

function Sala() {

    const [showForm, setShowForm] = useState(false)
    const [classDetail, setClassDetail] = useState({})
    const [conteudos , setConteudos] = useState([])

    const { id } = useParams()

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
            setClassDetail(classDetail)
            
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

    function handleCancel(event) {
        event.preventDefault()
        console.log("cancelar")
        setShowForm(false)
    }

    const fields = [
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

    const buttons = [
        {
            text: "Adicionar",
            function: handleAdd,
        },
        {
            text: "Cancelar",
            function: handleCancel,
        }
    ]


    return (
        <>
            <Container>
                <Sidebar />
                {showForm && (
                    <DynamicForm fields={fields} buttons={buttons} 
                        handleAdd={handleAdd} handleCancel={handleCancel} 
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
                            <div key={conteudo.id} style={{'width': '100%'}}>
                                <ConteudoCard titulo={conteudo.titulo} descricao={conteudo.descricao} data={conteudo.dataCriacao}/>
                            </div>
                        ))}
                    </Conteudos>
                    <Options>
                        <Button onClick={addConteudo}>Adicionar Conteudo</Button>
                        <div>
                            <Button type="button" name="excluir" >Excluir</Button>
                            <Button type="button" name="sairSala" >Sair da sala</Button>
                        </div>
                    </Options>
                </SalaContainer>
            </Container>
        </>
    )
}

export default Sala