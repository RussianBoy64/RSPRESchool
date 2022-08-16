class User {
  constructor(name, city) {
    this.name = !name ? '' : name
    this.city = !city ? 'Saratov' : city
    this.locale = 'ru-RU'
    this.bgSrc = 'GitHub'
    this.keyword = null
    this.time = true
    this.date = true
    this.greeting = true
    this.quote = true
    this.weather = true
    this.audio = true
  }
}

export { User }
