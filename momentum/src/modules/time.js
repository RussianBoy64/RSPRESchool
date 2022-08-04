import { showDate } from './date'
import { showGreeting } from './greeting'

const timeElement = document.querySelector('.time')

function getTime(locale) {
  const date = new Date()

  const hours = date.getHours().toString().padStart(2, '0')
  const minutes = date.getMinutes().toString().padStart(2, '0')
  const seconds = date.getSeconds().toString().padStart(2, '0')

  const currentTime = `${hours} : ${minutes} : ${seconds}`

  if (currentTime === '00 : 00 : 00') {
    showDate(locale)
    showGreeting(locale, hours)
  } else if (
    currentTime === '06 : 00 : 00' ||
    currentTime === '12 : 00 : 00' ||
    currentTime === '18 : 00 : 00'
  ) {
    showGreeting(locale, hours)
  }

  return currentTime
}

function showTime(locale) {
  timeElement.textContent = getTime(locale)

  setTimeout(showTime, 1000)
}

export { showTime }
