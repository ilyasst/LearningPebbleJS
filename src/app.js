/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

//Required to display and manipulate cards
var UI = require('ui');
// Required to communicate with OpenWeatherMaps
var ajax = require('ajax');

// Create a Card with title and subtitle
var card = new UI.Card({
  title:'Weather',
  subtitle:'Fetching...'
});

// Construct URL for OpenWeatherMaps request
var cityName = 'Montreal';
var URL = 'http://api.openweathermap.org/data/2.5/weather?q=' + cityName;

// Make the request
ajax(
  {
    url: URL,
    type: 'json'
  },
  function(data) {
    // Success!
    console.log('Successfully fetched weather data!');
          
  // Extract data
  var location = data.name;
  var temperature = Math.round(data.main.temp - 273.15) + 'C';

  // Always upper-case first letter of description
  var description = data.weather[0].description;
  description = description.charAt(0).toUpperCase() + description.substring(1);
      
      // Show to user
        card.subtitle(location + ', ' + temperature);
        card.body(description);
      
  },
  function(error) {
    // Failure!
    console.log('Failed fetching weather data: ' + error);
  }
);





// Display the Card
card.show();