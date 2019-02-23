import { combineReducers } from 'redux'

const celebsReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_CELEBS':
      return [...state, ...action.payload]
    default:
      return state
  }
}

const celebReducer = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_CELEB':
      return Object.assign({}, action.payload)
    default:
      return state
  }
}

export default combineReducers({
  celebs: celebsReducer,
  celeb: celebReducer
})
