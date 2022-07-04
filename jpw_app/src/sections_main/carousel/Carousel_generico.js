import React, { Component } from 'react';
import carousel from '../../json/carousel.json'
import Flip from './Flip'

export default class Carousel_generico extends Component {
    constructor(props){
        super(props);
        this.state = carousel
    }
    render() {
        return (
            <div>
                <div className="d-flex">
                    <Flip/>
                    <Flip/>
                    <Flip/>
                    <Flip/>
                </div>
            </div>
        );
    }
}
