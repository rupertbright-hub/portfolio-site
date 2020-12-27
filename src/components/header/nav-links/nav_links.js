// import { func } from 'prop-types';
import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Fade from 'react-reveal/Reveal';

function Nav_links() {

    return (
    <div>
  <Fade cascade top>
        <div className='navlinks-container'>
            <div><AnchorLink href='#about'><span>01.</span> About</AnchorLink></div>
            <div><AnchorLink href='#projects'><span>03.</span> Projects</AnchorLink></div>
            <div><AnchorLink href='#contact'><span>02.</span> Contact</AnchorLink></div>
            <button>CV</button>
    </div>
    </Fade>
    </div>
        )

}

export default Nav_links

