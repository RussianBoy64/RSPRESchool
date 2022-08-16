import { user } from './../index'

const APIKEY = '0acf28d2a0bde48f52da4ba3eb20ecef'
const WEATHERINFO = {
  ru: {
    wind: 'Скорость ветра',
    windMetric: 'м/с',
    humidity: 'Влажность',
  },
  en: {
    wind: 'Wind speed',
    windMetric: 'mps',
    humidity: 'Humidity',
  },
}
const WEATHERERROR = {
  en: {
    error: 'Error',
    400: 'nothing to geocode',
    404: 'city not found',
  },
  ru: {
    error: 'Ошибка',
    400: 'город не введен',
    404: 'город не найден',
  },
}
const WEATHERPLASEHOLDER = { en: 'Enter city', ru: 'Введите город' }

const weatherElement = document.querySelector('.weather')
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

async function getWeather(city, lang, units = 'metric') {
  //check language
  if (lang) {
    lang = lang.slice(0, 2)
  }

  // create link
  const weatherLink = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=${lang}&appid=${APIKEY}&units=${units}`

  // add city name in input
  weatherInput.value = city
  weatherInput.placeholder = WEATHERPLASEHOLDER[lang]

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
    showWeather(data, lang)
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

    showError(data, city, lang)
  }

  weatherElement.classList.add('show')
}

function updateWeather() {
  user.city = weatherInput.value
  getWeather(weatherInput.value, user.locale)
}

function showWeather(data, lang) {
  if (descriptionContainer.classList.contains('show')) {
    descriptionContainer.classList.remove('show')
    setTimeout(() => showWeather(data, lang), 300)
  } else {
    //show weather description
    weatherIcon.className = `weather-icon owf owf-${data.weather[0].id}`
    temperature.textContent = `${Math.floor(data.main.temp)}°C`
    weatherDescription.textContent = data.weather[0].description
    weatherWind.textContent = `${WEATHERINFO[lang].wind}: ${Math.floor(
      data.wind.speed
    )} ${WEATHERINFO[lang].windMetric}`
    weatherHumidity.textContent = `${WEATHERINFO[lang].humidity}: ${Math.floor(
      data.main.humidity
    )}%`

    descriptionContainer.classList.add('show')
  }
}

function showError(data, city, lang) {
  if (errorContainer.classList.contains('show')) {
    errorContainer.classList.remove('show')
    setTimeout(() => showError(data, city, lang), 300)
  } else {
    errorName.textContent = `${WEATHERERROR[lang].error}: ${data.cod}`
    errorMessage.textContent = `'${city}' ${WEATHERERROR[lang][data.cod]}`

    errorContainer.classList.add('show')
  }
}

weatherInput.addEventListener('change', updateWeather)

export { getWeather, weatherElement }
