import React, {Component} from 'react';
import Slider from 'react-slick';

import paintings20151 from '../../../assets/images/paintings/2015/paintings2015-1.jpg';
import paintings20152 from '../../../assets/images/paintings/2015/paintings2015-2.jpg';
import paintings20153 from '../../../assets/images/paintings/2015/paintings2015-3.jpg';
import paintings20154 from '../../../assets/images/paintings/2015/paintings2015-4.jpg';
import paintings20155 from '../../../assets/images/paintings/2015/paintings2015-5.jpg';
import paintings20156 from '../../../assets/images/paintings/2015/paintings2015-6.jpg';
import paintings20156M from '../../../assets/images/paintings/2015/paintings2015-6-mobile.jpg';
import paintings20157 from '../../../assets/images/paintings/2015/paintings2015-7.jpg';
import paintings20158 from '../../../assets/images/paintings/2015/paintings2015-8.jpg';
import paintings20159 from '../../../assets/images/paintings/2015/paintings2015-9.jpg';



export default class Paintings2015 extends Component {
    
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
                    <h1>2015 Paintings</h1>
                    <div className='carousel-container'>
                        <Slider ref={slider => (this.slider = slider)}{...settings} style={{position: 'relative',    zIndex: '500 !important'}}>
                    
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src={paintings20151} alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src={paintings20152} alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src={paintings20153} alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src={paintings20154} alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src={paintings20155} alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src={paintings20156} alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src={paintings20157} alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src={paintings20158} alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src={paintings20159} alt=""/>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
                <div className='images-container-mobile'>
                    <img className='mobile-images' src={paintings20151} alt=''/>
                    <img className='mobile-images' src={paintings20152} alt=''/>
                    <img className='mobile-images' src={paintings20153} alt=''/>
                    <img className='mobile-images' src={paintings20154} alt=''/>
                    <img className='mobile-images' src={paintings20155} alt=''/>
                    <img className='mobile-images' src={paintings20156M} alt=''/>
                    <img className='mobile-images' src={paintings20157} alt=''/>
                    <img className='mobile-images' src={paintings20158} alt=''/>
                    <img className='mobile-images' src={paintings20159} alt=''/>
                </div>
        </div>
    )
    }
}