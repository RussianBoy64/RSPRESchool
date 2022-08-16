import { showDate } from './date'
import { showGreeting } from './greeting'
import { setBg } from './bg'

const timeElement = document.querySelector('.time')

function getTime(locale) {
  const date = new Date()

  const hours = date.getHours().toString().padStart(2, '0')
  const minutes = date.getMinutes().toString().padStart(2, '0')
  const seconds = date.getSeconds().toString().padStart(2, '0')
  const currentTime = `${hours} : ${minutes} : ${seconds}`

  if (currentTime === '00 : 00 : 00') {
    showDate(locale, date)
    showGreeting(locale, hours)
    setBg()
  } else if (
    currentTime === '06 : 00 : 00' ||
    currentTime === '12 : 00 : 00' ||
    currentTime === '18 : 00 : 00'
  ) {
    showGreeting(locale, hours)
    setBg()
  }

  return currentTime
}
function showTime() {
  timeElement.classList.add('show')
}

function updateTime(locale) {
  timeElement.textContent = getTime(locale)

  setTimeout(() => updateTime(locale), 1000)
}

export { updateTime, showTime, timeElement }
