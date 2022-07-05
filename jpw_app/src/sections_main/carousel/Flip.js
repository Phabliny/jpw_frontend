import estilo from '../../css/flip.module.css'
import React, { Component } from 'react';

class Flip extends Component {
    render() {
        return (
            <>
                <div class={estilo.flipCard}>
                    <div class={estilo.flipCardInner}>
                        <div class={estilo.flipCardFront}>
                            <img src="../img/produtos/broca.jpg" width="200" height="200" alt=""/>
                            <div className={estilo.frontside}>vidracaria</div>
                        </div>
                        <div class={estilo.flipCardBack}>
                            <img src="../img/produtos/broca.jpg" width="200" height="200"/>
                            <div className={estilo.backside}>marmoaria</div>
                        </div>
                    </div>
                    </div>
            </>
        );
    }
}

export default Flip;
