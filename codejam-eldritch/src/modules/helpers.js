import ancientsData from '../data/ancients'
import difficulties from '../data/difficulties'

function getAncientDataById(ancientId) {
  return ancientsData.find((ancient) => ancient.id === ancientId)
}

function getComplexityLevelById(complexityId) {
  return difficulties.findIndex((level) => level.id === complexityId) + 1
}

function setAncientStageCards(ancient, ancientStageCards) {
  ancientStageCards.forEach((stageCard) => {
    console.log(stageCard)
    const cardInfoData = stageCard.dataset.cardinfo
    console.log(cardInfoData)
    const [stageData, colorData] = cardInfoData.split('_')
    const stage = stageData + 'Stage'
    const color = colorData + 'Cards'

    stageCard.textContent = ancient[stage][color]
  })
}

export { getAncientDataById, getComplexityLevelById, setAncientStageCards }
