import React, {Component} from 'react';
import Slider from 'react-slick';

import works20121 from '../../../assets/images/works/2012/works2012-1.jpg';
import works20122 from '../../../assets/images/works/2012/works2012-2.jpg';
import works20122M from '../../../assets/images/works/2012/works2012-2-mobile.jpg';
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
        <div className='works-container'>
            <div className='works-container-desktop'>
                <div className='content-wrapper'>
                    <h1>2012 Works on Paper</h1>
                    <div className='carousel-container'>
                        <Slider ref={slider => (this.slider = slider)}{...settings} style={{position: 'relative',    zIndex: '500 !important'}}>
                    
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    <h1 className='text-overlay'>untitled</h1>
                                    <h2>48in x 72in conte and pastel on paper</h2>
                                </div>
                                <div>
                                    <img className="carousel-image" src={works20121} alt="untitled"/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    <h1 className='text-overlay'>untitled</h1>
                                    <h2>48in x 78in conte and pastel on paper</h2>
                                </div>
                                <div>
                                    <img className="carousel-image" src={works20122} alt="untitled"/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    <h1 className='text-overlay'>Backwards</h1>
                                    <h2>8in x 10in pastel on paper</h2>
                                </div>
                                <div>
                                    <img className="carousel-image" src={works20123} alt="Backwards"/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    <h1 className='text-overlay'>Glide</h1>
                                    <h2>8in x 10in pastel on paper</h2>
                                </div>
                                <div>
                                    <img className="carousel-image" src={works20124} alt="Glide"/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    <h1 className='text-overlay'>Sled</h1>
                                    <h2>8in x 10in pastel on paper</h2>
                                </div>
                                <div>
                                    <img className="carousel-image" src={works20125} alt="Sled"/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    <h1 className='text-overlay'>Lowland</h1>
                                    <h2>8in x 10in pastel on paper</h2>
                                </div>
                                <div>
                                    <img className="carousel-image" src={works20126} alt="Lowland"/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    <h1 className='text-overlay'>Mobile</h1>
                                    <h2>8in x 10in pastel on paper</h2>
                                </div>
                                <div>
                                    <img className="carousel-image" src={works20127} alt="Mobile"/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    <h1 className='text-overlay'>Nite Light</h1>
                                    <h2>8in x 10in pastel on paper</h2>
                                </div>
                                <div>
                                    <img className="carousel-image" src={works20128} alt="Nite Light"/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    <h1 className='text-overlay'>Willow</h1>
                                    <h2>8in x 10in pastel on paper</h2>
                                </div>
                                <div>
                                    <img className="carousel-image" src={works20129} alt="Willow"/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    <h1 className='text-overlay'>Passing</h1>
                                    <h2>18in x 24in charcoal on paper</h2>
                                </div>
                                <div>
                                    <img className="carousel-image" src={works201210} alt="Passing"/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    <h1 className='text-overlay'>By Force</h1>
                                    <h2>18in x 24in charcoal on paper</h2>
                                </div>
                                <div>
                                    <img className="carousel-image" src={works201211} alt="By Force"/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    <h1 className='text-overlay'>DC Subway</h1>
                                    <h2>18in x 24in charcoal on paper</h2>
                                </div>
                                <div>
                                    <img className="carousel-image" src={works201212} alt="DC Subway"/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    <h1 className='text-overlay'>Ravine</h1>
                                    <h2>18in x24in charcoal on paper</h2>
                                </div>
                                <div>
                                    <img className="carousel-image" src={works201213} alt="Ravine"/>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
                <div className='images-container-mobile'>
                    <img className='mobile-images' src={works20121} alt='untitled'/>
                    <img className='mobile-images' src={works20122M} alt='untitled'/>
                    <img className='mobile-images' src={works20123} alt='Backwards'/>
                    <img className='mobile-images' src={works20124} alt='Glide'/>
                    <img className='mobile-images' src={works20125} alt='Sled'/>
                    <img className='mobile-images' src={works20126} alt='Lowland'/>
                    <img className='mobile-images' src={works20127} alt='Mobile'/>
                    <img className='mobile-images' src={works20128} alt='Nite Light'/>
                    <img className='mobile-images' src={works20129} alt='Willow'/>
                    <img className='mobile-images' src={works201210} alt='Passing'/>
                    <img className='mobile-images' src={works201211} alt='By Force'/>
                    <img className='mobile-images' src={works201212} alt='DC Subway'/>
                    <img className='mobile-images' src={works201213} alt='Ravine'/>
                </div>
        </div>
    )
    }
}