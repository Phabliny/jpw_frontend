import React, { Component } from "react";
import elementos from "../json/elementos.json";

export default class Elemento_generico extends Component {
  constructor(props) {
    super(props);
    this.state = elementos;
  }
  render() {
    return (
      <div class="elemento_footer align-items-center">
        <div>
          <img
            src={this.state.elementos[this.props.id].img}
            className="icone"
          />
        </div>
        <div class="na_coluna">
          <h5>{this.state.elementos[this.props.id].titulo}</h5>
          <p>{this.state.elementos[this.props.id].paragrafo}</p>
        </div>
      </div>
    );
  }
}
