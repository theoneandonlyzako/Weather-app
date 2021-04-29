// let weather = {
  $(window).on("load", function () {
  // console.log("apikey");
  
  var apiKey = "ede1a7baf3cbf299883575c9bf004bbc"
  function fetchWeather(city) {
   return fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + apiKey
    )
      .then((response) => response.json())
      .then((data) => displayWeather(data));
  }
  function displayWeather(data) {
    console.log("displllll");
    
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    console.log(name, icon, description, temp, humidity, speed);

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
      
    parentDiv .append(cityEl)
    iconDiv .append(imgEl)      
    parentDiv .append(iconDiv)
    parentDiv .append(tempDiv)
    barDiv .append(humidityEl)
    barDiv .append(windEl)
    barDiv .append(uvEl)
    parentDiv .append(barDiv)

    container .append(parentDiv)

    // Dynamically builds the 5 day forcast
    for(let i=0; i < 5; i++) {
      var container = $('.weather-container')
      var parentDiv = $('<div class="day">')
      var cityEl = $('<h2 class="city"></h2>')
      var iconDiv = $('<div id="icon">')
      var tempDiv = $('<div class="temp">75°</div>')
      var imgEl = $('<img class="icon">')
      var barDiv = $('<div class="bar">')
      var humidityEl = $('<h3 class="humidity"></h3>')
      var windEl = $('<h3 class="wind"></h3>')
      var uvEl = $('<h3 class="uv"></h3>')
      
      parentDiv .append(cityEl)
      iconDiv .append(imgEl)      
      parentDiv .append(iconDiv)
      parentDiv .append(tempDiv)
      barDiv .append(humidityEl)
      barDiv .append(windEl)
      barDiv .append(uvEl)
      parentDiv .append(barDiv)
      

      container .append(parentDiv)
      // console.log(imgIcon);

      $(".city").text(name);
      $(".temp").text(temp+"°");
      $(".icon").attr("src","http://openweathermap.org/img/wn/" + icon + ".png");
      $(".humidity").text("humidity "+humidity);
      $(".wind").text("wind "+speed);
      // $(".uv").text(uv);
    } 

    // for(let i=0; i < 6; i++) {
    // $(".city").attr("innerText", "weather in " + name);
    // $(".icon").attr("src","http://openweathermap.org/img/wn/" + icon + ".png");
    // }
    // document.querySelector(".description").innerText = "weather in" + name;
    // document.querySelector(".temp").innerText = "weather in" + name;
    // document.querySelector(".humidity").innerText = "weather in" + name;
    // document.querySelector(".speed").innerText = "weather in" + name;
  }

  // fetches the weather when btn is clicked
  $("#save-btn").on("click", function() {
    var searchResult = $("#cityInput").val()
    fetchWeather(searchResult)
    console.log(searchResult);
  })
  // fetchWeather("benicia")
})

