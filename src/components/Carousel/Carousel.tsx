
import React, { Component } from "react";
import Slider from "react-slick";
import { CarouselTile } from "./CarouselTile"
import {
    Wrapper
} from "./Carousel.elements"

export class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: false,
            arrows: false,
            infinite: false,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1
        };
        
        return (
            <Wrapper>
                <Slider {...settings}>
                    <CarouselTile />
                    <CarouselTile />
                    <CarouselTile />
                    <CarouselTile />
                </Slider>
            </Wrapper>
        );
    }
}