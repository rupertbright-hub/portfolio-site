import PropTypes from "prop-types"
import React from "react"
import NavLinks from './nav-links/nav_links'

const Header = () => (
  <header className='header-container'>
  <NavLinks/>

    
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
