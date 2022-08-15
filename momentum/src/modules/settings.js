const settingsBtn = document.querySelector('.settings__btn')
const settingContainer = document.querySelector('.settings__container')

function settingsToggle() {
  settingsBtn.classList.toggle('active')
  settingContainer.classList.toggle('show')
}

settingsBtn.addEventListener('click', settingsToggle)
export { settingsToggle }
