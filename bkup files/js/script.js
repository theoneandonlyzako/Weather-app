// displayWeather() {
//     iconElement.innerHTML = ;
//     tempElement.innerHTML = ;
//     descElement.innerHTML = ;
//     locationElement.innerHTML = ;
// };

// weather.tempurature.value = 300 -275

// function celsiusToFahrenheit() {
//     (tempurature * 9/5) + 32;
// }


var cityList = [];
var cityName;

function eventSearch() {
    // event.preventDefault();

    cityName = $("#cityInput").val().trim();
    if(cityName === "") {
        alert("Please Enter a Valid City Name")
    } else if (cityList.length >= 5) {
        cityList.shift();
        cityList.push(cityName);
    }else {
        cityList.push(cityName);
    }
    storeCurrentCity()
    saveCityArray()
}

document.getElementById("save-btn").addEventListener("click", function() {
    console.log("click");
    eventSearch()
});
document.getElementById("cityInput").addEventListener("keyup", function(e) {
    if(e.keyCode === 13) {
        console.log("Enter");
        eventSearch()
    }
});


// performs the search when button is clicked
// $("#save-btn").on("click", function(event){
//     event.preventDefault();

//     cityName = $("#cityInput").val().trim();
//     if(cityName === "") {
//         alert("Please Enter a Valid City Name")
//     } else if (cityList.length >= 5) {
//         cityList.shift();
//         cityList.push(cityName);
//     }else {
//         cityList.push(cityName);
//     }
//     storeCurrentCity()
//     saveCityArray()
    
// })





function storeCurrentCity() {
localStorage.setItem("CurrentCity", JSON.stringify(cityName));
console.log(cityName);

}






function saveCityArray() {
localStorage.setItem("cities", JSON.stringify(cityList));
console.log(cityList);

}





// api = {
//     ("https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={16b3bd6ae96b52608f8d37c29dc64693}");

// }




const apiKey = "ede1a7baf3cbf299883575c9bf004bbc";
// This fetches the weather of any city
function fetchWeather(city) {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&units=metric&appid=" +
      apiKey
  )
    .then((response) => response.json())
    .then((data) => displayWeather(data));
  fetch(
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
      city +
      "&appid=" +
      apiKey
  )
    .then((response) => response.json())
    .then((data) => displayForecast(data));
}
function displayWeather(data) {
  const { name } = data;
  const { icon, description } = data.weather[0];
  const { temp } = data.main;
  const { humidity } = data.main;
  const { speed } = data.wind;
  console.log(name, icon, description, temp, humidity, speed);
  document.querySelector(".city").innerText = "Weather in " + name;
  document.querySelector(".icon").src = "http://openweathermap.org/img/wn/" + icon + ".png";
  document.querySelector(".temp").innerText = temp + " Degree in Celcius";
  document.querySelector(".humidity").innerText = "humidity: " + humidity + "%";
  document.querySelector(".wind").innerText = "wind speed: " + speed + "km/h";
}
function displayForecast(data) {
  console.log(data);
  let pointer = 1;
  for (let i = 0; i < data.list.length; i += 8) {
    const { icon } = data.list[i].weather[0];
    const { temp } = data.list[i].main;
    const { humidity } = data.list[i].main;
    const { speed } = data.list[i].wind;
    const tempDiv = (document.createElement("div").innerText = temp);
    const iconImg = document.createElement("img");
    iconImg.src = "http://openweathermap.org/img/wn/" + icon + ".png";
    const humidityDiv = (document.createElement("div").innerText = humidity);
    const speedDiv = (document.createElement("div").innerText = speed);
    const day = document.getElementById(pointer);
    day.append(tempDiv, iconImg, humidityDiv, speedDiv);
    pointer++;
  }
}
// this is the search function of fetchWeather
function search() {
  this.fetchWeather(document.querySelector(".search-bar").value);
}
document.querySelector("button").addEventListener("click", function () {
  search();
});