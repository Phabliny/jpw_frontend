import React, { Component } from 'react';
import NovoCliente from "../components/NovoCliente";

export default class Section_formulario extends Component {
    render() {
        return (
            <div class="container py-sm-1 py-md-3 py-lg-5" id="formulario">
                <div class="d-flex flex-column justify-content-center align-items-center py-4 py-sm-1 py-md-3" >
                    <h1>POSSO TE AJUDAR?</h1>
                    <h2>(ENTRE EM CONTATO CONOSCO PARA FAZERMOS UM ORÇAMENTO)</h2>
                    <NovoCliente/>
                </div>
            </div>
        );
    }
}