import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Functional = () => (
  <Layout>
    <SEO title="Functional Components" />
    <h1>Functional Components</h1>
    {/* <p>Welcome to page 4</p> */}
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Functional
