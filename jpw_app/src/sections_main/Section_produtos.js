import React, { Component } from 'react';
import Carousel_completo from './carousel/Carousel_completo';

export default class Section_produtos extends Component {
    render() {
        return (
            <div class="fundo_produtos">
                <div class="container py-sm-1 py-md-3 py-lg-5">
                    <div class="row justify-content-center align-items-center py-5">
                        <h1>NOSSOS PRODUTOS</h1>
                        <h2>(TEMOS UMA VARIEDADE GRANDE DE OUTROS PRODUTOS)</h2>
                        <div class="d-flex flex-row justify-content-center align-items-center flex-wrap col-lg-10 mt-4">
                            <Carousel_completo/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}