const dateElement = document.querySelector('.date')

function getDate(locale, date) {
  if (date === undefined) {
    date = new Date()
  }
  const options = { weekday: 'long', month: 'long', day: 'numeric' }

  return date.toLocaleDateString(locale, options)
}

function showDate(locale, date) {
  const currentDate = getDate(locale, date)
  dateElement.textContent = currentDate
}

export { showDate }
