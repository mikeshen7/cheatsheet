import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Button } from 'react-bootstrap';
import BookUpdateForm from './BookUpdateForm';

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showUpdateForm: false
    };
  }

  handleCloseModal = () => {
    this.setState({
      showUpdateForm: false,
    });
  };

  render() {
    return (
      <>
        <div className="carousel-bg">
          <img
            src={this.props.book.url}
            alt="First slide"
          />
        </div>

        <Carousel.Caption>
          <h3>{this.props.book.title}</h3>
          <p>{this.props.book.description}</p>
          <p>{this.props.book.status}</p>
          <Button onClick={() => { this.props.deleteBooks(this.props.book._id); }}>DELETE</Button>
          <Button onClick={() => { this.setState({ showUpdateForm: true }); }} variant='info'>UPDATE</Button>
        </Carousel.Caption>

        <BookUpdateForm
          book={this.props.book}
          updateBooks={this.props.updateBooks}
          showUpdateForm={this.state.showUpdateForm}
          closeModal={this.handleCloseModal}
        ></BookUpdateForm>
      </>
    );
  }
}

export default Book;
