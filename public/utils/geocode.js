const request = require("request");

const geocode = (address, callback) => {
  const url = "http://api.positionstack.com/v1/forward?access_key=96e4d61e6113c70c8a7537df24c6eadd&query=" + address;
  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to conncect to location services!", undefined);
    } else if (response.body.data.length === 0) {
      callback("Unable to find location. Try another search", undefined);
    } else {
      callback(undefined, {
        latitude: response.body.data[0].latitude,
        longitude: response.body.data[0].longitude,
        location: response.body.data[0].name,
      });
    }
  });
};

module.exports = geocode;
