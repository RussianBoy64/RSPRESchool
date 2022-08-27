import * as cardsData from '../data/mythicCards/index'

class Deck {
  constructor() {
    this.stagesLength = {
      firstStage: 0,
      secondStage: 0,
      thirdStage: 0,
    }
    this.stages = {
      firstStage: [],
      secondStage: [],
      thirdStage: [],
    }
    this.colorDecksLength = {
      greenCards: 0,
      brownCards: 0,
      blueCards: 0,
    }
    this.colorDecks = {
      greenCards: [],
      brownCards: [],
      blueCards: [],
    }
    this.currentStage = 1
    this.gameDeck = []
  }

  reset() {
    this.stagesLength = {
      firstStage: 0,
      secondStage: 0,
      thirdStage: 0,
    }
    this.stages = {
      firstStage: [],
      secondStage: [],
      thirdStage: [],
    }
    this.colorDecksLength = {
      greenCards: 0,
      brownCards: 0,
      blueCards: 0,
    }
    this.colorDecks = {
      greenCards: [],
      brownCards: [],
      blueCards: [],
    }
    this.currentStage = 1
    this.gameDeck = []
  }

  createDeck(ancient, complexity) {
    // get number of card for each color
    const { firstStage, secondStage, thirdStage } = ancient

    this.setDeckStageAndColorLength(ancient)

    // filter mythic cards by complexity
    this[complexity]()

    this.setStagesDecks(ancient)
    this.setGameDeck()
  }

  setDeckStageAndColorLength(ancient) {
    // get number of cards for each stage and each color
    for (let stage in this.stagesLength) {
      for (let colorCards in ancient[stage]) {
        // count number of cards for each stage
        this.stagesLength[stage] += ancient[stage][colorCards]
        // count number of cards of each color
        this.colorDecksLength[colorCards] += ancient[stage][colorCards]
      }
    }
  }

  veryEasy() {
    for (let colorDeck in this.colorDecks) {
      // shuffle cards
      let easyCards = cardsData[colorDeck].filter(
        (card) => card.difficulty === 'easy'
      )

      // if there are not enough cards
      if (easyCards.length < this.colorDecksLength[colorDeck]) {
        let normalCards = cardsData[colorDeck].filter(
          (card) => card.difficulty === 'normal'
        )
        const shuffledNomral = this.shuffle(normalCards)
        const length = this.colorDecksLength[colorDeck] - easyCards.length
        normalCards = shuffledNomral.splice(0, length)
        easyCards = easyCards.concat(normalCards)
      }

      const shuffledArr = this.shuffle(easyCards)

      // get cards of each color
      this.setColorDeck(colorDeck, shuffledArr)
    }
  }

  easy() {
    for (let colorDeck in this.colorDecks) {
      //shuffle cards
      const filterdCards = cardsData[colorDeck].filter(
        (card) => card.difficulty !== 'hard'
      )

      const shuffledArr = this.shuffle(filterdCards)

      // get cards of each color
      this.setColorDeck(colorDeck, shuffledArr)
    }
  }

  normal() {
    for (let colorDeck in this.colorDecks) {
      //shuffle cards
      const shuffledArr = this.shuffle(cardsData[colorDeck])

      // get cards of each color
      this.setColorDeck(colorDeck, shuffledArr)
    }
  }

  hard() {
    for (let colorDeck in this.colorDecks) {
      //shuffle cards
      const filterdCards = cardsData[colorDeck].filter(
        (card) => card.difficulty !== 'easy'
      )

      const shuffledArr = this.shuffle(filterdCards)

      // get cards of each color
      this.setColorDeck(colorDeck, shuffledArr)
    }
  }

  veryHard() {
    for (let colorDeck in this.colorDecks) {
      // shuffle cards
      let hardCards = cardsData[colorDeck].filter(
        (card) => card.difficulty === 'hard'
      )

      // if there are not enough cards
      if (hardCards.length < this.colorDecksLength[colorDeck]) {
        let normalCards = cardsData[colorDeck].filter(
          (card) => card.difficulty === 'normal'
        )
        const shuffledNomral = this.shuffle(normalCards)
        const length = this.colorDecksLength[colorDeck] - hardCards.length
        normalCards = shuffledNomral.splice(0, length)
        hardCards = hardCards.concat(normalCards)
      }

      const shuffledArr = this.shuffle(hardCards)

      // get cards of each color
      this.setColorDeck(colorDeck, shuffledArr)
    }
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

  setColorDeck(colorDeck, cardsArr) {
    this.colorDecks[colorDeck] = cardsArr.slice(
      0,
      this.colorDecksLength[colorDeck]
    )
  }

  setStagesDecks(ancient) {
    for (let stage in this.stages) {
      for (let colorDeck in ancient[stage]) {
        const cards = this.colorDecks[colorDeck].splice(
          0,
          ancient[stage][colorDeck]
        )

        if (cards.length) {
          this.stages[stage] = this.stages[stage].concat(cards)
        }
      }

      //shuffle stage
      this.stages[stage] = this.shuffle(this.stages[stage])
    }
  }

  setGameDeck() {
    this.gameDeck = this.stages.thirdStage.concat(
      this.stages.secondStage,
      this.stages.firstStage
    )
  }

  getCard() {
    this.setCurrentStage()
    return this.gameDeck.pop()
  }

  setCurrentStage() {
    if (this.currentStage === 1) {
      this.stagesLength.firstStage > 0
        ? this.stagesLength.firstStage--
        : this.currentStage++
    }
    if (this.currentStage === 2) {
      this.stagesLength.secondStage > 0
        ? this.stagesLength.secondStage--
        : this.currentStage++
    }
    if (this.currentStage === 3) {
      this.stagesLength.thirdStage > 0
        ? this.stagesLength.thirdStage--
        : (this.stagesLength.thirdStage = 0)
    }
  }
}

export { Deck }
