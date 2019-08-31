export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const FETCH_DATA = 'FETCH_DATA'
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS'
export const FETCH_DATA_FAILED = 'FETCH_DATA_FAILED'

export const fetchData = () => {
  return {
    type: FETCH_DATA,
  }
}

export const fetchDataSuccess = data => {
  return {
    type: FETCH_DATA_SUCCESS,
    data,
  }
}
