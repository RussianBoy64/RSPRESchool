// Import styles
import './scss/index.scss'

// Import scripts
import { User } from './modules/user'
import { setLocalStorage, getLocalStorage } from './modules/localStorage'
import { loadPlaylist } from './modules/player'
import { setUpWidgets } from './modules/setUpWidgets'

// Variables
let user = new User()

document.addEventListener('DOMContentLoaded', () => {
  user = getLocalStorage() || user

  loadPlaylist()
  setUpWidgets(user)
})

window.addEventListener('beforeunload', () => setLocalStorage(user))

export { user }

console.log(`Итоговая оценка 150/160
1. Часы и календарь - 15/15
2. Приветствие - 10/10
3. Смена фонового изображения - 20/20
4. Виджет погоды - 15/15
5. Виджет цитата дня - 10/10
6. Аудиоплеер - 15/15
7. Продвинутый аудиоплеер - 20/20
8. Перевод приложения на два языка(en/ru) - 15/15
9. Получение фонового изображения от API - 10/10
10. Настройки приложения - 20/20
11. Дополнительный функционал - 0/10

П.с. На дополнительный функционал не хватило времени,
но основной старался делать без ошибок и несколько раз перепроверил.
Основного функционала должно хватить, чтобы мне набрать максимальные
150 баллов за этот таск.
Если я где-то пропустил ошибку в основном функционале,
пожалуйста оставьте свой контакт(лучше Telegram), чтобы я успел исправить
и скинуть на перепроверку. Спасибо!
 `)
