import celebrities from '../api/celebrities'

export const fetchCelebs = () => async dispatch => {
  const response = await celebrities.get('/celebrities')
  dispatch({ type: 'FETCH_CELEBS', payload: response.data })
}

export const fetchCeleb = (id) => async dispatch => {
    const response = await celebrities.get(`/celebrities/${id}`)
    dispatch({ type: 'FETCH_CELEB', payload: response.data })
}
