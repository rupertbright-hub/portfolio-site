import React from 'react'
import Header from '../header/header'
import Headroom from 'react-headroom'

function landing() {
    return (
        <div className='landing-container'>
        <Headroom disableInlineStyles={true}>
        <Header/>
        </Headroom>
        <div className='section-container'>
        <div className='fixed-left'>
            <li>H</li>
            <li>H</li>
            <li>H</li>
            <li>H</li>
        </div>
        <div className='rb-description'>
        <p>Hi <span role='img' aria-label='hand'>👋 </span>, my name is</p>
        <h1><span>Rupert Bright.</span></h1>
        <h1>I am a Frontend Engineer from London</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam</p>
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
