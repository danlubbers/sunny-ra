import React, {Component} from 'react';
import Slider from 'react-slick';

export default class Paintings2006 extends Component {
    
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
        <div className='paintings-container'>
            <div className='paintings-container-desktop'>
                <div className='content-wrapper'>
                    <h1>2006 Paintings</h1>
                    <div className='carousel-container'>
                        <Slider ref={slider => (this.slider = slider)}{...settings} style={{position: 'relative',    zIndex: '500 !important'}}>
                    
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    <h1 className='text-overlay-2'>The Final Round</h1>
                                    <h2 className='text-overlay-2'>54in x 40in oil on canvas December 2006</h2>
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/paintings/2006/paintings2006-1.jpg" alt="The Final Round"/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    <h1 className='text-overlay-2'>It's Not Enough</h1>
                                    <h2 className='text-overlay-2'>43in x 34in oil on canvas October 2006</h2>
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/paintings/2006/paintings2006-2.jpg" alt="It's Not Enough"/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    <h1 className='text-overlay'>The Only One</h1>
                                    <h2 className='text-overlay'>38in x 50in oil on canvas July 2006</h2>
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/paintings/2006/paintings2006-3.jpg" alt="The Only One"/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    <h1 className='text-overlay-2'>Make it Tomorrow</h1>
                                    <h2 className='text-overlay-2'>50in x 40in oil on canvas May 2006</h2>
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/paintings/2006/paintings2006-4.jpg" alt="Make it Tomorrow"/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    <h1 className='text-overlay-2'>Go Ahead</h1>
                                    <h2 className='text-overlay-2'>52in x 40in oil on canvas April 2006</h2>
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/paintings/2006/paintings2006-5.jpg" alt="Go Ahead"/>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
                <div className='images-container-mobile'>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/paintings/2006/paintings2006-1.jpg" alt='The Final Round'/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/paintings/2006/paintings2006-2.jpg" alt="It's Not Enough"/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/paintings/2006/paintings2006-3.jpg" alt='The Only One'/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/paintings/2006/paintings2006-4.jpg" alt='Make it Tomorrow'/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/paintings/2006/paintings2006-5.jpg" alt='Go Ahead'/>
                </div>
        </div>
    )
    }
}