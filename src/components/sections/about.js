import React from 'react'



function About() {
    return (
        <div id='about' className='about-section'>
        <h1 >01. About</h1>
        <div className='about-description'>
            <div className='left-container'>
                <p>Hello! I'm Brittany, a software engineer based in Boston, MA.</p>
                <p>I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. My goal is to always build products that provide pixel-perfect, performant experiences.</p>
                <p>Shortly after graduating from Northeastern University, I joined the engineering team at Upstatement where I work on a wide variety of interesting and meaningful projects on a daily basis.</p>
                <p>Here are a few technologies I've been working with recently:</p>
            </div>
            <div className='right-container'>
                <img alt='logo' src={'https://via.placeholder.com/300/09f/fff.png'}></img>
            </div>
        </div>
        </div>
    )
}

export default About
