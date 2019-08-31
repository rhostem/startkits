import { combineReducers } from 'redux'
import data from './data/dataReducer'

const rootReducer = combineReducers({
  data,
})

export default rootReducer
