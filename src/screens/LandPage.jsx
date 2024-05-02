import React from "react";
import classphoto from "../assets/images/class.png"
import baloes from "../assets/images/baloes.png"
import mundo from "../assets/images/mundo.png"
import seguro from "../assets/images/seguro.png"
import estudante from "../assets/images/estudante.png"
import "./LandPage.css"

function LandPage() {
    return (
        <>
            <section id="introduction">
                <article>
                    <h1>Explore o Aprendizado Online</h1>
                    <p>Seja bem-vindo à plataforma líder em salas de aula virtuais.</p>
                    <p>Oferecemos uma experiência de aprendizado online completa, com recursos interativos, colaborativos e fáceis de usar.</p>
                </article>
                <img id="classroom" src={classphoto}/>
            </section>
            <section id="resources"></section>
                <h1>Por que escolher nossa sala de aula virtual?</h1>
                <div>
                    <div>
                        <img src={baloes}/>
                        <p>Converse, compartilhe arquivos e trabalhe em projetos em tempo real.</p>
                    </div>
                    <div>
                        <img src={mundo}/>
                        <p>Acesse de qualquer lugar, a qualquer hora, em qualquer dispositivo.</p>
                    </div>
                    <div>
                        <img src={seguro}/>
                        <p>Ambiente seguro e protegido para alunos e professores.</p>
                    </div>
                </div>
            <section id="depositions">
                <h1>Depoimentos e Inscrição</h1>
                <div>
                    <img src={estudante}/>
                    <p>"Eu amo como posso acessar minhas aulas de qualquer lugar. Fez toda a diferença na minha rotina de estudos." - João Pereira</p>
                </div>
                <input type="button" value="Cadastre-se"/>
            </section>
        </>
    )
}

export default LandPage