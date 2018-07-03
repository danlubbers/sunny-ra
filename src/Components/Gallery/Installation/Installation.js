import React, {Component} from 'react';
import Slider from 'react-slick';

import installation1 from '../../../assets/images/installation/installation-1.jpg';
import installation2 from '../../../assets/images/installation/installation-2.jpg';
import installation3 from '../../../assets/images/installation/installation-3.jpg';
import installation4 from '../../../assets/images/installation/installation-4.jpg';
import installation5 from '../../../assets/images/installation/installation-5.jpg';
import installation6 from '../../../assets/images/installation/installation-6.jpg';
import installation7 from '../../../assets/images/installation/installation-7.jpg';
import installation8 from '../../../assets/images/installation/installation-8.jpg';
import installation9 from '../../../assets/images/installation/installation-9.jpg';
import installation10 from '../../../assets/images/installation/installation-10.jpg';
import installation11 from '../../../assets/images/installation/installation-11.jpg';
import installation12 from '../../../assets/images/installation/installation-12.jpg';
import installation13 from '../../../assets/images/installation/installation-13.jpg';
import installation14 from '../../../assets/images/installation/installation-14.jpg';
import installation15 from '../../../assets/images/installation/installation-15.jpg';
import installation16 from '../../../assets/images/installation/installation-16.jpg';
import installation17 from '../../../assets/images/installation/installation-17.jpg';
import installation18 from '../../../assets/images/installation/installation-18.jpg';
import installation19 from '../../../assets/images/installation/installation-19.jpg';
import installation20 from '../../../assets/images/installation/installation-20.jpg';
import installation21 from '../../../assets/images/installation/installation-21.jpg';
import installation22 from '../../../assets/images/installation/installation-22.jpg';
import installation23 from '../../../assets/images/installation/installation-23.jpg';
import installation24 from '../../../assets/images/installation/installation-24.jpg';
import installation25 from '../../../assets/images/installation/installation-25.jpg';
import installation26 from '../../../assets/images/installation/installation-26.jpg';
import installation27 from '../../../assets/images/installation/installation-27.jpg';
import installation28 from '../../../assets/images/installation/installation-28.jpg';
import installation29 from '../../../assets/images/installation/installation-29.jpg';
import installation30 from '../../../assets/images/installation/installation-30.jpg';
import installation31 from '../../../assets/images/installation/installation-31.jpg';
import installation32 from '../../../assets/images/installation/installation-32.jpg';
import installation33 from '../../../assets/images/installation/installation-33.jpg';
import installation34 from '../../../assets/images/installation/installation-34.jpg';
import installation35 from '../../../assets/images/installation/installation-35.jpg';
import installation36 from '../../../assets/images/installation/installation-36.jpg';
import installation37 from '../../../assets/images/installation/installation-37.jpg';
import installation38 from '../../../assets/images/installation/installation-38.jpg';
import installation39 from '../../../assets/images/installation/installation-39.jpg';
import installation40 from '../../../assets/images/installation/installation-40.jpg';



export default class Carousel extends Component {
    
