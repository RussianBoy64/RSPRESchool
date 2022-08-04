const TIMEOFDAY = ['night', 'morning', 'afternoon', 'evening']
const GREETING = {
  'en-US': ['Good night,', 'Good morning,', 'Good afternoon,', 'Good evening,'],
  'ru-RU': ['Доброй ночи,', 'Доброе утро,', 'Добрый день,', 'Добрый вечер,'],
}
const MINLENGTH = 13
const MAXLENGTH = 15

const greetingElement = document.querySelector('.greeting')
const nameInput = document.querySelector('.name')

function getTimeOfDay() {
  const hours = new Date().getHours()

  return Math.floor(hours / 6)
}

function showGreeting(locale) {
  const currentDayTime = getTimeOfDay()
  greetingElement.textContent = GREETING[locale][currentDayTime]
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

export { showGreeting, setUserName, getTimeOfDay, TIMEOFDAY }
