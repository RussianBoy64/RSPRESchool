import { domNodes } from './domNodes'

import { removeLoader } from './loaderHandlers'

const { backdrop } = domNodes

function loadGame() {
  backdrop.classList.add('transparent')
  removeLoader()
}

export { loadGame }
