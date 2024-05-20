import React from "react";
import "./ConteudoCard.css"

function ConteudoCard(conteudo) {

    const date = new Date(conteudo.data);
    const day = date.getDate();
    let month = date.getMonth() + 1; // getMonth() retorna um valor de 0 a 11, então adicionamos 1
    const year = date.getFullYear();

    if (month < 10) {
        month = "0" + month.toString()
    }

    const formattedDate = `${day}/${month}/${year}`;

    return (
        <a>
            <div id="card-conteudo">
                <div id="dados-conteudo">
                    <h1 className="title" id="title-conteudo">{conteudo.titulo}</h1>
                    <p className="text" id="date-conteudo">{formattedDate}</p>
                </div>
                <div style={{ borderBottom: '1px solid black', marginBottom: '10px', width: '98%', alignSelf: 'center' }}></div>
                <p className="text" id="text-conteudo">{conteudo.descricao}</p>
            </div>
        </a>
    )
}

export default ConteudoCard