import React from 'react'
import SunnyLogo from '../../assests/sunny-ra-logo.png'

export default function Header() {
    return(
        <div>
            <header>
                <div className='sunny-logo-container'>
                    <img className='sunny-logo' src={SunnyLogo} alt='Sunny Ra Logo' />
                </div>
                <nav>
                    <ul>
                        <li>Paintings</li>
                        <li>Works On Paper</li>
                        <li>Photo Gallery</li>
                        <li>Commissioned Work</li>
                        <li>About</li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}