import React, { Component } from "react";
import Elemento_generico from "./Elemento_generico";

class Elemento_completo extends Component {
  render() {
    return (
      <div class="textos_footer">
        <Elemento_generico id={0} />
        <Elemento_generico id={1} />
        <Elemento_generico id={2} />
      </div>
    );
  }
}

export default Elemento_completo;
