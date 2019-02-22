import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Highlight from 'react-highlight'
import 'highlight.js/styles/vs2015.css'

import Tabs from 'react-accessible-tabs';


const tabContent = [
  {
      label: 'HTML',
      // content: <CustomComponent text="Tab 1 content" />
      content:         
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
  },
  {
      label: 'React',
      // content: <Parent><Child text="Tab 2 content" /></Parent>
      content: 
      <Highlight className='js'>
      {`   
        import { Link } from "gatsby"
        import PropTypes from "prop-types"
        import "./header.scss"
        import React from "react"


        const Header = ({ siteTitle }) => (
          <header
            style={{
              background: '#74c043',
              marginBottom: '1.45rem',
            }}
          >
            <div
              style={{
                margin: '0 auto',
                maxWidth: 960,
                height: '100px'
              }}
            >
              <h1 style={{ margin: 0 }}>
                <Link
                  to="/"
                  style={{
                    color: 'white',
                    textDecoration: 'none',
                  }}
                >
                  {siteTitle}
                </Link>
              </h1>
            </div>
          </header>
        )

        Header.propTypes = {
          siteTitle: PropTypes.string,
        }

        Header.defaultProps = {
          siteTitle: '',
        }

        export default Header
      `}
    </Highlight>

  }
];
const initialSelectedIndex = 0;

const Header = () => (
  
  <Layout>
    <SEO title="Design Components" />
    <div>
          <h1>Design Components</h1>
          <h2>Render</h2>
          <pre className="pre-render">
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



          <Tabs data={tabContent} initialSelectedIndex={initialSelectedIndex} />

  

          {/* <p>Welcome to page 2</p> */}
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Header
