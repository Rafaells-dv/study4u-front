import React, { useContext, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../../components/Button/Button.jsx";
import { Container } from "../../components/Container/Container.jsx";
import DynamicForm from "../../components/DynamicForm/DynamicForm.jsx";
import { Input } from "../../components/Input/Input.jsx";
import Loader from "../../components/Loader/Loader.jsx";
import Salas from "../../components/Salas/Salas.jsx";
import Sidebar from "../../components/Sidebar/Sidebar.jsx";
import { UserContext } from "../../contexts/UserContext.jsx";
import {
  GrupoSalas,
  HomeContainer,
  HomeInputs,
  SalasNotFound,
} from "./style.js";

function Home() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [salas, setSalas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showFormNewClass, setShowFormNewClass] = useState(false);
  const [form, setForm] = useState({});

  const { user } = useContext(UserContext);

  const filteredSalas = useMemo(() => {
    return search.length > 0
      ? salas.filter((sala) =>
          sala.titulo.toLowerCase().includes(search.toLowerCase())
        )
      : [];
  }, [salas, search]);

  useEffect(() => {
    if (filteredSalas.length === 0) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    }
  }, [filteredSalas]);

  async function getSalas() {
    try {
      await fetch(`http://localhost:8080/turmas/usuario/${user.id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.status == 401) {
            console.log(data);
          } else {
            setSalas(data);
            console.log(salas.length);
          }
        });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getSalas();
  }, []);

  async function enterClass(event) {
    event.preventDefault();
    console.log("entrar");
    console.log(form.codigoSala);

    if (!form.codigoSala) {
      toast.error("Preencha o campo de código da sala!");
      return;
    }

    const requestEnterClass = await fetch(
      `http://localhost:8080/turmas/${form.codigoSala}/atribuir-usuario?usuarioId=${user.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );

    if (requestEnterClass.ok) {
      getSalas();
      toast.success("Entrou na sala com sucesso!");
      setShowFormNewClass(false);
    } else
      (error) => {
        toast.error("Erro ao entrar na sala!");
        console.log(error);
      };
  }

  function handleCancel(event) {
    event.preventDefault();
    console.log("cancelar");
    setShowFormNewClass(false);
  }
  //
  const newClassFields = [
    {
      name: "codigoSala",
      type: "text",
      placeholder: "Codigo da sala",
      tag: "input",
    },
  ];

  const newClassButtons = [
    {
      text: "Entrar na sala",
      function: enterClass,
    },
    {
      text: "Cancelar",
      function: handleCancel,
    },
  ];

  return (
    <>
      <Container>
        <Sidebar />
        {showFormNewClass && (
          <DynamicForm
            fields={newClassFields}
            buttons={newClassButtons}
            form={form}
            setForm={setForm}
            page="newclass"
          />
        )}
        <HomeContainer>
          <HomeInputs>
            <Input
              type="search"
              className="text"
              name="pesquisar"
              placeholder="Pesquisar salas..."
              onChange={(event) => setSearch(event.target.value)}
              value={search}
            />
            <Button onClick={() => setShowFormNewClass(true)}>Nova Sala</Button>
          </HomeInputs>
          {salas.length == 0 ? (
            <article>
              <h1 className="title">Você não possui salas.</h1>
              <p className="text">Crie ou entre em uma nova sala.</p>
            </article>
          ) : (
            <GrupoSalas>
              {search.length > 0 ? (
                filteredSalas.length > 0 ? (
                  filteredSalas.map((sala) => (
                    <div
                      key={sala.id}
                      onClick={() => {
                        navigate(`/sala/${sala.id}`);
                      }}
                      style={{ cursor: "pointer" }}
                    >
                      <Salas titulo={sala.titulo} desc={sala.descricao} />
                    </div>
                  ))
                ) : (
                  <SalasNotFound>
                    {isLoading ? (
                      <Loader />
                    ) : (
                      <p className="text">Nenhuma sala encontrada.</p>
                    )}
                  </SalasNotFound>
                )
              ) : (
                salas.map((sala) => (
                  <div
                    key={sala.id}
                    onClick={() => {
                      navigate(`/sala/${sala.id}`);
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    <Salas titulo={sala.titulo} desc={sala.descricao} />
                  </div>
                ))
              )}
            </GrupoSalas>
          )}
        </HomeContainer>
      </Container>
    </>
  );
}

export default Home;
