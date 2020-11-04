// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import NavLinks from './nav-links/nav_links'

const Header = () => (
  <header className='container'>
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
