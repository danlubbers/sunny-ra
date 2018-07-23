import React, {Component} from 'react';
import Slider from 'react-slick';

import paintings20141 from '../../../assets/images/paintings/2014/paintings2014-1.jpg';
import paintings20141M from '../../../assets/images/paintings/2014/paintings2014-1-mobile.jpg';
import paintings20142 from '../../../assets/images/paintings/2014/paintings2014-2.jpg';
import paintings20143 from '../../../assets/images/paintings/2014/paintings2014-3.jpg';
import paintings20144 from '../../../assets/images/paintings/2014/paintings2014-4.jpg';
import paintings20145 from '../../../assets/images/paintings/2014/paintings2014-5.jpg';
import paintings20146 from '../../../assets/images/paintings/2014/paintings2014-6.jpg';
import paintings20147 from '../../../assets/images/paintings/2014/paintings2014-7.jpg';
import paintings20147M from '../../../assets/images/paintings/2014/paintings2014-7-mobile.jpg';
import paintings20148 from '../../../assets/images/paintings/2014/paintings2014-8.jpg';



export default class Paintings2014 extends Component {
    
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
                    <h1>2014 Paintings</h1>
                    <div className='carousel-container'>
                        <Slider ref={slider => (this.slider = slider)}{...settings} style={{position: 'relative',    zIndex: '500 !important'}}>
                    
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    <h1 className='text-overlay-2'>Curl</h1>
                                    <h2 className='text-overlay-2'>30in x 48in oil on canvas 2014</h2>
                                </div>
                                <div>
                                    <img className="carousel-image" src={paintings20141} alt="Curl"/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    <h1 className='text-overlay'>Split</h1>
                                    <h2>44in x 68in oil on canvas 2014 N/A</h2>
                                </div>
                                <div>
                                    <img className="carousel-image" src={paintings20142} alt="Split"/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    <h1 className='text-overlay'>Molten</h1>
                                    <h2>46in x 30in oil on canvas 2014</h2>
                                </div>
                                <div>
                                    <img className="carousel-image" src={paintings20143} alt="Molten"/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    <h1 className='text-overlay'>The Fall</h1>
                                    <h2>42in x 30in oil on canvas 2014</h2>
                                </div>
                                <div>
                                    <img className="carousel-image" src={paintings20144} alt="The Fall"/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    <h1 className='text-overlay'>Within Reach</h1>
                                    <h2>32in x 42in oil on canvas 2014 SOLD</h2>
                                </div>
                                <div>
                                    <img className="carousel-image" src={paintings20145} alt="Within Reach"/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    <h1 className='text-overlay'>Pacific</h1>
                                    <h2>48in x 30in oil on canvas 2014</h2>
                                </div>
                                <div>
                                    <img className="carousel-image" src={paintings20146} alt="Pacific"/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    <h1 className='text-overlay-2'>Negative Seven</h1>
                                    <h2 className='text-overlay-2'>30in x 44in oil on canvas 2014 N/A</h2>
                                </div>
                                <div>
                                    <img className="carousel-image" src={paintings20147} alt="Negative Seven"/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    <h1 className='text-overlay'>detail of Negative Seven</h1>
                                </div>
                                <div>
                                    <img className="carousel-image" src={paintings20148} alt=""/>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
                <div className='images-container-mobile'>
                    <img className='mobile-images' src={paintings20141M} alt='Curl'/>
                    <img className='mobile-images' src={paintings20142} alt='Split'/>
                    <img className='mobile-images' src={paintings20143} alt='Molten'/>
                    <img className='mobile-images' src={paintings20144} alt='The Fall'/>
                    <img className='mobile-images' src={paintings20145} alt='Within Reach'/>
                    <img className='mobile-images' src={paintings20146} alt='Pacific'/>
                    <img className='mobile-images' src={paintings20147M} alt='Negative Seven'/>
                    <img className='mobile-images' src={paintings20148} alt='Negative Seven'/>
                </div>
        </div>
    )
    }
}