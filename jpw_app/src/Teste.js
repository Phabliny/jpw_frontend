import Flippy, { FrontSide, BackSide } from 'react-flippy';
import React, { Component } from 'react';

class Teste extends Component {
    render() {
        // .. return
        return(
    <Flippy 
        flipOnHover={true} // default false
        flipOnClick={true} // default false
        flipDirection="horizontal" // horizontal or vertical
        ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
        // if you pass isFlipped prop component will be controlled component.
        // and other props, which will go to div
        style={{ width: '200px', height: '200px', marginTop: '200px', marginLeft: '200px'}} /// these are optional style, it is not necessary
    >
        <FrontSide className="flippy">
            <img src="../img/produtos/broca.jpg" width="200" height="200"/>
            <div className="backside">ROCKS</div>
            
        </FrontSide>
        <BackSide className="flippy">
            <img src="../img/produtos/broca.jpg" width="200" height="200"/>
            <div className="frontside">RICKS</div>
        </BackSide>
    </Flippy>)
    }
}

export default Teste;