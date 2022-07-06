import { useEffect, useState } from "react";
import React from 'react'
import * as api from "../services/Endpoints";
import '../css/login.css'
import FooterHome from '../sections_main/footer/FooterHome'
 
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
    api.exportExcel().then((res) => {
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
    <nav className="d-flex container justify-content-between">
      <img src="../../img/jpw.png" className="col-sm-12 col-md-8 col-lg-2" /> 
      <button onClick={logout} className="botao mx-2 p-1">Sair</button>
    </nav>
    
          <button onClick={buscarClientes} className="botao mx-2 mb-3" style={{ width: "200px" }}>
            Buscar clientes
          </button>
          <button onClick={exportar} className="botao mx-2">
            Exportar
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
      <FooterHome className="position-fixed"/>
    </>
  );
};

export default AcessoUser;