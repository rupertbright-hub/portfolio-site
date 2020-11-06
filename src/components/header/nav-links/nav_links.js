import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

function nav_links() {
    return (
        <div className='navlinks-container'>
            <div><AnchorLink href='#about'>01. About</AnchorLink></div>
            <div><AnchorLink href='#contact'>02. Contact</AnchorLink></div>
            <div><AnchorLink href='#projects'>03. Projects</AnchorLink></div>
    </div>
    )
}

export default nav_links
