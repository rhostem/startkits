export const getLocalStorageItem = (name = '') => {
  const value = window.localStorage.getItem(name) || '';
  return !!value ? JSON.parse(value) : value;
};

export const setLocalStorageItem = (name = '', value: any) => {
  const stringifiedValue = JSON.stringify(value);
  window.localStorage.setItem(name, stringifiedValue);
};

export const removeLocalStorageItem = (name = '') => {
  window.localStorage.removeItem(name);
};

export default {
  set: setLocalStorageItem,
  get: getLocalStorageItem,
  remove: removeLocalStorageItem,
};
