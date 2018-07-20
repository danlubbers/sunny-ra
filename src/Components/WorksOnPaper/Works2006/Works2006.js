import React, {Component} from 'react';
import Slider from 'react-slick';

import works20061 from '../../../assets/images/works/2006/works2006-1.jpg';
import works20062 from '../../../assets/images/works/2006/works2006-2.jpg';
import works20063 from '../../../assets/images/works/2006/works2006-3.jpg';
import works20064 from '../../../assets/images/works/2006/works2006-4.jpg';
import works20065 from '../../../assets/images/works/2006/works2006-5.jpg';

export default class Works2006 extends Component {
    
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
                <h1>2006 Works on Paper</h1>
                <div className='carousel-container'>
                    <Slider ref={slider => (this.slider = slider)}{...settings} style={{position: 'relative',    zIndex: '500 !important'}}>
                
                        <div className='image-wrapper'>
                            <div className='text-box'>
                                <h1 className='text-overlay'>Road of Resistance</h1>
                                <h2>40in x 30in charcoal on paper</h2>
                            </div>
                            <div>
                                <img className="carousel-image" src={works20061} alt="Road of Resistance"/>
                            </div>
                        </div>
                        <div className='image-wrapper'>
                            <div className='text-box'>
                                <h1 className='text-overlay'>Do You See Me</h1>
                                <h2>40in x 30in charcoal on paper</h2>
                            </div>
                            <div>
                                <img className="carousel-image" src={works20062} alt="Do You See Me"/>
                            </div>
                        </div>
                        <div className='image-wrapper'>
                            <div className='text-box'>
                                <h1 className='text-overlay'>Cross the Dark Line</h1>
                                <h2>24in x 34in charcoal on paper</h2>
                            </div>
                            <div>
                                <img className="carousel-image" src={works20063} alt="Cross the Dark Line"/>
                            </div>
                        </div>
                        <div className='image-wrapper'>
                            <div className='text-box'>
                                <h1 className='text-overlay'>Run 30in x 20in</h1>
                                <h2>charcoal on paper</h2>
                            </div>
                            <div>
                                <img className="carousel-image" src={works20064} alt="Run"/>
                            </div>
                        </div>
                        <div className='image-wrapper'>
                            <div className='text-box'>
                                <h1 className='text-overlay'>Seeing it Through the Rough</h1>
                                <h2>43in x 34in charcoal on paper</h2>
                            </div>
                            <div>
                                <img className="carousel-image" src={works20065} alt="Seeing it Through the Rough"/>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
            <div className='images-container-mobile'>
                    <img className='mobile-images' src={works20061} alt='Road of Resistance'/>
                    <img className='mobile-images' src={works20062} alt='Do You See Me'/>
                    <img className='mobile-images' src={works20063} alt='Cross the Dark Line'/>
                    <img className='mobile-images' src={works20064} alt='Run'/>
                    <img className='mobile-images' src={works20065} alt='Seeing it Through the Rough'/>
                </div>
        </div>
    )
    }
}