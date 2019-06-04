/**
 * 
 * @param {String} key - name of the key you want to create/update.
 * @param {*} data - any JOSN serializable data to be stored.
 * @returns undefined
 */
export const saveToLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data))
}

/**
 * 
 * @param {String} key - name of the key you want to retrieve the value of.
 * @returns {Object|null} - Object containing the value of the key. If the key does not exist, null is returned.
 */
export const fetchFromLocalStorage = (key) => {
  const persistedData = localStorage.getItem(key)
  if (persistedData !== null) {
    return JSON.parse(persistedData)
  } else {
    return null
  }
}
