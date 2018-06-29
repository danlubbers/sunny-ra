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
            autoplay: false, 
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
                    <div className='text-box'>
                        <h1>Black Sand 44in x 68in Oil on Canvas</h1>
                    </div>
                    <div>
                        <img className="carousel-image" src={blacksand} alt="Black Sand"/>
                    </div>
                </div>
                <div>
                    <div className='text-box'>
                        <h1>Mammoth 42in x 38in Oil on Canvas</h1>
                    </div>
                    <div>
                        <img className="carousel-image" src={mammoth} alt="Mammoth"/>
                    </div>
                </div>
                <div>
                    <div className='text-box'>
                        <h1>Flight 11in x 14in Oil on Paper</h1>
                    </div>
                    <div>
                        <img className="carousel-image" src={flight} alt="Flight"/>
                    </div>
                </div>
                <div>
                    <div className='text-box'>
                        <h1>Manta 16in x 20in Oil on Canvas mounted on panel</h1>
                    </div>
                    <div>
                        <img className="carousel-image" src={manta} alt="Manta"/>
                    </div>
                </div>
                <div>
                    <div className='text-box'>
                        <h1>Kinetic 14in x 11in Oil on Paper</h1>
                    </div>
                    <div>
                        <img className="carousel-image" src={kinetic} alt="Kinetic"/>
                    </div>
                </div>
                <div>
                    <div className='text-box'>
                        <h1>Might 11in x 14in Oil on Paper</h1>
                    </div>
                    <div>
                        <img className="carousel-image" src={might} alt="Might"/>
                    </div>
                </div>
                <div>
                    <div className='text-box'>
                        <h1>Radiate 32in x 48in Oil on Canvas</h1>
                    </div>
                    <div>
                        <img className="carousel-image" src={radiate} alt="Radiate"/>
                    </div>
                </div>
                <div>
                    <div className='text-box'>
                        <h1>Nebula 12in x 16in Oil on Canvas mounted on Panel "SOLD"</h1>
                    </div>
                    <div>
                        <img className="carousel-image" src={nebula} alt="Nebula"/>
                    </div>
                </div>
                <div>
                    <div className='text-box'>
                        <h1>Chase 16in x 12in Oil on Canvas mounted on Panel "SOLD"</h1>
                    </div>
                    <div>
                        <img className="carousel-image" src={chase} alt="Chase"/>
                    </div>
                </div>
                <div>
                    <div className='text-box'>
                        <h1>Harvest 11in x 14in Oil on Paper</h1>
                    </div>
                    <div>
                        <img className="carousel-image" src={harvest} alt="Harvest"/>
                    </div>
                </div>
                <div>
                    <div className='text-box'>
                        <h1>Expedition 16in x 12in Oil on Canvas mounted on Panel</h1>
                    </div>
                    <div>
                        <img className="carousel-image" src={expedition} alt="Expedition"/>
                    </div>
                </div>
            </Slider>
        </div>
    )
    }
}