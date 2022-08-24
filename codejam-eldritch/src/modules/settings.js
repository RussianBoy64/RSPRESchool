import { domNodes } from './domNodes'
import ancientsData from '../data/ancients'
import difficulties from '../data/difficulties'

const {
  settings,
  settingsForm,
  ancientSettings,
  complexitySettings,
  submitBtn,
} = domNodes

async function loadAncientSettings() {
  for (let ancient in ancientsData) {
    if (ancientsData.hasOwnProperty(ancient)) {
      //create nodes
      const ancientInput = await createAncientInput(ancientsData[ancient])
      const ancientLabel = await createAncientLabel(ancientsData[ancient])
      //add nodes
      ancientSettings.appendChild(ancientInput)
      ancientSettings.appendChild(ancientLabel)
    }
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
  const img = new Image()
  img.src = ancient.cardFace

  img.addEventListener('load', () => {
    const imgElement = document.createElement('img')
    imgElement.setAttribute('src', `${ancient.cardFace}`)
    imgElement.setAttribute('alt', `${ancient.name}`)
    imgElement.className = 'card__img'

    label.appendChild(imgElement)
  })

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

function formSubmitHadler(e) {
  e.preventDefault()

  const { ancientValue, complexityValue } = getData()
  // console.log(ancientValue, complexityValue)
}

settingsForm.addEventListener('change', isFormValid)
settingsForm.addEventListener('submit', formSubmitHadler)

export { showSettings, loadAncientSettings }
