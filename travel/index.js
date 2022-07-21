const burgerOpenBtn = document.querySelector('.burger-menu')
const burgerCloseBtn = document.querySelector('.burger-close')
const navigation = document.querySelector('.nav')
const navLinks = document.querySelectorAll('.nav__link')
const backdrop = document.querySelector('.backdrop')
const body = document.querySelector('body')

const accountBtns = document.querySelectorAll('.account-btn')
const popUp = document.querySelector('.pop-up')
const popUpToggleBtn = document.querySelector('.pop-up-toggle')
const popUpForm = document.querySelector('.pop-up__form')

function backdropShow() {
  backdrop.classList.add('show')
  body.classList.add('unscrollable')
}

function backdropHide() {
  backdrop.classList.remove('show')
  body.classList.remove('unscrollable')
}

backdrop.addEventListener('click', (event) => {
  if (event.target === backdrop) {
    navigation.classList.remove('open')
    popUp.classList.remove('show')
    backdropHide()
  }
})

//================== Open burger menu
burgerOpenBtn.addEventListener('click', () => {
  navigation.classList.add('open')
  backdropShow()
})

//================== Close burger menu
burgerCloseBtn.addEventListener('click', () => {
  navigation.classList.remove('open')
  backdropHide()
})

navLinks.forEach((navLink) => {
  navLink.addEventListener('click', () => {
    navigation.classList.remove('open')
    backdropHide()
  })
})

//================== Open pop-up
accountBtns.forEach((accountBtn) => {
  accountBtn.addEventListener('click', () => {
    popUp.classList.remove('sign-up')
    popUp.classList.add('show')
    backdropShow()
  })
})

//================== Toggle pop-up content
popUpToggleBtn.addEventListener('click', () => {
  popUp.classList.toggle('sign-up')
})

//================== Alert input
popUpForm.addEventListener('submit', (event) => {
  event.preventDefault()
  alert(`e-mail: ${popUpForm.mail.value}
password: ${popUpForm.password.value}`)
  popUpForm.reset()
})

//================== Slider

const carousel = document.querySelector('.carousel')

const slideLeft = document.querySelector('.slide-left')
const slideActive = document.querySelector('.slide-active')
const slideRight = document.querySelector('.slide-right')

const slides = document.querySelectorAll('.carousel__item')
const sliderPagination = document.querySelector('.carousel-pagination')
const paginationDotz = document.querySelectorAll('.carousel-pagination__item')
const sliderArrows = document.querySelector('.carousel-arrows')

const destinations = [
  {
    country: 'spain',
    index: 0,
  },
  {
    country: 'japan',
    index: 1,
  },
  {
    country: 'usa',
    index: 2,
  },
]

const removeEventListeners = () => {
  slideLeft.removeEventListener('click', moveLeft)
  slideRight.removeEventListener('click', moveRight)
  sliderPagination.removeEventListener('click', dotzClickHandler)
  sliderArrows.removeEventListener('click', sliderArrowsClickHandler)
}

const getScrollValue = () => {
  const carouselWidth = carousel.scrollWidth
  const slideWidth = slideActive.clientWidth
  const carouselSlidesLength = carousel.children.length
  const carouselGap =
    (carouselWidth - slideWidth * carouselSlidesLength) /
    (carouselSlidesLength - 1)

  return slideWidth + carouselGap
}

const moveLeft = () => {
  removeEventListeners()

  const moveValue = getScrollValue()

  carousel.classList.add('moveLeft')
  carousel.style.transform = `translateX(${moveValue}px)`
}

const moveRight = () => {
  removeEventListeners()

  const moveValue = getScrollValue()

  carousel.classList.add('moveRight')
  carousel.style.transform = `translateX(-${moveValue}px)`
}

