import "./accordion-item.scss"
import React from "react"
import { Link } from "gatsby"


class AccordionItemChild extends React.Component {
    constructor() {
      super();
      this.state = {
        active: true
      };
    }

    render() {
      const activeClass = this.state.active ? "active" : "inactive";
      const cDetails = this.props.childDetails;
      return (
              <Link to={cDetails.childUrl} >{cDetails.childTitle}</Link>
      );
    }
  }

  export default AccordionItemChild