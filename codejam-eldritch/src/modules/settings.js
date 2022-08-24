import { domNodes } from './domNodes'
import ancientsData from '../data/ancients'
import difficulties from '../data/difficulties'

import { loadMythicDeck } from './mythicDeck'

const {
  settings,
  settingsForm,
  ancientSettings,
  complexitySettings,
  submitBtn,
  mainInner,
} = domNodes

async function loadAncientSettings() {
  for (let ancient of ancientsData) {
    //create nodes
    const ancientInput = await createAncientInput(ancient)
    const ancientLabel = await createAncientLabel(ancient)
    //add nodes
    ancientSettings.appendChild(ancientInput)
    ancientSettings.appendChild(ancientLabel)
  }
}

async function createAncientInput(ancient) {
  const input = document.createElement('input')
  input.setAttribute('type', 'radio')
  input.setAttribute('name', `ancient`)
  input.setAttribute('id', `${ancient.id}`)
  input.setAttribute('value', `${ancient.id}`)
  return input
}

async function createAncientLabel(ancient) {
  // create label
  const label = document.createElement('label')
  label.setAttribute('for', `${ancient.id}`)

  //create cardsData
  const img = document.createElement('img')
  img.setAttribute('src', `${ancient.cardFace}`)
  img.setAttribute('alt', `${ancient.name}`)
  img.className = 'card__img'

  label.appendChild(img)

  return label
}

function showSettings() {
  settings.classList.add('visible')
}

function isFormValid() {
  const { ancientValue, complexityValue } = getData()

  if (ancientValue && complexityValue) {
    submitBtn.removeAttribute('disabled')
    submitBtn.removeAttribute('title')
  }
  console.log(ancientValue, complexityValue)
}

function getData() {
  const ancientValue =
    document.querySelector('input[name="ancient"]:checked')?.value || false

  const complexityValue =
    document.querySelector('input[name="complexity"]:checked')?.value || false

  return { ancientValue, complexityValue }
}

function dackShuffleHadnler(e) {
  e.preventDefault()
  const { ancientValue, complexityValue } = getData()

  loadMythicDeck(ancientValue, complexityValue)
  // console.log(ancientValue, complexityValue)

  settings.classList.remove('visible')
  mainInner.classList.add('visible')
}

settingsForm.addEventListener('change', isFormValid)
settingsForm.addEventListener('submit', dackShuffleHadnler)

export { showSettings, loadAncientSettings }
