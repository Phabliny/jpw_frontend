import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div>
        <header class="row m-0 p-0 border">
          <div class="col col-6 d-flex flex-column justify-content-center align-items-center py-lg-5 py-sm-3 border">
            <img class="col-sm-12 col-md-12 col-10 logo" src="../img/jpw.png" />
            <h2 class="col-sm-12 col-md-11 pt-3 text-justify">PREÇO JUSTO COM ATENDIMENTO DIFERENCIADO EM FERRAGENS EM UBERLÂNDIA E REGIÃO?</h2>
            <a href='https://wa.me/5534984417989?text=Desejo%20fazer%20um%20orçamento' target="_blank" rel="noopener noreferrer"><img src='../img/zap.png' class='logozap'></img></a>
          </div>
        </header>
        <nav class="none">
            <section>
              <div class="nav">
                <ul class="radial-nav">
                  <li data-content="js"><a href="">Sobre a empresa</a></li>
                  <li data-content="css"><a href="#">Nossos produtos</a></li>
                  <li data-content="html5"><a href="#">Principais marcas</a></li>
                  <li data-content="jade"><a href="#">Novidade! - Loja movel</a></li>
                  <li data-content="git"><a href="#">Posso te ajudar</a></li>
                </ul>
              </div>
              </section>
            </nav>
          </div>
          )
  }
}