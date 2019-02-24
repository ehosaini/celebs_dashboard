import { combineReducers } from 'redux'

const celebsReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_CELEBS':
      return [...state, ...action.payload]
    case 'FETCH_CELEBS_ERROR':
      return { error: true }
    default:
      return state
  }
}

const celebReducer = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_CELEB':
      return Object.assign({}, action.payload)
    case 'FETCH_CELEB_ERROR':
      return { error: true }
    default:
      return state
  }
}

export default combineReducers({
  celebs: celebsReducer,
  celeb: celebReducer
})
