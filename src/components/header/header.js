import PropTypes from "prop-types"
import React from "react"
import NavLinks from './nav-links/nav_links'
import Headroom from 'react-headroom'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { slide as Menu } from 'react-burger-menu'
import Cv from '../header/nav-links/rbcv.pdf'


function Header(window) {

    // const window = Object.values(windowWidth)
    // console.log('landing', window)

  
    console.log(window.window[0])

return (
    <div>
{window.window[0]> 1000 || window.window[0] === 'undefined'  ? (<Headroom><header className='header-container'>
  <NavLinks/>
  </header>
  </Headroom>) : ( 
        <Menu  right>
        <div ><AnchorLink href='#about'>About</AnchorLink></div>
            <div ><AnchorLink href='#projects'>Projects</AnchorLink></div>
            <div ><AnchorLink href='#contact'>Contact</AnchorLink></div>
            <button onClick={() => window.open(Cv)} >CV</button>
            </Menu>
        )}
        </div>
)
  }

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
