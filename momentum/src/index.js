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

// Variables
let user = new User()

document.addEventListener('DOMContentLoaded', () => {
  user = getLocalStorage(user)

  showTime(user.options.locale)
  showDate(user.options.locale)
  showGreeting(user.options.locale)
  setUserName(user)
  setBg()
  getWeather(user.city)
})

window.addEventListener('beforeunload', () => setLocalStorage(user))

export { user }

// const createImage = (src) =>
//   new Promise((res, rej) => {
//     const img = new Image()
//     img.onload = () => res(img)
//     img.onerror = rej
//     img.src = src
//   })

// async function render() {
//   const subHeader = document.createElement('h2')
//   subHeader.innerHTML = 'This elements was created by js'
//   const myImage = await createImage(image)
//   document.body.appendChild(subHeader)
//   document.body.appendChild(myImage)
// }

// render()
