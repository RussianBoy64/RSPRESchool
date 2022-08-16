// Import styles
import './scss/index.scss'

// Import scripts
import { User } from './modules/user'
import { setLocalStorage, getLocalStorage } from './modules/localStorage'
import { loadPlaylist } from './modules/player'
import { setUpWidgets } from './modules/setUpWidgets'

// Variables
let user = new User()

document.addEventListener('DOMContentLoaded', () => {
  user = getLocalStorage() || user

  loadPlaylist()
  setUpWidgets(user)
})

window.addEventListener('beforeunload', () => setLocalStorage(user))

export { user }
