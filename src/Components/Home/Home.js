import React from 'react';
import Carousel from '../Carousel/Carousel';

import blacksand from '../../assets/images/home/black-sand.jpg';
import mammoth from '../../assets/images/home/mammoth.jpg';
import flight from '../../assets/images/home/flight.jpg';
import manta from '../../assets/images/home/manta.jpg';
import kinetic from '../../assets/images/home/kinetic.jpg';
import might from '../../assets/images/home/might.jpg';
import radiate from '../../assets/images/home/mammoth.jpg';
import nebula from '../../assets/images/home/nebula.jpg';
import chase from '../../assets/images/home/chase.jpg';
import harvest from '../../assets/images/home/harvest.jpg';
import expedition from '../../assets/images/home/expedition.jpg';

export default function Home() {
    return(
        <div> 
            <div className='home-container-desktop'>
            <Carousel />
            </div>

            <div className='images-container-mobile'>
                <img className='mobile-images' src={blacksand} alt='blacksand'/>
                <img className='mobile-images' src={mammoth} alt='mammoth'/>
                <img className='mobile-images' src={flight} alt='flight'/>
                <img className='mobile-images' src={manta} alt='manta'/>
                <img className='mobile-images' src={kinetic} alt='kinetic'/>
                <img className='mobile-images' src={might} alt='might'/>
                <img className='mobile-images' src={radiate} alt='radiate'/>
                <img className='mobile-images' src={nebula} alt='nebula'/>
                <img className='mobile-images' src={chase} alt='chase'/>
                <img className='mobile-images' src={harvest} alt='harvest'/>
                <img className='mobile-images' src={expedition} alt='expedition'/>
            </div>
        </div>
    )
}