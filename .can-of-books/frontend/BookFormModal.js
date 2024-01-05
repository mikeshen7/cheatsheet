import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

class BookFormModal extends React.Component {
  render() {
    return (
      <>
        <Modal show={this.props.showModal} onHide={this.props.closeModal}>
          <Modal.Header closeButton>Add Your Book</Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.props.handleNewBook}>
              <Form.Group controlId="title">
                <Form.Label>Book Title: </Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Book Title" />
              </Form.Group>
              <Form.Group controlId="description">
                <Form.Label>Book Description: </Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Book Description" />
              </Form.Group>
              <Form.Group controlId="status">
                <Form.Label>Book Availibility: </Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Book Availibility" />
              </Form.Group>
              <Button type="submit">Add Book</Button>
            </Form>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default BookFormModal;