    render() {

        var settings = {
            dots: true, 
            arrows: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToSlide: 11,
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
                        <img className="carousel-image" src={installation1} alt=""/>
                    </div>
                </div>
                <div className='image-wrapper'>
                    <div className='text-box'>
                        {/* <h1></h1> */}
                    </div>
                    <div>
                        <img className="carousel-image" src={installation2} alt=""/>
                    </div>
                </div>
                <div className='image-wrapper'>
                    <div className='text-box'>
                        {/* <h1></h1> */}
                    </div>
                    <div>
                        <img className="carousel-image" src={installation3} alt=""/>
                    </div>
                </div>
                <div className='image-wrapper'>
                    <div className='text-box'>
                        {/* <h1></h1> */}
                    </div>
                    <div>
                        <img className="carousel-image" src={installation4} alt=""/>
                    </div>
                </div>
                <div className='image-wrapper'>
                    <div className='text-box'>
                        {/* <h1></h1> */}
                    </div>
                    <div>
                        <img className="carousel-image" src={installation5} alt=""/>
                    </div>
                </div>
                <div className='image-wrapper'>
                    <div className='text-box'>
                        {/* <h1></h1> */}
                    </div>
                    <div>
                        <img className="carousel-image" src={installation6} alt=""/>
                    </div>
                </div>
                <div className='image-wrapper'>
                    <div className='text-box'>
                        {/* <h1></h1> */}
                    </div>
                    <div>
                        <img className="carousel-image" src={installation7} alt=""/>
                    </div>
                </div>
                <div className='image-wrapper'>
                    <div className='text-box'>
                        {/* <h1>G</h1> */}
                    </div>
                    <div>
                        <img className="carousel-image" src={installation8} alt=""/>
                    </div>
                </div>
                <div className='image-wrapper'>
                    <div className='text-box'>
                        {/* <h1></h1> */}
                    </div>
                    <div>
                        <img className="carousel-image" src={installation9} alt=""/>
                    </div>
                </div>
                <div className='image-wrapper'>
                    <div className='text-box'>
                        {/* <h1></h1> */}
                    </div>
                    <div>
                        <img className="carousel-image" src={installation10} alt=""/>
                    </div>
                </div>
                <div className='image-wrapper'>
                    <div className='text-box'>
                        {/* <h1></h1> */}
                    </div>
                    <div>
                        <img className="carousel-image" src={installation11} alt=""/>
                    </div>
                </div>
                <div className='image-wrapper'>
                    <div className='text-box'>
                        {/* <h1></h1> */}
                    </div>
                    <div>
                        <img className="carousel-image" src={installation12} alt=""/>
                    </div>
                </div>
                <div className='image-wrapper'>
                    <div className='text-box'>
                        {/* <h1></h1> */}
                    </div>
                    <div>
                        <img className="carousel-image" src={installation13} alt=""/>
                    </div>
                </div>
                <div className='image-wrapper'>
                    <div className='text-box'>
                        {/* <h1></h1> */}
                    </div>
                    <div>
                        <img className="carousel-image" src={installation14} alt=""/>
                    </div>
                </div>
                <div className='image-wrapper'>
                    <div className='text-box'>
                        {/* <h1></h1> */}
                    </div>
                    <div>
                        <img className="carousel-image" src={installation15} alt=""/>
                    </div>
                </div>
                <div className='image-wrapper'>
                    <div className='text-box'>
                        {/* <h1></h1> */}
                    </div>
                    <div>
                        <img className="carousel-image" src={installation16} alt=""/>
                    </div>
                </div>
                <div className='image-wrapper'>
                    <div className='text-box'>
                        {/* <h1></h1> */}
                    </div>
                    <div>
                        <img className="carousel-image" src={installation17} alt=""/>
                    </div>
                </div>
                <div className='image-wrapper'>
                    <div className='text-box'>
                        {/* <h1></h1> */}
                    </div>
                    <div>
                        <img className="carousel-image" src={installation18} alt=""/>
                    </div>
                </div>
                <div className='image-wrapper'>
                    <div className='text-box'>
                        {/* <h1></h1> */}
                    </div>
                    <div>
                        <img className="carousel-image" src={installation19} alt=""/>
                    </div>
                </div>
                <div className='image-wrapper'>
                    <div className='text-box'>
                        {/* <h1></h1> */}
                    </div>
                    <div>
                        <img className="carousel-image" src={installation20} alt=""/>
                    </div>
                </div>
                <div className='image-wrapper'>
                    <div className='text-box'>
                        {/* <h1></h1> */}
                    </div>
                    <div>
                        <img className="carousel-image" src={installation21} alt=""/>
                    </div>
                </div>
                <div className='image-wrapper'>
                    <div className='text-box'>
                        {/* <h1></h1> */}
                    </div>
                    <div>
                        <img className="carousel-image" src={installation22} alt=""/>
                    </div>
                </div>
                <div className='image-wrapper'>
                    <div className='text-box'>
                        {/* <h1></h1> */}
                    </div>
                    <div>
                        <img className="carousel-image" src={installation23} alt=""/>
                    </div>
                </div>
                <div className='image-wrapper'>
                    <div className='text-box'>
                        {/* <h1></h1> */}
                    </div>
                    <div>
                        <img className="carousel-image" src={installation24} alt=""/>
                    </div>
                </div>
                <div className='image-wrapper'>
                    <div className='text-box'>
                        {/* <h1></h1> */}
                    </div>
                    <div>
                        <img className="carousel-image" src={installation25} alt=""/>
                    </div>
                </div>
                <div className='image-wrapper'>
                    <div className='text-box'>
                        {/* <h1></h1> */}
                    </div>
                    <div>
                        <img className="carousel-image" src={installation26} alt=""/>
                    </div>
                </div>
                <div className='image-wrapper'>
                    <div className='text-box'>
                        {/* <h1></h1> */}
                    </div>
                    <div>
                        <img className="carousel-image" src={installation27} alt=""/>
                    </div>
                </div>
                <div className='image-wrapper'>
                    <div className='text-box'>
                        {/* <h1></h1> */}
                    </div>
                    <div>
                        <img className="carousel-image" src={installation28} alt=""/>
                    </div>
                </div>
                <div className='image-wrapper'>
                    <div className='text-box'>
                        {/* <h1></h1> */}
                    </div>
                    <div>
                        <img className="carousel-image" src={installation29} alt=""/>
                    </div>
                </div>
                <div className='image-wrapper'>
                    <div className='text-box'>
                        {/* <h1></h1> */}
                    </div>
                    <div>
                        <img className="carousel-image" src={installation30} alt=""/>
                    </div>
                </div>
                <div className='image-wrapper'>
                    <div className='text-box'>
                        {/* <h1></h1> */}
                    </div>
                    <div>
                        <img className="carousel-image" src={installation31} alt=""/>
                    </div>
                </div>
                <div className='image-wrapper'>
                    <div className='text-box'>
                        {/* <h1></h1> */}
                    </div>
                    <div>
                        <img className="carousel-image" src={installation32} alt=""/>
                    </div>
                </div>
                <div className='image-wrapper'>
                    <div className='text-box'>
                        {/* <h1></h1> */}
                    </div>
                    <div>
                        <img className="carousel-image" src={installation33} alt=""/>
                    </div>
                </div>
                <div className='image-wrapper'>
                    <div className='text-box'>
                        {/* <h1></h1> */}
                    </div>
                    <div>
                        <img className="carousel-image" src={installation34} alt=""/>
                    </div>
                </div>
                <div className='image-wrapper'>
                    <div className='text-box'>
                        {/* <h1></h1> */}
                    </div>
                    <div>
                        <img className="carousel-image" src={installation35} alt=""/>
                    </div>
                </div>
                <div className='image-wrapper'>
                    <div className='text-box'>
                        {/* <h1></h1> */}
                    </div>
                    <div>
                        <img className="carousel-image" src={installation36} alt=""/>
                    </div>
                </div>
                <div className='image-wrapper'>
                    <div className='text-box'>
                        {/* <h1></h1> */}
                    </div>
                    <div>
                        <img className="carousel-image" src={installation37} alt=""/>
                    </div>
                </div>
                <div className='image-wrapper'>
                    <div className='text-box'>
                        {/* <h1></h1> */}
                    </div>
                    <div>
                        <img className="carousel-image" src={installation38} alt=""/>
                    </div>
                </div>
                <div className='image-wrapper'>
                    <div className='text-box'>
                        {/* <h1></h1> */}
                    </div>
                    <div>
                        <img className="carousel-image" src={installation39} alt=""/>
                    </div>
                </div>
                <div className='image-wrapper'>
                    <div className='text-box'>
                        {/* <h1></h1> */}
                    </div>
                    <div>
                        <img className="carousel-image" src={installation40} alt=""/>
                    </div>
                </div>

            </Slider>
        </div>
    )
    }
}