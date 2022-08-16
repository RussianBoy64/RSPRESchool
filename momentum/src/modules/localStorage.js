function setLocalStorage(user) {
  const json = JSON.stringify(user)
  localStorage.setItem('user', json)
}

function getLocalStorage() {
  const json = localStorage.getItem('user')
  const user = JSON.parse(json)

  return user
}

export { setLocalStorage, getLocalStorage }
