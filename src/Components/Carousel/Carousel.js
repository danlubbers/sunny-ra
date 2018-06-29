import React, {Component} from 'react';
import Slider from 'react-slick';

import blacksand from '../../assets/images/black-sand.jpg';

export default class Carousel extends Component {
    render() {

        const settings = {
            dots: true, 
            arrows: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToSlide: 4,
            autoplay: true, 
            autoPlaySpeed: 500,
            cssEase: "linear",
            pauseOnHover: false,
            adaptiveHeight: true,
            initialSlide: 0
        };
    
    return(
        <div className='carousel-container'>
            <Slider ref={slider => (this.slider = slider)}{...settings} style={{position: 'relative',    zIndex: '500 !important'}}>
            </Slider>
            <div className='carousel'>
                <div>
                    <img className="carousel-image" src={blacksand} alt="Black Sand"/>
                </div>
            </div>
        </div>
    )
    }
}