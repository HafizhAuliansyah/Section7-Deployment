const request = require("request");

const weather = (location, callback) => {
  const url = "http://api.weatherstack.com/current?access_key=68590fade5fda345d122f5fcbd463b09&query=" + location;
  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to conncect to location services!", undefined);
    } else if (response.body.length === 0) {
      callback("Unable to find location. Try another search", undefined);
    } else {
      callback(undefined, {
        weather: response.body.current.weather_descriptions,
        temperature: response.body.current.temperature,
        wind_speed: response.body.current.wind_speed,
        location: response.body.location.name,
      });
    }
  });
};

module.exports = weather;
