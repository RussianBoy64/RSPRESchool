import { user } from './../index'

const apiKey = '0acf28d2a0bde48f52da4ba3eb20ecef'

const weatherInput = document.querySelector('.weather__city')
const weatherError = document.querySelector('.weather__error')
const weatherIcon = document.querySelector('.weather-icon')
const temperature = document.querySelector('.weather__temperature')
const weatherDescription = document.querySelector('.weather__description')
const weatherWind = document.querySelector('.weather__wind')
const weatherHumidity = document.querySelector('.weather__humidity')

async function getWeather(city = 'Saratov', lang = 'ru', units = 'metric') {
  // create link
  const weatherLink = `http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=${lang}&appid=${apiKey}&units=${units}`

  // add city name in input
  weatherInput.value = city

  // fetching weather data
  const res = await fetch(weatherLink)
  const data = await res.json()
  console.log(data)

  // if error
  if (data.cod === '404') {
    weatherError.textContent = `Error: ${data.cod} - '${city}' ${data.message}`
  } else {
    // show weather info
    weatherError.textContent = ''

    weatherIcon.className = `weather-icon owf owf-${data.weather[0].id}`
    temperature.textContent = `${Math.floor(data.main.temp)}°C`
    weatherDescription.textContent = data.weather[0].description
    weatherWind.textContent = `Wind speed ${Math.floor(data.wind.speed)} m/s`
    weatherHumidity.textContent = `Humidity: ${Math.floor(data.main.humidity)}%`
  }
}

function updateWeather() {
  user.city = weatherInput.value
  getWeather(weatherInput.value)
}

weatherInput.addEventListener('change', updateWeather)

export { getWeather }
