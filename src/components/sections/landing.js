import React from 'react'
import { Fade } from "react-awesome-reveal";

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

        <div className='rb-description'>
        <Fade cascade delay={500}>
        <p>Hi <span role='img' aria-label='hand'>👋 </span>, my name is</p>
        <h1><span>Rupert Bright.</span></h1>
        <h1>Frontend Engineer from London</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam</p>
        </Fade>
        </div>
        
        <div className='fixed-right'>
        <li>H</li>
        <li>H</li>
        <li>H</li>
        <li>H</li>
        </div>
        </div>
        </div>
    )
}

export default landing
