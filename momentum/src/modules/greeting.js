const DAYTIME = ['morning', 'afternoon', 'evening', 'night']
const greeting = document.querySelector('.greeting')
const nameInput = document.querySelector('.name')

function showGreeting(hours) {
  if (!hours) {
    hours = new Date().getHours()
  }
  greeting.textContent = `Good ${getTimeOfDay(hours)},`
}

function getTimeOfDay(hours) {
  const currentDayTime = DAYTIME[Math.floor(hours / 6)]
  return currentDayTime
}

function setInputSize() {
  nameInput.addEventListener('keydown', () => {
    nameInput.size = nameInput.value.length === 0 ? 1 : nameInput.value.length
  })
}

export { showGreeting, setInputSize }
