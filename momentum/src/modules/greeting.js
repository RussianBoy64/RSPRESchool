const TIMEOFDAY = ['night', 'morning', 'afternoon', 'evening']
const GREETING = {
  'en-US': ['Good night,', 'Good morning,', 'Good afternoon,', 'Good evening,'],
  'ru-RU': ['Доброй ночи,', 'Доброе утро,', 'Добрый день,', 'Добрый вечер,'],
}
const PLACEHOLDER = { 'en-US': 'Enter your name', 'ru-RU': 'Введите имя' }

const MINLENGTH = 13
const MAXLENGTH = 15

const greetingElement = document.querySelector('.greeting')
const greetingContainer = document.querySelector('.greeting-container')
const nameInput = document.querySelector('.name')

function getTimeOfDay(hours) {
  if (hours === undefined) {
    hours = new Date().getHours()
  }

  return Math.floor(hours / 6)
}

function updateGreeting(locale, hours) {
  const currentDayTime = getTimeOfDay(hours)
  greetingElement.textContent = GREETING[locale][currentDayTime]
  nameInput.placeholder = PLACEHOLDER[locale]
}

function showGreeting() {
  if (greetingContainer.classList.contains('show')) {
    greetingContainer.classList.remove('show')
    setTimeout(() => showGreeting(), 300)
  } else {
    greetingContainer.classList.add('show')
  }
}

function setUserName(user) {
  if (user.name) {
    nameInput.value = user.name
    nameInput.size = user.name.length
  } else {
    nameInput.size = MINLENGTH
  }

  nameInput.maxLength = MAXLENGTH

  nameInput.addEventListener('keyup', () => {
    const userName = nameInput.value
    const inputLength = nameInput.value.length

    nameInput.size =
      inputLength === 0
        ? MINLENGTH
        : inputLength > MAXLENGTH
        ? MAXLENGTH
        : inputLength

    user.name = userName
  })
}

export {
  showGreeting,
  updateGreeting,
  setUserName,
  getTimeOfDay,
  TIMEOFDAY,
  greetingContainer,
}
