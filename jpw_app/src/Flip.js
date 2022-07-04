import estilo from './css/flip.module.css'
import React, { Component } from 'react';

class Flip extends Component {
    render() {
        return (
            <>
                <div class={estilo.flipCard}>
                    <div class={estilo.flipCardInner}>
                        <div class={estilo.flipCardFront}>
                            <img src="../img/produtos/broca.jpg" width="200" height="200"/>
                            <div className={estilo.frontside}>RICKS</div>
                        </div>
                        <div class={estilo.flipCardBack}>
                            <img src="../img/produtos/broca.jpg" width="200" height="200"/>
                            <div className={estilo.backside}>ROCKS</div>
                        </div>
                    </div>
                    </div>
            </>
        );
    }
}

export default Flip;