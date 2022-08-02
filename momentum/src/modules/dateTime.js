function getTime(locale, element) {
  // update time
  const date = new Date()
  const options = {
    hour12: false,
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZone: 'UTC',
  }

  element.textContent = date.toLocaleTimeString(locale, options)

  setTimeout(() => getTime(locale, element), 1000)
}

function showTime(locale, time = true, date = true) {
  // add timeElement

  const main = document.querySelector('.main')

  const timeElement = document.createElement('time')
  timeElement.classList.add('time')
  main.prepend(timeElement)

  getTime(locale, timeElement)
}

export { showTime }
