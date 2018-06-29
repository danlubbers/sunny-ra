import React, {Component} from 'react';
import Slider from 'react-slick';

import blacksand from '../../assets/images/black-sand.jpg';
import mammoth from '../../assets/images/mammoth.jpg';
import flight from '../../assets/images/flight.jpg';
import manta from '../../assets/images/manta.jpg';
import kinetic from '../../assets/images/kinetic.jpg';
import might from '../../assets/images/might.jpg';
import radiate from '../../assets/images/mammoth.jpg';
import nebula from '../../assets/images/nebula.jpg';
import chase from '../../assets/images/mammoth.jpg';
import harvest from '../../assets/images/harvest.jpg';
import expedition from '../../assets/images/expedition.jpg';

export default class Carousel extends Component {
    
    render() {

        var settings = {
            dots: true, 
            arrows: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToSlide: 2,
            autoplay: true, 
            autoPlaySpeed: 500,
            cssEase: "linear",
            pauseOnHover: false,
            adaptiveHeight: true,
            initialSlide: 0,
            centerMode: true,
            centerPadding: 0,
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
                <div>
                    <img className="carousel-image" src={flight} alt="Flight"/>
                </div>
                <div>
                    <img className="carousel-image" src={manta} alt="Manta"/>
                </div>
                <div>
                    <img className="carousel-image" src={kinetic} alt="Kinetic"/>
                </div>
                <div>
                    <img className="carousel-image" src={might} alt="Might"/>
                </div>
                <div>
                    <img className="carousel-image" src={radiate} alt="Radiate"/>
                </div>
                <div>
                    <img className="carousel-image" src={nebula} alt="Nebula"/>
                </div>
                <div>
                    <img className="carousel-image" src={chase} alt="Chase"/>
                </div>
                <div>
                    <img className="carousel-image" src={harvest} alt="Harvest"/>
                </div>
                <div>
                    <img className="carousel-image" src={expedition} alt="Expedition"/>
                </div>
            </Slider>
        </div>
    )
    }
}