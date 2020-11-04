import React from "react"

import About from '../components/sections/about'
import Contact from '../components/sections/contact'
import Projects from '../components/sections/projects'



import Layout from "../../src/components/common/layout"
import SEO from "../../src/components/common/seo"

const IndexPage = () => (
    
  <Layout>
    <SEO title="Home" />
    <About/>
    <Contact/>
    <Projects/>
  </Layout>
)

export default IndexPage
