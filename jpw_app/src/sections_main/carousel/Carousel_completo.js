import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Flip from './Flip'

class Carousel_completo extends Component {
    render() {
        return (
            <>
                <div class="col-10 carousel carousel_grande">
                    <Carousel infiniteLoop useKeyboardArrows autoPlay showThumbs={false} showStatus={false}  stopOnHover={true} showArrows={true} transitionTime={5000}>
                    <div class="item d-flex justify-content-between align-center">
                        <Flip id="0"/>
                        <Flip id="1"/>
                        <Flip id="2"/>
                        <Flip id="3"/>
                    </div>
                    <div class="item d-flex justify-content-between align-center">
                        <Flip id="4"/>
                        <Flip id="5"/>
                        <Flip id="6"/>
                        <Flip id="7"/>
                    </div>
                    </Carousel>
                </div>
                <div class="col-10 carousel carousel_medio">
                    <Carousel infiniteLoop useKeyboardArrows autoPlay showThumbs={false} showStatus={false}  stopOnHover={true} showArrows={true} transitionTime={5000}>
                    <div class="item d-flex justify-content-between align-center">
                        <Flip id="0"/>
                        <Flip id="1"/>
                        <Flip id="2"/>
                    </div>
                    <div class="item d-flex justify-content-between align-center">
                        <Flip id="3"/>
                        <Flip id="4"/>
                        <Flip id="6"/>
                    </div>
                    </Carousel>
                </div>
                <div class="col-10 carousel carousel_pequeno">
                    <Carousel infiniteLoop useKeyboardArrows autoPlay showThumbs={false} showStatus={false}  stopOnHover={true} showArrows={true} transitionTime={5000}>
                    <div class="item d-flex justify-content-between align-center">
                        <Flip id="0"/>
                    </div>
                    <div class="item d-flex justify-content-between align-center">
                        <Flip id="1"/>   
                    </div>
                    <div class="item d-flex justify-content-between align-center">
                        <Flip id="2"/>
                    </div>
                    </Carousel>
                </div>
        </>
        );
    }
}

export default Carousel_completo;
