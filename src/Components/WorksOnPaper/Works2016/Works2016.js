import React, {Component} from 'react';
import Slider from 'react-slick';

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
        <div className='works-container'>
            <div className='works-container-desktop'>
                <div className='content-wrapper'>
                    <h1>2016 Works on Paper</h1>
                    <div className='carousel-container'>
                        <Slider ref={slider => (this.slider = slider)}{...settings} style={{position: 'relative',    zIndex: '500 !important'}}>
                    
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1 className='text-overlay'></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/works/2016/works2016-01.jpg" alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1 className='text-overlay'></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/works/2016/works2016-02.jpg" alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1 className='text-overlay'></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/works/2016/works2016-03.jpg" alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1 className='text-overlay'></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/works/2016/works2016-04.jpg" alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1 className='text-overlay'></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/works/2016/works2016-05.jpg" alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1 className='text-overlay'></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/works/2016/works2016-06.jpg" alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1 className='text-overlay'></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/works/2016/works2016-07.jpg" alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1 className='text-overlay'></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/works/2016/works2016-08.jpg" alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1 className='text-overlay'></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/works/2016/works2016-09.jpg" alt=""/>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
                <div className='images-container-mobile'>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/works/2016/works2016-01.jpg" alt=''/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/works/2016/works2016-02.jpg" alt=''/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/works/2016/works2016-03.jpg" alt=''/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/works/2016/works2016-04.jpg" alt=''/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/works/2016/works2016-05.jpg" alt=''/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/works/2016/works2016-06.jpg" alt=''/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/works/2016/works2016-07.jpg" alt=''/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/works/2016/works2016-08.jpg" alt=''/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/works/2016/works2016-09.jpg" alt=''/>
                </div>
        </div>
    )
    }
}