import React  from 'react'
import Fade from 'react-reveal/Reveal';
import {Arrow} from '../../assets/icons';
import Header from '../header/header';
import AnchorLink from 'react-anchor-link-smooth-scroll'


function Landing(windowWidth) {
    const window = Object.values(windowWidth)
    console.log('landing', window)
    


    return (
        <div className='container'>
        <Header window={window}/>
        <div className='rbdescription'>
        <h1><span>Rupert Bright.</span></h1>
        <h1>From London, based in Switzerland.</h1>
        <h1><span> Software Developer.</span></h1>
        </div>
        <div className='arrow-container'><AnchorLink href='#about'>
        <Arrow className='arrow'/>
        </AnchorLink>
        {/* <Projects windowSize={windowSize}/> */}
        </div>
        </div>
    )
}

export default Landing
