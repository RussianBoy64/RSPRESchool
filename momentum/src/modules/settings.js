const settingsBtn = document.querySelector('.settings__btn')
const settingContainer = document.querySelector('.settings__container')
const backDrop = document.querySelector('.backdrop')

function settingsToggle() {
  settingsBtn.classList.toggle('active')
  settingContainer.classList.toggle('show')
  backDrop.classList.toggle('active')

  backDrop.addEventListener('click', hideSettings)
}

function hideSettings() {
  settingsBtn.classList.remove('active')
  settingContainer.classList.remove('show')
  backDrop.classList.remove('active')

  backDrop.removeEventListener('click', hideSettings)
}

settingsBtn.addEventListener('click', settingsToggle)
export { settingsToggle }
