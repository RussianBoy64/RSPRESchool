class User {
  constructor(name = null, city = 'Saratov') {
    this.name = name
    this.city = city
    this.options = {
      locale: 'ru-RU',
      time: true,
      date: true,
    }
  }
}

export { User }
