import celebrities from '../api/celebrities'

export const fetchCelebs = () => async dispatch => {
  try {
    const response = await celebrities.get('/celebrities')

    if (!response.data.length) {
      throw Error('No data was returned in the response body')
    }

    dispatch({ type: 'FETCH_CELEBS', payload: response.data })
  } catch (err) {
    console.log(err)
    dispatch({ type: 'FETCH_CELEBS_ERROR', payload: 'ERROR' })
  }
}

export const fetchCeleb = id => async dispatch => {
  try {
    const response = await celebrities.get(`/celebrities/${id}`)

    if (!Object.keys(response.data).length) {
      throw Error('No data was returned in the response body')
    }

    dispatch({ type: 'FETCH_CELEB', payload: response.data })
  } catch (err) {
    console.log(err)
    dispatch({ type: 'FETCH_CELEB_ERROR' })
  }
}
