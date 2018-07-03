import React, {Component} from 'react';
import Slider from 'react-slick';

import paintings20081 from '../../../assets/images/paintings/2008/paintings2008-1.jpg';
import paintings20082 from '../../../assets/images/paintings/2008/paintings2008-2.jpg';
import paintings20083 from '../../../assets/images/paintings/2008/paintings2008-3.jpg';
import paintings20084 from '../../../assets/images/paintings/2008/paintings2008-4.jpg';
import paintings20085 from '../../../assets/images/paintings/2008/paintings2008-5.jpg';
import paintings20086 from '../../../assets/images/paintings/2008/paintings2008-6.jpg';
import paintings20087 from '../../../assets/images/paintings/2008/paintings2008-7.jpg';
import paintings20088 from '../../../assets/images/paintings/2008/paintings2008-8.jpg';
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
        <div className='carousel-container'>
            <Slider ref={slider => (this.slider = slider)}{...settings} style={{position: 'relative',    zIndex: '500 !important'}}>
          
                <div className='image-wrapper'>
                    <div className='text-box'>
                        {/* <h1></h1> */}
                    </div>
                    <div>
                        <img className="carousel-image" src={paintings20081} alt=""/>
                    </div>
                </div>
                <div className='image-wrapper'>
                    <div className='text-box'>
                        {/* <h1></h1> */}
                    </div>
                    <div>
                        <img className="carousel-image" src={paintings20082} alt=""/>
                    </div>
                </div>
                <div className='image-wrapper'>
                    <div className='text-box'>
                        {/* <h1></h1> */}
                    </div>
                    <div>
                        <img className="carousel-image" src={paintings20083} alt=""/>
                    </div>
                </div>
                <div className='image-wrapper'>
                    <div className='text-box'>
                        {/* <h1></h1> */}
                    </div>
                    <div>
                        <img className="carousel-image" src={paintings20084} alt=""/>
                    </div>
                </div>
                <div className='image-wrapper'>
                    <div className='text-box'>
                        {/* <h1></h1> */}
                    </div>
                    <div>
                        <img className="carousel-image" src={paintings20085} alt=""/>
                    </div>
                </div>
                <div className='image-wrapper'>
                    <div className='text-box'>
                        {/* <h1></h1> */}
                    </div>
                    <div>
                        <img className="carousel-image" src={paintings20086} alt=""/>
                    </div>
                </div>
                <div className='image-wrapper'>
                    <div className='text-box'>
                        {/* <h1></h1> */}
                    </div>
                    <div>
                        <img className="carousel-image" src={paintings20087} alt=""/>
                    </div>
                </div>
                <div className='image-wrapper'>
                    <div className='text-box'>
                        {/* <h1></h1> */}
                    </div>
                    <div>
                        <img className="carousel-image" src={paintings20088} alt=""/>
                    </div>
                </div>
                <div className='image-wrapper'>
                    <div className='text-box'>
                        {/* <h1></h1> */}
                    </div>
                    <div>
                        <img className="carousel-image" src={paintings20089} alt=""/>
                    </div>
                </div>
            </Slider>
        </div>
    )
    }
}