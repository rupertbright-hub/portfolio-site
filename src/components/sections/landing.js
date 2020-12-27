import React, { useState, useEffect } from 'react'
import Fade from 'react-reveal/Reveal';
import {Arrow} from '../../assets/icons';
// LinkedIn, GitHub, Instagram, Telegram, Line, 
import Header from '../header/header';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { slide as Menu } from 'react-burger-menu'
import Headroom from 'react-headroom'

function Landing() {

    const [windowSize, setWindowSize] = useState();

useEffect(() => {
      window.addEventListener("resize", () => {
        setWindowSize(window.innerWidth);
      });
    }, []);

    console.log(windowSize)

    return (
        <div className='container'>
        {windowSize > 1000 ? (<Header/>) : ( 
     
        <Menu right>
        <div><AnchorLink href='#about'><span>01.</span> About</AnchorLink></div>
            <div><AnchorLink href='#projects'><span>03.</span> Projects</AnchorLink></div>
            <div><AnchorLink href='#contact'><span>02.</span> Contact</AnchorLink></div>
            <button>CV</button>
            </Menu>
        )}
        <Fade delay={4000}>
        <div className='rbdescription'>
        <h1><span>Rupert Bright.</span></h1>
        <h1>Frontend Engineer from London.</h1>
        <h1>Based in</h1><h1><span> Switzerland.</span></h1>
        </div>
        </Fade>
        <div className='arrow-container'><AnchorLink href='#about'>
        <Arrow className='arrow'/>
        </AnchorLink>
        </div>
        </div>
      
    )
}

export default Landing
