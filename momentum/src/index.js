// Import styles
import './scss/index.scss'

// Import scripts
import { User } from './modules/user'
import { showTime } from './modules/time'
import { showDate } from './modules/date'
import { showGreeting, setUserName } from './modules/greeting'
import { setLocalStorage, getLocalStorage } from './modules/localStorage'
import { setBg } from './modules/bg'
import { getWeather } from './modules/weather'
import { getQuote } from './modules/quotes'
import { showAudio, loadPlaylist } from './modules/player'
import { settingsToggle, setUpSettings } from './modules/settings'

import { setUpWidgets } from './modules/setUpWidgets'

// Variables
let user = new User()

document.addEventListener('DOMContentLoaded', () => {
  user = getLocalStorage() || user

  loadPlaylist()
  setUpWidgets(user)
  // showTime(user.locale)
  // showDate(user.locale)
  // showGreeting(user.locale)
  // setUserName(user)
  // setBg()
  // getWeather(user.city, user.locale)
  // getQuote(user.locale)
  // showAudio()
  // setUpSettings(user)
})

window.addEventListener('beforeunload', () => setLocalStorage(user))

export { user }
