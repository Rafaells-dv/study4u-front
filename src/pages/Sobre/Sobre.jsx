import React from "react"
import { Article } from "./style";

function Sobre() {
    return (
        <>
            <main>
                <Article id="sobre">
                    <h1 className="title">
                        Sobre nós
                    </h1>
                    <p className="text">
                    O Study4u é um projeto desenvolvido como parte de um trabalho acadêmico dedicado à exploração e implementação de conceitos de desenvolvimento web. Concebido como uma plataforma para facilitar o acesso à educação de qualidade, este projeto representa a colaboração e o esforço de uma equipe de estudantes dedicados.
                    </p>
                    <p className="text">
                        Feito por: Gabriel Antonio Veiga, Ian Bailone, Lucas Venturin, Rafael Leonardo e Vinicyus Hartmann.
                    </p>
                </Article>
            </main>
        </>
    )
}

export default Sobre;