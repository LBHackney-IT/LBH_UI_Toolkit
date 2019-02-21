import "./accordion.scss"
import React from "react"
import AccordionItem from "./accordion-item"

  
  class Accordion extends React.Component {
    constructor() {
      // get super state
      super();
      // map questions object to state
      this.state = {
        menu: primaryMenu,
      };
      // bind functional chil component
      this.renderPrimaryMenu = this.renderPrimaryMenu.bind(this);
    }
    //pass key as a prop - react uses key as identifier for react dom
    renderPrimaryMenu(key) {
      return <AccordionItem key={key} index={key} details={this.state.menu[key]} menuParent={this.state.menu.child} />
    }
    // map in render using key props, and map functional component
    render() {
      return(
          <div className="accordion-container">{Object.keys(this.state.menu).map(this.renderPrimaryMenu)} </div>
      )
    }
  }

  const primaryMenu = {
    menu1: {title:'Design Patterns', child: '1' },
    menu2: {title:'Layout',  child: '2' },
    menu3: {title:'Functional', child: '3'  },
    menu4: {title:'Downloads',  child: '4' },
  };

  export default Accordion
