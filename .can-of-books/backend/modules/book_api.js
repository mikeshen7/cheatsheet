'use strict';
// *** REQUIRES
require('dotenv').config();
const axios = require('axios');

async function book_api(title) {
  // https://www.googleapis.com/books/v1/volumes?q=lord+of+the+rings&key=AIzaSyDhxPTYK1xiMVSMtqTmmKWlLd0GIkRiDRs
  try {
    let url = `https://www.googleapis.com/books/v1/volumes?key=${process.env.GOOGLE_BOOKS_API_KEY}&maxResults=1&q="${title}"`;
    let dataToGroom = await axios.get(url);
    let bookUrl = dataToGroom.data.items[0].volumeInfo.imageLinks.thumbnail;
    return bookUrl;

  } catch (error) {
    return 'https://images.unsplash.com/photo-1550399105-c4db5fb85c18?ixlib=rb-4.0.3&ixid=MnwxMjA3[…]90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80';
  }
}

module.exports = book_api;
