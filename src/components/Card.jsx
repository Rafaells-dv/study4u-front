import React from "react";
import "./Card.css"

function Card(props) {
    return (
        <a>
            <div id="card-conteudo">
                <p className="title" id="title-conteudo">{props.titulo}</p>
            </div>
        </a>
    )
}

export default Card