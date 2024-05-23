import React from "react";
import classphoto from "../../assets/images/class.png"
import baloes from "../../assets/images/baloes.png"
import mundo from "../../assets/images/mundo.png"
import seguro from "../../assets/images/seguro.png"
import estudante from "../../assets/images/estudante.png"
import setae from "../../assets/icons/setae.svg"
import setad from "../../assets/icons/setad.svg"
import { useNavigate } from "react-router-dom/dist";
import Button from "../../components/Button/Button";
import { Introduction, Resources, ResourcesContent, Depositions, DepositionsContent} from "./style.js";

function LandPage() {

    const navigate = useNavigate()

    return (
        <>
            <Introduction>
                <article>
                    <h1 className="title">Explore o Aprendizado Online</h1>
                    <p className="text">Seja bem-vindo à plataforma líder em salas de aula virtuais.</p>
                    <p className="text">Oferecemos uma experiência de aprendizado online completa, com recursos interativos, colaborativos e fáceis de usar.</p>
                </article>
                <img src={classphoto}/>
            </Introduction>
            <Resources>
                <h1 className="title">Por que escolher nossa sala de aula virtual?</h1>
                <ResourcesContent>
                    <div>
                        <img src={baloes}/>
                        <p className="text">Converse, compartilhe arquivos e trabalhe em projetos em tempo real.</p>
                    </div>
                    <div>
                        <img src={mundo}/>
                        <p className="text">Acesse de qualquer lugar, a qualquer hora, em qualquer dispositivo.</p>
                    </div>
                    <div>
                        <img src={seguro}/>
                        <p className="text">Ambiente seguro e protegido para alunos e professores.</p>
                    </div>
                </ResourcesContent>
            </Resources>    
            <Depositions>
                <h1 className="title">Depoimentos e Inscrição</h1>
                <DepositionsContent>
                    <img src={setae} className="icon"/>
                    <div>
                        <img src={estudante}/>
                        <p className="text">"Eu amo como posso acessar minhas aulas de qualquer lugar. Fez toda a diferença na minha rotina de estudos."</p>
                        <p className="text">- João Pereira</p>
                    </div>
                    <img src={setad} className="icon"/>
                </DepositionsContent>
                <Button type="button" onClick={()=>{navigate("/cadastro")}} className="text">Cadastre-se</Button>
            </Depositions>
        </>
    )
}

export default LandPage