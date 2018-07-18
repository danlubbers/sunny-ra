import React, {Component} from 'react';
import Slider from 'react-slick';

import paintings20081 from '../../../assets/images/paintings/2008/paintings2008-1.jpg';
import paintings20082 from '../../../assets/images/paintings/2008/paintings2008-2.jpg';
import paintings20083 from '../../../assets/images/paintings/2008/paintings2008-3.jpg';
import paintings20083M from '../../../assets/images/paintings/2008/paintings2008-3-mobile.jpg';
import paintings20084 from '../../../assets/images/paintings/2008/paintings2008-4.jpg';
import paintings20084M from '../../../assets/images/paintings/2008/paintings2008-4-mobile.jpg';
import paintings20085 from '../../../assets/images/paintings/2008/paintings2008-5.jpg';
import paintings20085M from '../../../assets/images/paintings/2008/paintings2008-5-mobile.jpg';
import paintings20086 from '../../../assets/images/paintings/2008/paintings2008-6.jpg';
import paintings20086M from '../../../assets/images/paintings/2008/paintings2008-6-mobile.jpg';
import paintings20087 from '../../../assets/images/paintings/2008/paintings2008-7.jpg';
import paintings20087M from '../../../assets/images/paintings/2008/paintings2008-7-mobile.jpg';
import paintings20088 from '../../../assets/images/paintings/2008/paintings2008-8.jpg';
import paintings20088M from '../../../assets/images/paintings/2008/paintings2008-8-mobile.jpg';
import paintings20089 from '../../../assets/images/paintings/2008/paintings2008-9.jpg';


export default class Paintings2008 extends Component {
    
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
                    <h1>2008 Paintings</h1>
                    <div className='carousel-container'>
                        <Slider ref={slider => (this.slider = slider)}{...settings} style={{position: 'relative',    zIndex: '500 !important'}}>
                    
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    <h1  className='text-overlay'>Float 46in x 70in oil on canvas October 2009 SOLD</h1>
                                </div>
                                <div>
                                    <img className="carousel-image" src={paintings20081} alt="Float"/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                <h1  className='text-overlay'>Left Behind 42in x 32in oil on canvas October 2010 SOLD</h1>
                                </div>
                                <div>
                                    <img className="carousel-image" src={paintings20082} alt="Left Behind"/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                <h1  className='text-overlay'>Fallen 20in x 46in oil on canvas November 2009 SOLD</h1>
                                </div>
                                <div>
                                    <img className="carousel-image" src={paintings20083} alt="Fallen"/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                <h1  className='text-overlay'>Taking You Out 20in x 46in oil on canvas October 2009 SOLD</h1>
                                </div>
                                <div>
                                    <img className="carousel-image" src={paintings20084} alt="Taking You Out"/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                <h1  className='text-overlay'>Aftershock 20in x 46in oil on canvas September 2009</h1>
                                </div>
                                <div>
                                    <img className="carousel-image" src={paintings20085} alt="Aftershock"/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                <h1  className='text-overlay'>Burn Out Bright 20in x 46in oil on canvas September 2009</h1>
                                </div>
                                <div>
                                    <img className="carousel-image" src={paintings20086} alt="Burn Out Bright"/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                <h1  className='text-overlay'>Runway 20in x 46in oil on canvas August 2009</h1>
                                </div>
                                <div>
                                    <img className="carousel-image" src={paintings20087} alt="Runway"/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                {/* <h1  className='text-overlay'></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src={paintings20088} alt="untitled"/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                <h1  className='text-overlay'>Blur 16 ft across acrylic paint, pastel, graphite, vellum and canvas November 2009</h1>
                                </div>
                                <div>
                                    <img className="carousel-image" src={paintings20089} alt="Blur"/>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
                <div className='images-container-mobile'>
                    <img className='mobile-images' src={paintings20081} alt='Float'/>
                    <img className='mobile-images' src={paintings20082} alt='Left Behind'/>
                    <img className='mobile-images' src={paintings20083M} alt='Fallen'/>
                    <img className='mobile-images' src={paintings20084M} alt='Taking You Out'/>
                    <img className='mobile-images' src={paintings20085M} alt='Aftershock'/>
                    <img className='mobile-images' src={paintings20086M} alt='Burn Out Bright'/>
                    <img className='mobile-images' src={paintings20087M} alt='Runway'/>
                    <img className='mobile-images' src={paintings20088M} alt='untitled'/>
                    <img className='mobile-images' src={paintings20089} alt='Blur'/>
                </div>
        </div>
    )
    }
}