import { useEffect, useState } from "react";
import React from 'react'
import * as api from "../services/Endpoints";
import '../css/login.css'
import FooterHome from '../sections_main/footer/FooterHome'
 
const AcessoUser= ({ submitted }) => {
  const [clientes, setClientes] = useState([]);
  const FileDownload = require('js-file-download');

  const buscarClientes = () => {
    api
      .getAll()
      .then((response) => {
        setClientes(response.data);
        console.log("---------------------", response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const exportar = () => {
    api.exportExcel().then((response) => {
      FileDownload(response.data, `Clientes_JPW.xlsx`)
    })
  }

  const logout = () => {
    console.log("saindo ....")
    localStorage.removeItem("jwtToken");
    submitted(false);
  };

  useEffect(() => {
    buscarClientes();
  }, []);


  return (
    <>
      <nav className="d-flex container justify-content-between align-items-center my-0 p-0 pt-2">
        <img src="../../img/jpw.png" className="col-2" /> 
        <button onClick={logout} className="botao mx-2 p-1">Sair</button>
      </nav>
    <main className="container">
      
      
      {submitted && clientes.length === 0 && (
        <>
        </>
      )}
        {submitted && (
          <div className="container  m-0 p-0 list rowx d-flex flex-row justify-content-center d-flex align-items-start">
            <div className="col-md-6 p-0">
              <h4 className="">Clientes JPW</h4>
              <button onClick={exportar} className="botao">Exportar</button>
              {clientes.length !== 0 && (
                <table className="table col-lg-12 mt-3">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">Nome</th>
                      <th scope="col">Telefone</th>
                      <th scope="col">Data_hora</th>
                    </tr>
                  </thead>
                  <tbody>
                    {clientes.map((data, key) => (
                      <tr scope="row" key={key}>
                        <td>{data.nome}</td>
                        <td>{data.telefone}</td>
                        <td>{data.localDateTime}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
            </div>
        )}
      </main>
      <FooterHome className="navbar-fixed-bottom"/>
    </>
  );
};

export default AcessoUser;