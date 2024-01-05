'use strict';
// ******** REQUIRES ****************************
const axios = require('axios');
let cache = require('./cache.js');

// ******** GLOBAL VARIABLES ********************
let weatherData = {
  forecast: [],
};

// ******** FUNCTIONS ***************************
async function getWeather(request, response) {
  // http://localhost:3001/weather?lat=47.6038321&lon=-122.330062
  try {
    let lat = request.query.lat;
    let lon = request.query.lon;

    // Try cache first
    let key = `${lat}${lon}Weather`;

    if (cache[key] && ((Date.now() - cache[key].timeStamp) < 14400000)) {
      weatherData = cache[key].data;
    }

    // Bad cache data.  Call API
    else {
      let url = `http://api.weatherbit.io/v2.0/forecast/daily?key=${process.env.WEATHER_API_KEY}&units=I&lat=${lat}&lon=${lon}`;

      let dataToGroom = await axios.get(url);
      dataToGroom = dataToGroom.data.data;

      weatherData.forecast = dataToGroom.map((element) => {
        return new Forecast(element);
      });
      weatherData.show = 'block';
      weatherData.error = false;
      weatherData.errorMessage = '';
      weatherData.errorCode = '';
      weatherData.timeStamp = Date.now();

      // Cache results from API call
      cache[key] = {
        data: weatherData,
        timeStamp: weatherData.timeStamp,
      };
    }

    response.status(200).send(weatherData);

  } catch (error) {
    weatherData.forecast = [];
    weatherData.show = 'none';
    weatherData.error = true;
    weatherData.errorMessage = error.message;
    weatherData.errorCode = error.response.status;
    response.status(error.response.status).send(weatherData);
  }
}

// ********* CLASS OBJECTS **********************
let Forecast = class {
  constructor(dataObj) {
    this.date = dataObj.valid_date;
    this.description = dataObj.weather.description;
  }
};

module.exports = getWeather;
