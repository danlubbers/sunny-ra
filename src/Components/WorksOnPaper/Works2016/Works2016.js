import React, {Component} from 'react';
import Slider from 'react-slick';

import works20161 from '../../../assets/images/works/2016/works2016-1.jpg';
import works20162 from '../../../assets/images/works/2016/works2016-2.jpg';
import works20163 from '../../../assets/images/works/2016/works2016-3.jpg';
import works20164 from '../../../assets/images/works/2016/works2016-4.jpg';
import works20165 from '../../../assets/images/works/2016/works2016-5.jpg';
import works20166 from '../../../assets/images/works/2016/works2016-6.jpg';
import works20167 from '../../../assets/images/works/2016/works2016-7.jpg';
import works20168 from '../../../assets/images/works/2016/works2016-8.jpg';
import works20169 from '../../../assets/images/works/2016/works2016-9.jpg';

export default class Works2016 extends Component {
    
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
        <div className='carousel-container'>
            <Slider ref={slider => (this.slider = slider)}{...settings} style={{position: 'relative',    zIndex: '500 !important'}}>
          
                <div className='image-wrapper'>
                    <div className='text-box'>
                        {/* <h1></h1> */}
                    </div>
                    <div>
                        <img className="carousel-image" src={works20161} alt=""/>
                    </div>
                </div>
                <div className='image-wrapper'>
                    <div className='text-box'>
                        {/* <h1></h1> */}
                    </div>
                    <div>
                        <img className="carousel-image" src={works20162} alt=""/>
                    </div>
                </div>
                <div className='image-wrapper'>
                    <div className='text-box'>
                        {/* <h1></h1> */}
                    </div>
                    <div>
                        <img className="carousel-image" src={works20163} alt=""/>
                    </div>
                </div>
                <div className='image-wrapper'>
                    <div className='text-box'>
                        {/* <h1></h1> */}
                    </div>
                    <div>
                        <img className="carousel-image" src={works20164} alt=""/>
                    </div>
                </div>
                <div className='image-wrapper'>
                    <div className='text-box'>
                        {/* <h1></h1> */}
                    </div>
                    <div>
                        <img className="carousel-image" src={works20165} alt=""/>
                    </div>
                </div>
                <div className='image-wrapper'>
                    <div className='text-box'>
                        {/* <h1></h1> */}
                    </div>
                    <div>
                        <img className="carousel-image" src={works20166} alt=""/>
                    </div>
                </div>
                <div className='image-wrapper'>
                    <div className='text-box'>
                        {/* <h1></h1> */}
                    </div>
                    <div>
                        <img className="carousel-image" src={works20167} alt=""/>
                    </div>
                </div>
                <div className='image-wrapper'>
                    <div className='text-box'>
                        {/* <h1></h1> */}
                    </div>
                    <div>
                        <img className="carousel-image" src={works20168} alt=""/>
                    </div>
                </div>
                <div className='image-wrapper'>
                    <div className='text-box'>
                        {/* <h1></h1> */}
                    </div>
                    <div>
                        <img className="carousel-image" src={works20169} alt=""/>
                    </div>
                </div>
            </Slider>
        </div>
    )
    }
}