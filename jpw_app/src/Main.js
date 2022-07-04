import React, { Component } from 'react'
import Section_empresa from './sections_main/Section_empresa'
import Section_produtos from './sections_main/Section_produtos'
import Section_marcas from './sections_main/Section_marcas'
import Section_loja_movel from './sections_main/Section_loja_movel'
import Section_formulario from './sections_main/Section_formulario'

export default class Main extends Component {
  render() {
    return (
      <main>
          <Section_empresa/>
          <Section_produtos/>
          <Section_marcas/>
          <Section_loja_movel/>
          <Section_formulario/>
      </main>
    )
  }
}
