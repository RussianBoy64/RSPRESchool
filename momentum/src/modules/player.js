import { playList } from './playList'

const playerContainer = document.querySelector('.music-player')
const playListContainer = document.querySelector('.playlist')

// PLAY/PAUSE VARIABLES
const playPauseBtn = document.querySelector('.play-pause')
const prevSongBtn = document.querySelector('.prevSong')
const nextSongBtn = document.querySelector('.nextSong')

// VOLUME VARIABLES
const volumeBtn = document.querySelector('.volume-btn')
const volumeIcon = document.querySelector('.volume-icon')
const volumeSlider = document.querySelector('.volume__slider')
const volumeLevel = document.querySelector('.volume__level')

// PROGRESS VARIABLES
const songInfo = document.querySelector('.controls__info')
const currentSongTime = document.querySelector('.info__song-time')
const currentSongText = document.querySelector('.info__song-text')

function toggleAudio() {
  playerContainer.classList.toggle('show')
}

function loadPlaylist() {
  for (let song of playList) {
    const li = document.createElement('li')
    li.classList.add('playlist__item')
    li.innerHTML = `<button class="btn">
    <i class="fa-solid fa-play playBtn"></i>
  </button>
  <div class="playlist__item__song-info">
    <span class="playlist__item__song-name">${song.title}</span
    ><span class="playlist__item__song-duration">${song.duration}</span>
  </div>`
    playListContainer.append(li)
  }
}

const audio = new Audio()
let isPlay = false
let playNum = 0
let volume = 0.75
let volumeLevelWidth = volume * 100

setVolumeLevel()
showCurrentSongTime()
showCurrentSong()

// PLAY/PAUSE HANDLERS

function playAudio() {
  audio.src = playList[playNum].src
  showCurrentSongTime()
  if (!isPlay) {
    audio.currentTime = 0
    audio.play()
    playIconSet(playPauseBtn)
    activeSongSet()
    setTimeout(showCurrentSong, 200) //for smooth songTitle change
    isPlay = true
  } else {
    pauseIconSet(playPauseBtn)
    activeSongRemove()
    audio.pause()
    isPlay = false
  }
}

function playIconSet(node) {
  const icon = node.querySelector('.playBtn')
  icon.classList.remove('fa-play')
  icon.classList.add('fa-pause')
}

function pauseIconSet(node) {
  const icon = node.querySelector('.playBtn')
  icon.classList.remove('fa-pause')
  icon.classList.add('fa-play')
}

function activeSongSet() {
  const activeNode = playListContainer.childNodes[playNum]
  activeNode.classList.add('active')
  playIconSet(activeNode)
}

function activeSongRemove() {
  const activeNode = playListContainer.childNodes[playNum]
  activeNode.classList.remove('active')
  pauseIconSet(activeNode)
}

function prevSong() {
  activeSongRemove() // remove active style
  hideCurrentSong()
  playNum = playNum === 0 ? playList.length - 1 : --playNum
  isPlay = false
  playAudio()
}

function nextSong() {
  activeSongRemove() // remove active style
  hideCurrentSong()
  playNum = playNum === playList.length - 1 ? 0 : ++playNum
  isPlay = false
  playAudio()
}

// VOLUME HANDLERS

function volumeIconSoundOn() {
  volumeIcon.classList.remove('fa-volume-xmark')
  volumeIcon.classList.add('fa-volume-high')
}

function volumeIconSoundOff() {
  volumeIcon.classList.remove('fa-volume-high')
  volumeIcon.classList.add('fa-volume-xmark')
}

function volumeToggle() {
  if (volumeIcon.classList.contains('fa-volume-high')) {
    volumeIconSoundOff()
    audio.volume = 0
    volumeLevel.style.width = `0%`
  } else {
    volumeIconSoundOn()
    audio.volume = volume
    setVolumeLevel()
  }
}

function volumeLevelHandler(event) {
  const offsetX = event.offsetX
  const volumeSliderWidth = volumeSlider.offsetWidth
  if (0 < offsetX && offsetX < volumeSliderWidth) {
    volume = +(offsetX / volumeSliderWidth).toFixed(2)
    volumeLevelWidth = volume * 100
  }

  if (volumeLevelWidth < 5) {
    volume = 0
    volumeLevelWidth = 0
    volumeIconSoundOff()
    audio.volume = 0
  } else {
    volumeIconSoundOn()
    audio.volume = volume
  }

  setVolumeLevel()
}

function setVolumeLevel() {
  volumeLevel.style.width = `${volumeLevelWidth}%`
}

// PROGRESS HANDLERS

function showCurrentSongTime() {
  const currentTime = getCurrentTime(audio.currentTime)

  currentSongTime.textContent = `${currentTime} / ${playList[playNum].duration}`
}

function getCurrentTime(time) {
  let seconds = parseInt(time)
  let minutes = parseInt(seconds / 60)
  seconds = seconds % 60 // start with 0 every minute
  let currentSeconds = seconds.toString().padStart(2, 0)
  let currentMinutes = minutes.toString().padStart(2, 0)

  return `${currentMinutes}:${currentSeconds}`
}

function showCurrentSong() {
  currentSongText.textContent = playList[playNum].title
  songInfo.classList.add('show')
}

function hideCurrentSong() {
  songInfo.classList.remove('show')
  currentSongText.textContent = ''
}

// LISTENNERS

// PLAY/PAUSE
playPauseBtn.addEventListener('click', playAudio)
prevSongBtn.addEventListener('click', prevSong)
nextSongBtn.addEventListener('click', nextSong)
audio.addEventListener('ended', nextSong)

// VOLUME

volumeBtn.addEventListener('click', volumeToggle)
volumeSlider.addEventListener('click', volumeLevelHandler)

//PROGRESS

audio.addEventListener('timeupdate', showCurrentSongTime)

export { toggleAudio, loadPlaylist }
