import React, {Component} from 'react';
import Slider from 'react-slick';

import paintings20121 from '../../../assets/images/paintings/2012/paintings2012-1.jpg';
import paintings20122 from '../../../assets/images/paintings/2012/paintings2012-2.jpg';
import paintings20123 from '../../../assets/images/paintings/2012/paintings2012-3.jpg';
import paintings20124 from '../../../assets/images/paintings/2012/paintings2012-4.jpg';
import paintings20125 from '../../../assets/images/paintings/2012/paintings2012-5.jpg';
import paintings20126 from '../../../assets/images/paintings/2012/paintings2012-6.jpg';
import paintings20127 from '../../../assets/images/paintings/2012/paintings2012-7.jpg';
import paintings20128 from '../../../assets/images/paintings/2012/paintings2012-8.jpg';
import paintings20129 from '../../../assets/images/paintings/2012/paintings2012-9.jpg';
import paintings201210 from '../../../assets/images/paintings/2012/paintings2012-10.jpg';


export default class Carousel extends Component {
    
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
        <div className='carousel-container'>
            <Slider ref={slider => (this.slider = slider)}{...settings} style={{position: 'relative',    zIndex: '500 !important'}}>
          
                <div className='image-wrapper'>
                    <div className='text-box'>
                        {/* <h1></h1> */}
                    </div>
                    <div>
                        <img className="carousel-image" src={paintings20121} alt=""/>
                    </div>
                </div>
                <div className='image-wrapper'>
                    <div className='text-box'>
                        {/* <h1></h1> */}
                    </div>
                    <div>
                        <img className="carousel-image" src={paintings20122} alt=""/>
                    </div>
                </div>
                <div className='image-wrapper'>
                    <div className='text-box'>
                        {/* <h1></h1> */}
                    </div>
                    <div>
                        <img className="carousel-image" src={paintings20123} alt=""/>
                    </div>
                </div>
                <div className='image-wrapper'>
                    <div className='text-box'>
                        {/* <h1></h1> */}
                    </div>
                    <div>
                        <img className="carousel-image" src={paintings20124} alt=""/>
                    </div>
                </div>
                <div className='image-wrapper'>
                    <div className='text-box'>
                        {/* <h1></h1> */}
                    </div>
                    <div>
                        <img className="carousel-image" src={paintings20125} alt=""/>
                    </div>
                </div>
                <div className='image-wrapper'>
                    <div className='text-box'>
                        {/* <h1></h1> */}
                    </div>
                    <div>
                        <img className="carousel-image" src={paintings20126} alt=""/>
                    </div>
                </div>
                <div className='image-wrapper'>
                    <div className='text-box'>
                        {/* <h1></h1> */}
                    </div>
                    <div>
                        <img className="carousel-image" src={paintings20127} alt=""/>
                    </div>
                </div>
                <div className='image-wrapper'>
                    <div className='text-box'>
                        {/* <h1></h1> */}
                    </div>
                    <div>
                        <img className="carousel-image" src={paintings20128} alt=""/>
                    </div>
                </div>
                <div className='image-wrapper'>
                    <div className='text-box'>
                        {/* <h1></h1> */}
                    </div>
                    <div>
                        <img className="carousel-image" src={paintings20129} alt=""/>
                    </div>
                </div>
                <div className='image-wrapper'>
                    <div className='text-box'>
                        {/* <h1></h1> */}
                    </div>
                    <div>
                        <img className="carousel-image" src={paintings201210} alt=""/>
                    </div>
                </div>
            </Slider>
        </div>
    )
    }
}