import { useEffect, useState } from "react";
import React from 'react'
import * as api from "../services/Endpoints";
import axios from "axios";
 
const AcessoUser= ({ submitted }) => {
  const [clientes, setClientes] = useState([]);
  const FileDownload = require('js-file-download');

  const buscarClientes = () => {
    api.getAll().then((resp) => {
      console.log(resp);
      setClientes(resp.data);
    });
  };

  const exportar = () => {
    axios({
      url: "https://dashboard.heroku.com/apps/jpw/clientes/export/excel",
      method: "GET",
      responseType: "blob",

    }).then((res) => {
      FileDownload(res.data, `Clientes_JPW.xlsx`)
    })
  }

  const logout = () => {
    console.log("saindo ....")
    localStorage.removeItem("jwtToken");
    submitted(false);
  };

  useEffect(() => {
    setClientes([]);
  }, [submitted]);


  return (
    <>
    <button onClick={buscarClientes} className="botao mx-2 mb-3" style={{ width: "200px" }}>
            Buscar clientes
          </button>
          <button onClick={exportar} className="botao mx-2">
            Exportar
          </button>
          <button onClick={logout} className="botao mx-2">
            Sair
          </button>
      {submitted && clientes.length === 0 && (
        <>
        </>
      )}
      {submitted && (
        <ol>
          {clientes.map((cliente) => (
            <li>
              {cliente.nome} - {cliente.localDateTime}
            </li>
          ))}
        </ol>
      )}
    </>
  );
};

export default AcessoUser;