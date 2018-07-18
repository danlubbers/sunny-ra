import React, {Component} from 'react';
import Slider from 'react-slick';

import paintings20061 from '../../../assets/images/paintings/2006/paintings2006-1.jpg';
import paintings20062 from '../../../assets/images/paintings/2006/paintings2006-2.jpg';
import paintings20063 from '../../../assets/images/paintings/2006/paintings2006-3.jpg';
import paintings20064 from '../../../assets/images/paintings/2006/paintings2006-4.jpg';
import paintings20065 from '../../../assets/images/paintings/2006/paintings2006-5.jpg';

export default class Paintings2006 extends Component {
    
    render() {

        var settings = {
            dots: true, 
            arrows: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToSlide: 5,
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
                    <h1>2006 Paintings</h1>
                    <div className='carousel-container'>
                        <Slider ref={slider => (this.slider = slider)}{...settings} style={{position: 'relative',    zIndex: '500 !important'}}>
                    
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    <h1 className='text-overlay'>The Final Round 54in x 40in oil on canvas December 2006</h1>
                                </div>
                                <div>
                                    <img className="carousel-image" src={paintings20061} alt="The Final Round"/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    <h1 className='text-overlay'>It's Not Enough 43in x 34in oil on canvas October 2006</h1>
                                </div>
                                <div>
                                    <img className="carousel-image" src={paintings20062} alt="It's Not Enough"/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    <h1 className='text-overlay'>The Only One 38in x 50in oil on canvas July 2006</h1>
                                </div>
                                <div>
                                    <img className="carousel-image" src={paintings20063} alt="The Only One"/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    <h1 className='text-overlay'>Make it Tomorrow 50in x 40in oil on canvas May 2006</h1>
                                </div>
                                <div>
                                    <img className="carousel-image" src={paintings20064} alt="Make it Tomorrow"/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    <h1 className='text-overlay'>Go Ahead 52in x 40in oil on canvas April 2006</h1>
                                </div>
                                <div>
                                    <img className="carousel-image" src={paintings20065} alt="Go Ahead"/>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
                <div className='images-container-mobile'>
                    <img className='mobile-images' src={paintings20061} alt='The Final Round'/>
                    <img className='mobile-images' src={paintings20062} alt="It's Not Enough"/>
                    <img className='mobile-images' src={paintings20063} alt='The Only One'/>
                    <img className='mobile-images' src={paintings20064} alt='Make it Tomorrow'/>
                    <img className='mobile-images' src={paintings20065} alt='Go Ahead'/>
                </div>
        </div>
    )
    }
}