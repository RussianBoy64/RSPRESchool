// Import styles
import './scss/index.scss'

// Import scripts
import { User } from './modules/user'
import { showTime } from './modules/time'
import { showDate } from './modules/date'
import { showGreeting, setUserName } from './modules/greeting'
import { setLocalStorage, getLocalStorage } from './modules/localStorage'

// Variables
const user = new User()

// window.addEventListener('load', () => {

// })

document.addEventListener('DOMContentLoaded', () => {
  user.name = getLocalStorage()

  showTime(user.options.locale)
  showDate(user.options.locale)
  showGreeting(user.options.locale)
  setUserName(user)
})

window.addEventListener('beforeunload', () => setLocalStorage(user))

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
