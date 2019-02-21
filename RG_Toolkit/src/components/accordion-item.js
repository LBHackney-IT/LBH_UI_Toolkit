import "./accordion-item.scss"
import React from "react"
// import { Link } from "gatsby"
import AccordionItemChildWrapper from "./accordion-item-child-wrapper"


class AccordionItem extends React.Component {
    constructor() {
      super();
      this.state = {
        active: false,
        submenu: 0
      };
      this.toggle = this.toggle.bind(this);

    }
    toggle() {
      this.setState({
        active: !this.state.active,
        className: "active"
      });
    }

    render() {
      // const activeClass = this.state.active ? "active" : "inactive";
      const activeClass = this.state.active ? "active" : "active";

      const primaryMenu = this.props.details;
      return (
              <div className={'accordion-item ' + activeClass} onClick={this.toggle}>
                <span className="summary">{primaryMenu.title}</span>
                <span className="folding-pannel answer">
                <AccordionItemChildWrapper menuParent={primaryMenu.child}  />
                </span>
              </div>
      );
    }
  }

  export default AccordionItem
  

  