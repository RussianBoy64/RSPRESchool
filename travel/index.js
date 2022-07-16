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

console.log(`Итоговая оценка 75/75

1. Вёрстка соответствует макету. Ширина экрана 390px +48
  * блок <header> +6
  * секция preview +9
  * секция steps +9
  * секция destinations +9
  * секция stories +9
  * блок <footer> +6

2. Ни на одном из разрешений до 320px включительно 
не появляется горизонтальная полоса прокрутки. 
Весь контент страницы при этом сохраняется: не обрезается 
и не удаляется +15
  * нет полосы прокрутки при ширине страницы от 1440рх до 390px +7
  * нет полосы прокрутки при ширине страницы от 390px до 320рх +8

3. На ширине экрана 390рх и меньше реализовано адаптивное меню +22
  * при ширине страницы 390рх панель навигации скрывается, 
  появляется бургер-иконка +2
  * при нажатии на бургер-иконку плавно появляется адаптивное меню +4
  * адаптивное меню соответствует макету +4
  * при нажатии на крестик адаптивное меню плавно скрывается уезжая 
    за экран +4
  * ссылки в адаптивном меню работают, обеспечивая плавную прокрутку 
    по якорям +4
  (все кроме Account, она пока что просто закрывает меню)
  * при клике по ссылке в адаптивном меню адаптивное меню плавно скрывается, 
    также скрытие меню происходит если сделать клик вне данного окна +4
 `)
