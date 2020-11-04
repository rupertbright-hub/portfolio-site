import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

function nav_links() {
    return (
        <div>
            <AnchorLink href='#about'>01. About</AnchorLink>
            <AnchorLink href='#contact'>02. Contact</AnchorLink>
            <AnchorLink href='#projects'>03. Projects</AnchorLink>
    </div>
    )
}

export default nav_links
