import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Highlight from 'react-highlight'
import 'highlight.js/styles/vs2015.css'


const Base = () => (
  
  <Layout>
    <SEO title="Get Started" />
    <div>
    <h1>Get Started</h1>
    <h2>Render</h2>

    <Highlight className='html'>
    {`   
      npm install --save frontend-toolkit
    `}
    </Highlight>


    <pre>
      <div>
        <html>
          <body>
            <button>Save changes</button>
          </body>
        </html>
      </div>
    </pre>
    <h2>Code</h2>

    <Highlight className='html'>
    {`   
      <div>
      <html>
        <body>
          <button>Save changes</button>
        </body>
      </html>
    </div>
    `}
    </Highlight>

    {/* <p>Welcome to page 2</p> */}
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Base
