import { domNodes } from './domNodes'
import { deck } from '../index'
import difficulties from '../data/difficulties'
import {
  getAncientDataById,
  getComplexityLevelById,
  setAncientStageCards,
} from './helpers'

const { mythicCard, complexityTitle, complexityLevel, ancientStageCards } =
  domNodes

async function loadGameField(ancientId, complexity) {
  const ancient = getAncientDataById(ancientId)
  const level = getComplexityLevelById(complexity)

  const img = new Image()
  img.src = ancient.cardFace

  img.addEventListener('load', () => {
    // set ancientCard img
    mythicCard.src = ancient.cardFace
  })

  // set ancientCard content
  complexityTitle.textContent = difficulties[level - 1].name
  complexityLevel.style.width = `${level * 20 - 10}%`

  setAncientStageCards(ancient, ancientStageCards)

  //prepair deck
  deck.createDeck(ancient, complexity)
}

export { loadGameField }
