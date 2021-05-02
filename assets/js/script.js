// let weather = {
$(window).on("load", function () {
  // Clears local storage
  localStorage.clear();

  // console.log("Fresh Window loaded");

  var apiKey = "ede1a7baf3cbf299883575c9bf004bbc"
  function fetchWeather(city) {

    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + apiKey

    )
      .then((response) => response.json())
      .then((data) => displayWeather(data))

    fetch(
      "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=" + apiKey

    )
      .then((response) => response.json())
      .then((data) => fiveDay(data));
  }

  // displays current
  function displayWeather(data) {
    console.log("current day displayed");

    // stores values from api
    var name = data.name;
    var icon = data.weather[0].icon;
    var temp = data.main.temp;
    var humidity = data.main.humidity;
    var speed = data.wind.speed;

    console.log(name, icon, temp, humidity, speed);

    // Dynamically builds the current temp area
    var container = $('.current')
    var parentDiv = $('<div class="day">')
    var cityEl = $('<h2 class="city"></h2>').text("Currently in: " + name)
    var iconDiv = $('<div id="icon">')
    var tempDiv = $('<div class="temp"></div>').text(temp + "°")
    var imgEl = $('<img class="icon">').attr("src", "http://openweathermap.org/img/wn/" + icon + ".png")
    var barDiv = $('<div class="bar">')
    var humidityEl = $('<p class="humidity"></p>').text("humidity " + humidity)
    var windEl = $('<p class="wind"></p>').text("wind " + speed)

    //  the api doesnt offer UV Index...
    // var uvEl = $('<h3 class="uv"></h3>').text(uv);

    parentDiv.append(cityEl)
    iconDiv.append(imgEl)
    parentDiv.append(iconDiv)
    parentDiv.append(tempDiv)
    barDiv.append(humidityEl)
    barDiv.append(windEl)
    // barDiv.append(uvEl)
    parentDiv.append(barDiv)

    container.append(parentDiv)

  };

  // Dynamically builds the 5 day forcast
  function fiveDay(data) {
    // debugger;
    // console.log(data);
    for (let i = 0; i < data.list.length; i += 8) {

      //  console.log(data.list.dt_txt);
      var count = 1;
      // stores values from api
      var name = data.list[i].dt_txt;
      // .format('dd-m-yy');
      // console.log(name);
      var icon = data.list[i].weather[0].icon;
      var temp = data.list[0].main.temp;
      var humidity = data.list[0].main.humidity;
      var speed = data.list[i].wind.speed;
      var uv = data.list[i].wind.uv;

      // console.log(name, icon, temp, humidity, speed);

      var container = $('.weather-container')
      var parentDiv = $('<div class="day">')
      var cityEl = $('<h2 class="city"></h2>').text(name);
      var iconDiv = $('<div id="icon">')
      var tempDiv = $('<div class="temp">75°</div>').text(temp + "°");
      var imgEl = $('<img class="icon">').attr("src", "http://openweathermap.org/img/wn/" + icon + ".png");
      var barDiv = $('<div class="bar">')
      var humidityEl = $('<p class="humidity"></p>').text("humidity " + humidity);
      var windEl = $('<p class="wind"></p>').text("wind " + speed);

      // the api doesnt offer UV Index...
      // var uvEl = $('<h3 class="uv"></h3>').text("UV Index", + uv)

      parentDiv.append(cityEl)
      iconDiv.append(imgEl)
      parentDiv.append(iconDiv)
      parentDiv.append(tempDiv)
      barDiv.append(humidityEl)
      barDiv.append(windEl)
      // barDiv.append(uvEl)
      parentDiv.append(barDiv)


      container.append(parentDiv)
      // console.log(imgIcon);

      // $(".city").text(name);
      // $(".temp").text(temp + "°");
      // $(".icon").attr("src", "http://openweathermap.org/img/wn/" + icon + ".png");
      // $(".humidity").text("humidity " + humidity);
      // $(".wind").text("wind " + speed);
      // $(".uv").text(uv);
      count++;


    }

    // localStorage.setItem("histName", name);
    // var historyName = localStorage.getItem("histName", name);
    // console.log(historyName);

    // var histContainer = $('.history-area')
    // //  var histDiv = $('<div class="day">')
    // var histEl = $('<button class="hist-btn"></button>')
    // histContainer.append(histEl)
  }


  // fetches the weather when btn is clicked
  $("#save-btn").on("click", function (event) {
    event.preventDefault();
    $(".current").empty()
    $(".weather-container").empty()
    var searchResult = $("#cityInput").val().trim()
    fetchWeather(searchResult)
    // console.log(searchResult);
    window.localStorage.setItem("cityName", JSON.stringify(searchResult));
    var cityName = JSON.parse(window.localStorage.getItem("cityName"));
    // console.log(cityName);

    // Dynamically adds a history button of the city just searched
    var container = $('.history-area')
    var cityEl = $('<button class="btn" id="' + cityName + '"></button>').text(cityName)

    // makes the history button clickable and search for the city again
    cityEl.click(function (event) {
      console.log("you clicked on...")
      console.log(event.target)
      event.preventDefault();
      $(".current").empty()
      $(".weather-container").empty()
      var searchResult = $("#cityInput").val().trim()
      fetchWeather(cityName)
    })
    // container.append(cityEl)
    
    // Clears the input form once button is clicked
    document.getElementById("cityInput").value = "";
  })

  $("#sf-btn").on("click", function (event) {
    event.preventDefault();
    $(".current").empty()
    $(".weather-container").empty()
    fetchWeather("san francisco")
    // console.log(searchResult);

  })

  $("#la-btn").on("click", function (event) {
    event.preventDefault();
    $(".current").empty()
    $(".weather-container").empty()
    fetchWeather("los angeles")
    // console.log(searchResult);

  })

  $("#ny-btn").on("click", function (event) {
    event.preventDefault();
    $(".current").empty()
    $(".weather-container").empty()
    fetchWeather("new york")
    // console.log(searchResult);

  })

  $("#dv-btn").on("click", function (event) {
    event.preventDefault();
    $(".current").empty()
    $(".weather-container").empty()
    fetchWeather("denver")
    // console.log(searchResult);

  })

  // fetchWeather("benicia")
})

