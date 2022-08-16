import { user } from './../index'
import { setUpWidgets } from './setUpWidgets'

const SETTINGSCONTENT = {
  'en-US': {
    lang: 'Language',
    bgSrc: 'Background src',
    bgTheme: 'Background theme',
    bgThemePlh: 'Enter tag',
    title: 'Show',
    time: 'Time',
    date: 'Date',
    greeting: 'Greeting',
    quote: 'Quote',
    weather: 'Weather',
    audio: 'Audio',
  },
  'ru-RU': {
    lang: 'Язые',
    bgSrc: 'Фоновый сервис',
    bgTheme: 'Фоновая тема',
    bgThemePlh: 'Введите тему',
    title: 'Показать',
    time: 'Время',
    date: 'Дата',
    greeting: 'Приветствие',
    quote: 'Цитата',
    weather: 'Погода',
    audio: 'Аудио',
  },
}

const settingsBtn = document.querySelector('.settings__btn')
const settingContainer = document.querySelector('.settings__container')
const settingsForm = document.querySelector('.settings__form')
const settingsTitle = document.querySelector('.settings__title')
const backDrop = document.querySelector('.backdrop')
const bgThemeContainer = document.querySelector('.bgTheme-container')

// INPUTS
const langInput = document.querySelector('#language')
const bgSrcInput = document.querySelector('#bgSrc')
const bgThemeInput = document.querySelector('#bgTag')
const timeInput = document.querySelector('#timeStg')
const dateInput = document.querySelector('#dateStg')
const greetingInput = document.querySelector('#greetingStg')
const quoteInput = document.querySelector('#quoteStg')
const weatherInput = document.querySelector('#weatherStg')
const audioInput = document.querySelector('#audioStg')

// LABELS
const langLabel = document.querySelector('.language-label')
const bgSrcLabel = document.querySelector('.bgSrc-label')
const bgThemeLabel = document.querySelector('.bgTheme-label')
const timeLabel = document.querySelector('.time-label')
const dateLabel = document.querySelector('.date-label')
const greetingLabel = document.querySelector('.greeting-label')
const quoteLabel = document.querySelector('.quote-label')
const weatherLabel = document.querySelector('.weather-label')
const audioLabel = document.querySelector('.audio-label')

function settingsToggle() {
  settingsBtn.classList.toggle('active')
  settingContainer.classList.toggle('show')
  backDrop.classList.toggle('active')
}

function hideSettings() {
  settingsBtn.classList.remove('active')
  settingContainer.classList.remove('show')
  backDrop.classList.remove('active')
}

function bgThemeToggle() {
  const value = bgSrcInput.value

  if (value === 'GitHub') {
    bgThemeContainer.classList.remove('show')
  } else {
    bgThemeContainer.classList.add('show')
  }
}

function settingSetupHandler(event) {
  event.preventDefault()

  saveSettings()
  setUpWidgets(user)
  // setUpSettings(user)
}

function saveSettings() {
  user.locale = langInput.value
  user.bgSrc = bgSrcInput.value

  if (bgSrcInput.value === 'GitHub') {
    user.keyword = null
    bgThemeInput.value = ''
  } else {
    const noCammas = bgThemeInput.value.replace(/,/g, '').toLowerCase()
    const tagsArray = noCammas.split(' ').filter((tag) => tag !== '')

    user.keyword = tagsArray
  }

  user.time = timeInput.checked
  user.date = dateInput.checked
  user.greeting = greetingInput.checked
  user.quote = quoteInput.checked
  user.weather = weatherInput.checked
  user.audio = audioInput.checked
}

function setUpSettings(user) {
  langLabel.textContent = SETTINGSCONTENT[user.locale].lang
  langInput.value = user.locale

  bgSrcLabel.textContent = SETTINGSCONTENT[user.locale].bgSrc
  bgSrcInput.value = user.bgSrc

  bgThemeToggle()

  bgThemeLabel.textContent = SETTINGSCONTENT[user.locale].bgTheme
  bgThemeInput.placeholder = SETTINGSCONTENT[user.locale].bgThemePlh
  bgThemeInput.value = user.keyword === null ? null : user.keyword.join(' ')

  settingsTitle.textContent = SETTINGSCONTENT[user.locale].title

  timeLabel.textContent = SETTINGSCONTENT[user.locale].time
  timeInput.checked = user.time

  dateLabel.textContent = SETTINGSCONTENT[user.locale].date
  dateInput.checked = user.date

  greetingLabel.textContent = SETTINGSCONTENT[user.locale].greeting
  greetingInput.checked = user.greeting

  quoteLabel.textContent = SETTINGSCONTENT[user.locale].quote
  quoteInput.checked = user.quote

  weatherLabel.textContent = SETTINGSCONTENT[user.locale].weather
  weatherInput.checked = user.weather

  audioLabel.textContent = SETTINGSCONTENT[user.locale].audio
  audioInput.checked = user.audio
}

// LISTENNERS
settingsBtn.addEventListener('click', settingsToggle)
bgSrcInput.addEventListener('change', bgThemeToggle)
backDrop.addEventListener('click', hideSettings)
settingsForm.addEventListener('submit', settingSetupHandler)

export { settingsToggle, setUpSettings }
