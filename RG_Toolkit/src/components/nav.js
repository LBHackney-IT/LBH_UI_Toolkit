
import React from "react";
import { Link, Image} from "gatsby"
import "./nav.scss"
import Accordion from "./accordion"
import lbhLogo from "../images/Hackney_Logo_White.png"

const Nav = ({ siteTitle }) => (
  <nav>
    <div className="sideBarNav">
        <Link className="kit-brand" to="/">
          <img src={lbhLogo} className="lbh-logo" alt="London Bourough of Hackney" />
        </Link>
        <Accordion />
    </div>
  </nav>
)

export default Nav

