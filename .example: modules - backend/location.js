'use strict';
// *** REQUIRES
const axios = require('axios');
let cache = require('./cache.js');

// ******** Global Variables
let city;
let locationData = {};

async function getLocation(request, response) {
  // http://localhost:3001/location?city=Seattle
  try {
    city = request.query.city;
    let key = `${city}Location`;

    if (cache[key] && ((Date.now() - cache[key].timeStamp) < 14400000)) {
      locationData = cache[key].data;
    } else {
      let url = `https://us1.locationiq.com/v1/search?key=${process.env.LOCATIONIQ_API_KEY}&limit=1&format=json&q=${city}`;

      let dataToGroom = await axios.get(url);
      locationData.lat = dataToGroom.data[0].lat;
      locationData.lon = dataToGroom.data[0].lon;
      locationData.display_name = dataToGroom.data[0].display_name;
      locationData.mapUrl = `https://maps.locationiq.com/v3/staticmap?key=${process.env.LOCATIONIQ_API_KEY}&center=${locationData.lat},${dataToGroom.data[0].lon}&zoom=13`;
      locationData.show = 'flex';
      locationData.error = false;
      locationData.errorMessage = '';
      locationData.errorCode = '';
      locationData.timeStamp = Date.now();

      // Cache results from API call
      cache[key] = {
        data: locationData,
        timeStamp: locationData.timeStamp,
      };
    }

    response.status(200).send(locationData);

  } catch (error) {
    locationData.lat = '';
    locationData.lon = '';
    locationData.display_name = '';
    locationData.mapUrl = '';
    locationData.show = 'none';
    locationData.error = true;
    locationData.errorMessage = error.message;
    locationData.errorCode = error.response.status;
    response.status(error.response.status).send(locationData);
  }
}

module.exports = getLocation;
