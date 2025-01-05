apiKey = "776ef9040a96f6aad708ca9f5778432a";
apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

let searchBox = document.querySelector(".search-bar input");
let searchBtn = document.querySelector(".search-bar button");

let weatherLogo = document.querySelector(".weather-info img");

async function checkWeather(city) {
  var response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector(".invalid").style.display = "block";
    document.querySelector(".weather-info").style.display = "none";

  }
  else {
    document.querySelector(".weather-info").style.display = "block";
    document.querySelector(".invalid").style.display = "none";
    var data = await response.json();

    console.log(data)
    document.querySelector(".cityName").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity-value").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind-value").innerHTML = data.wind.speed + " Km/h";

    if (data.weather[0].main == "Clouds") {
      weatherLogo.src = "weather-app-img/images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherLogo.src = "weather-app-img/images/clear.png"
    } else if (data.weather[0].main == "Rain") {
      weatherLogo.src = "weather-app-img/images/rain.png"
    }
    else if (data.weather[0].main == "Drizzle") {
      weatherLogo.src = "weather-app-img/images/drizzle.png"
    }
    else if (data.weather[0].main == "Mist") {
      weatherLogo.src = "weather-app-img/images/mist.png"
    }


  }

}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);

})