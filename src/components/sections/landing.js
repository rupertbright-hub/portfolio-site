import React from 'react'
import Fade from 'react-reveal/Reveal';
import {Arrow} from '../../assets/icons';
// LinkedIn, GitHub, Instagram, Telegram, Line, 
import Header from '../header/header';
import AnchorLink from 'react-anchor-link-smooth-scroll'

function landing() {
    return (
        <div className='container'>
        <Header/> 
        <div className='landing-container'>
        <div>
        <div className='fixed-left'>
            <li>H</li>
            <li>H</li>
            <li>H</li>
            <li>H</li>
        </div>
        <div>
        <Fade delay={4000}>
        <div className='rb-description'>
        <h1><span>Rupert Bright.</span></h1>
        <h1>Frontend Engineer from London.</h1>
        <h1>Based in<span s> Switzerland.</span></h1>
    
        </div>
        </Fade>
        </div>
        <div className='arrow-container'><AnchorLink href='#about'>
        <Arrow className='arrow'/>
        </AnchorLink>
        </div>
    
        
        {/* <div className='fixed-right'>
        <div className='social-icon'><LinkedIn/></div>
        <div className='social-icon'><GitHub/></div>
        <div><Instagram/></div>
        <div><Telegram/></div>
        <div><Line/></div>
        </div> */}
        </div>
        </div>
        </div>
    )
}

export default landing
