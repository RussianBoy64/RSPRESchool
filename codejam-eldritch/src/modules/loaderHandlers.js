import { domNodes } from './domNodes'

const { loader } = domNodes

function removeLoader() {
  loader.classList.add('hidden')
  //remove loader
  loader.addEventListener('transitionend', () => {
    loader.remove()
  })
}

export { removeLoader }
