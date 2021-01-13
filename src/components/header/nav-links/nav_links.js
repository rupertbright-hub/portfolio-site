import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
// import Fade from 'react-reveal/Reveal';
import Cv from './rbcv.pdf'


function Nav_links() {

    return (
    <div>
  {/* <Fade cascade top> */}
        <div className='navlinks-container'>
            <div><AnchorLink href='#about'><span>01.</span> About</AnchorLink></div>
            <div><AnchorLink href='#projects'><span>02.</span> Projects</AnchorLink></div>
            <div><AnchorLink href='#contact'><span>03.</span> Contact</AnchorLink></div>
            <button onClick={() => window.open(Cv)}>CV</button>
    </div>
    {/* </Fade> */}
    </div>
        )

}

export default Nav_links

