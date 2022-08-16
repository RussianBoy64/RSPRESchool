function setLocalStorage(user) {
  localStorage.setItem('name', user.name)
  localStorage.setItem('city', user.city)
}

function getLocalStorage(user) {
  const name = localStorage.getItem('name')
  const city = localStorage.getItem('city')

  if (name) user.name = name
  if (city) user.city = city

  return user
}

export { setLocalStorage, getLocalStorage }
