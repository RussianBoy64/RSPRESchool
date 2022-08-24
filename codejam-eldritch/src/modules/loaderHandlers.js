import { domNodes } from './domNodes'
import { showSettings } from './settings'

const { loader } = domNodes

function hideLoader() {
  loader.classList.add('hidden')
  //remove loader
  loader.addEventListener('transitionend', removeLoader)
}

function removeLoader() {
  loader.remove()
  showSettings()
}

export { hideLoader }
