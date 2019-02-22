import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import './govuk-frontend.scss'

import Header from "./header"
import SidebarNav from "./nav"
import "./layout.scss"
import './accessible-react-tabs.scss'

// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// require("prismjs/plugins/line-numbers/prism-line-numbers.css")
const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <SidebarNav />

        <div
          style={{
            margin: `0 auto`,
            // maxWidth: 960,
            maxWidth: 1100,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <main>{children}</main>


          <footer>
            {/* © {new Date().getFullYear()} */}
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
