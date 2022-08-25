import styles from './scss/index.scss'

import { loadGame } from './modules/startGame'
import { loadAncientSettings, loadComplexitySettings } from './modules/settings'

// load settings content
loadAncientSettings()
loadComplexitySettings()

window.addEventListener('load', loadGame)
