import { getTimeOfDay, TIMEOFDAY } from './greeting'

const GITHUBLINK =
  'url(https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/'

const body = document.querySelector('body')
let bgNum = getRandomNum().toString().padStart(2, '0')

function getRandomNum(min = 1, max = 20) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function setBg() {
  const currentDayTime = TIMEOFDAY[getTimeOfDay()]
  bgNum = getRandomNum().toString().padStart(2, '0')

  body.style.backgroundImage = GITHUBLINK + `${currentDayTime}/${bgNum}.jpg)`
}

export { setBg }
