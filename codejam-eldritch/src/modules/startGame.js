import { domNodes } from './domNodes'

import { hideLoader } from './loaderHandlers'

const { backdrop } = domNodes

function loadGame() {
  backdrop.classList.add('transparent')
  hideLoader()
}

export { loadGame }
