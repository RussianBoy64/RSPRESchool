// Import styles
import './scss/index.scss'

// Import scripts
import { user } from './modules/user'
import { showTime } from './modules/time'
import { showDate } from './modules/date'
import { showGreeting, setInputSize } from './modules/greeting'

// Variables

showTime('ru-RU')
showDate('ru-RU')
showGreeting()
setInputSize()

// window.addEventListener('load', () => {
//
// })

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
