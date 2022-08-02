// Import styles
import './scss/index.scss'

// Import scripts
import { showTime } from './modules/dateTime'

// const currentTime = getTime('ru-RU')
// console.log(currentTime)
showTime('ru-RU')

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
