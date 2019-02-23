import { combineReducers } from 'redux'

const celebsReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_CELEBS':
      return [...state, ...action.payload]
    default:
      return state
  }
}

export default combineReducers({
  celebs: celebsReducer
})
