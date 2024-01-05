import React from 'react';
import './App.css';
import Accordion from 'react-bootstrap/Accordion';
import AccordionComponent from './AccordionComponent';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      testBooks: [
        {
          title: 'book 1',
          description: 'description 1'
        },
        {
          title: 'book 2',
          description: 'description 2'
        }
      ]
    };
  }

  render() {
    return (
      <>
        <Accordion defaultActiveKey="0">
          {this.state.testBooks.map((singleBook, index) => {
            console.log(singleBook.title);
            return (
              <Accordion.Item eventKey={index} key={index}>


                <AccordionComponent
                  bookToPass={singleBook}
                />


              </Accordion.Item>
            );
          })}
        </Accordion>
      </>
    );
  }
}

export default App;
