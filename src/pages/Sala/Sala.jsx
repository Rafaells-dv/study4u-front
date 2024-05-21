import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar"
import ConteudoCard from "../../components/ConteudoCard.jsx"
import Button from "../../components/Button.jsx";
import "./Sala.css"
import { useParams } from "react-router-dom";
import DynamicForm from "../../components/DynamicForm.jsx";

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
            console.log(conteudoList)
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
            <div id="private">
                <Sidebar />
                {showForm && (
                    <div id="form-popup">
                        <DynamicForm idForm="add-conteudo" fields={fields} buttons={buttons} 
                            handleAdd={handleAdd} handleCancel={handleCancel} 
                            form={form} setForm={setForm}
                        />
                    </div>
                )}
                <div id="sala">
                    <article>
                        <h1 className="title">{classDetail.titulo}</h1>
                        <p className="text" id="desc-sala">{classDetail.descricao}</p>
                    </article>
                    <div id="conteudos">
                        {conteudos.map((conteudo) => (
                            <div key={conteudo.id} style={{'width': '100%'}}>
                                <ConteudoCard titulo={conteudo.titulo} descricao={conteudo.descricao} data={conteudo.dataCriacao}/>
                            </div>
                        ))}
                    </div>
                    <div id="sala-options">
                        <Button onClick={addConteudo}>Adicionar Conteudo</Button>
                        <div>
                            <input type="button" name="excluir" value="Excluir" />
                            <input type="button" name="sairSala" value="Sair da sala" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sala