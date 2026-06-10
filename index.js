import "./styles.css";

const weatherForm = document.querySelector(".form");
const input = document.querySelector(".cityInput");
const button = document.querySelector(".button");
const card = document.querySelector(".weather-card");
const apiKey = "573741c2abb322eeb39692ac174f1a3d";

weatherForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const city = input.value;

  if (city) {
    try {
      const weatherData = await getWeatherData(city);
      displayWeatherInfo(weatherData);
    } catch (error) {
      console.error(error);
      displayError(error);
    }
  } else {
    displayError("Please Enter a City");
  }
});

async function getWeatherData(city) {
  const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  const response = await fetch(apiURL);
  if (!response.ok) {
    throw new Error("Could not fetch weather data");
  }

  return await response.json();
}

function displayWeatherInfo(data) {
  console.log(data);
  const {
    name: city,
    main: { temp, humidity },
    weather: [{ description, id }],
  } = data;

  card.style.display = "flex";

  const header = document.querySelector(".card-header");
  const temperature = document.querySelector(".temp");
  const humid = document.querySelector(".humidity");
  const forecast = document.querySelector(".forecast");
  const weatherEmoji = document.querySelector(".weather-emoji");

  header.textContent = city;
  temperature.textContent = `${((temp - 273.15) * (9 / 5) + 32).toFixed(1)}°F`;
  humid.textContent = `Humidity: ${humidity}%`;
  forecast.textContent = description;
  weatherEmoji.textContent = getWeatherEmoji(id);

  header.classList.add("cityDisplay");
  temperature.classList.add("tempDisplay");
  humid.classList.add("humidityDisplay");
  forecast.classList.add("descDisplay");
  weatherEmoji.classList.add("weather-emoji");
}

function getWeatherEmoji(weatherId) {
  switch (true) {
    case weatherId >= 200 && weatherId < 300:
      return "⛈️";
    case weatherId >= 300 && weatherId < 400:
      return "⛈️";
    case weatherId >= 400 && weatherId < 500:
      return "⛈️";
    case weatherId >= 500 && weatherId < 600:
      return "⛈️";
    case weatherId >= 600 && weatherId < 700:
      return "❄️";
    case weatherId >= 700 && weatherId < 800:
      return "☁️";
    case weatherId === 800:
      return "☀️";
    case weatherId >= 801 && weatherId < 810:
      return "☁️";
    default:
      return "❓";
  }
}

function displayError(message) {
  const errorDisplay = document.createElement("p");
  errorDisplay.textContent = message;
  errorDisplay.classList.add("errorDisplay");

  card.textContent = "";
  card.style.display = "flex";
  card.appendChild(errorDisplay);
}
