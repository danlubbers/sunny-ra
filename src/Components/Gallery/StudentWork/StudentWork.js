import React, {Component} from 'react';
import Slider from 'react-slick';

import studentwork1 from '../../../assets/images/studentwork/studentwork-1.jpg';
import studentwork2 from '../../../assets/images/studentwork/studentwork-2.jpg';
import studentwork3 from '../../../assets/images/studentwork/studentwork-3.jpg';
import studentwork4 from '../../../assets/images/studentwork/studentwork-4.jpg';
import studentwork5 from '../../../assets/images/studentwork/studentwork-5.jpg';
import studentwork6 from '../../../assets/images/studentwork/studentwork-6.jpg';
import studentwork7 from '../../../assets/images/studentwork/studentwork-7.jpg';
import studentwork8 from '../../../assets/images/studentwork/studentwork-8.jpg';
import studentwork9 from '../../../assets/images/studentwork/studentwork-9.jpg';
import studentwork10 from '../../../assets/images/studentwork/studentwork-10.jpg';
import studentwork11 from '../../../assets/images/studentwork/studentwork-11.jpg';
import studentwork12 from '../../../assets/images/studentwork/studentwork-12.jpg';
import studentwork13 from '../../../assets/images/studentwork/studentwork-13.jpg';
import studentwork14 from '../../../assets/images/studentwork/studentwork-14.jpg';
import studentwork15 from '../../../assets/images/studentwork/studentwork-15.jpg';
import studentwork16 from '../../../assets/images/studentwork/studentwork-16.jpg';
import studentwork17 from '../../../assets/images/studentwork/studentwork-17.jpg';
import studentwork18 from '../../../assets/images/studentwork/studentwork-18.jpg';
import studentwork19 from '../../../assets/images/studentwork/studentwork-19.jpg';
import studentwork20 from '../../../assets/images/studentwork/studentwork-20.jpg';
import studentwork21 from '../../../assets/images/studentwork/studentwork-21.jpg';
import studentwork21M from '../../../assets/images/studentwork/studentwork-21-mobile.jpg';
import studentwork22 from '../../../assets/images/studentwork/studentwork-22.jpg';
import studentwork22M from '../../../assets/images/studentwork/studentwork-22-mobile.jpg';
import studentwork23 from '../../../assets/images/studentwork/studentwork-23.jpg';
import studentwork24 from '../../../assets/images/studentwork/studentwork-24.jpg';
import studentwork25 from '../../../assets/images/studentwork/studentwork-25.jpg';
import studentwork26 from '../../../assets/images/studentwork/studentwork-26.jpg';
import studentwork27 from '../../../assets/images/studentwork/studentwork-27.jpg';
import studentwork28 from '../../../assets/images/studentwork/studentwork-28.jpg';
import studentwork29 from '../../../assets/images/studentwork/studentwork-29.jpg';
import studentwork30 from '../../../assets/images/studentwork/studentwork-30.jpg';
import studentwork31 from '../../../assets/images/studentwork/studentwork-31.jpg';
import studentwork32 from '../../../assets/images/studentwork/studentwork-32.jpg';
import studentwork33 from '../../../assets/images/studentwork/studentwork-33.jpg';
import studentwork34 from '../../../assets/images/studentwork/studentwork-34.jpg';




export default class Carousel extends Component {
    
    render() {

        var settings = {
            dots: true, 
            arrows: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToSlide: 34,
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
        <div className='studentwork-container'>
            <div className='studentwork-container-desktop'>
                <div className='content-wrapper'>
                    <h1>Student Works</h1>
                    <div className='carousel-container'>
                        <Slider ref={slider => (this.slider = slider)}{...settings} style={{position: 'relative',    zIndex: '500 !important'}}>
                    
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src={studentwork1} alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src={studentwork2} alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src={studentwork3} alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src={studentwork4} alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src={studentwork5} alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src={studentwork6} alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src={studentwork7} alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1>G</h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src={studentwork8} alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src={studentwork9} alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src={studentwork10} alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src={studentwork11} alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src={studentwork12} alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src={studentwork13} alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src={studentwork14} alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src={studentwork15} alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src={studentwork16} alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src={studentwork17} alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src={studentwork18} alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src={studentwork19} alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src={studentwork20} alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src={studentwork21} alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src={studentwork22} alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src={studentwork23} alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src={studentwork24} alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src={studentwork25} alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src={studentwork26} alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src={studentwork27} alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src={studentwork28} alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src={studentwork29} alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src={studentwork30} alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src={studentwork31} alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src={studentwork32} alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src={studentwork33} alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src={studentwork34} alt=""/>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
            <div className='images-container-mobile'>
                    <img className='mobile-images' src={studentwork1} alt=''/>
                    <img className='mobile-images' src={studentwork2} alt=''/>
                    <img className='mobile-images' src={studentwork3} alt=''/>
                    <img className='mobile-images' src={studentwork4} alt=''/>
                    <img className='mobile-images' src={studentwork5} alt=''/>
                    <img className='mobile-images' src={studentwork6} alt=''/>
                    <img className='mobile-images' src={studentwork7} alt=''/>
                    <img className='mobile-images' src={studentwork8} alt=''/>
                    <img className='mobile-images' src={studentwork9} alt=''/>
                    <img className='mobile-images' src={studentwork10} alt=''/>
                    <img className='mobile-images' src={studentwork11} alt=''/>
                    <img className='mobile-images' src={studentwork12} alt=''/>
                    <img className='mobile-images' src={studentwork13} alt=''/>
                    <img className='mobile-images' src={studentwork14} alt=''/>
                    <img className='mobile-images' src={studentwork15} alt=''/>
                    <img className='mobile-images' src={studentwork16} alt=''/>
                    <img className='mobile-images' src={studentwork17} alt=''/>
                    <img className='mobile-images' src={studentwork18} alt=''/>
                    <img className='mobile-images' src={studentwork19} alt=''/>
                    <img className='mobile-images' src={studentwork20} alt=''/>
                    <img className='mobile-images' src={studentwork21M} alt=''/>
                    <img className='mobile-images' src={studentwork22M} alt=''/>
                    <img className='mobile-images' src={studentwork23} alt=''/>
                    <img className='mobile-images' src={studentwork24} alt=''/>
                    <img className='mobile-images' src={studentwork25} alt=''/>
                    <img className='mobile-images' src={studentwork26} alt=''/>
                    <img className='mobile-images' src={studentwork27} alt=''/>
                    <img className='mobile-images' src={studentwork28} alt=''/>
                    <img className='mobile-images' src={studentwork29} alt=''/>
                    <img className='mobile-images' src={studentwork30} alt=''/>
                    <img className='mobile-images' src={studentwork31} alt=''/>
                    <img className='mobile-images' src={studentwork30} alt=''/>
                    <img className='mobile-images' src={studentwork32} alt=''/>
                    <img className='mobile-images' src={studentwork33} alt=''/>
                    <img className='mobile-images' src={studentwork34} alt=''/>
                </div>
        </div>
    )
    }
}