import React, {Component} from 'react'
import {Link} from 'react-router-dom';
// Images
import SunnyLogo from '../../assets/sunny-ra-logo.png';
import SunnyPortrait from '../../assets/sunny-portrait.jpg';
import SunnyPortrait2 from '../../assets/sunny-portrait-2.jpg';
// Icons
import CloseIcon from 'react-icons/lib/fa/times-circle';

export default class Header extends Component {
    constructor(props) {
        super(props)
    
            this.state = {
                showPainting: false,
                showWorks: false,
                showGallery: false,
                showHome: false,
                showAbout: false,
            }
            this.handleOverPainting = this.handleOverPainting.bind(this);
            this.handleOverWorks = this.handleOverWorks.bind(this);
            this.handleOverGallery = this.handleOverGallery.bind(this);
            this.handleClickHome = this.handleClickHome.bind(this);
            this.handleClickAbout = this.handleClickAbout.bind(this);
            this.handleLeave = this.handleLeave.bind(this);
        }

        handleOverPainting() {
            this.setState({
                showPainting: !this.state.showPainting,
                showWorks: false,
                showGallery: false
            })
        }

        handleOverWorks() {
            this.setState({
                showWorks: !this.state.showWorks,
                showPainting: false,
                showGallery: false
            })
        }

        handleOverGallery() {
            this.setState({
                showGallery: !this.state.showGallery,
                showPainting: false,
                showWorks: false
            })
        }


        handleClickHome() {
            this.setState({
                showAbout: false,
                howPainting: false, 
                showWorks: false,
                showGallery: false
            })
            this.handleLeave()
        }
    
        handleClickAbout() {
            this.setState({
                showAbout: !this.state.showAbout,
                showPainting: false,
                showWorks: false,
                showGallery: false
            })
        }

        handleLeave() {
            this.setState({
                showPainting: false, 
                showWorks: false,
                showGallery: false
            
            })
        }

