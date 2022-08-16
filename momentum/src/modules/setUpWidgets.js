// import { user } from './../index'
import { updateTime, showTime, timeElement } from './time'
import { showDate, updateDate, dateElement } from './date'
import {
  showGreeting,
  updateGreeting,
  setUserName,
  greetingContainer,
} from './greeting'
import { setBg } from './bg'
import { getWeather, weatherElement } from './weather'
import { getQuote, qouteContainer, quoteId } from './quotes'
import { showAudio, playerContainer } from './player'
import { setUpSettings } from './settings'

function setUpWidgets(user) {
  if (user.time) {
    showTime()
    updateTime(user.locale)
  } else {
    timeElement.classList.remove('show')
  }

  if (user.date) {
    showDate()
    updateDate(user.locale)
  } else {
    dateElement.classList.remove('show')
  }

  if (user.greeting) {
    showGreeting()
    updateGreeting(user.locale)
    setUserName(user)
  } else {
    greetingContainer.classList.remove('show')
  }

  setBg()

  if (user.weather) {
    getWeather(user.city, user.locale)
  } else {
    weatherElement.classList.remove('show')
  }

  if (user.quote) {
    getQuote(user.locale, quoteId)
  } else {
    qouteContainer.classList.remove('show')
  }

  if (user.audio) {
    showAudio()
  } else {
    playerContainer.classList.remove('show')
  }

  setUpSettings(user)
}

export { setUpWidgets }
