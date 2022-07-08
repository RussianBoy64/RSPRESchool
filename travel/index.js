const burgerOpenBtn = document.querySelector('.burger-menu')
const navigation = document.querySelector('.nav')
const backdrop = document.querySelector('.backdrop')
const body = document.querySelector('body')

document.addEventListener('click', (event) => {
  let target = event.target

  if (target == burgerOpenBtn || event.path.includes(burgerOpenBtn)) {
    navigation.classList.add('open')
    backdrop.classList.add('show')
    body.classList.add('unscrollable')
  } else if (event.target != navigation) {
    navigation.classList.remove('open')
    backdrop.classList.remove('show')
    body.classList.remove('unscrollable')
  }
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
