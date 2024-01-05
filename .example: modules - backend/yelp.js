'use strict';
// *** REQUIRES
const axios = require('axios');
let cache = require('./cache.js');

// ******** Global Variables
let yelpData = {};

async function getYelp(request, response) {
  // http://localhost:3001/yelp?lat=47.6038321&lon=-122.330062

  try {
    let lat = request.query.lat;
    let lon = request.query.lon;

    // Try cache first
    let key = `${lat}${lon}Yelp`;

    if (cache[key] && ((Date.now() - cache[key].timeStamp) < 14400000)) {
      console.log('good cache restaurant data');
      yelpData = cache[key].data;
    }

    // Bad cache data.  Call API
    else {
      console.log('bad cache restaurant data');
      let url = 'https://api.yelp.com/v3/businesses/search';

      const config = {
        headers: { 'Authorization': `Bearer ${process.env.YELP_API_KEY}` },
        params: {
          term: 'restaurants',
          latitude: lat,
          longitude: lon,
        }
      };

      let dataToGroom;
      dataToGroom = await axios.get(url, config);
      dataToGroom = dataToGroom.data.businesses;
      console.log(dataToGroom[0]);
      yelpData.restaurants = dataToGroom.map((element) => {
        return new Restaurants(element);
      });

      yelpData.show = 'block';
      yelpData.error = false;
      yelpData.errorMessage = '';
      yelpData.errorCode = '';
      yelpData.timeStamp = Date.now();

      // Cache results from API call
      cache[key] = {
        data: yelpData,
        timeStamp: yelpData.timeStamp,
      };
    }

    response.status(200).send(yelpData);
    console.log(cache);

  } catch (error) {
    yelpData.restaurants = [];
    yelpData.show = 'none';
    yelpData.error = true;
    yelpData.errorMessage = error.message;
    yelpData.errorCode = error.response.status;
    response.status(error.response.status).send(yelpData);
  }
}

// ********* Class objects
let Restaurants = class {
  constructor(dataObj) {
    this.name = dataObj.name;
    this.image_url = dataObj.image_url;
    this.rating = dataObj.rating;
    this.phone = dataObj.display_phone;
    this.url = dataObj.url;
    this.price = dataObj.price;
  }
};

module.exports = getYelp;
