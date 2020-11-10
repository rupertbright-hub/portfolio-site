import React from 'react'
import Fade from 'react-reveal/Reveal';
import {LinkedIn, GitHub, Instagram, Telegram, Line, Arrow} from '../../assets/icons'
import AnchorLink from 'react-anchor-link-smooth-scroll'

function landing() {
    return (
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
        <p>Hi <span role='img' aria-label='hand'>👋 </span>, my name is</p>
        <h1><span>Rupert Bright.</span></h1>
        <h1>Frontend Engineer from London.</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam</p>
        </div>
        </Fade>
        </div>
        <div className='arrow-container'><AnchorLink href='#about'>
        <Arrow className='arrow'/>
        </AnchorLink>
        </div>
    
        
        <div className='fixed-right'>
        <div className='social-icon'><LinkedIn/></div>
        <div className='social-icon'><GitHub/></div>
        <div><Instagram/></div>
        <div><Telegram/></div>
        <div><Line/></div>
        </div>
        </div>
        </div>
    )
}

export default landing
