// const yargs = require('yargs');
//
// const geocode = require('./geocode/geocode');
//
// const argv = yargs
//   .options({
//     a: {
//       demand: true,
//       alias: 'address',
//       describe: 'Address to fetch weather for',
//       string: true
//     }
//   })
//   .help()
//   .alias('help', 'h')
//   .argv;
//
// geocode.geocodeAddress(argv.address, (errorMessage, results) => {
//   if (errorMessage) {
//     console.log(errorMessage);
//   } else {
//     console.log(JSON.stringify(results, undefined, 2));
//   }
// });

const request = require('request');

request({
  url: 'https://api.darksky.net/forecast/dba297742fc76ddce7a804c8b3981fa9/51.56793159999999,0.0142376',
  json: true
}, (error, response, body) => {
  if (!error && response.statusCode === 200) {
    console.log(`temperature: ${body.currently.temperature}`)
  } else {
    console.log('Unable to fetch weather');
  }
})

// dba297742fc76ddce7a804c8b3981fa9
