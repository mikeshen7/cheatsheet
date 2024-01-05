'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const book_api = require('./modules/book_api');

const Book = require('./models/book');

mongoose.connect(process.env.DB_URL);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Mongoose is connected');
});

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3002;

app.get('/', (request, response) => {
  response.status(200).send('Welcome');
});

app.get('/books', getBooks);

async function getBooks(request, response, next) {
  try {
    let allBooks = await Book.find({});
    response.status(200).send(allBooks);
  } catch (error) {
    console.log(error.message);
    next(error);
  }
}


// *** ENDPOINT TO DELETE
app.delete('/books/:bookID', deleteBooks);

async function deleteBooks(request, response, next) {
  try {
    let id = request.params.bookID;
    await Book.findByIdAndDelete(id);
    response.status(200).send('book deleted');
  } catch (error) {
    console.log(error.message);
    next(error);
  }
}


// *** ENDPOINT TO ADD
app.post('/books', postBook);

async function postBook(request, response, next) {
  try {
    // new code for adding URL
    let bookObj = request.body; // ******* save book object from request
    let bookUrl = await book_api(bookObj.title); // ******* get url from API
    bookObj.url = bookUrl; // ******* add url to book object

    let createdBook = await (Book.create(bookObj));

    response.status(200).send(createdBook);
  } catch (error) {
    console.log(error.message);
    next(error);
  }
}

// *** ENDPOINT TO UPDATE
app.put('/books/:bookID', updateBook);

async function updateBook(request, response, next) {
  try {
    let id = request.params.bookID;
    let data = request.body;
    let options = { new: true, overwrite: true };

    let updatedBook = await Book.findByIdAndUpdate(id, data, options);

    response.status(200).send(updatedBook);

  } catch (error) {
    console.log(error.message);
    next(error);
  }
}


app.get('*', (request, response) => {
  response.status(404).send('Not available');
});

app.use((error, request, response) => {
  response.status(500).send(error.message);
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));
