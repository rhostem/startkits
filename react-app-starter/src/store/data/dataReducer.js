import * as Actions from './dataActions'
import * as R from 'ramda'
import { DATA } from 'models/data'

const initialState = {
  result: R.clone(DATA),
}

const data = (state = initialState, action = {}) => {
  switch (action.type) {
    case Actions.FETCH_DATA_SUCCESS:
      return R.assoc('result', action.data, state)

    case Actions.FETCH_DATA_FAILED:
      return state

    default:
      return state
  }
}

export default data
