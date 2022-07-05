import React, { Component } from 'react';
import carousel from '../../json/carousel.json'
import Flip from './Flip'

export default class Carousel_generico extends Component {
    constructor(props){
        super(props);
        this.state = carousel
    }

    /* verTamanho = () => {
        const largura = window.screen.width;
        if(largura < "600px") {
        }
    }*/
    
    render() {
        return (
            <div>
                <div className="d-flex justify-content-around">
                    <Flip/>
                    <Flip/>
                    <Flip/>
                </div>
            </div>
        );
    }
}
