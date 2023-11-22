function showTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = response.data.main.temp;
  let temperature = Math.round(response.data.main.temp);
  let cityElement=document.querySelector("#current-city");
  let descriptionElement=document.querySelector("#description");
  let humidityElement=document.querySelector("#humidity");
  let windSpeedElement=document.querySelector("#wind-speed");
  let iconElement=document.querySelector("#icon");
  
  windSpeedElement.innerHTML=`${response.data.main.pressure}km/h`;
  humidityElement.innerHTML=`${response.data.main.humidity}%`;
  descriptionElement.innerHTML=response.data.weather.description;
  cityElement.innerHTML=response.data.city;
  temperatureElement.innerHTML = temperature;
  iconElement.innerHTML = ` <img src="${response.data.weather.icon_url}" class="current-temperature-icon`;
}

function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let cityElement = document.querySelector("#current-city");
  let city = searchInputElement.value;
  cityElement.innerHTML = city;
  searchCity=(searchInputElement.value);
}

function searchCity(city) {
  let apiKey = `2bd326a60dc89a53287e446e819664df`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

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

let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);

searchCity("johannesburg");