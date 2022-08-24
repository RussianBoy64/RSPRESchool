// BASIC
const body = document.querySelector('body')
const backdrop = document.querySelector('.backdrop')
const loader = document.querySelector('.loader')
const gameTitle = document.querySelector('.header__gameTitle')
const main = document.querySelector('.main')
const mainInner = document.querySelector('.main__inner')

// SETTINGS
const settings = document.querySelector('.settings')
const settingsForm = document.querySelector('.settings__form')
const ancientSettings = document.querySelector('.settings__ancients')
const complexitySettings = document.querySelector('.settings__complexity')
const submitBtn = document.querySelector('.btn__submit')

const domNodes = {
  body,
  backdrop,
  loader,
  gameTitle,
  main,
  mainInner,
  settings,
  settingsForm,
  ancientSettings,
  complexitySettings,
  submitBtn,
}

export { domNodes }
