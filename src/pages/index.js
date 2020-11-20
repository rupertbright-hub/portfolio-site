import React from "react"


import { Sections, Header } from '../components'


import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
    
  <Layout>
    <SEO title="Home" />
    {/* <Header/> */}
    <Sections/>
  </Layout>
)

export default IndexPage
