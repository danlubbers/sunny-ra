import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import SunnyLogo from '../../assets/sunny-ra-logo.png'

export default class Header extends Component {
    constructor(props) {
        super(props)
    
            this.state = {
                showAbout: false
            }
            this.handleClick = this.handleClick.bind(this);
        }
    
        handleClick() {
            this.setState({showAbout: !this.state.showAbout})
        }

    render() {
        let {showAbout} = this.state;
        let slideCSS = showAbout ? 'slide-about slide-about-position' : 'slide-about';
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
                        {/* <Link to='/about'> */}
                        <li><button className='aboutBtn' onClick={this.handleClick} >About</button></li>
                        {/* </Link> */}
                        <Link to='/contact'><li className='nav-text'>Contact</li></Link>

                    </ul>
                </nav>
                        <div className={slideCSS}>
                            <div>
                                <h1>ABOUT TESTING</h1>
                            </div>
                        </div>
            </header>
        </div>
        )
    }
}