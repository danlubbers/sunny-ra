import React from 'react'
import {Link} from 'react-router-dom';
import SunnyLogo from '../../assets/sunny-ra-logo.png'

export default function Header() {
    return(
        <div>
            <header>
                <div className='sunny-logo-container'>
                    <Link to='/'><img className='sunny-logo' src={SunnyLogo} alt='Sunny Ra Logo' /></Link>
                </div>
                <nav>
                    <ul>
                        <Link to='/paintings'><li>Paintings</li></Link>
                        <Link to='/works'><li>Works On Paper</li></Link>
                        <Link to='/gallery'><li>Photo Gallery</li></Link>
                        <Link to='/commissioned'><li>Commissioned Work</li></Link>
                        <Link to='/about'><li>About</li></Link>
                        <Link to='/contact'><li>Contact</li></Link>
                    </ul>
                </nav>
            </header>
        </div>
    )
}