import React, {Component} from 'react';
import Slider from 'react-slick';

import blacksand from '../../assets/images/home/black-sand.jpg';
import mammoth from '../../assets/images/home/mammoth.jpg';
import flight from '../../assets/images/home/flight.jpg';
import manta from '../../assets/images/home/manta.jpg';
import kinetic from '../../assets/images/home/kinetic.jpg';
import might from '../../assets/images/home/might.jpg';
import radiate from '../../assets/images/home/mammoth.jpg';
import nebula from '../../assets/images/home/nebula.jpg';
import chase from '../../assets/images/home/chase.jpg';
import harvest from '../../assets/images/home/harvest.jpg';
import expedition from '../../assets/images/home/expedition.jpg';

export default class Carousel extends Component {
    
    render() {

        var settings = {
            dots: true, 
            arrows: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToSlide: 1,
            autoplay: true, 
            autoPlaySpeed: 1000,
            cssEase: "linear",
            pauseOnHover: true,
            adaptiveHeight: false,
            initialSlide: 0,
            centerMode: true,
            centerPadding: 0,

        };
    
    return (
        <div className='content-wrapper'>
            <br />
            <div className='carousel-container'>
                <Slider ref={slider => (this.slider = slider)}{...settings} style={{position: 'relative',    zIndex: '500 !important'}}>
            
                    <div className='image-wrapper'>
                        <div className='text-box'>
                            <h1 className='text-overlay'>Black Sand</h1>
                            <h2>44in x 68in Oil on Canvas</h2>
                        </div>
                        <div>
                            <img className="carousel-image" src={blacksand} alt="Black Sand"/>
                        </div>
                    </div>
                    <div className='image-wrapper'>
                        <div className='text-box'>
                            <h1 className='text-overlay'>Mammoth</h1>
                            <h2>42in x 38in Oil on Canvas</h2>
                        </div>
                        <div>
                            <img className="carousel-image" src={mammoth} alt="Mammoth"/>
                        </div>
                    </div>
                    <div className='image-wrapper'>
                        <div className='text-box'>
                            <h1 className='text-overlay'>Flight</h1>
                            <h2>11in x 14in Oil on Paper</h2>
                        </div>
                        <div>
                            <img className="carousel-image" src={flight} alt="Flight"/>
                        </div>
                    </div>
                    <div className='image-wrapper'>
                        <div className='text-box'>
                            <h1 className='text-overlay'>Manta</h1>
                            <h2>16in x 20in Oil on Canvas mounted on panel</h2>
                        </div>
                        <div>
                            <img className="carousel-image" src={manta} alt="Manta"/>
                        </div>
                    </div>
                    <div className='image-wrapper'>
                        <div className='text-box'>
                            <h1 className='text-overlay'>Kinetic</h1>
                            <h2>14in x 11in Oil on Paper</h2>
                        </div>
                        <div>
                            <img className="carousel-image" src={kinetic} alt="Kinetic"/>
                        </div>
                    </div>
                    <div className='image-wrapper'>
                        <div className='text-box'>
                            <h1 className='text-overlay'>Might</h1>
                            <h2>11in x 14in Oil on Paper</h2>
                        </div>
                        <div>
                            <img className="carousel-image" src={might} alt="Might"/>
                        </div>
                    </div>
                    <div className='image-wrapper'>
                        <div className='text-box'>
                            <h1 className='text-overlay'>Radiate</h1>
                            <h2>32in x 48in Oil on Canvas</h2>
                        </div>
                        <div>
                            <img className="carousel-image" src={radiate} alt="Radiate"/>
                        </div>
                    </div>
                    <div className='image-wrapper'>
                        <div className='text-box'>
                            <h1 className='text-overlay'>Nebula</h1>
                            <h2>12in x 16in Oil on Canvas mounted on Panel "SOLD"</h2>
                        </div>
                        <div>
                            <img className="carousel-image" src={nebula} alt="Nebula"/>
                        </div>
                    </div>
                    <div className='image-wrapper'>
                        <div className='text-box'>
                            <h1 className='text-overlay'>Chase</h1>
                            <h2>16in x 12in Oil on Canvas mounted on Panel "SOLD"</h2>
                        </div>
                        <div>
                            <img className="carousel-image" src={chase} alt="Chase"/>
                        </div>
                    </div>
                    <div className='image-wrapper'>
                        <div className='text-box'>
                            <h1 className='text-overlay'>Harvest</h1>
                            <h2>11in x 14in Oil on Paper</h2>
                        </div>
                        <div>
                            <img className="carousel-image" src={harvest} alt="Harvest"/>
                        </div>
                    </div>
                    <div className='image-wrapper'>
                        <div className='text-box'>
                            <h1 className='text-overlay'>Expedition</h1>
                            <h2>16in x 12in Oil on Canvas mounted on Panel</h2>
                        </div>
                        <div>
                            <img className="carousel-image" src={expedition} alt="Expedition"/>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    )
    }
}