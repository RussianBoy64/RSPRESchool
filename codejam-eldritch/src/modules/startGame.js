import image from '../assets/home.png'

const body = document.querySelector('body')
const backdrop = document.querySelector('.backdrop')
const loader = document.querySelector('.loader')

function loadGame() {
  // create bgImg
  const bgImg = new Image()
  // load bgImg
  bgImg.src = image
  // when img fully load show content
  bgImg.addEventListener('load', () => {
    body.style.backgroundImage = `url(${bgImg.src})`
    backdrop.classList.add('transparent')
    loader.classList.add('hidden')
  })
}

function startGame() {}

export { loadGame }