    render() {
        let {showAbout, showPainting, showWorks, showGallery} = this.state;
        let aboutDropDown = showAbout ? 'slide-about slide-about-position' : 'slide-about';
        let paintingDropDown = showPainting ? 'slide-painting slide-painting-position' : 'slide-painting';
        let worksDropDown = showWorks ? 'slide-works slide-works-position' : 'slide-works';
        let galleryDropDown = showGallery ? 'slide-gallery slide-gallery-position' : 'slide-gallery';

    return(
        <div>
            <header>
                <div className='sunny-logo-container'>
                    <Link to='/' onClick={this.handleClickHome}><img className='sunny-logo' src={SunnyLogo} alt='Sunny Ra Logo' /></Link>
                </div>
                <nav>
                    <ul>
                        <button className='paintingBtn' onMouseOver={this.handleOverPainting} >Paintings</button>
                            <div className={paintingDropDown} onMouseLeave={this.handleLeave}>
                                <Link to='/paintings2006'><li>2006</li></Link>
                                <Link to='/paintings2008'><li>2008</li></Link>
                                <Link to='/paintings2010'><li>2010</li></Link>
                                <Link to='/paintings2012'><li>2012</li></Link>
                                <Link to='/paintings2014'><li>2014</li></Link>
                                <Link to='/paintings2015'><li>2015</li></Link>
                            </div>
                       <button className='worksBtn' onMouseOver={this.handleOverWorks}>Works On Paper</button>
                            <div className={worksDropDown} onMouseLeave={this.handleLeave}>
                                <Link to='/works2006'><li>2006</li></Link>
                                <Link to='/works2009'><li>2009</li></Link>
                                <Link to='/works2012'><li>2012</li></Link>
                                <Link to='/works2016'><li>2016</li></Link>
                            </div>
                        <button className='galleryBtn' onMouseOver={this.handleOverGallery}>Photo Gallery</button>
                            <div className={galleryDropDown} onMouseLeave={this.handleLeave}>
                                <Link to='/installation'><li>Installation Photos</li></Link>
                                <Link to='/studentwork'><li>Student Work</li></Link>
                                </div>
                        <Link to='/commissioned'><button className='commissionBtn' onClick={this.handleLeave}>Commissioned Work</button></Link>
                        <li><button className='aboutBtn' onClick={this.handleClickAbout} >About</button></li>
                    </ul>
                </nav>
                        <div className={aboutDropDown}>
                            <div className='about-container'>
                                <div className='photo-contact-container'>
                                    <img className='sunny-portrait' src={SunnyPortrait2} alt='Sunny Ra'/>
                                    <h2 className='email'>sunnyra23@gmail.com</h2>
                                </div>
                            <div className='education-container'>
                                <h3>ARTIST / EDUCATOR</h3>
                                <br/>
                                <h3>Education:</h3>
                                <h4>Hunter College, CUNY; Master of Fine Arts</h4>
                                <h4>University of Pennsylvania; Bachelor of Fine Arts, Cum Laude</h4>
                                <h4>Pennsylvania Academy of the Fine Arts; Painting Certificate</h4>
                                <h4>Penn Study Abroad; London, England</h4>
                                <br/>
                                <h3>Other Art Related Experience:</h3>
                                <h4>Vermont Studio Center Residency</h4>
                                <h4>Kentucky's Governor's School for the Arts</h4>
                                <br/>
                                <h3>Awards/Recognition:</h3>
                                <h4>Great Meadows Foundation Grant</h4>
                                <h4>Corporate Art Program, Zephyr Gallery, Louisville, KY</h4>
                                <h4>City of Louisville, Mayor's Citation Recipient</h4>
                                <h4>Vermont Studio Center Fellowship</h4>
                                <h4>Studio Visit Magazine Springs 2012 Edition, Vol. 17 & 18</h4>
                                <h4>Christie's Magazine Emerging Artist Presentation</h4>
                                <h4>Gates Millennium Scholar</h4>
                            </div>
                            <div className='exhibition-container'>
                            <h3>Exhibition History</h3>
                                <h4>Solo Exhibition, Quills, Louisville, KY 2017</h4>
                                <h4>Pop-Up Art Show, Republic Bank First Friday Gallery Hop, Louisville, KY  2017</h4>
                                <h4>Pop-Up Art Show, Frankfort Avenue Trolley Hop, Louisville, KY  2016</h4>
                                <h4>Open Studio Weekend Exhibition, Cressman Center for Visual Arts, Louisville, KY  2015</h4>
                                <h4>Botanica, Women's Club, Louisville, KY 2014</h4>
                                <h4>Nightscapes, Solo Show, PUBLIC Gallery, Louisville, KY - 2014</h4>
                                <h4>Presence and Place, Louisville Metro Hall, Louisville, KY - 2014</h4>
                                <h4>Group Show, Swanson Reed Contemporary, Louisville, KY -  2013</h4>
                                <h4>Now on Paper, The Alliance of Young Artists and Writers, New York, NY - 2012</h4>
                                <h4>Environmental Perspectives, A Landscape Show, Pennsylvania Academy of Fine Arts, Philadelphia, PA – 2011</h4>
                                <h4>Hunter College MFA Thesis Exhibition, Hunter College, New York, NY – 2010 - 2011</h4>
                                <h4>Alumni Gallery at PAFA,  Pennsylvania Academy of Fine Arts, Philadelphia, PA – 2010 - 2011</h4>
                                <h4>Focus and Meditation, Artist Talk, Hunter College, New York, NY –  2010</h4>
                                <h4>Hunter MFA Group Show, Crane Arts, Philadelphia, PA – 2010</h4>
                                <h4>Kentucky Girlhood Project 2009, Murray State University, Murray, KY - 2009</h4>
                                <h4>Hunter College Open Studios, Hunter College, New York, NY – 2008 thru 2010</h4>
                                <h4>MP Law Office, Louisville, KY – 2006 - 2007</h4>
                                <h4>Swanson Reed Contemporary Gallery, Louisville, KY – 2006</h4>
                                <h4>The 104th Annual Student Exhibition, Pennsylvania Academy of Fine Arts, Philadelphia, PA – 2005</h4>
                                <h4>The 103rd Annual Student Exhibition, Pennsylvania Academy of Fine Arts, Philadelphia, PA – 2004</h4>
                                <h4>Certificate Student Gallery Showing,  Pennsylvania Academy of Fine Arts, Philadelphia, PA – 2001/2002</h4>
                            </div>
                                <div className='xBtnAbout-container'>
                                    <button className='xBtnAbout' onClick={this.handleClickAbout}><CloseIcon/></button>
                                </div>
                            </div>
                        </div>
            </header>
        </div>
        )
    }
}