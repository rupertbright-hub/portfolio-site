import React from 'react'
import Me from './rupert3.jpg'



function About() {
    return (
        <div className='about-container'>
        <div id='about'  className='about-section'>
        <div  className='heading'>
        <h1   >About</h1>
        </div>
        <div className='about-description'>
      
            <div className='left-container'>
                <p>Hello! I'm <span>Rupert</span>, a software developer from London but now based in Zurich, Switzerland.<br/></p>
                <p>I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. My goal is to always build products that provide pixel-perfect, performant experiences.<br/></p>
                <p>Below are a few projects that I have built and created in my current role at the VC firm <span> Sparrow Ventures</span> and some of my own personal projects. <br/></p>
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
