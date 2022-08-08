class User {
  constructor(name, city) {
    this.name = !name ? '' : name
    this.city = !city ? 'Saratov' : city
    this.options = {
      locale: 'ru-RU',
      time: true,
      date: true,
    }
  }
}

export { User }
