import { getTimeOfDay, TIMEOFDAY } from './greeting'
import { getRandomNum } from './randomNum'

const GITHUBLINK =
  'https://raw.githubusercontent.com/RussianBoy64/stage1-tasks/assets/images/'

const body = document.querySelector('body')
const prevBtn = document.querySelector('.btn-left')
const nextBtn = document.querySelector('.btn-right')
let bgNum = getRandomNum(1, 20)

function setBg() {
  const currentDayTime = TIMEOFDAY[getTimeOfDay()]
  const bgImg = new Image()
  bgImg.src =
    GITHUBLINK + `${currentDayTime}/${bgNum.toString().padStart(2, '0')}.webp`

  // change bgImg after its fully loaded
  bgImg.addEventListener('load', () => {
    body.style.backgroundImage = `url(${bgImg.src})`
  })

  // when bgImg fully changed add listenners for change
  body.addEventListener('transitionend', () => {
    prevBtn.addEventListener('click', getSlidePrev)
    nextBtn.addEventListener('click', getSlideNext)
  })
}

function getSlidePrev() {
  // removeEventListener for fastclick change
  prevBtn.removeEventListener('click', getSlidePrev)
  nextBtn.removeEventListener('click', getSlideNext)

  bgNum = bgNum === 1 ? 20 : --bgNum
  setBg()
}

function getSlideNext() {
  // removeEventListener for fastclick change
  prevBtn.removeEventListener('click', getSlidePrev)
  nextBtn.removeEventListener('click', getSlideNext)

  bgNum = bgNum === 20 ? 1 : ++bgNum
  setBg()
}

export { setBg, getSlidePrev, getSlideNext }
