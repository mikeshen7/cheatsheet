import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

// Form which takes in City information
// Props: UserFormReturnData(), handleSubmit(),
// Returns city

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
    }
  }

  handleCityInput = (event) => {
    this.setState({
      city: event.target.value,
    })
  }

  localHandleSubmit = (event) => {
    this.props.handleSubmit(event, this.state.city);
  }

  render() {
    return (
      <>
        <Form onSubmit={this.localHandleSubmit} className="form">
          <Form.Group controlId="city">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="Enter city" onInput={this.handleCityInput} />
          </Form.Group>

          <Button onClick={this.localHandleSubmit} variant="primary">Explore!</Button>
        </Form>
      </>
    );
  }
}

export default UserForm;
