
import React from "react";
import { Link } from "gatsby"
import "./nav.scss"
import Accordion from "./accordion"


const Nav = ({ siteTitle }) => (
  <nav>
    <div className="sideBarNav">
        <Link className="kit-brand" to="/"><h2>UI Toolkit</h2></Link>
        <Accordion />
    </div>
  </nav>
)

export default Nav
