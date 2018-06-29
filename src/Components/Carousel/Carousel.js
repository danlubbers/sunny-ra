import React, {Component} from 'react';
import Slider from 'react-slick';

import blacksand from '../../assets/images/black-sand.jpg';
import mammoth from '../../assets/images/mammoth.jpg';

export default class Carousel extends Component {
    
    render() {

        var settings = {
            dots: true, 
            arrows: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToSlide: 2,
            autoplay: false, 
            autoPlaySpeed: 500,
            cssEase: "linear",
            pauseOnHover: false,
            adaptiveHeight: true,
            initialSlide: 0,
            centerMode: true,
        };
    
    return (
        <div className='carousel-container'>
            <Slider ref={slider => (this.slider = slider)}{...settings} style={{position: 'relative',    zIndex: '500 !important'}}>
          
                <div>
                    <img className="carousel-image" src={blacksand} alt="Black Sand"/>
                </div>
                <div>
                    <img className="carousel-image" src={mammoth} alt="Mammoth"/>
                </div>
            
            </Slider>
        </div>
    )
    }
}