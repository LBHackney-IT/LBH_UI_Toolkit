import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import 'bootstrap/dist/css/bootstrap.css';
const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    {/* <Link to="/base-components/">Get Started </Link>
    <Link to="/design-components/">Design</Link>
    <Link to="/layout-components/">Layout</Link>
    <Link to="/layout-components/">Functional </Link> */}
  </Layout>
)

export default IndexPage
