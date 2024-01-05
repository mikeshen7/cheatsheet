'use strict';

const mongoose = require('mongoose');

const { Schema } = mongoose;

const bookSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required:true },
  status: String,
  url: String
});

const BookModel = mongoose.model('book', bookSchema);

module.exports = BookModel;
