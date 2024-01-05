'use strict';
// *** REQUIRES
const axios = require('axios');

// ******** Global Variables
let bookData = {};

async function book_api(request, response, next) {
  // https://www.googleapis.com/books/v1/volumes?q=lord+of+the+rings&key=AIzaSyDhxPTYK1xiMVSMtqTmmKWlLd0GIkRiDRs
  try {
    let title = request.query.title;

    let url = `https://www.googleapis.com/books/v1/volumes?key=${process.env.GOOGLE_BOOKS_API_KEY}&maxResults=1&q="${title}"`;

    let dataToGroom = await axios.get(url);
    dataToGroom = dataToGroom.data.items[0].volumeInfo;

    bookData = new Book(dataToGroom);

    response.status(200).send(bookData);

  } catch (error) {
    response.status(401).send('error');
    next(error);
  }
}

// ********* Class objects
let Book = class {
  constructor(dataObj) {
    this.title = dataObj.title;
    this.description = dataObj.description;
    this.averageRating = dataObj.averageRating;
    this.image_url = dataObj.imageLinks.thumbnail;
    this.status = dataObj.maturityRating;
  }
};

module.exports = book_api;



// ********** FRONT END CODE
// const book_api = require('./modules/book_api');
// app.get('/book_api', book_api);
