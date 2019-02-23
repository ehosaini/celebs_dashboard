import celebrities from '../api/celebrities'

export const fetchCelebs = () => async dispatch => {
  const response = await celebrities.get('/celebrities')
  dispatch({ type: 'FETCH_CELEBS', payload: response.data })
}
