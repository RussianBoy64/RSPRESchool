class User {
  constructor(name = null, city = 'Saratov') {
    this.name = name
    this.city = city
    this.options = {
      locale: 'ru-Ru',
      time: true,
      date: true,
    }
  }
}

export const user = new User('Vova')
