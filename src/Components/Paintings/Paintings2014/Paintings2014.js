import React, {Component} from 'react';
import Slider from 'react-slick';

import paintings20141 from '../../../assets/images/paintings/2014/paintings2014-1.jpg';
import paintings20142 from '../../../assets/images/paintings/2014/paintings2014-2.jpg';
import paintings20143 from '../../../assets/images/paintings/2014/paintings2014-3.jpg';
import paintings20144 from '../../../assets/images/paintings/2014/paintings2014-4.jpg';
import paintings20145 from '../../../assets/images/paintings/2014/paintings2014-5.jpg';
import paintings20146 from '../../../assets/images/paintings/2014/paintings2014-6.jpg';
import paintings20147 from '../../../assets/images/paintings/2014/paintings2014-7.jpg';
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
                                    {/* <h1></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src={paintings20141} alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src={paintings20142} alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src={paintings20143} alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src={paintings20144} alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src={paintings20145} alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src={paintings20146} alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src={paintings20147} alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1></h1> */}
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
                    <img className='mobile-images' src={paintings20141} alt=''/>
                    <img className='mobile-images' src={paintings20142} alt=''/>
                    <img className='mobile-images' src={paintings20143} alt=''/>
                    <img className='mobile-images' src={paintings20144} alt=''/>
                    <img className='mobile-images' src={paintings20145} alt=''/>
                    <img className='mobile-images' src={paintings20146} alt=''/>
                    <img className='mobile-images' src={paintings20147} alt=''/>
                    <img className='mobile-images' src={paintings20148} alt=''/>
                </div>
        </div>
    )
    }
}