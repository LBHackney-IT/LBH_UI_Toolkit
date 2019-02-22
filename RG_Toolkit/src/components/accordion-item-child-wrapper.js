import "./accordion-item.scss"
import React from "react"
import AccordionItemChild from "./accordion-item-child"

  
  class AccordionItemChildWrapper extends React.Component {
    constructor() {
      // get super state
      super();
      this.handleStateFromAccordionItemChild = this.handleStateFromAccordionItemChild.bind(this);

      // map questions object to state
      this.state = {
        // questions: sampleQuestions,
        aic: accordionItemChildren,
        
      };
      // bind functional chil component
      this.renderItemChild = this.renderItemChild.bind(this);

    }

    handleStateFromAccordionItemChild() {
        this.setState({
          active: !this.state.active,
          className: "active"
        });
        console.log('Wrapper ahs been passed props')
      }

    //pass key as a prop - react uses key as identifier for react dom
    renderItemChild(key) {
      return <AccordionItemChild key={key} index={key} childDetails={this.state.aic[key]} onClick={this.props.action} />
    }
    // map in render using key props, and map functional component
    render() {
        console.log('menuParent is: '+ this.props.menuParent)
      return(
        //   <div className="accordion-container">{Object.keys(this.state.questions).map(this.renderQuestion)} </div>
        <div className="accordion-item-container">
            {Object.keys(this.state.aic)
            .filter(key => this.state.aic[key].childParent === this.props.menuParent)
            .map(this.renderItemChild)
            } 
        </div>
      )
    }
  }

  const accordionItemChildren = {
    child1: {childParent:'1', childTitle:'Header', childUrl: '/header/'},
    child2: {childParent:'1', childTitle:'Buttons', childUrl: '/buttons/'},
    child3: {childParent:'2', childTitle:'Button Groups', childUrl: '/button-groups/'},
    child4: {childParent:'2', childTitle:'Brand', childUrl: '/design-components/'},
    child5: {childParent:'2', childTitle:'Form components', childUrl: '/functional-components/'},
    child6: {childParent:'2', childTitle:'Sketch Downloads', childUrl: '/dowloads/'},
  };
  export default AccordionItemChildWrapper
