import React  from 'react'
import Fade from 'react-reveal/Reveal';
import {Arrow} from '../../assets/icons';
// LinkedIn, GitHub, Instagram, Telegram, Line, 
import Header from '../header/header';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { slide as Menu } from 'react-burger-menu'

function Landing(windowWidth) {
    const window = Object.values(windowWidth)
    console.log('landing', window)


    return (
        <div className='container'>
        {window[0] > 1000  ? (<Header/>) : ( 
        <Menu  right>
        <div ><AnchorLink href='#about'>About</AnchorLink></div>
            <div ><AnchorLink href='#projects'>Projects</AnchorLink></div>
            <div ><AnchorLink href='#contact'>Contact</AnchorLink></div>
            <button >CV</button>
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
        {/* <Projects windowSize={windowSize}/> */}
        </div>
        </div>
    )
}

export default Landing
