import styles from './scss/index.scss'

import { Deck } from './modules/deck'
import { loadGame } from './modules/startGame'
import { loadAncientSettings, loadComplexitySettings } from './modules/settings'

let deck = new Deck()

// load settings content
loadAncientSettings()
loadComplexitySettings()

window.addEventListener('load', loadGame)

export { deck }
