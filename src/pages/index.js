import React from "react"

import { About, Contact, Projects, Landing } from '../components'


import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
    
  <Layout>
    <SEO title="Home" />
    <Landing/>
    <About/>
    <Projects/>
    <Contact/>
  </Layout>
)

export default IndexPage
