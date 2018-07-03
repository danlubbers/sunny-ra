import React, {Component} from 'react';
import Slider from 'react-slick';

import commissioned1 from '../../assets/images/commissioned/commissioned-1.jpg';
import commissioned2 from '../../assets/images/commissioned/commissioned-2.jpg';
import commissioned3 from '../../assets/images/commissioned/commissioned-3.jpg';
import commissioned4 from '../../assets/images/commissioned/commissioned-4.jpg';
import commissioned5 from '../../assets/images/commissioned/commissioned-5.jpg';
import commissioned6 from '../../assets/images/commissioned/commissioned-6.jpg';
import commissioned7 from '../../assets/images/commissioned/commissioned-7.jpg';
import commissioned8 from '../../assets/images/commissioned/commissioned-8.jpg';
import commissioned9 from '../../assets/images/commissioned/commissioned-9.jpg';
import commissioned10 from '../../assets/images/commissioned/commissioned-10.jpg';
import commissioned11 from '../../assets/images/commissioned/commissioned-11.jpg';
import commissioned12 from '../../assets/images/commissioned/commissioned-12.jpg';


export default class Carousel extends Component {
    
    render() {

        var settings = {
            dots: true, 
            arrows: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToSlide: 11,
            autoplay: false, 
            autoPlaySpeed: 1000,
            cssEase: "linear",
            pauseOnHover: true,
            adaptiveHeight: true,
            initialSlide: 0,
            centerMode: true,
            centerPadding: 0,
        };
    
    return (
        <div className='carousel-container'>
            <Slider ref={slider => (this.slider = slider)}{...settings} style={{position: 'relative',    zIndex: '500 !important'}}>
          
                <div className='image-wrapper'>
                    <div className='text-box'>
                        <h1>Botanical Gardens</h1>
                    </div>
                    <div>
                        <img className="carousel-image" src={commissioned1} alt="Black Sand"/>
                    </div>
                </div>
                <div className='image-wrapper'>
                    <div className='text-box'>
                        <h1>Botanical Gardens</h1>
                    </div>
                    <div>
                        <img className="carousel-image" src={commissioned2} alt="Mammoth"/>
                    </div>
                </div>
                <div className='image-wrapper'>
                    <div className='text-box'>
                        <h1>12in x 12in Botanic Plein Air Painting Competition  September 2016</h1>
                    </div>
                    <div>
                        <img className="carousel-image" src={commissioned3} alt="Flight"/>
                    </div>
                </div>
                <div className='image-wrapper'>
                    <div className='text-box'>
                        <h1>18in x 48in oil on canvas for Botanica show 2014</h1>
                    </div>
                    <div>
                        <img className="carousel-image" src={commissioned4} alt="Manta"/>
                    </div>
                </div>
                <div className='image-wrapper'>
                    <div className='text-box'>
                        <h1>18in x 48in oil on canvas for Botanica show 2014</h1>
                    </div>
                    <div>
                        <img className="carousel-image" src={commissioned5} alt="Kinetic"/>
                    </div>
                </div>
                <div className='image-wrapper'>
                    <div className='text-box'>
                        <h1>8in x 8in oil on canvas for LVA's Art Squared 2014</h1>
                    </div>
                    <div>
                        <img className="carousel-image" src={commissioned6} alt="Might"/>
                    </div>
                </div>
                <div className='image-wrapper'>
                    <div className='text-box'>
                        <h1>8in x 8in oil on canvas for LVA's Art Squared 2014</h1>
                    </div>
                    <div>
                        <img className="carousel-image" src={commissioned7} alt="Radiate"/>
                    </div>
                </div>
                <div className='image-wrapper'>
                    <div className='text-box'>
                        <h1>Golden Gate 42in x 34in oil on canvas 2013</h1>
                    </div>
                    <div>
                        <img className="carousel-image" src={commissioned8} alt="Nebula"/>
                    </div>
                </div>
                <div className='image-wrapper'>
                    <div className='text-box'>
                        <h1>detail of Golden Gate</h1>
                    </div>
                    <div>
                        <img className="carousel-image" src={commissioned9} alt="Chase"/>
                    </div>
                </div>
                <div className='image-wrapper'>
                    <div className='text-box'>
                        <h1>detail of Golden Gate</h1>
                    </div>
                    <div>
                        <img className="carousel-image" src={commissioned10} alt="Harvest"/>
                    </div>
                </div>
                <div className='image-wrapper'>
                    <div className='text-box'>
                        <h1>drawing for painting 24in x 36in charcoal on paper</h1>
                    </div>
                    <div>
                        <img className="carousel-image" src={commissioned11} alt="Expedition"/>
                    </div>
                </div>
                <div className='image-wrapper'>
                    <div className='text-box'>
                        <h1>drawing for painting 24in x 36in charcoal on paper</h1>
                    </div>
                    <div>
                        <img className="carousel-image" src={commissioned12} alt="Expedition"/>
                    </div>
                </div>
            </Slider>
        </div>
    )
    }
}