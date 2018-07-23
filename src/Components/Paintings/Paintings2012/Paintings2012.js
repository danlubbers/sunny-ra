import React, {Component} from 'react';
import Slider from 'react-slick';

import paintings20121 from '../../../assets/images/paintings/2012/paintings2012-1.jpg';
import paintings20122 from '../../../assets/images/paintings/2012/paintings2012-2.jpg';
import paintings20123 from '../../../assets/images/paintings/2012/paintings2012-3.jpg';
import paintings20124 from '../../../assets/images/paintings/2012/paintings2012-4.jpg';
import paintings20125 from '../../../assets/images/paintings/2012/paintings2012-5.jpg';
import paintings20126 from '../../../assets/images/paintings/2012/paintings2012-6.jpg';
import paintings20126M from '../../../assets/images/paintings/2012/paintings2012-6-mobile.jpg';
import paintings20127 from '../../../assets/images/paintings/2012/paintings2012-7.jpg';
import paintings20127M from '../../../assets/images/paintings/2012/paintings2012-7-mobile.jpg';
import paintings20128 from '../../../assets/images/paintings/2012/paintings2012-8.jpg';
import paintings20129 from '../../../assets/images/paintings/2012/paintings2012-9.jpg';
import paintings201210 from '../../../assets/images/paintings/2012/paintings2012-10.jpg';


export default class Paintings2012 extends Component {
    
    render() {

        var settings = {
            dots: true, 
            arrows: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToSlide: 9,
            autoplay: true, 
            autoPlaySpeed: 1000,
            cssEase: "linear",
            pauseOnHover: true,
            adaptiveHeight: true,
            initialSlide: 0,
            centerMode: true,
            centerPadding: 0,
        };
    
    return (
        <div className='paintings-container'>
            <div className='paintings-container-desktop'>
            <div className='content-wrapper'>
                <h1>2012 Paintings</h1>
                <div className='carousel-container'>
                    <Slider ref={slider => (this.slider = slider)}{...settings} style={{position: 'relative',    zIndex: '500 !important'}}>
                
                        <div className='image-wrapper'>
                            <div className='text-box'>
                                <h1 className='text-overlay'>A Breath</h1>
                                <h2>44in x 70in oil on canvas</h2>
                            </div>
                            <div>
                                <img className="carousel-image" src={paintings20121} alt="A Breath"/>
                            </div>
                        </div>
                        <div className='image-wrapper'>
                            <div className='text-box'>
                                <h1 className='text-overlay'>Aurora</h1>
                                <h2>44in x 68in oil on canvas</h2>
                            </div>
                            <div>
                                <img className="carousel-image" src={paintings20122} alt="Aurora"/>
                            </div>
                        </div>
                        <div className='image-wrapper'>
                            <div className='text-box'>
                                <h1 className='text-overlay'>Night Fog</h1>
                                <h2>44in x 68in oil on canvas</h2>
                            </div>
                            <div>
                                <img className="carousel-image" src={paintings20123} alt="Night Fog"/>
                            </div>
                        </div>
                        <div className='image-wrapper'>
                            <div className='text-box'>
                                <h1 className='text-overlay'>Escalate</h1>
                                <h2>49in x 22in oil on canvas N/A</h2>
                            </div>
                            <div>
                                <img className="carousel-image" src={paintings20124} alt="Escalate"/>
                            </div>
                        </div>
                        <div className='image-wrapper'>
                            <div className='text-box'>
                                <h1 className='text-overlay'>The Underground</h1>
                                <h2>44in x 70in oil on canvas</h2>
                            </div>
                            <div>
                                <img className="carousel-image" src={paintings20125} alt="The Underground"/>
                            </div>
                        </div>
                        <div className='image-wrapper'>
                            <div className='text-box'>
                                <h1 className='text-overlay-2'>Passing</h1>
                                <h2 className='text-overlay-2'>24in x 48in oil on canvas N/A</h2>
                            </div>
                            <div>
                                <img className="carousel-image" src={paintings20126} alt="Passing"/>
                            </div>
                        </div>
                        <div className='image-wrapper'>
                            <div className='text-box'>
                                <h1 className='text-overlay-2'>Heads Up</h1>
                                <h2 className='text-overlay-2'>44in x 68in oil on canvas SOLD</h2>
                            </div>
                            <div>
                                <img className="carousel-image" src={paintings20127} alt="Heads Up"/>
                            </div>
                        </div>
                        <div className='image-wrapper'>
                            <div className='text-box'>
                                <h1 className='text-overlay'>Overturn</h1>
                                <h2>68in x 44in oil on canvas N/A</h2>
                            </div>
                            <div>
                                <img className="carousel-image" src={paintings20128} alt="Overturn"/>
                            </div>
                        </div>
                        <div className='image-wrapper'>
                            <div className='text-box'>
                                <h1 className='text-overlay'>Sirens</h1>
                                <h2>32in x 42in oil on canvas</h2>
                            </div>
                            <div>
                                <img className="carousel-image" src={paintings20129} alt="Sirens"/>
                            </div>
                        </div>
                        <div className='image-wrapper'>
                            <div className='text-box'>
                                <h1 className='text-overlay'>Veil</h1>
                                <h2>42in x 32in oil on canvas</h2>
                            </div>
                            <div>
                                <img className="carousel-image" src={paintings201210} alt="Veil"/>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
            <div className='images-container-mobile'>
                <img className='mobile-images' src={paintings20121} alt='A Breath'/>
                <img className='mobile-images' src={paintings20122} alt='Aurora'/>
                <img className='mobile-images' src={paintings20123} alt='Night Fog'/>
                <img className='mobile-images' src={paintings20124} alt='Escalate'/>
                <img className='mobile-images' src={paintings20125} alt='The Underground'/>
                <img className='mobile-images' src={paintings20126M} alt='Passing'/>
                <img className='mobile-images' src={paintings20127M} alt='Heads Up'/>
                <img className='mobile-images' src={paintings20128} alt='Overturn'/>
                <img className='mobile-images' src={paintings20129} alt='Sirens'/>
                <img className='mobile-images' src={paintings201210} alt='Veil'/>
            </div>
        </div>
    )
    }
}