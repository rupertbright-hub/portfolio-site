import React from "react"
import PropTypes from "prop-types"


// import Loading from './loading/loading'
import "../../src/assets/sass/layout.scss"

const Layout = ({ children}) => {
  return (
    <>
        <div >
        <main>{children}</main>
        </div>
        <footer>
        </footer>

    </>
  )

}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
