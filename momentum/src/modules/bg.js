import { getTimeOfDay, TIMEOFDAY } from './greeting'
import { getRandomNum } from './randomNum'
import { user } from './../index'

// GITHUB
const GITHUBLINK =
  'https://raw.githubusercontent.com/RussianBoy64/stage1-tasks/assets/images/'

// UNSPLASH
const UNSPLASHLINK = 'https://api.unsplash.com/photos/random?'
const UNSPLASHKEY = 'BqMBDBbjd6MPILUA4zYcYSMA7i39DUiFfP9-iqWrm2Y'

// FLICKR

const FLICKRLINK = 'https://www.flickr.com/services/rest/'
const FLICKRKEY = 'd76f235c6f367ab7ab9cbbc7f82d2ce7'

const body = document.querySelector('body')
const prevBtn = document.querySelector('.btn-left')
const nextBtn = document.querySelector('.btn-right')
let bgNum = getRandomNum(1, 20)

async function setBg() {
  // create img
  const bgImg = new Image()

  if (user.bgSrc === 'GitHub') {
    bgImg.src = getGitHubImg()
  } else if (user.bgSrc === 'Unsplash') {
    bgImg.src = await getUnsplashImg()
  } else if (user.bgSrc === 'Flickr') {
    bgImg.src = await getFlickrImg()
  }

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

function getGitHubImg() {
  const currentDayTime = TIMEOFDAY[getTimeOfDay()]
  const srclink =
    GITHUBLINK + `${currentDayTime}/${bgNum.toString().padStart(2, '0')}.webp`

  return srclink
}

async function getUnsplashImg() {
  // if keyword for search empty use current day time
  let keywords =
    user.keyword.length === 0 ? TIMEOFDAY[getTimeOfDay()] : user.keyword

  if (keywords instanceof Array) {
    keywords = expandUnsplashKeywords(keywords)
  }

  const srclink =
    UNSPLASHLINK + `${keywords}&orientation=landscape&client_id=${UNSPLASHKEY}`

  const data = await fetch(srclink)
  const imgData = await data.json()
  const imgLink = imgData.urls.regular

  return imgLink
}

function expandUnsplashKeywords(keywords) {
  return keywords.reduce((acc, keyword) => {
    return acc + `query=${keyword}||`
  }, '')
}

async function getFlickrImg() {
  // if keyword for search empty use current day time
  let keywords =
    user.keyword.length === 0 ? TIMEOFDAY[getTimeOfDay()] : user.keyword

  if (keywords instanceof Array) {
    keywords = expandFlickrKeywords(keywords)
  }

  const srclink =
    FLICKRLINK +
    `?method=flickr.photos.search&api_key=${FLICKRKEY}&tags=${keywords}&tag_mode=any&extras=url_l&per_page=200&page=1&format=json&nojsoncallback=1`

  const data = await fetch(srclink)
  const imgData = await data.json()
  const bgArray = filterImg(imgData.photos.photo)
  const imgLink = bgArray[getRandomNum(0, bgArray.length - 1)].url_l

  return imgLink
}

function filterImg(imgArray) {
  const filteredImgs = imgArray.filter((photo) => {
    return photo.width_l > photo.height_l
  })

  return filteredImgs
}

function expandFlickrKeywords(keywords) {
  return keywords.join(',')
}

export { setBg }
