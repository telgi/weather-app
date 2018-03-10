const request = require('request');

var getWeather = (lat, long, callback) => {
  request({
    url: `https://api.darksky.net/forecast/dba297742fc76ddce7a804c8b3981fa9/${lat},${long}`,
    json: true
  }, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      callback(undefined, {
        apparentTemperature: body.currently.apparentTemperature,
        temperature: body.currently.temperature
      })
    } else {
      callback('Unable to fetch weather')
    }
  });
};

module.exports = {
  getWeather
}
