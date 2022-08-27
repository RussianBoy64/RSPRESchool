import { domNodes } from './domNodes'
import { deck } from '../index'

import { hideLoader } from './loaderHandlers'

const {
  backdrop,
  settings,
  settingsForm,
  mainInner,
  submitBtn,
  gameDeckBtn,
  gameDeckBtnText,
  tshirt,
  newGameBtn,
} = domNodes

function loadGame() {
  backdrop.classList.add('transparent')
  hideLoader()
}

function getNextCard() {
  const cardData = deck.getCard()

  if (cardData) {
    updateGameProgress(deck.currentStage, cardData.color)

    const img = new Image()
    img.src = cardData.cardFace

    img.addEventListener('load', () => {
      gameDeckBtn.classList.add('blink')
      tshirt.src = img.src
      setTimeout(() => {
        gameDeckBtn.classList.remove('blink')
      }, 500)
    })
  } else {
    const img = new Image()
    img.src = './assets/mythicCardBackground.png'

    img.addEventListener('load', () => {
      gameDeckBtn.classList.add('blink')
      gameDeckBtnText.textContent = 'Deck is empty'
      tshirt.src = img.src
      setTimeout(() => {
        gameDeckBtn.classList.remove('blink')
      }, 500)
    })
  }
}

function startNewGame() {
  mainInner.classList.remove('visible')
  settingsForm.reset()
  submitBtn.setAttribute('disabled', 'disabled')
  settings.classList.add('visible')

  tshirt.src = './assets/mythicCardBackground.png'
  gameDeckBtnText.textContent = 'Get card'
  deck.reset()
}

function updateGameProgress(currentStage, color) {
  const id = currentStage + '_' + color
  const cardTracker = document.getElementById(id)
  cardTracker.textContent = --cardTracker.textContent
}

gameDeckBtn.addEventListener('click', getNextCard)
newGameBtn.addEventListener('click', startNewGame)

export { loadGame }
