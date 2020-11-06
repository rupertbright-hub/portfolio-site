import React from "react"

import { Header, About, Contact, Projects } from '../components'


import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
    
  <Layout>
    <SEO title="Home" />
    <Header/>
    <About/>
    <Contact/>
    <Projects/>
  </Layout>
)

export default IndexPage
