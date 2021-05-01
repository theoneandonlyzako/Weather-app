$(window).on("load", function () {
    console.log("Fresh Window loaded");
});

// Weather api
var apiKey = "ede1a7baf3cbf299883575c9bf004bbc"
  function fetchWeather(city) {
    return fetch(
      "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=" + apiKey
      // "https://api.openweathermap.org/data/2.5/forecast?zip=" + city + "&units=imperial&appid=" + apiKey,
      // "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + apiKey
      // "https://api.openweathermap.org/data/2.5/onecall?lat=" + + "&lon=" + + "&exclude=hourly,minutely&appid=" + apiKey

    )
      .then((response) => response.json())
      .then((data) => displayWeather(data));
      
      //   Displays the Weather
  function displayWeather(data) {
    console.log("current day displayed");

    // stores values from api
    const { name } = data.city;
    const { icon } = data.list[0].weather[0];
    const { temp, humidity } = data.list[0].main;
    const { speed } = data.list[0].wind;
    // const { lat } = 
    // const { lon } = 
    console.log(name, icon, temp, humidity, speed);

    // Dynamically builds the current temp area
    var container = $('.current')
    var parentDiv = $('<div class="day">')
    var cityEl = $('<h2 class="city"></h2>')
    var iconDiv = $('<div id="icon">')
    var tempDiv = $('<div class="temp"></div>')
    var imgEl = $('<img class="icon">')
    var barDiv = $('<div class="bar">')
    var humidityEl = $('<h3 class="humidity"></h3>')
    var windEl = $('<h3 class="wind"></h3>')
    var uvEl = $('<h3 class="uv"></h3>')

    parentDiv.append(cityEl)
    iconDiv.append(imgEl)
    parentDiv.append(iconDiv)
    parentDiv.append(tempDiv)
    barDiv.append(humidityEl)
    barDiv.append(windEl)
    barDiv.append(uvEl)
    parentDiv.append(barDiv)

    container.append(parentDiv)

    // Sets to local storage
    localStorage.setItem("histName", name);
    
  }
  };



//   Displays 5 day Forecast
  function fiveDay(data) {
    return fetch(
      "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=" + apiKey
      // "https://api.openweathermap.org/data/2.5/forecast?zip=" + city + "&units=imperial&appid=" + apiKey,
      // "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + apiKey
      // "https://api.openweathermap.org/data/2.5/onecall?lat=" + + "&lon=" + + "&exclude=hourly,minutely&appid=" + apiKey

    )
      .then((response) => response.json())
      .then((data) => displayWeather(data));
      
      //   Displays the Weather
  function displayWeather(data) {
    console.log("current day displayed");

    // stores values from api
    const { name } = data.city;
    const { icon } = data.list[0].weather[0];
    const { temp, humidity } = data.list[0].main;
    const { speed } = data.list[0].wind;
    // const { lat } = 
    // const { lon } = 
    console.log(name, icon, temp, humidity, speed);

    // Dynamically builds the current temp area
    var container = $('.current')
    var parentDiv = $('<div class="day">')
    var cityEl = $('<h2 class="city"></h2>')
    var iconDiv = $('<div id="icon">')
    var tempDiv = $('<div class="temp"></div>')
    var imgEl = $('<img class="icon">')
    var barDiv = $('<div class="bar">')
    var humidityEl = $('<h3 class="humidity"></h3>')
    var windEl = $('<h3 class="wind"></h3>')
    var uvEl = $('<h3 class="uv"></h3>')

    parentDiv.append(cityEl)
    iconDiv.append(imgEl)
    parentDiv.append(iconDiv)
    parentDiv.append(tempDiv)
    barDiv.append(humidityEl)
    barDiv.append(windEl)
    barDiv.append(uvEl)
    parentDiv.append(barDiv)

    container.append(parentDiv)

    // Sets to local storage
    localStorage.setItem("histName", name);
    
  }
  };

   // fetches the weather when btn is clicked
   $("#save-btn").on("click", function (event) {
    event.preventDefault();
    var searchResult = $("#cityInput").val()
    fetchWeather(searchResult)
    console.log(searchResult);
  })