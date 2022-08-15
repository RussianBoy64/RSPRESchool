class User {
  constructor(name, city) {
    this.name = !name ? '' : name
    this.city = !city ? 'Saratov' : city
    this.options = {
      locale: 'en-US',
      time: true,
      date: true,
    }
  }
}

export { User }
