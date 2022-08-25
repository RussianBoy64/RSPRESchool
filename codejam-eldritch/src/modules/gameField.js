import { domNodes } from './domNodes'
import {
  getAncientDataById,
  getComplexityLevelById,
  setAncientStageCards,
} from './helpers'

const {
  mythicCard,
  complexityTitle,
  complexityLevel,
  ancientStageCards,
  gameStageCards,
} = domNodes

function loadGameField(ancientId, complexity) {
  const ancient = getAncientDataById(ancientId)
  const level = getComplexityLevelById(complexity)

  mythicCard.src = ancient.cardFace
  complexityTitle.textContent = complexity
  complexityLevel.style.width = `${level * 20}%`

  setAncientStageCards(ancient, ancientStageCards)
  setAncientStageCards(ancient, gameStageCards)
}

export { loadGameField }
