import styles from './scss/index.scss'

import { loadGame } from './modules/startGame'
import { loadAncientSettings } from './modules/settings'

// load settings content
loadAncientSettings()

window.addEventListener('load', loadGame)
