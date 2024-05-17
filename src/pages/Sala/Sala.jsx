import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar"
import Card from "../../components/Card.jsx"
import FormConteudo from "../../components/FormConteudo";
import "./Sala.css"
import { useParams } from "react-router-dom";

function Sala() {

    const [showForm, setShowForm] = useState(false)

    const { id } = useParams()

    const classDetails = async () => {
        const request = await fetch(`http://localhost:8080/turmas/${id}`, {
            method: "GET",
            headers: { 
                "Content-Type": "application/json",
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
            },
        })

        if (request.ok) {
            const classDetail = await request.json(); // Transforma a resposta em JSON

            console.log(classDetail)
            
        } else {  
            console.error('Erro ao criar sala:', response.statusText);
        }
    }

    useEffect(()=>{
        classDetails();
        // fetch(`http://localhost:8080/turma/${id}`, {
        //     method: "GET",
        //     headers: {
        //         "Content-Type": "application/json",
        //         "Authorization": "Bearer " + localStorage.getItem('token')
        //     }
        // }).then((response)=>{
        //     return response.json()
        // }).then((data)=>{
        //     console.log(data)
        // })

    }, [])

    function addConteudo() {
        console.log("clicado")
        setShowForm(true)
    }


    return (
        <>
            <div id="private">
                <Sidebar />
                {showForm && (  <div id="form-popup"><FormConteudo setShowForm={setShowForm}/></div>)}
                <div id="sala">
                    <article>
                        <h1 className="title">id da sala: {id}</h1>
                        <p className="text" id="desc-sala">Descrição da sala</p>
                    </article>
                    <div id="conteudos">
                    </div>
                    <div id="sala-options">
                        <input type="button" name="adicionar" value="Adicionar conteúdo" onClick={addConteudo}/>
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