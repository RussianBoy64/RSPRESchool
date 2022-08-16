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
  if (dateElement.classList.contains('show')) {
    dateElement.classList.remove('show')
    setTimeout(() => showDate(), 300)
  } else {
    dateElement.classList.add('show')
  }
}

export { showDate, updateDate, dateElement }
