import { user } from './../index'

const apiKey = '0acf28d2a0bde48f52da4ba3eb20ecef'

const weatherInput = document.querySelector('.weather__city')
const errorContainer = document.querySelector('.weather__error-container')
const errorName = document.querySelector('.weather__error-name')
const errorMessage = document.querySelector('.weather__error-message')
const descriptionContainer = document.querySelector(
  '.weather__description-container'
)
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

  // show weather info
  if (res.ok) {
    //hide error info
    if (errorContainer.classList.contains('show')) {
      errorContainer.classList.remove('show')
      errorName.textContent = ''
      errorMessage.textContent = ''
    }
    showWeather(data)
  } else {
    // if error
    //hide weather description
    if (descriptionContainer.classList.contains('show')) {
      descriptionContainer.classList.remove('show')
      weatherIcon.className = 'weather-icon owf'
      temperature.textContent = ''
      weatherDescription.textContent = ''
      weatherWind.textContent = ''
      weatherHumidity.textContent = ''
    }

    showError(data, city)
  }
}

function updateWeather() {
  user.city = weatherInput.value
  getWeather(weatherInput.value)
}

function showWeather(data) {
  if (descriptionContainer.classList.contains('show')) {
    descriptionContainer.classList.remove('show')
    setTimeout(() => showWeather(data), 300)
  } else {
    descriptionContainer.removeEventListener('transitionend', showWeather)
    //show weather description
    weatherIcon.className = `weather-icon owf owf-${data.weather[0].id}`
    temperature.textContent = `${Math.floor(data.main.temp)}°C`
    weatherDescription.textContent = data.weather[0].description
    weatherWind.textContent = `Скорость ветра: ${Math.floor(
      data.wind.speed
    )} м/с`
    weatherHumidity.textContent = `Влажность: ${Math.floor(
      data.main.humidity
    )}%`

    descriptionContainer.classList.add('show')
  }
}

function showError(data, city) {
  if (errorContainer.classList.contains('show')) {
    errorContainer.classList.remove('show')
    setTimeout(() => showError(data, city), 300)
  } else {
    errorName.textContent = `Error: ${data.cod}`
    errorMessage.textContent = `'${city}' ${data.message}`

    errorContainer.classList.add('show')
  }
}

weatherInput.addEventListener('change', updateWeather)

export { getWeather }
