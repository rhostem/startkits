export const getSessionStorageItem = name => {
  if (typeof window === 'object') {
    const value = window.sessionStorage.getItem(name) || ''
    return !!value ? JSON.parse(value) : value
  }
}

export const setSessionStorageItem = (name, value) => {
  if (typeof window === 'object') {
    const stringifiedValue = JSON.stringify(value)
    window.sessionStorage.setItem(name, stringifiedValue)
  }
}

export const removeSessionStorageItem = name => {
  if (typeof window === 'object') {
    window.sessionStorage.removeItem(name)
  }
}

export default {
  get: getSessionStorageItem,
  set: setSessionStorageItem,
  remove: removeSessionStorageItem,
}
