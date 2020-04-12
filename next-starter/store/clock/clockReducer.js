import { types } from './clockActions'

const initialState = {
  lastUpdate: 0,
  light: false,
}

function clock(state = initialState, action) {
  switch (action.type) {
    case types.TICK_CLOCK:
      return Object.assign({}, state, {
        lastUpdate: action.ts,
        light: !!action.light,
      })

    default:
      return state
  }
}

export default clock
