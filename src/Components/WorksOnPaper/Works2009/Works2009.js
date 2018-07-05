import React, {Component} from 'react';
import Slider from 'react-slick';

import works20091 from '../../../assets/images/works/2009/works2009-1.jpg';
import works20092 from '../../../assets/images/works/2009/works2009-2.jpg';
import works20093 from '../../../assets/images/works/2009/works2009-3.jpg';
import works20094 from '../../../assets/images/works/2009/works2009-4.jpg';
import works20095 from '../../../assets/images/works/2009/works2009-5.jpg';
import works20096 from '../../../assets/images/works/2009/works2009-6.jpg';
import works20097 from '../../../assets/images/works/2009/works2009-7.jpg';
import works20098 from '../../../assets/images/works/2009/works2009-8.jpg';
import works20099 from '../../../assets/images/works/2009/works2009-9.jpg';
import works200910 from '../../../assets/images/works/2009/works2009-10.jpg';
import works200911 from '../../../assets/images/works/2009/works2009-11.jpg';
import works200912 from '../../../assets/images/works/2009/works2009-12.jpg';
import works200913 from '../../../assets/images/works/2009/works2009-13.jpg';
import works200914 from '../../../assets/images/works/2009/works2009-14.jpg';
import works200915 from '../../../assets/images/works/2009/works2009-15.jpg';
import works200916 from '../../../assets/images/works/2009/works2009-16.jpg';

export default class Works2009 extends Component {
    
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
        <div className='content-wrapper'>
            <h1>2009 Works on Paper</h1>
            <div className='carousel-container'>
                <Slider ref={slider => (this.slider = slider)}{...settings} style={{position: 'relative',    zIndex: '500 !important'}}>
            
                    <div className='image-wrapper'>
                        <div className='text-box'>
                            {/* <h1></h1> */}
                        </div>
                        <div>
                            <img className="carousel-image" src={works20091} alt=""/>
                        </div>
                    </div>
                    <div className='image-wrapper'>
                        <div className='text-box'>
                            {/* <h1></h1> */}
                        </div>
                        <div>
                            <img className="carousel-image" src={works20092} alt=""/>
                        </div>
                    </div>
                    <div className='image-wrapper'>
                        <div className='text-box'>
                            {/* <h1></h1> */}
                        </div>
                        <div>
                            <img className="carousel-image" src={works20093} alt=""/>
                        </div>
                    </div>
                    <div className='image-wrapper'>
                        <div className='text-box'>
                            {/* <h1></h1> */}
                        </div>
                        <div>
                            <img className="carousel-image" src={works20094} alt=""/>
                        </div>
                    </div>
                    <div className='image-wrapper'>
                        <div className='text-box'>
                            {/* <h1></h1> */}
                        </div>
                        <div>
                            <img className="carousel-image" src={works20095} alt=""/>
                        </div>
                    </div>
                    <div className='image-wrapper'>
                        <div className='text-box'>
                            {/* <h1></h1> */}
                        </div>
                        <div>
                            <img className="carousel-image" src={works20096} alt=""/>
                        </div>
                    </div>
                    <div className='image-wrapper'>
                        <div className='text-box'>
                            {/* <h1></h1> */}
                        </div>
                        <div>
                            <img className="carousel-image" src={works20097} alt=""/>
                        </div>
                    </div>
                    <div className='image-wrapper'>
                        <div className='text-box'>
                            {/* <h1></h1> */}
                        </div>
                        <div>
                            <img className="carousel-image" src={works20098} alt=""/>
                        </div>
                    </div>
                    <div className='image-wrapper'>
                        <div className='text-box'>
                            {/* <h1></h1> */}
                        </div>
                        <div>
                            <img className="carousel-image" src={works20099} alt=""/>
                        </div>
                    </div>
                    <div className='image-wrapper'>
                        <div className='text-box'>
                            {/* <h1></h1> */}
                        </div>
                        <div>
                            <img className="carousel-image" src={works200910} alt=""/>
                        </div>
                    </div>
                    <div className='image-wrapper'>
                        <div className='text-box'>
                            {/* <h1></h1> */}
                        </div>
                        <div>
                            <img className="carousel-image" src={works200911} alt=""/>
                        </div>
                    </div>
                    <div className='image-wrapper'>
                        <div className='text-box'>
                            {/* <h1></h1> */}
                        </div>
                        <div>
                            <img className="carousel-image" src={works200912} alt=""/>
                        </div>
                    </div>
                    <div className='image-wrapper'>
                        <div className='text-box'>
                            {/* <h1></h1> */}
                        </div>
                        <div>
                            <img className="carousel-image" src={works200913} alt=""/>
                        </div>
                    </div>
                    <div className='image-wrapper'>
                        <div className='text-box'>
                            {/* <h1></h1> */}
                        </div>
                        <div>
                            <img className="carousel-image" src={works200914} alt=""/>
                        </div>
                    </div>
                    <div className='image-wrapper'>
                        <div className='text-box'>
                            {/* <h1></h1> */}
                        </div>
                        <div>
                            <img className="carousel-image" src={works200915} alt=""/>
                        </div>
                    </div>
                    <div className='image-wrapper'>
                        <div className='text-box'>
                            {/* <h1></h1> */}
                        </div>
                        <div>
                            <img className="carousel-image" src={works200916} alt=""/>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    )
    }
}