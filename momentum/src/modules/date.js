const dateElement = document.querySelector('.date')

function getDate(locale) {
  const date = new Date()
  const options = { weekday: 'long', month: 'long', day: 'numeric' }

  return date.toLocaleDateString(locale, options)
}

function showDate(locale) {
  const currentDate = getDate(locale)
  dateElement.textContent = currentDate
}

export { showDate }
