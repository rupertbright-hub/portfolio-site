import React from 'react'
import Me from './rupert.jpg'


function About() {
    return (
        <div className='about-container'>
        <div id='about' className='about-section'>
        <div className='heading'>
        <h1 >01. About</h1>
        </div>
        <div className='about-description'>
            <div className='left-container'>
                <p>Hello! I'm Brittany, a software engineer based in Boston, MA.<br/></p>
                <p>I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. My goal is to always build products that provide pixel-perfect, performant experiences.<br/></p>
                <p>Shortly after graduating from Northeastern University, I joined the engineering team at Upstatement where I work on a wide variety of interesting and meaningful projects on a daily basis.<br/></p>
                <p>Here are a few technologies I've been working with recently:<br/></p>
            </div>
            <div className='right-container'>
                <img alt='logo' src={Me}></img>
                </div>

        </div>
        </div>
        </div>
    )
}

export default About
