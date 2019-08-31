import axios from 'axios'
import sessionStorage from 'utils/sessionStorage'
import { AUTH_TOKEN } from 'constant'
import * as R from 'ramda'

/**
 * custom axios client factory
 */
const axiosClientFactory = () => {
  let authToken = ''
  let axiosConfig = {
    baseURL: process.env.API_ROOT,
    headers: {
      'Content-Type': 'application/json',
      Authorization: authToken,
    },
  }
  let instance = axios.create(axiosConfig)

  return () => {
    const storageToken = sessionStorage.get(AUTH_TOKEN)

    // 토큰이 토큰이 변경되면 인스턴스를 새로 만든다.
    if (authToken !== storageToken) {
      authToken = storageToken
      axiosConfig = R.assoc(['headers', 'Authorization'], authToken, axiosConfig)
      instance = axios.create(axiosConfig)
    }

    return instance
  }
}

export default axiosClientFactory()
