const timeElement = document.querySelector('.time')

function getTime() {
  const date = new Date()

  const hours = date.getHours().toString().padStart(2, '0')
  const minutes = date.getMinutes().toString().padStart(2, '0')
  const seconds = date.getSeconds().toString().padStart(2, '0')

  return `${hours} : ${minutes} : ${seconds}`
}

function showTime() {
  const currentTime = getTime()
  timeElement.textContent = currentTime

  setTimeout(showTime, 1000)
}

export { showTime }
