const dateElement = document.querySelector('.date')

function getDate(locale, date) {
  if (date === undefined) {
    date = new Date()
  }
  const options = { weekday: 'long', month: 'long', day: 'numeric' }

  return date.toLocaleDateString(locale, options)
}

function updateDate(locale, date) {
  const currentDate = getDate(locale, date)
  dateElement.textContent = currentDate
}

function showDate() {
  dateElement.classList.add('show')
}

export { showDate, updateDate, dateElement }
