import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import SunnyLogo from '../../assets/sunny-ra-logo.png';
import SunnyPortrait from '../../assets/sunny-portrait.jpg';
import CloseIcon from 'react-icons/lib/fa/times-circle';

export default class Header extends Component {
    constructor(props) {
        super(props)
    
            this.state = {
                showAbout: false,
                showContact: false
            }
            this.handleClickAbout = this.handleClickAbout.bind(this);
            this.handleClickContact = this.handleClickContact.bind(this);
        }
    
        handleClickAbout() {
            this.setState({
                showAbout: !this.state.showAbout,
                showContact: false
            })
        }

        handleClickContact() {
            this.setState({
                showContact: !this.state.showContact,
                showAbout: false
            })
        }

    render() {
        let {showAbout} = this.state;
        let {showContact} = this.state;
        let aboutDropDown = showAbout ? 'slide-about slide-about-position' : 'slide-about';
        let contactDropDown = showContact ? 'slide-about slide-about-position' : 'slide-about';

    return(
        <div>
            <header>
                <div className='sunny-logo-container'>
                    <Link to='/'><img className='sunny-logo' src={SunnyLogo} alt='Sunny Ra Logo' /></Link>
                </div>
                <nav>
                    <ul>
                        <Link to='/paintings'><li className='nav-text'>Paintings</li></Link>
                        <Link to='/works'><li className='nav-text'>Works On Paper</li></Link>
                        <Link to='/gallery'><li className='nav-text'>Photo Gallery</li></Link>
                        <Link to='/commissioned'><li className='nav-text'>Commissioned Work</li></Link>
                        <li><button className='aboutBtn' onClick={this.handleClickAbout} >About</button></li>
                        <li><button className='contactBtn' onClick={this.handleClickContact} >Contact</button></li>
                    </ul>
                </nav>
                        <div className={aboutDropDown}>
                            <div className='about-container'>
                                <img className='sunny-portrait' src={SunnyPortrait} alt='Sunny Ra'/>
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
                                <div className='xBtn-container'>
                                    <button className='xBtn' onClick={this.handleClickAbout}><CloseIcon/></button>
                                </div>
                            </div>

                        </div>
                        <div className={contactDropDown}>
                            <div className='contact=container'>
                                <h1>Contact</h1>
                            </div>
                        </div>
            </header>
        </div>
        )
    }
}