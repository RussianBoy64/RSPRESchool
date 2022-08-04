function setLocalStorage(user) {
  localStorage.setItem('name', user.name)
}

function getLocalStorage() {
  const name = localStorage.getItem('name')
  if (name) return name
}

export { setLocalStorage, getLocalStorage }
