import { getTimeOfDay, TIMEOFDAY } from './greeting'

const GITHUBLINK =
  'url(https://raw.githubusercontent.com/RussianBoy64/stage1-tasks/assets/images/'

const body = document.querySelector('body')
const prevBtn = document.querySelector('.fa-chevron-left')
const nextBtn = document.querySelector('.fa-chevron-right')
let bgNum = getRandomNum()

function getRandomNum(min = 1, max = 20) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function setBg() {
  const currentDayTime = TIMEOFDAY[getTimeOfDay()]

  body.style.backgroundImage =
    GITHUBLINK + `${currentDayTime}/${bgNum.toString().padStart(2, '0')}.webp)`
}

function getSlidePrev() {
  bgNum = bgNum-- === 1 ? 20 : bgNum--
  setBg()
}

function getSlideNext() {
  bgNum = bgNum++ === 20 ? 1 : bgNum++
  setBg()
}

prevBtn.addEventListener('click', getSlidePrev)
nextBtn.addEventListener('click', getSlideNext)

export { setBg, getSlidePrev, getSlideNext }
