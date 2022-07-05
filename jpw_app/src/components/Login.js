import React, {useEffect, useState } from "react";
import * as api from "../services/Endpoints";
import '../css/login.css'
import AcessoUser from './AcessoUser'
import swal from 'sweetalert2';

const Login = ({ submitted, setSubmitted }) => {

  const estadoInicial = {
    nome: "",
    senha: "",
  };
  const [user, setUser] = useState(estadoInicial);
  const [setErro] = useState("");
  
  const trataCampo = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  useEffect(() => {
    console.log("useEffect (" + localStorage.getItem("jwtToken")+")");
    if (localStorage.getItem("jwtToken") !== null) setSubmitted(true);
    else setSubmitted(false);
  }, []);

  const logar = () => {
    console.log(user);
    api
      .login(user)
      .then((response) => {
        setSubmitted(true);
        console.log(response.data);
        localStorage.setItem("jwtToken", response.data);
      })
      .catch((e) => {
        swal.fire({
          title: 'Usuário ou senha incorretos',
           icon: 'error',
          text: 'Favor informa o usuario e a senha corretos',
          confirmButtonColor: "#ffa600e6"
        })
        setErro("Usuário e/ou senha errado(s)");
      });
  };

  const logout = () => {
    console.log("saindo ....")
    localStorage.removeItem("jwtToken");
    setSubmitted(false);
  };
  return (
        <div className="submit-form">
          {submitted ? (
            <div>
              <AcessoUser submitted={setSubmitted}/>
            </div>
          ) : (
            <div className="Auth-form-container">
              <div className="Auth-form">
                <div className="Auth-form-content form-signin">
                  <img src="../../img/jpw.png" className="login-logo"/>
                  <h3 className="Auth-form-title ml">Faça o Login</h3>
                  <div className="form-group mt-3">
                    <label>Usuário</label>
                    <input
                      type="text"
                      className="form-control mt-1 input-login"
                      placeholder="Digite o nome do usuário"
                      id="nome" 
                      required value={user.nome} onChange={trataCampo} 
                      name="nome" 
                    />
                  </div>
                  <div className="form-group mt-1">
                    <label>Senha</label>
                    <input
                      type="password"
                      className="form-control mt-1 input-login"
                      placeholder="Digite a sua senha"
                      id="senha" 
                      required value={user.senha} 
                      onChange={trataCampo} 
                      name="senha"
                    />
                  </div>
                  <div className="d-grid gap-2">
                    <button onClick={logar} className="btn btn-warning">
                      Entrar
                    </button>
                  </div>
                </div>
              </div>
            </div>
              )}
            </div>
  ); 
};

export default Login;
