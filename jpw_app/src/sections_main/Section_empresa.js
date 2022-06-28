import React, { Component } from 'react';

export default class Section_empresa extends Component {
    render() {
        return (
            <div class="container py-sm-1 py-md-3 py-lg-5">
                <div class="row justify-content-center align-items-center py-4">
                    <h1>SOBRE A EMPRESA</h1>
                    <h2>(CONHEÇA A NOSSA EMPRESA)</h2>
                    <div class="d-flex flex-row justify-content-center align-items-center flex-wrap py-sm-1 col-lg-10 mt-3 col-10">
                        <img class="col-sm-8 col-md-6 col-lg-3 col-6 foto_wellington" src="../../img/foto.jpeg" />
                        <div class="col-lg-8 mx-3 px-2 my-3">
                            <p class="text-justify">Somos um empresa localizada na cidade de Uberlândia (MG) com foco na venda de  produtos para os seguintes seguimentos: <spam class="negrito">marcenaria</spam>, <spam class="negrito">marmoraria</spam>, <spam class="negrito">serralheria</spam> e <spam class="negrito">vidraçaria.</spam></p>
                            <p class="text-justify"><spam class="negrito">Wellington Oliveira</spam> é fundador da JPW Ferragens e natural da cidade de Uberlândia (MG). Sua experiência no ramo iniciou-se no ano de 1997. Segundo ele, no ano de 2011 decidiu realizar um grande sonho, criar a marca JPW Ferragens. Segundo Wellington, a marca foi idealizada para dar continuidade a um trabalho que já vinha sendo realizado com sucesso e que consistia na construção de uma base de clientes satisfeitos, a partir da entrega de produtos com qualidade e rapidez!</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}