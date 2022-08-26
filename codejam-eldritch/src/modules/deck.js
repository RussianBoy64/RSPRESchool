import { brownCards, blueCards, greenCards } from '../data/mythicCards/index'

class Deck {
  constructor(complexity) {
    this.complexity = complexity || null
    this.green = 0
    this.brown = 0
    this.blue = 0
  }

  reset() {
    this.complexity = null
    this.green = 0
    this.brown = 0
    this.blue = 0
  }

  setComplexity(complexity) {
    this.complexity = complexity
  }

  setCardValueForColors(ancient) {
    const { firstStage, secondStage, thirdStage } = ancient

    this.green =
      firstStage.greenCards + secondStage.greenCards + thirdStage.greenCards

    this.brown =
      firstStage.brownCards + secondStage.brownCards + thirdStage.brownCards

    this.blue =
      firstStage.blueCards + secondStage.blueCards + thirdStage.blueCards
  }

  getDeck() {
    this[this.complexity]()
  }

  veryEasy() {
    console.log('very-easy')
  }

  easy() {
    console.log('easy')
  }

  normal() {
    console.log('normal')
    //shuffle cards
    this.shuffle(greenCards)
    this.shuffle(brownCards)
    this.shuffle(blueCards)

    // create colorDecks
    const greenDeck = greenCards.slice(0, this.green)
    const brownDeck = brownCards.slice(0, this.brown)
    const blueDeck = blueCards.slice(0, this.blue)

    console.log(greenDeck, brownDeck, blueDeck)
  }

  hard() {
    console.log('hard')
  }

  veryHard() {
    console.log('veryHard')
  }

  shuffle(cardsArr) {
    let idx = null
    let temp = null
    let arrLength = cardsArr.length - 1

    for (let i = arrLength; i > 0; i--) {
      idx = Math.floor(Math.random() * (i + 1))
      temp = cardsArr[idx]
      cardsArr[idx] = cardsArr[i]
      cardsArr[i] = temp
    }
    return cardsArr
  }
}

export { Deck }
