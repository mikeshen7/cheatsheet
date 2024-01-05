import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

class BookFormModal extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();

    let bookToUpdate = {
      title: event.target.title.value,
      description: event.target.description.value,
      status: event.target.status.value,
      url: event.target.url.value,
      _id: this.props.book._id,
      __v: this.props.book.__v
    };

    this.props.updateBooks(bookToUpdate);
    this.props.closeModal();
  };

  render() {
    return (
      <>
        <Modal show={this.props.showUpdateForm} onHide={this.props.closeModal}>
          <Modal.Header closeButton>Add Your Book</Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="title">
                <Form.Label>Book Title: </Form.Label>
                <Form.Control
                  required
                  type="text"
                  defaultValue={this.props.book.title} />
              </Form.Group>
              <Form.Group controlId="description">
                <Form.Label>Book Description: </Form.Label>
                <Form.Control
                  required
                  type="text"
                  defaultValue={this.props.book.description} />
              </Form.Group>
              <Form.Group controlId="status">
                <Form.Label>Book Availibility: </Form.Label>
                <Form.Control
                  required
                  type="text"
                  defaultValue={this.props.book.status} />
              </Form.Group>
              <Form.Group controlId="url">
                <Form.Label>Image URL: </Form.Label>
                <Form.Control
                  required
                  type="text"
                  defaultValue={this.props.book.url} />
              </Form.Group>
              <Button type="submit">Update</Button>
            </Form>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default BookFormModal;
