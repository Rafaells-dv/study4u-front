import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../../components/Button/Button.jsx";
import ConfirmDelete from "../../components/ConfirmDelete/ConfirmDelete.jsx";
import {
  Container,
  MainContent,
} from "../../components/Container/Container.jsx";
import ConteudoCard from "../../components/ConteudoCard/ConteudoCard.jsx";
import DeleteButton from "../../components/DeleteButton/DeleteButton.jsx";
import DynamicForm from "../../components/DynamicForm/DynamicForm.jsx";
import Sidebar from "../../components/Sidebar/Sidebar.jsx";
import { UserContext } from "../../contexts/UserContext.jsx";
import { Conteudos, Options, SalaContainer } from "./style.js";

function Sala() {
  const [showFormAddConteudo, setShowFormAddConteudo] = useState(false);
  const [classDetail, setClassDetail] = useState({});
  const [conteudos, setConteudos] = useState([]);
  const [isCreator, setIsCreator] = useState(false);
  const [showConfirmDeleteSala, setShowConfirmDeleteSala] = useState(false);
  const [showConfirmDeleteConteudo, setShowConfirmDeleteConteudo] =
    useState(false);
  const [conteudoDelete, setConteudoDelete] = useState({});
  const [showConfirmExitSala, setShowConfirmExitSala] = useState(false);
  const [form, setForm] = useState({});

  const { user } = useContext(UserContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const classDetails = async () => {
    const requestClass = await fetch(
      `http://localhost:8080/turmas/consultar-turma/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );

    if (requestClass.ok) {
      const classDetail = await requestClass.json(); // Transforma a resposta em JSON
      console.log(classDetail);
      setClassDetail(classDetail);

      if (classDetail.criador.id == user.id) {
        setIsCreator(true);
      } else {
        setIsCreator(false);
      }
    } else {
      console.error("Erro ao criar sala:", response.statusText);
    }
  };

  const getConteudos = async () => {
    const requestConteudo = await fetch(
      `http://localhost:8080/conteudos/turma/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );

    if (requestConteudo.ok) {
      const conteudoList = await requestConteudo.json();
      console.log(conteudoList);
      setConteudos(conteudoList);
    } else {
      console.log("Erro ao pegar conteudos:", response.statusText);
    }
  };

  useEffect(() => {
    classDetails();
    getConteudos();
  }, []);

  //Funções de Sala

  async function handleDeleteSala(event) {
    event.preventDefault();
    console.log("deletar sala");
    console.log(id);
    const requestDeleteSala = await fetch(
      `http://localhost:8080/turmas/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );

    if (requestDeleteSala.ok) {
      setShowConfirmDeleteSala(false);
      toast.success("Sala deletada com sucesso!");
      navigate("/home");
    } else
      (error) => {
        toast.error("Erro ao deletar sala!");
        console.log(error);
      };
  }

  async function exitClass(event) {
    event.preventDefault();
    console.log("sair da sala");
    console.log({
      idSala: id,
      idUsuario: user.id,
    });
    const requestExitClass = await fetch(
      `http://localhost:8080/turmas/${id}/remover-usuario?usuarioId=${user.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );

    if (requestExitClass.ok) {
      setShowConfirmExitSala(false);
      toast.success("Saiu da sala com sucesso!");
      navigate("/home");
    } else
      (error) => {
        toast.error("Erro ao sair da sala!");
        console.log(error);
      };
  }

  //Funções de Conteúdo

  async function handleAddConteudo(event) {
    event.preventDefault();

    if (!form.tituloConteudo || !form.descricaoConteudo) {
      toast.error("Preencha todos os campos!");
      return;
    }

    const request = await fetch(
      `http://localhost:8080/conteudos?idTurma=${id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        body: JSON.stringify({
          titulo: form.tituloConteudo,
          descricao: form.descricaoConteudo,
        }),
      }
    );

    if (request.ok) {
      toast.success("Conteúdo adicionado com sucesso!");
      getConteudos();
    } else
      (error) => {
        toast.error("Erro ao adicionar conteúdo!");
        console.log(error);
      };

    setShowFormAddConteudo(false);
  }

  function confirmDeleteConteudo(idConteudo, tituloConteudo) {
    setShowConfirmDeleteConteudo(true);
    setConteudoDelete({
      id: idConteudo,
      titulo: tituloConteudo,
    });
  }

  async function handleDeleteConteudo(event) {
    event.preventDefault();
    console.log("deletar conteudo");
    console.log(conteudoDelete);

    const resquestDeleteConteudo = await fetch(
      `http://localhost:8080/conteudos/${conteudoDelete.id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );

    if (resquestDeleteConteudo.ok) {
      getConteudos();
      toast.success("Conteúdo deletado com sucesso!");
      setShowConfirmDeleteConteudo(false);
    }
  }

  //Função de cancelar dos formulários

  function handleCancel(event) {
    event.preventDefault();
    console.log("cancelar");
    setShowFormAddConteudo(false);
    setShowConfirmDeleteSala(false);
    setShowConfirmDeleteConteudo(false);
    setShowConfirmExitSala(false);
  }

  //Tratamento de formulários

  //Adicionar conteúdo
  const addConteudoFields = [
    {
      name: "tituloConteudo",
      type: "text",
      placeholder: "Titulo do conteúdo",
      tag: "input",
    },
    {
      name: "descricaoConteudo",
      type: "text",
      placeholder: "Descrição do conteúdo",
      tag: "textarea",
    },
  ];

  const addConteudoButtons = [
    {
      text: "Adicionar",
      function: handleAddConteudo,
    },
    {
      text: "Cancelar",
      function: handleCancel,
    },
  ];

  //Confirmar deletar conteúdo
  const deleteConteudoButtons = [
    {
      text: "Sim",
      function: handleDeleteConteudo,
    },
    {
      text: "Não",
      function: handleCancel,
    },
  ];

  const deleteConteudoTitle = `Deseja realmente excluir o conteúdo ${conteudoDelete.titulo}?`;

  //Confirmar deletar sala
  const deleteSalaButtons = [
    {
      text: "Sim",
      function: handleDeleteSala,
    },
    {
      text: "Não",
      function: handleCancel,
    },
  ];

  const deleteSalaTitle = "Deseja realmente excluir a sala?";

  //Confirmar saída da sala
  const exitClassButtons = [
    {
      text: "Sim",
      function: exitClass,
    },
    {
      text: "Não",
      function: handleCancel,
    },
  ];

  const exitClassTitle = `Deseja realmente sair da sala?`;

  return (
    <>
      <Container>
        <Sidebar />
        <MainContent>
          {showFormAddConteudo && (
            <DynamicForm
              fields={addConteudoFields}
              buttons={addConteudoButtons}
              form={form}
              setForm={setForm}
            />
          )}

          {showConfirmDeleteSala && (
            <ConfirmDelete
              text={deleteSalaTitle}
              buttons={deleteSalaButtons}
              form={form}
              setForm={setForm}
            />
          )}

          {showConfirmDeleteConteudo && (
            <ConfirmDelete
              text={deleteConteudoTitle}
              buttons={deleteConteudoButtons}
              form={form}
              setForm={setForm}
            />
          )}

          {showConfirmExitSala && (
            <ConfirmDelete
              text={exitClassTitle}
              buttons={exitClassButtons}
              form={form}
              setForm={setForm}
            />
          )}
          <SalaContainer>
            <article>
              <div>
                <h1 className="title">{classDetail.titulo}</h1>
                <p className="text" id="desc-sala">
                  {classDetail.descricao}
                </p>
              </div>
              <div>
                <div className="detail-line">
                  <p className="text">Criador: </p>
                  <p className="text">{classDetail.criador?.nome}</p>
                </div>
                <div className="detail-line">
                  <p className="text">Codigo da sala:</p>
                  <p className="text">{classDetail.id}</p>
                </div>
              </div>
            </article>
            <Conteudos>
              {conteudos.map((conteudo) => (
                <div key={conteudo.id} style={{ width: "100%" }}>
                  <ConteudoCard
                    idConteudo={conteudo.id}
                    titulo={conteudo.titulo}
                    descricao={conteudo.descricao}
                    data={conteudo.dataCriacao}
                    isCreator={isCreator}
                    confirmDeleteConteudo={() =>
                      confirmDeleteConteudo(conteudo.id, conteudo.titulo)
                    }
                  />
                </div>
              ))}
            </Conteudos>
            <Options>
              {isCreator && (
                <Button onClick={() => setShowFormAddConteudo(true)}>
                  Adicionar Conteudo
                </Button>
              )}
              <div>
                {isCreator ? (
                  <DeleteButton
                    onClick={() => setShowConfirmDeleteSala(true)}
                  />
                ) : (
                  <Button
                    type="button"
                    name="sairSala"
                    onClick={() => setShowConfirmExitSala(true)}
                  >
                    Sair da sala
                  </Button>
                )}
              </div>
            </Options>
          </SalaContainer>
        </MainContent>
      </Container>
    </>
  );
}

export default Sala;
