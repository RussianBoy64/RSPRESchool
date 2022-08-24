import { domNodes } from './domNodes'
import ancientsData from '../data/ancients'
import difficulties from '../data/difficulties'

const { mythicCard, complexityTitle, complexityLevel } = domNodes

function loadMythicDeck(ancientId, complexity) {
  const ancient = ancientsData.find((ancient) => ancient.id === ancientId)
  const level = difficulties.findIndex((level) => level.id === complexity) + 1

  console.log(level)

  mythicCard.src = ancient.cardFace
  complexityTitle.textContent = complexity
  complexityLevel.style.width = `${level * 20}%`
}

export { loadMythicDeck }
