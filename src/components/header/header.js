import PropTypes from "prop-types"
import React from "react"
import NavLinks from './nav-links/nav_links'
import Headroom from 'react-headroom'


const Header = () => (
<Headroom disableInlineStyles={true}>
  <header className='header-container'>
  <NavLinks/>
  </header>
  </Headroom>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
