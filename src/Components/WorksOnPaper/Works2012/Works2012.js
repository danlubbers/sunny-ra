import React, {Component} from 'react';
import Slider from 'react-slick';

import works20121 from '../../../assets/images/works/2012/works2012-1.jpg';
import works20122 from '../../../assets/images/works/2012/works2012-2.jpg';
import works20123 from '../../../assets/images/works/2012/works2012-3.jpg';
import works20124 from '../../../assets/images/works/2012/works2012-4.jpg';
import works20125 from '../../../assets/images/works/2012/works2012-5.jpg';
import works20126 from '../../../assets/images/works/2012/works2012-6.jpg';
import works20127 from '../../../assets/images/works/2012/works2012-7.jpg';
import works20128 from '../../../assets/images/works/2012/works2012-8.jpg';
import works20129 from '../../../assets/images/works/2012/works2012-9.jpg';
import works201210 from '../../../assets/images/works/2012/works2012-10.jpg';
import works201211 from '../../../assets/images/works/2012/works2012-11.jpg';
import works201212 from '../../../assets/images/works/2012/works2012-12.jpg';
import works201213 from '../../../assets/images/works/2012/works2012-13.jpg';

export default class Works2012 extends Component {
    
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
            <h1>2012 Works on Paper</h1>
            <div className='carousel-container'>
                <Slider ref={slider => (this.slider = slider)}{...settings} style={{position: 'relative',    zIndex: '500 !important'}}>
            
                    <div className='image-wrapper'>
                        <div className='text-box'>
                            {/* <h1></h1> */}
                        </div>
                        <div>
                            <img className="carousel-image" src={works20121} alt=""/>
                        </div>
                    </div>
                    <div className='image-wrapper'>
                        <div className='text-box'>
                            {/* <h1></h1> */}
                        </div>
                        <div>
                            <img className="carousel-image" src={works20122} alt=""/>
                        </div>
                    </div>
                    <div className='image-wrapper'>
                        <div className='text-box'>
                            {/* <h1></h1> */}
                        </div>
                        <div>
                            <img className="carousel-image" src={works20123} alt=""/>
                        </div>
                    </div>
                    <div className='image-wrapper'>
                        <div className='text-box'>
                            {/* <h1></h1> */}
                        </div>
                        <div>
                            <img className="carousel-image" src={works20124} alt=""/>
                        </div>
                    </div>
                    <div className='image-wrapper'>
                        <div className='text-box'>
                            {/* <h1></h1> */}
                        </div>
                        <div>
                            <img className="carousel-image" src={works20125} alt=""/>
                        </div>
                    </div>
                    <div className='image-wrapper'>
                        <div className='text-box'>
                            {/* <h1></h1> */}
                        </div>
                        <div>
                            <img className="carousel-image" src={works20126} alt=""/>
                        </div>
                    </div>
                    <div className='image-wrapper'>
                        <div className='text-box'>
                            {/* <h1></h1> */}
                        </div>
                        <div>
                            <img className="carousel-image" src={works20127} alt=""/>
                        </div>
                    </div>
                    <div className='image-wrapper'>
                        <div className='text-box'>
                            {/* <h1></h1> */}
                        </div>
                        <div>
                            <img className="carousel-image" src={works20128} alt=""/>
                        </div>
                    </div>
                    <div className='image-wrapper'>
                        <div className='text-box'>
                            {/* <h1></h1> */}
                        </div>
                        <div>
                            <img className="carousel-image" src={works20129} alt=""/>
                        </div>
                    </div>
                    <div className='image-wrapper'>
                        <div className='text-box'>
                            {/* <h1></h1> */}
                        </div>
                        <div>
                            <img className="carousel-image" src={works201210} alt=""/>
                        </div>
                    </div>
                    <div className='image-wrapper'>
                        <div className='text-box'>
                            {/* <h1></h1> */}
                        </div>
                        <div>
                            <img className="carousel-image" src={works201211} alt=""/>
                        </div>
                    </div>
                    <div className='image-wrapper'>
                        <div className='text-box'>
                            {/* <h1></h1> */}
                        </div>
                        <div>
                            <img className="carousel-image" src={works201212} alt=""/>
                        </div>
                    </div>
                    <div className='image-wrapper'>
                        <div className='text-box'>
                            {/* <h1></h1> */}
                        </div>
                        <div>
                            <img className="carousel-image" src={works201213} alt=""/>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    )
    }
}