import React, { useState } from "react";
import * as api from "../services/Endpoints";
import "../css/style.css";
import swal from "sweetalert2";
import { Link } from "react-router-dom";


const NovoCliente = () => {
  const estadoInicialCliente = {
    id: null,
    nome: "",
    telefone: "",
  };
  const [cliente, setCliente] = useState(estadoInicialCliente);
  const [submitted, setSubmitted] = useState(false);

  const trataCampo = (event) => {
    const tel = document.getElementById("telefone");
    tel.addEventListener("keypress", (e) => mascaraTelefone(e.target.value));
    tel.addEventListener("change", (e) => mascaraTelefone(e.target.value));

    const mascaraTelefone = (valor) => {
      valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2");
      valor = valor.replace(/(\d)(\d{4})$/, "$1$2");
      tel.value = valor;
    };
    const { name, value } = event.target;
    setCliente({ ...cliente, [name]: value });
  };

  const novo = () => {
    setCliente(estadoInicialCliente);
    document.getElementById("chekbox").checked = false;
    setSubmitted(false);
  };

  const enviarCliente = () => {
    console.log(document.getElementById("chekbox").checked);
    if (cliente.telefone.length < 12) {
      swal.fire({
        title: "Algo deu errado",
        icon: "error",
        text: "O campo telefone precisa ter mais de 10 números, favor preenche-lo corretamente",
        confirmButtonColor: "#ffa600e6",
      });
    } else if (cliente.nome.length < 1) {
      swal.fire({
        title: "Algo deu errado",
        icon: "error",
        text: "O campo nome precisa ter mais de 1 letra, favor preenche-lo corretamente",
        confirmButtonColor: "#ffa600e6",
      });
    } else if (!document.getElementById("chekbox").checked) {
      swal.fire({
        title: "Algo deu errado",
        icon: "error",
        text: "Você precisa aceitar os termos e condições para envio do formulário",
        confirmButtonColor: "#ffa600e6",
      });
    } else {
      var tel = cliente.telefone.replace(/[^\d]+/g, "");
      swal.fire({
        title: "Sucesso",
        icon: "success",
        text: "Formulario enviado com sucesso",
        confirmButtonColor: "#ffa600e6",
      });
      var data = {
        nome: cliente.nome,
        telefone: tel,
      };
      console.log(data);
      api
        .create(data)
        .then((response) => {
          setCliente({
            nome: response.data.nome,
            telefone: response.data.telefone,
          });
          setSubmitted(true);
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
      novo();
    }
  };
  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>Cliente cadastrado com sucesso!</h4>
          <button className="btn btn-success botao_form" onClick={novo}>
            Novo
          </button>
        </div>
      ) : (
        <div class="forms">
          <div className="textinput">
            <input
              type="text"
              className="border-0 border-bottom mt-lg-5 forms-inp inp600 p-1"
              id="nome"
              required
              value={cliente.nome}
              onChange={trataCampo}
              name="nome"
              placeholder="Nome"
            />
            <input
              type="telephone"
              className="border-0 border-bottom inp600 p-1"
              id="telefone"
              required
              value={cliente.telefone}
              maxlength="14"
              onChange={trataCampo}
              name="telefone"
              placeholder="Telefone"
            />
          </div>
          <div className="centralizar">
            <div class="chek">
              <input className="termo" type="checkbox" id="chekbox"></input>
               <p class="ptermo">Li e concordo com os temos de uso, para saber mais faça o download do mesmo através desse <Link to="/termo" target="_blank" class="linkTermo">link</Link></p>
            </div>
            <button onClick={enviarCliente} className="botao mx-2 text-center">
              Enviar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NovoCliente;
