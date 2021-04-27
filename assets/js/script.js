// let weather = {
  $(window).on("load", function () {
  console.log("apikey");
  
  var apiKey = "ede1a7baf3cbf299883575c9bf004bbc"
  function fetchWeather(city) {
   return fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + apiKey
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
    
    for(let i=0; i < 6; i++) {
      var container = $('.weather-container')
      var parentDiv = $('<div>')
      var cityEl = $('<h2 class"city"></h2>')
      var iconDiv = $('<div id="icon">')
      var imgEl = $('<img src="https://img.icons8.com/officel/30/000000/sun.png">')
      var tempDiv = $('<div class="temp">')
      var humidityEl = $('<h3>Humidity</h3>')
      var windEl = $('<h3>Wind</h3>')
      var uvEl = $('<h3>UV</h3>')
      
      parentDiv .append(cityEl)
      iconDiv .append(imgEl)
      parentDiv .append(iconDiv)
      tempDiv .append(humidityEl)
      tempDiv .append(windEl)
      tempDiv .append(uvEl)
      parentDiv .append(tempDiv)

      container .append(parentDiv)
      // console.log(imgIcon);
      
    }
    document.querySelector(".city").innerText = "weather in" + name;

    $(".icon").attr("src","http://openweathermap.org/img/wn/" + icon + ".png");
  
    // document.querySelector(".description").innerText = "weather in" + name;
    // document.querySelector(".temp").innerText = "weather in" + name;
    // document.querySelector(".humidity").innerText = "weather in" + name;
    // document.querySelector(".speed").innerText = "weather in" + name;
  }

  fetchWeather("benicia")
})

