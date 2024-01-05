import React from 'react';
import axios from 'axios';
import Book from './Book';
import BookFormModal from './BookFormModal';
import Carousel from 'react-bootstrap/Carousel';
import { Button } from 'react-bootstrap';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      showModal: false,
    };
  }

  componentDidMount() {
    console.log('component did mount');
    this.getBooks();
  }

  getBooks = async () => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/books`;
      console.log(url);

      let bookData = await axios.get(url);
      console.log(bookData.data);
      this.setState({
        books: bookData.data,
      });

    } catch (error) {
      console.log(error.response);
    }
  };

  deleteBooks = async (id) => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/books/${id}`;
      await axios.delete(url);
      let updatedBooks = this.state.books.filter(book => book._id !== id);
      this.setState({
        books: updatedBooks
      });
    } catch (error) {
      console.log(error.response);
    }
  };

  handleOpenModal = () => {
    this.setState({
      showModal: true
    });
  };

  handleCloseModal = () => {
    this.setState({
      showModal: false,
    });
  };

  handleNewBook = (event) => {
    event.preventDefault();
    let newBook = {
      title: event.target.title.value,
      description: event.target.description.value,
      status: event.target.status.value
    };
    this.postBooks(newBook);
    this.handleCloseModal();
  };

  postBooks = async (bookObj) => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/books`;
      let createdBook = await axios.post(url, bookObj);
      this.setState({
        books: [...this.state.books, createdBook.data]
      });
    } catch (error) {
      console.log(error.response);
    }
  };

  updateBooks = async (bookToUpdate) => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/books/${bookToUpdate._id}`;

      let updatedBook = await axios.put(url, bookToUpdate);

      let updatedBookArray = this.state.books.map((existingBook) => {
        return (existingBook._id === bookToUpdate._id
          ? updatedBook.data
          : existingBook);
      });

      this.setState({
        books: updatedBookArray
      });

    } catch (error) {
      console.log(error.message);
    }
  };


  render() {
    return (
      <>
        {
          this.state.books.length

            ?
            <Carousel>
              {this.state.books.map((book, index) => {
                return (
                  <Carousel.Item key={index}>
                    <Book
                      book={book}
                      index={index}
                      deleteBooks={this.deleteBooks}
                      updateBooks={this.updateBooks}
                    />
                  </Carousel.Item>
                );
              })}
            </Carousel>
            : <h3>No Books Found</h3>
        }
        <Button onClick={this.handleOpenModal} className='addButton'>Add Book</Button>
        <BookFormModal showModal={this.state.showModal} handleNewBook={this.handleNewBook} closeModal={this.handleCloseModal}></BookFormModal>
      </>
    );
  }
}

export default BestBooks;
