import React from "react";
import "./Salas.css"

function Salas(props) {
    return (
        <a>
            <div id="salas">
                <h1 className="title" id="title-salas">{props.titulo}</h1>
                <p className="title" id="desc-salas">{props.desc}</p>
            </div>
        </a>
    )
}

export default Salas