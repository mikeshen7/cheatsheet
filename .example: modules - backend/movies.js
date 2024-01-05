'use strict';
// *** REQUIRES
const axios = require('axios');
let cache = require('./cache.js');

// ******** Global Variables
let movieData = {};

async function getMovies(request, response) {
  // http://localhost:3001/movies?city=Seattle
  try {
    let city = request.query.city;

    // Try cache first
    let key = `${city}Movie`;

    // If exists and less than 4 hours old, use cache
    if (cache[key] && ((Date.now() - cache[key].timeStamp) < 14400000)) {
      movieData = cache[key].data;
    }

    // Bad cache data.  Call API
    else {
      let url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIE_API_KEY}&language=en-US&page=1&include_adult=false&query=${city}`;

      let dataToGroom = await axios.get(url);
      dataToGroom = dataToGroom.data.results;

      movieData.movies = dataToGroom.map((element) => {
        return new Movie(element);
      });

      movieData.movies.forEach((element) => {
        if (element.image_url === 'https://image.tmdb.org/t/p/w500null') {
          element.image_url = 'https://via.placeholder.com/500';
        }
      });

      movieData.show = 'block';
      movieData.error = false;
      movieData.errorMessage = '';
      movieData.errorCode = '';
      movieData.timeStamp = Date.now();

      // Cache results from API call
      cache[key] = {
        data: movieData,
        timeStamp: movieData.timeStamp,
      };
    }

    response.status(200).send(movieData);

  } catch (error) {
    movieData.movies = [];
    movieData.show = 'none';
    movieData.error = true;
    movieData.errorMessage = error.message;
    movieData.errorCode = error.response.status;
    response.status(error.response.status).send(movieData);
  }
}

// ********* Class objects
let Movie = class {
  constructor(dataObj) {
    this.title = dataObj.title;
    this.overview = dataObj.overview;
    this.average_votes = dataObj.vote_average;
    this.total_votes = dataObj.vote_count;
    this.image_url = 'https://image.tmdb.org/t/p/w500' + dataObj.poster_path;
    this.popularity = dataObj.popularity;
    this.released_on = dataObj.release_date;
  }
};

module.exports = getMovies;
