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

// ANCIENT SETTINGS

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

// COMPLEXITY SETTINGS

async function loadComplexitySettings() {
  for (let complexity of difficulties) {
    //create nodes
    const complexityInput = await createComplexityInput(complexity)
    const complexityLabel = await createComplexityLabel(complexity)
    //add nodes
    complexitySettings.appendChild(complexityInput)
    complexitySettings.appendChild(complexityLabel)
  }
}

async function createComplexityInput(complexity) {
  const input = document.createElement('input')
  input.setAttribute('type', 'radio')
  input.setAttribute('name', `complexity`)
  input.setAttribute('id', `${complexity.id}`)
  input.setAttribute('value', `${complexity.id}`)
  return input
}

async function createComplexityLabel(complexity) {
  // create label
  const label = document.createElement('label')
  label.setAttribute('for', `${complexity.id}`)

  //add text
  label.textContent = complexity.name

  return label
}

// BASIC

function showSettings() {
  settings.classList.add('visible')
}

function isFormValid() {
  const { ancientId, complexityValue } = getData()

  if (ancientId && complexityValue) {
    submitBtn.removeAttribute('disabled')
    submitBtn.removeAttribute('title')
  }
  console.log(ancientId, complexityValue)
}

function getData() {
  const ancientId =
    document.querySelector('input[name="ancient"]:checked')?.value || false

  const complexityValue =
    document.querySelector('input[name="complexity"]:checked')?.value || false

  return { ancientId, complexityValue }
}

function dackShuffleHadnler(e) {
  e.preventDefault()
  const { ancientId, complexityValue } = getData()

  loadMythicDeck(ancientId, complexityValue)
  // console.log(ancientValue, complexityValue)

  settings.classList.remove('visible')
  mainInner.classList.add('visible')
}

settingsForm.addEventListener('change', isFormValid)
settingsForm.addEventListener('submit', dackShuffleHadnler)

export { showSettings, loadAncientSettings, loadComplexitySettings }
