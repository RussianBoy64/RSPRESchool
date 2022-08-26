import { domNodes } from './domNodes'
import { deck } from '../index'
import {
  getAncientDataById,
  getComplexityLevelById,
  setAncientStageCards,
} from './helpers'

const { mythicCard, complexityTitle, complexityLevel, ancientStageCards } =
  domNodes

function loadGameField(ancientId, complexity) {
  const ancient = getAncientDataById(ancientId)
  const level = getComplexityLevelById(complexity)

  // set ancientCard content
  mythicCard.src = ancient.cardFace
  complexityTitle.textContent = complexity
  complexityLevel.style.width = `${level * 20}%`

  setAncientStageCards(ancient, ancientStageCards)

  //prepair deck
  deck.createDeck(ancient, complexity)

  console.log(deck)
}

export { loadGameField }