const setSliderImgs = (direction) => {
  let destination
  let destinationsArray

  if (direction === 'left') {
    destination = destinations.pop()
    destinations.unshift(destination)
  } else {
    destination = destinations.shift()
    destinations.push(destination)
  }

  destinationsArray = destinations
    .slice(destinations.length - 2)
    .concat(destinations)

  slides.forEach((slide, index) => {
    const slidePicture = slide.children[0].children[0]
    const slideImage = slide.children[0].children[1]
    const slideName = slide.children[1]

    slidePicture.srcset = `assets/img/destinations-${destinationsArray[index].country}-360x210.jpg`
    slideImage.src = `assets/img/destinations-${destinationsArray[index].country}-800x800.jpg`
    slideImage.alt = destinationsArray[index].country
    slideName.innerHTML = destinationsArray[index].country
  })
}

const setActiveDot = () => {
  const activeDotIdx = destinations[0].index

  paginationDotz.forEach((dot, index) => {
    if (index === activeDotIdx) {
      dot.classList.add('carousel-pagination__item_active')
    } else {
      dot.classList.remove('carousel-pagination__item_active')
    }
  })
}

const dotzClickHandler = (event) => {
  const currentDot = event.target
  const currentDotIdx = parseInt(event.target.dataset.idx)
  const currentSlideIdx = destinations[0].index

  if (
    !currentDot.classList.contains('carousel-pagination__item') ||
    currentDotIdx === currentSlideIdx
  )
    return

  if (currentDotIdx > currentSlideIdx) {
    if (currentDotIdx === destinations.length - 1 && currentSlideIdx === 0) {
      moveLeft()
    } else {
      moveRight()
    }
  } else if (currentDotIdx < currentSlideIdx) {
    if (currentDotIdx === 0 && currentSlideIdx === destinations.length - 1) {
      moveRight()
    } else {
      moveLeft()
    }
  }
}

const sliderArrowsClickHandler = (event) => {
  const arrow = event.target

  if (arrow.classList.contains('left')) {
    moveLeft()
  } else if (arrow.classList.contains('right')) {
    moveRight()
  }
}

slideLeft.addEventListener('click', moveLeft)

slideRight.addEventListener('click', moveRight)

carousel.addEventListener('transitionend', () => {
  if (carousel.classList.contains('moveLeft')) {
    setSliderImgs('left')
    carousel.classList.remove('moveLeft')
  } else {
    setSliderImgs('right')
    carousel.classList.remove('moveRight')
  }

  carousel.style.transform = ''

  setActiveDot()

  slideLeft.addEventListener('click', moveLeft)
  slideRight.addEventListener('click', moveRight)
  sliderPagination.addEventListener('click', dotzClickHandler)
  sliderArrows.addEventListener('click', sliderArrowsClickHandler)
})

sliderPagination.addEventListener('click', dotzClickHandler)

sliderArrows.addEventListener('click', sliderArrowsClickHandler)

console.log(`Итоговая оценка 125/125

1. Слайдер изображений в секции destinations. +50
  * на десктоп варианте при клике на урезанную картинку слева
    или справа изображение меняется по принципу карусели 
    (например если нажать правую картинку та что была в центре 
    уезжает налево, а та что была видна наполовину оказывается справа).
    Слайдер может быть как конечным так и бесконечным - данный критерий
    не должен влиять на оценку +20
  * Три точки внизу отображают "номер слайда", то есть каждому слайду
    соответствует свой кружочек, который становится активным при
    нахождении соответствующего ему слайда в центре. На мобильном
    варианте картинка одна, но поверх нее появляются стрелочки навигации
    (можно сделать как карусель или же затемнять кнопку если слайдер
    достиг края) +20
  * Анимации плавного перемещения для слайдера +10

2. Нажатие на кнопку Login (кнопка Account в мобильной версии)
  показывает сверстанный логин попап + 50
  * логин попап соответствует верстке его закрытие происходит
    при клике вне попапа +25
  * логин попап имеет 2 инпута (логин и пароль) при нажатии
    на кнопку Sign In показывается браузерный алерт
    с введенными данными (для реализации можно использовать тег) +25

3. Нажатие на кнопку Register на Login попапе меняет разметку попапа
  на разметку Sign Up попапа согласно макету (То есть нажатие не
  закрывает модал а просто меняет его наполнение). +25
 `)
