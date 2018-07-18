import React, {Component} from 'react';
import Slider from 'react-slick';

import paintings20101 from '../../../assets/images/paintings/2010/paintings2010-1.jpg';
import paintings20102 from '../../../assets/images/paintings/2010/paintings2010-2.jpg';
import paintings20103 from '../../../assets/images/paintings/2010/paintings2010-3.jpg';
import paintings20104 from '../../../assets/images/paintings/2010/paintings2010-4.jpg';
import paintings20105 from '../../../assets/images/paintings/2010/paintings2010-5.jpg';
import paintings20106 from '../../../assets/images/paintings/2010/paintings2010-6.jpg';
import paintings20106M from '../../../assets/images/paintings/2010/paintings2010-6-mobile.jpg';
import paintings20107 from '../../../assets/images/paintings/2010/paintings2010-7.jpg';
import paintings20107M from '../../../assets/images/paintings/2010/paintings2010-7-mobile.jpg';
import paintings20108 from '../../../assets/images/paintings/2010/paintings2010-8.jpg';



export default class Paintings2010 extends Component {
    
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
                <h1>2010 Paintings</h1>
                <div className='carousel-container'>
                    <Slider ref={slider => (this.slider = slider)}{...settings} style={{position: 'relative',    zIndex: '500 !important'}}>
                
                        <div className='image-wrapper'>
                            <div className='text-box'>
                                <h1 className='text-overlay'>Rise 50in x 74in oil on canvas December 2010</h1>
                            </div>
                            <div>
                                <img className="carousel-image" src={paintings20101} alt="Rise"/>
                            </div>
                        </div>
                        <div className='image-wrapper'>
                            <div className='text-box'>
                                <h1 className='text-overlay'>Regrets 62in x 82in oil on canvas November 2010</h1>
                            </div>
                            <div>
                                <img className="carousel-image" src={paintings20102} alt="Regrets"/>
                            </div>
                        </div>
                        <div className='image-wrapper'>
                            <div className='text-box'>
                                <h1 className='text-overlay'>River 50in x 74in oil on canvas December 2010</h1>
                            </div>
                            <div>
                                <img className="carousel-image" src={paintings20103} alt="River"/>
                            </div>
                        </div>
                        <div className='image-wrapper'>
                            <div className='text-box'>
                                <h1 className='text-overlay'>Below 62in x 82in oil on canvas November 2010</h1>
                            </div>
                            <div>
                                <img className="carousel-image" src={paintings20104} alt="Below"/>
                            </div>
                        </div>
                        <div className='image-wrapper'>
                            <div className='text-box'>
                                <h1 className='text-overlay'>Sliver 44in x 72in oil on canvas March 2010</h1>
                            </div>
                            <div>
                                <img className="carousel-image" src={paintings20105} alt="Sliver"/>
                            </div>
                        </div>
                        <div className='image-wrapper'>
                            <div className='text-box'>
                                <h1 className='text-overlay'>Steel oil on canvas 2010</h1>
                            </div>
                            <div>
                                <img className="carousel-image" src={paintings20106} alt="Steel"/>
                            </div>
                        </div>
                        <div className='image-wrapper'>
                            <div className='text-box'>
                                <h1 className='text-overlay'>Flourescent oil on canvas 2010</h1>
                            </div>
                            <div>
                                <img className="carousel-image" src={paintings20107} alt="Flourescent"/>
                            </div>
                        </div>
                        <div className='image-wrapper'>
                            <div className='text-box'>
                                <h1 className='text-overlay'>detail of flourescent</h1>
                            </div>
                            <div>
                                <img className="carousel-image" src={paintings20108} alt="Flourescent"/>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
            <div className='images-container-mobile'>
                <img className='mobile-images' src={paintings20101} alt='Rise'/>
                <img className='mobile-images' src={paintings20102} alt='Regrets'/>
                <img className='mobile-images' src={paintings20103} alt='River'/>
                <img className='mobile-images' src={paintings20104} alt='Below'/>
                <img className='mobile-images' src={paintings20105} alt='Sliver'/>
                <img className='mobile-images' src={paintings20106M} alt='Steel'/>
                <img className='mobile-images' src={paintings20107M} alt='Flourescent'/>
                <img className='mobile-images' src={paintings20108} alt='Flourescent'/>
            </div>
        </div>
    )
    }
}