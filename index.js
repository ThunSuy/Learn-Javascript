const APP_ID = `b06df81e396d0af0994283f73ea2d15c`;

const searchInput = document.querySelector("#search-input");
const cityName = document.querySelector(".city-name");
const weatherState = document.querySelector(".wather-state");
const weatherIcon = document.querySelector(".weather-icon");
const temperature = document.querySelector(".temperature");
const sunrise = document.querySelector(".sunrise");
const sunset = document.querySelector(".sunset");
const windSpeed = document.querySelector(".wind-speed");
const humidity = document.querySelector(".humidity");

searchInput.addEventListener("change", (e) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&appid=${APP_ID}&units=metric&lang=vi`
  ).then(async (res) => {
    const data = await res.json();
    cityName.innerHTML = data.name || "Unknown City";
    weatherIcon.setAttribute(
      "src",
      `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    );
    temperature.innerHTML = Math.round(data.main.temp) || "Unknown temperature";
    sunrise.innerHTML =
      moment.unix(data.sys.sunrise).format("HH:mm") || "Unknown sunrise time";
    sunset.innerHTML =
      moment.unix(data.sys.sunset).format("HH:mm") || "Unknown sunset time";
    humidity.innerHTML = data.main.humidity + "%" || "Unknown humidity";
    windSpeed.innerHTML = data.wind.speed + " m/s" || "Unknown wind speed";
  });
});
