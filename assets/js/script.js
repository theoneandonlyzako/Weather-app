displayWeather() {
    iconElement.innerHTML = 
    tempElement.innerHTML = 
    descElement.innerHTML = 
    locationElement.innerHTML = 
};

weather.tempurature.value = 300 -275

function celsiusToFahrenheit() {
    (tempurature * 9/5) + 32;
}

// performs the search when button is clicked
$("#save-btn").on("click", function(event){
    event.preventDefault();

    cityName = $("#cityInput").val().trim();
    if(cityname === "") {
        alert("Please Enter a Valid City Name")
    } else if (cityList.length >= 5) {
        cityList.shift();
        cityList.push(cityname);
    }else {
        cityList.push(cityname);
    }
    storeCurrentCity()
    saveCityArray()
    
})

function storeCurrentCity() {
localStorage.setItem("CurrentCity", JSON.stringify(cityname));
console.log(cityname);

}

function saveCityArray() {

}