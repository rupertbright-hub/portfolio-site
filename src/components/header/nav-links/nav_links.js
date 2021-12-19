import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import CV from './rbcv.pdf'


function Nav_links() {

    return (
    <div>
        <div className='navlinks-container'>
            <div><AnchorLink href='#about'><span>01.</span> About</AnchorLink></div>
            <div><AnchorLink href='#projects'><span>02.</span> Projects</AnchorLink></div>
            <div><AnchorLink href='#contact'><span>03.</span> Contact</AnchorLink></div>
            <button onClick={() => window.open(CV)}>CV</button>
    </div>
    </div>
        )

}

export default Nav_links

