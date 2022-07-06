import estilo from '../../css/flip.module.css'
import React, { Component } from 'react';
import produtos from '../../json/produtos.json'

class Flip extends Component {
    constructor(props){
        super(props);
        this.state = produtos
    }
    render() {
        return (
            <>
                <div className={estilo.flipCard}>
                    <div className={estilo.flipCardInner}>
                        <div className={estilo.flipCardFront}>
                            <img src={this.state.produtos[this.props.id].img} width="200" height="200" alt=""/>
                            <div className={estilo.frontside}>{this.state.produtos[this.props.id].titulo} </div>
                        </div>
                        <div className={estilo.flipCardBack}>
                            <img src={this.state.produtos[this.props.id].img} width="200" height="200"/>
                            <div className={estilo.backside}>{this.state.produtos[this.props.id].descricao} </div>
                        </div>
                    </div>
                    </div>
            </>
        );
    }
}

export default Flip;
