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
      <header class="govuk-header" role="banner" data-module="header">
        <div class="govuk-header__container govuk-width-container">
          <div class="govuk-header__logo">
            <a href="/" class="govuk-header__link govuk-header__link--homepage">
                <span class="govuk-header__logotype">
                  <span class="govuk-header__logotype-text undefined">
                    HACKNEY
                  </span>
                </span>
            </a>
          </div>
        </div>
      </header>
      </div>
    </pre>
    <h2>Code</h2>

    <Highlight className='html'>
    {`   
      <header class="govuk-header" role="banner" data-module="header">
        <div class="govuk-header__container govuk-width-container">
          <div class="govuk-header__logo">
            <a href="/" class="govuk-header__link govuk-header__link--homepage">
                <span class="govuk-header__logotype">
                  <span class="govuk-header__logotype-text undefined">
                    HACKNEY
                  </span>
                </span>
            </a>
          </div>
        </div>
      </header>
    `}
    </Highlight>

    {/* <p>Welcome to page 2</p> */}
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Design
