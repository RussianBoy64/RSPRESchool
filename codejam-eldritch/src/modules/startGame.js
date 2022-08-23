import { domNodes } from './domNodes'

function loadGame() {
  domNodes.backdrop.classList.add('transparent')
  domNodes.loader.classList.add('hidden')
}

function startGame() {}

export { loadGame }
