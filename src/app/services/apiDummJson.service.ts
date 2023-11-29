import axios from 'axios'

export const getDataJSON = (path = '') => {
  return new Promise((resolve, reject) => {
    try {
      // do an SDK, DB call or API endpoint axios call here and return the promise.
      axios
        .get(path)
        .then((res) => resolve(res.data))
        .catch((err) => reject(err))
    } catch (error) {
      reject(error)
    }
  })
}
