function showTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = response.data.temperature.current;
  let temperature = Math.round(response.data.temperature.current);
  let cityElement=document.querySelector("#current-city");
  let descriptionElement=document.querySelector("#description");
  let humidityElement=document.querySelector("#humidity");
  let windSpeedElement=document.querySelector("#wind-speed");
  let iconElement=document.querySelector("#icon");

  cityElement.innerHTML=response.data.city;
  windSpeedElement.innerHTML=`${response.data.wind.speed}km/h`;
  humidityElement.innerHTML=`${response.data.temperature.humidity}%`;
  descriptionElement.innerHTML=response.data.condition.description;
  temperatureElement.innerHTML = temperature;
  iconElement.innerHTML = ` <img src="${response.data.condition.icon_url}" class="current-temperature-icon"/>`;

}

function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let cityElement = document.querySelector("#current-city");
  let city = searchInputElement.value;
  cityElement.innerHTML = city;
}

function searchCity(city) {
  let apiKey = `b84t25o8a0135e98cd308e694fb54fb7`;
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showTemperature);
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  let searchFormElement = document.querySelector("#search-form");
  searchFormElement.addEventListener("submit", search);

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

searchCity("Johannesburg");
let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);

