import React, { Component } from 'react';

export default class Section_loja_movel extends Component {
    render() {
        return (
            <div class="fundo_loja_movel">
                <div class="container py-sm-1 py-md-3 py-lg-5 padnone">
                    <div class="row justify-content-center align-items-center py-5 py-sm-1 py-md-3">
                        <h1>NOVIDADE - LOJA MÓVEL</h1>
                        <h2>(LEVANDO AOS NOSSOS CLIENTES UM ATENDIMENTO PERSONALIZADO)</h2>
                        <div class="d-flex flex-row justify-content-center align-items-center flex-wrap col-lg-10 mt-3 col-8 p-1">
                            <img src="../../img/loja_movel.png" class="col-sm-12 col-md-9 col-lg-6 img_van" />
                            <p class="text-justify ml-2 col-lg-4">A JWP Ferragens irá contar, em breve, com um novidade que irá trazer ainda mais comodidade aos nossos clientes. Uma gama de opções de itens nos seguimentos de marcenaria, marmoraria, serralheria e vidraçaria irão até você. Entre em contato no <a href="#formulario">formulário</a> abaixo para saber mais ...</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}