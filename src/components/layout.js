import React from "react"
import PropTypes from "prop-types"


// import Loading from './loading/loading'
import "../../src/assets/sass/layout.scss"

const Layout = ({ children}) => {

//   const [loading, setLoading ] = useState(true);


//   console.log(loading)

//     useEffect(() => {
//         setTimeout(() => {
//             setLoading(false)
//         }, 3000);
//     }, []);
         

  return (
    <>

        <div>
        <main className='layout-container'>{children}</main>
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
