import React from "react"

import { About, Contact, Projects, Landing } from '../components'


import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
    
  <Layout>
    <SEO title="Home" />
    <Landing/>
    <About/>
    <Contact/>
    <Projects/>
  </Layout>
)

export default IndexPage
