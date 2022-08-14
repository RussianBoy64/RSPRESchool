import { playList } from './playList'

const playerContainer = document.querySelector('.music-player')
const playListContainer = document.querySelector('.playlist')
const playPauseBtn = document.querySelector('.play-pause')
const playPauseIcon = playPauseBtn.querySelector('i')
const prevSongBtn = document.querySelector('.prevSong')
const nextSongBtn = document.querySelector('.nextSong')

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

function playAudio() {
  audio.src = playList[playNum].src
  if (!isPlay) {
    audio.currentTime = 0
    audio.play()
    playIconSet(playPauseBtn)
    activeSongSet()
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
  playNum = playNum === 0 ? playList.length - 1 : --playNum
  isPlay = false
  playAudio()
}

function nextSong() {
  activeSongRemove() // remove active style
  playNum = playNum === playList.length - 1 ? 0 : ++playNum
  isPlay = false
  playAudio()
}

// LISTENNERS
playPauseBtn.addEventListener('click', playAudio)
prevSongBtn.addEventListener('click', prevSong)
nextSongBtn.addEventListener('click', nextSong)
audio.addEventListener('ended', nextSong)

export { toggleAudio, loadPlaylist }
