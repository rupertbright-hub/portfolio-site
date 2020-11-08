import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Fade from 'react-reveal/Reveal';

function nav_links() {
    return (
        <div>
        <Fade cascade top>
        
        <div className='navlinks-container'>
        
            <div><AnchorLink href='#about'>01. About</AnchorLink></div>
            <div><AnchorLink href='#projects'>03. Projects</AnchorLink></div>
            <div><AnchorLink href='#contact'>02. Contact</AnchorLink></div>
            <button>CV</button>
    </div>
    </Fade>
    </div>
  
    )
}

export default nav_links
