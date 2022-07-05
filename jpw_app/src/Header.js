import React, { Component } from 'react'

import Section_formulario from './sections_main/Section_formulario';

export default class Header extends Component {
  render() {
    return (
      <div>
        <header class="row m-0 p-0 border">
          <div class="col col-6 d-flex flex-column justify-content-center align-items-center py-lg-5 py-sm-3 border">
            <img class="col-sm-12 col-md-12 col-lg-10 logo" src="../img/jpw.png" />
            <h2 class="col-sm-12 col-md-11 pt-3 text-justify">PREÇO JUSTO COM ATENDIMENTO DIFERENCIADO EM FERRAGENS EM UBERLÂNDIA E REGIÃO?</h2>
            <a href="#formulario"><input type="button" value="Confira aqui!" className="confiraAqui"/></a>
            <a href='https://wa.me/5534984417989?text=Desejo%20fazer%20um%20orçamento' target="_blank" rel="noopener noreferrer"><img src='../img/zap.png' class='logozap'></img></a>
          </div>
        </header>
      </div>
    )
  }
}
