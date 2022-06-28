import React, { Component } from 'react';

export default class Section_marcas extends Component {
    render() {
        return (
            <div class="container py-sm-1 py-md-3 py-lg-5">
                <div class="row justify-content-center align-items-center py-5">
                    <h1>PRINCIPAIS MARCAS</h1>
                    <h2>(TRABALHAMOS COM AS MELHORES MARCAS DO MERCADO)</h2>
                    <div class="marcas d-flex flex-row justify-content-center align-items-center flex-wrap mt-3 col-10 ">
                            <img src="../../img/logo_power.png" class="img_marca p-2 col-7 col-md-5 col-lg-3"/>
                            <img src="../../img/logo_kisafix.jpeg" class="img_marca p-2 col-7 col-md-5 col-lg-3"/>
                            <img src="../../img/logo_new-fix.jpeg" class="img_marca p-2 col-7 col-md-5 col-lg-3"/>
                            <img src="../../img/logo_ciser.png" class="img_marca p-2 col-7 col-md-5 col-lg-3"/>
                            <img src="../../img/logo_orbi.png" class="img_marca p-2 col-7 col-md-5 col-lg-3"/>
                            <img src="../../img/logo_alltape.png" class="img_marca p-2 col-7 col-md-5 col-lg-3"/>
                            <img src="../../img/logo_jo-marcas.png" class="img_marca p-2 col-7 col-md-5 col-lg-3"/>
                            <img src="../../img/logo_3m.png" class="img_marca p-2 col-7 col-md-5 col-lg-3"/>
                    </div>
                </div>
            </div>
        );
    }
}