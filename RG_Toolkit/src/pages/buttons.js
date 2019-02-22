import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Highlight from 'react-highlight'
import 'highlight.js/styles/vs2015.css'


const Design = () => (
  
  <Layout>
    <SEO title="Design Components" />
    <div>
    <h1>Design Components</h1>
    <h2>Render</h2>
    <pre>
        <div>
          <button type="submit" class="govuk-button">
            Save and continue
          </button>
        </div>
    </pre>
    <h2>Code</h2>

    <Highlight className='html'>
    {`   
      <div>
        <button type="submit" class="govuk-button">
          Save and continue
        </button>
      </div>
    `}
    </Highlight>

    {/* <p>Welcome to page 2</p> */}
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Design
