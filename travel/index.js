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
    carousel.classList.remove('moveLeft')
    setSliderImgs('left')
  } else {
    carousel.classList.remove('moveRight')
    setSliderImgs('right')
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

// console.log(`Итоговая оценка 75/75

// 1. Вёрстка соответствует макету. Ширина экрана 390px +48
//   * блок <header> +6
//   * секция preview +9
//   * секция steps +9
//   * секция destinations +9
//   * секция stories +9
//   * блок <footer> +6

// 2. Ни на одном из разрешений до 320px включительно
// не появляется горизонтальная полоса прокрутки.
// Весь контент страницы при этом сохраняется: не обрезается
// и не удаляется +15
//   * нет полосы прокрутки при ширине страницы от 1440рх до 390px +7
//   * нет полосы прокрутки при ширине страницы от 390px до 320рх +8

// 3. На ширине экрана 390рх и меньше реализовано адаптивное меню +22
//   * при ширине страницы 390рх панель навигации скрывается,
//   появляется бургер-иконка +2
//   * при нажатии на бургер-иконку плавно появляется адаптивное меню +4
//   * адаптивное меню соответствует макету +4
//   * при нажатии на крестик адаптивное меню плавно скрывается уезжая
//     за экран +4
//   * ссылки в адаптивном меню работают, обеспечивая плавную прокрутку
//     по якорям +4
//   (все кроме Account, она пока что просто закрывает меню)
//   * при клике по ссылке в адаптивном меню адаптивное меню плавно скрывается,
//     также скрытие меню происходит если сделать клик вне данного окна +4
//  `)
