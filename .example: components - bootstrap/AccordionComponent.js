import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import "bootstrap/dist/css/bootstrap.min.css";

class AccordionComponent extends React.Component {
  // {this.props.bookToPass.title}
  // <Accordion.Header>{this.props.bookToPass.title}</Accordion.Header>

  render() {
    return (
      <>
        <Accordion.Header>{this.props.bookToPass.title}</Accordion.Header>
        <Accordion.Body>
          <p>test</p>
          <p>{this.props.bookToPass.title}</p>
        </Accordion.Body>
      </>

    );
  }
}

export default AccordionComponent;
