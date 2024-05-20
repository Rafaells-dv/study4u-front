import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar"
import ConteudoCard from "../../components/ConteudoCard.jsx"
import FormConteudo from "../../components/FormConteudo";
import "./Sala.css"
import { useParams } from "react-router-dom";

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


    return (
        <>
            <div id="private">
                <Sidebar />
                {showForm && (  <div id="form-popup"><FormConteudo setShowForm={setShowForm} idTurma={id}/></div>)}
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