import React  from 'react'
import {Arrow} from '../../assets/icons';
import Header from '../header/header';
import AnchorLink from 'react-anchor-link-smooth-scroll'


function Landing() {


    return (
        <div className='container'>
        <Header />
        <div className='rbdescription'>
        <h1><span>Rupert Bright.</span></h1>
        <h1>From London, based in Switzerland.</h1>
        <h1><span> Software Developer.</span></h1>
        </div>
        <div className='arrow-container'><AnchorLink href='#about'>
        <Arrow className='arrow'/>
        </AnchorLink>
        </div>
        </div>
    )
}

export default Landing
